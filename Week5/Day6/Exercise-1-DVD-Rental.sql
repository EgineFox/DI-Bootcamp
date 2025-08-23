-- -- Exercise 1: DVD Rental
-- -- 1. Get a list of all the languages, from the language table.
-- SELECT name FROM language 

-- -- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- SELECT film.title, film.description,  language.name AS language
-- FROM film
-- JOIN language ON film.language_id = language.language_id

-- -- 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- SELECT film.title, film.description, language.name AS language FROM language 
-- LEFT JOIN  film ON film.language_id = language.language_id
-- ORDER BY film.title IS NULL DESC;

-- -- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film (
-- ID SERIAL NOT NULL,
-- name VARCHAR (100) NOT NULL
-- );
-- INSERT INTO new_film (name)
-- VALUES ('Bridget Jones: Mad About the Boy'),
-- ('Mickey 17');

-- -- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- ALTER TABLE new_film
-- ADD CONSTRAINT new_film_id_unique UNIQUE (ID);


-- CREATE TABLE customer_review (
-- review_id SERIAL PRIMARY KEY NOT NULL,
-- film_id INTEGER NOT NULL,
-- language_id INTEGER NOT NULL,
-- title VARCHAR (255),
-- score INTEGER NOT NULL,
-- review TEXT NOT NULL,
-- last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- --Limit on the score value
--  CONSTRAINT score_range CHECK (score BETWEEN 1 AND 10),
-- --foreign key constrains
-- CONSTRAINT fk_film
-- FOREIGN KEY (film_id)
-- REFERENCES new_film (ID)
-- ON DELETE CASCADE,

-- CONSTRAINT fk_language
-- FOREIGN KEY (language_id)
-- REFERENCES language (language_id)
-- );

-- -- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- INSERT INTO customer_review (film_id, language_id, title, score,review) 
-- VALUES (1, 1, 'Review 1',7.3, 'A few years ago, Bridget Jones survived the death of her beloved husband — Mark Darcy died during a humanitarian mission in Sudan. Trying to move on, Bridget goes to work and even installs a dating app, which brings a handsome young man into her life. Now a single mother needs to somehow combine home, work and romantic relationships, support her son, who sorely lacks a father, and also resist the condemnation of the ideal moms from his school.' ) 

-- -- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- -- Delete film with ID = 1
-- DELETE FROM new_film WHERE ID = 1;
