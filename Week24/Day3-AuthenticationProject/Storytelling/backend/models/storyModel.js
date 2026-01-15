import pool from "../db/pool";

// Create new story
export async function createStory(title, content,authorId) {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        //Insert story
        const storyQuery = `
        INSERT INTO stories (title, content, author_id)
        VALUES ($1, $2, $3)
        RETURNING id, title, content, author_id, is_public, created_at, updated_at
        `;
        const storyResult = await client.query(storyQuery, [title, content, authorId]);
        const story = storyResult.rows[0];

        //Add author as owner in collaborators
        const collabQuery = `
        INSERT INTO story_collaborators (story_id, user_id, permission)
        values ($1, $2, 'owner')
        `;
        await client.query(collabQuery, [story.id, authorId] );

        // Create first version
        const versionQuery = `
        INSERT INTO story_versions (story_id, content, editor_id, version_number)
        VALUE ($1, $2, $3, 1)
        `;
        await client.query(versionQuery, [story.id,content, authorId]);

        await client.query('COMMIT');

        return story;
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}

// Get all public stories 
export async function getAllStories (limit = 20, offset = 0) {
    try {
        const query = `
           SELECT 
             s.id, s.title, s.content, s.is_public, s.created_at, s.updated_at, u.id as uathor_id, u.username as author_username, u.full_name as author_name
           FROM stories s 
           JOIN users u ON s.author_id = u.id
           WHERE s.is_pubplic = true
           ORDER BY s.created_at DESC
           LIMIT $1 OFFSET $2
        `;

        const result = await pool.query(query, [limit, offset]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

// Get story by ID
export async function getStoryById(storyId) {
  try {
    const query = `
      SELECT 
        s.id, s.title, s.content, s.is_public, s.created_at, s.updated_at,
        u.id as author_id, u.username as author_username, u.full_name as author_name
      FROM stories s
      JOIN users u ON s.author_id = u.id
      WHERE s.id = $1
    `;
    
    const result = await pool.query(query, [storyId]);
    return result.rows[0] || null;
  } catch (error) {
    throw error;
  }
}

// Get stories by author
export async function getStoriesByAuthor(authorId) {
  try {
    const query = `
      SELECT 
        s.id, s.title, s.content, s.is_public, s.created_at, s.updated_at,
        u.id as author_id, u.username as author_username
      FROM stories s
      JOIN users u ON s.author_id = u.id
      WHERE s.author_id = $1
      ORDER BY s.created_at DESC
    `;
    
    const result = await pool.query(query, [authorId]);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

// Update story
export async function updateStory(storyId, title, content, editorId) {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    
    // Get current version number
    const versionCountQuery = `
      SELECT COUNT(*) as count FROM story_versions WHERE story_id = $1
    `;
    const versionCountResult = await client.query(versionCountQuery, [storyId]);
    const newVersionNumber = parseInt(versionCountResult.rows[0].count) + 1;
    
    // Update story
    const updateQuery = `
      UPDATE stories
      SET 
        title = COALESCE($1, title),
        content = COALESCE($2, content),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $3
      RETURNING id, title, content, author_id, is_public, created_at, updated_at
    `;
    const updateResult = await client.query(updateQuery, [title, content, storyId]);
    const story = updateResult.rows[0];
    
    // Create new version
    const versionQuery = `
      INSERT INTO story_versions (story_id, content, editor_id, version_number)
      VALUES ($1, $2, $3, $4)
    `;
    await client.query(versionQuery, [storyId, story.content, editorId, newVersionNumber]);
    
    await client.query('COMMIT');
    
    return story;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

// Delete story
export async function deleteStory(storyId) {
  try {
    const query = 'DELETE FROM stories WHERE id = $1 RETURNING id';
    const result = await pool.query(query, [storyId]);
    
    return result.rows[0] || null;
  } catch (error) {
    throw error;
  }
}

// Check if user has permission to edit story
export async function checkUserPermission(storyId, userId) {
  try {
    const query = `
      SELECT permission FROM story_collaborators
      WHERE story_id = $1 AND user_id = $2
    `;
    
    const result = await pool.query(query, [storyId, userId]);
    
    if (!result.rows[0]) {
      return null;
    }
    
    const permission = result.rows[0].permission;
    return permission === 'owner' || permission === 'editor';
  } catch (error) {
    throw error;
  }
}

// Get story versions
export async function getStoryVersions(storyId) {
  try {
    const query = `
      SELECT 
        sv.id, sv.content, sv.version_number, sv.created_at,
        u.username as editor_username
      FROM story_versions sv
      JOIN users u ON sv.editor_id = u.id
      WHERE sv.story_id = $1
      ORDER BY sv.version_number DESC
    `;
    
    const result = await pool.query(query, [storyId]);
    return result.rows;
  } catch (error) {
    throw error;
  }
}