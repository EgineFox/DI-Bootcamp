-- Exercise 2 : DVD Rental
-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film 
-- SET language_id = (SELECT language_id FROM language  WHERE name ='French')
-- WHERE title = 'Academy Dinosaur';

-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- For the customer table defined 1 foreign key: customer_address_id_key. It means that the address_id column in the customer table must reference a valid address_id in the related address table. This enforces referential integrity between the two tables.
-- When inserting a new row into the customer table, must ensure:
-- 1. - The address_id you provide already exists in the address table.
-- 2. - You cannot insert a customer with an address_id that doesn't exist in the referenced table


-- 3.We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- DROP TABLE customer_review;

-- 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- SELECT COUNT(*) FROM rental WHERE return_date IS NULL OR return_date > CURRENT_DATE;

-- --5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT film.title, film.rental_rate
-- FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- WHERE rental.return_date IS NULL
-- ORDER BY film.rental_rate DESC
-- LIMIT 30;

-- 6.1.
-- SELECT film.title
-- FROM film
-- JOIN film_actor ON film.film_id = film_actor.film_id
-- JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';

-- -- 6.2.
-- SELECT film.title
-- FROM film
-- WHERE film.length < 60 AND film.rating = 'R' ;

-- -- 6.3.
-- SELECT film.title
-- FROM customer
-- JOIN rental ON customer.customer_id = rental.customer_id
-- JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- WHERE customer.first_name = 'Matthew'
--   AND customer.last_name = 'Mahan'
--   AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'
--   AND film.rental_rate > 4.00;

-- -- 6.4
-- SELECT film.title, film.description, film.replacement_cost
-- FROM customer
-- JOIN rental ON customer.customer_id = rental.customer_id
-- JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- WHERE customer.first_name = 'Matthew'
--   AND customer.last_name = 'Mahan'
--   AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY film.replacement_cost DESC;

