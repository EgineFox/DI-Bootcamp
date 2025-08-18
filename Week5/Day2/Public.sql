CREATE TABLE public.items
ADD COLUMN item_id SERIAL PRIMARY KEY,
ADD COLUMN item_name VARCHAR(100) NOT NULL,
ADD COLUMN price SMALLINT NOT NULL;

INSERT INTO public.items(
	item_id, item_name, price)
	VALUES (1, 'Small Desk', 100),
	VALUES (2, 'Large desk', 300),
	VALUES (3, 'Fan ', 80);

CREATE TABLE public.customers 
ADD COLUMN customer_id SERIAL PRIMARY KEY,
ADD COLUMN first_name VARCHAR(50) NOT NULL,
ADD COLUMN last_name VARCHAR(100) NOT NULL;
	
INSERT INTO public.customers(
	customer_id, first_name, last_name)
	VALUES
	(1, 'Greg', 'Jones'),
	(2, 'Sandra', 'Jones'),
	(3, 'Scott', 'Scott'),
	(4, 'Trevor', 'Green'),
	(5, 'Melanie', 'Johnson');

SELECT * FROM public.items
ORDER BY item_id ASC 

SELECT * FROM public.items
WHERE  price > 80

SELECT * FROM public.items
WHERE  price <= 300

SELECT * FROM public.customers
WHERE last_name = 'Smith'

SELECT * FROM public.customers
WHERE last_name = 'Jones'

SELECT * FROM public.customers
WHERE first_name != 'Scott'
	