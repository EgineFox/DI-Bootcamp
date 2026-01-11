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
        
        `
    }
}