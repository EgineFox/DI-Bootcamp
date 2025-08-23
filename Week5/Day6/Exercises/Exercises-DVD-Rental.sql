-- -- Exercise 1: DVD Rental
-- -- 1. Get a list of all the languages, from the language table.
SELECT name FROM language 

-- -- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT film.title, film.description,  language.name AS language
FROM film
JOIN language ON film.language_id = language.language_id

-- -- 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT film.title, film.description, language.name AS language FROM language 
LEFT JOIN  film ON film.language_id = language.language_id
ORDER BY film.title IS NULL DESC;

-- -- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
ID SERIAL NOT NULL UNIQUE,
name VARCHAR (100) NOT NULL
);
INSERT INTO new_film (name)
VALUES ('Bridget Jones: Mad About the Boy'),
('Mickey 17');

-- -- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- ALTER TABLE new_film
-- ADD CONSTRAINT new_film_id_unique UNIQUE (ID);


CREATE TABLE customer_review (
review_id SERIAL PRIMARY KEY NOT NULL,
film_id INTEGER NOT NULL,
language_id INTEGER NOT NULL,
title VARCHAR (255),
score INTEGER NOT NULL,
review TEXT NOT NULL,
last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--Limit on the score value
 CONSTRAINT score_range CHECK (score BETWEEN 1 AND 10),
--foreign key constrains
CONSTRAINT fk_film
FOREIGN KEY (film_id)
REFERENCES new_film (ID)
ON DELETE CASCADE,

CONSTRAINT fk_language
FOREIGN KEY (language_id)
REFERENCES language (language_id)
);

-- -- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score,review) 
VALUES (1, 1, 'Review 1',7.3, 'A few years ago, Bridget Jones survived the death of her beloved husband — Mark Darcy died during a humanitarian mission in Sudan. Trying to move on, Bridget goes to work and even installs a dating app, which brings a handsome young man into her life. Now a single mother needs to somehow combine home, work and romantic relationships, support her son, who sorely lacks a father, and also resist the condemnation of the ideal moms from his school.' ) 

-- -- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- Delete film with ID = 1
DELETE FROM new_film WHERE ID = 1;

-- Exercise 2 : DVD Rental
-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film 
SET language_id = (SELECT language_id FROM language  WHERE name ='French')
WHERE title = 'Academy Dinosaur';

-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- For the customer table defined 1 foreign key: customer_address_id_key. It means that the address_id column in the customer table must reference a valid address_id in the related address table. This enforces referential integrity between the two tables.
-- When inserting a new row into the customer table, must ensure:
-- 1. - The address_id you provide already exists in the address table.
-- 2. - You cannot insert a customer with an address_id that doesn't exist in the referenced table


-- 3.We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;

-- 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

SELECT COUNT(*) FROM rental WHERE return_date IS NULL OR return_date > CURRENT_DATE;

-- --5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT film.title, film.rental_rate
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

-- 6.1.
SELECT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';

-- -- 6.2.
SELECT film.title
FROM film
WHERE film.length < 60 AND film.rating = 'R' ;

-- -- 6.3.
SELECT film.title
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'
  AND film.rental_rate > 4.00;

-- -- 6.4
SELECT film.title, film.description, film.replacement_cost
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC;

