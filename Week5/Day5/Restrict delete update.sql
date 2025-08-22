-- -- -- CREATE TABLE colors (
-- -- --     color_id SERIAL PRIMARY KEY,
-- -- --     name VARCHAR(50)
-- -- -- );

-- -- --  INSERT INTO colors (name) VALUES ('blue'), ('yellow'), ('pink');
-- -- --  SELECT * FROM colors

-- -- CREATE TABLE cars_cascade (
-- --     car_id SERIAL PRIMARY KEY,
-- --     car_name VARCHAR(100),
-- --     car_color INTEGER REFERENCES colors (color_id) ON DELETE CASCADE ON UPDATE CASCADE
-- -- );

-- INSERT INTO cars_cascade (car_name, car_color) VALUES ('Toyota', 1), ('Ford', 2), ('Honda', 3);

-- -- DELETE FROM colors WHERE name = 'blue'
 select * from cars_cascade