--  Exercise 1 : Items and customers

SELECT * FROM public.items 
ORDER BY price ASC;

SELECT * FROM public.items 
WHERE price >= 80 ORDER BY price DESC;

SELECT first_name, last_name
FROM customers ORDER BY first_name ASC
LIMIT 3;

SELECT last_name FROM customers 
ORDER BY last_name DESC;

-- Exercise 2 : dvdrental database
SELECT * FROM customer

SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customer 

SELECT DISTINCT create_date FROM customer

SELECT * 
FROM customer 
ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate 
FROM film
ORDER BY rental_rate ASC

SELECT address, phone FROM address
WHERE district ='Texas'

SELECT * FROM film
WHERE film_id = 15 OR film_id = 150

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE '%Harry Potter%';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'Ha%';

SELECT * FROM film
ORDER BY rental_rate ASC
LIMIT 10

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

SELECT 
    customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date
FROM 
    customer
JOIN 
    payment ON customer.customer_id = payment.customer_id
ORDER BY 
    customer.customer_id ASC;

SELECT 
    film.film_id,
    film.title
FROM 
    film
LEFT JOIN 
    inventory ON film.film_id = inventory.film_id
WHERE 
    inventory.film_id IS NULL;

SELECT 
    city.city_id,
    city.city,
    country.country
FROM 
    city
JOIN 
    country ON city.country_id = country.country_id
ORDER BY 
    country.country, city.city;

SELECT 
    customer.customer_id,
    customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date,
    staff.first_name AS staff_first_name,
    staff.last_name AS staff_last_name
FROM 
    customer
JOIN 
    payment ON customer.customer_id = payment.customer_id
JOIN 
    staff ON payment.staff_id = staff.staff_id
ORDER BY 
    staff.staff_id ASC;


