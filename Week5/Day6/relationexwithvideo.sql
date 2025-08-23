-- CREATE TABLE login (
-- ID serial NOT NULL PRIMARY KEY,
-- secret VARCHAR (100) NOT NULL,
-- name text UNIQUE NOT NULL
-- );

-- INSERT INTO login (secret, name)
-- VALUES ('abc', 'Katya');

-- INSERT INTO login (secret, name)
-- VALUES ('xyz', 'Sally');

-- INSERT INTO login (secret, name)
-- VALUES ('123456', 'John');

-- CREATE TABLE users (
-- ID serial NOT NULL,
-- name VARCHAR (100) NOT NULL,
-- age SMALLINT NOT NULL,
-- birthday DATE,
-- score SMALLINT
-- )

-- INSERT INTO users (name, age, birthday, score)
-- VALUES 
-- ('Katya', 36, '1989-06-08', 100),
-- ('Sally', 40, '1985-05-28', 80),
-- ('John', 25, '2000-03-30', 130),
-- ('Amy', 20, '2005-04-06', 75);

SELECT * FROM users JOIN login ON users.name = login.name;
