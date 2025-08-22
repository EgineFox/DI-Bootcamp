-- SELECT * FROM customer

-- SELECT CONCAT(first_name, ' ', last_name) AS full_name
-- FROM customer 

-- SELECT DISTINCT create_date FROM customer

-- SELECT * 
-- FROM customer 
-- ORDER BY first_name DESC

-- SELECT film_id, title, description, release_year, rental_rate 
-- FROM film
-- ORDER BY rental_rate ASC

-- SELECT address, phone FROM address
-- WHERE district ='Texas'

-- SELECT * FROM film
-- WHERE film_id = 15 OR film_id = 150

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title ILIKE '%Harry Potter%';

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title ILIKE 'Ha%';

-- SELECT * FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10

WITH RankedFilms AS (
    SELECT 
        film_id,
        title,
        rental_rate,
        ROW_NUMBER() OVER (ORDER BY rental_rate ASC, title ASC) AS rank
    FROM film
)
SELECT 
    film_id,
    title,
    rental_rate
FROM RankedFilms
WHERE rank BETWEEN 11 AND 20;
