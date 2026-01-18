-- Drop tables if they exist (for clean restart during development)
DROP TABLE IF EXISTS Contributors CASCADE;
DROP TABLE IF EXISTS Stories CASCADE;
DROP TABLE IF EXISTS Users CASCADE;

-- Create Users table
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE STORIES TABLE
CREATE TABLE Stories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_id INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Contributors table
CREATE TABLE Contributors (
    id SERIAL PRIMARY KEY,
    story_id INT NOT NULL REFERENCES Stories(id) ON DELETE CASCADE,
    user_id INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(story_id, user_id)
);


