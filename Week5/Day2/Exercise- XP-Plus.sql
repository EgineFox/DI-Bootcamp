CREATE TABLE students(
 id SERIAL PRIMARY KEY,
 last_name VARCHAR (100) NOT NULL,
 first_name VARCHAR (50) NOT NULL,
 birth_date DATE NOT NULL
 )

INSERT INTO students (id, last_name, first_name, birth_date)
VALUES
    (1, 'Benichou', 'Marc','02/11/1998'),
	(2, 'Cohen', 'Yoan','03/12/2010'),
    (3, 'Benichou', 'Lea','27/07/1987'),
	(4, 'Dux', 'Amelia','07/04/1996'),
	(5, 'Grez', 'David','14/06/2003'),
	(6, 'Simpson', 'Omer','03/10/1980')

INSERT INTO students (id, last_name, first_name, birth_date)
VALUES
    (7, 'Krok', 'Ekaterina','08/06/1989')

SELECT * FROM students
SELECT first_name,  last_name  FROM students
SELECT first_name, last_name FROM students
WHERE id = 2
SELECT first_name, last_name FROM students
WHERE last_name='Benichou' AND first_name = 'Marc'

SELECT first_name, last_name FROM students
WHERE last_name='Benichou' OR first_name = 'Marc'

SELECT first_name, last_name FROM students
WHERE first_name LIKE  '%a%'

SELECT first_name, last_name FROM students
WHERE first_name ILIKE  'a%'

SELECT first_name, last_name FROM students
WHERE first_name ILIKE  '%a_'


SELECT first_name, last_name FROM students
WHERE id = '1' AND id = '3'

SELECT * FROM students
WHERE id = 1 OR id = 3

SELECT * FROM students
WHERE birth_date >= '01/01/2000'