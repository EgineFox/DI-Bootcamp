import requests
import psycopg2
import random

# Step 1: Fetch all countries from the REST Countries API
# This API returns a list of country dictionaries with detailed info
response = requests.get('https://www.apicountries.com/countries')
response.encoding = 'utf-8'  # Ensure correct character decoding
data = response.json()       # Convert JSON response to Python list

# Step 2: Select 10 random countries from the list
# Make sure 'data' is a list before sampling

if isinstance(data, list) and len(data) >= 10:
    countries_rand = random.sample(data, 10)
else:
    raise ValueError("API did not return a valid list of countries.")

# Step 3: Connect to PostgreSQL database
# Replace credentials with your actual database info
conn = psycopg2.connect(
    dbname='countries',     # Database name
    user='postgres',        # Username
    password='test',        # Password
    host='localhost',       # Host (usually localhost)
    port='5432'             # Default PostgreSQL port
)
cursor = conn.cursor()

# Step 4: Create the table if it doesn't exist
# This table stores basic country information
cursor.execute('''
CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,     -- Auto-incrementing ID
    name TEXT,                 -- Country name
    capital TEXT,              -- Capital city
    flag TEXT,                 -- URL to flag image
    subregion TEXT,            -- Subregion (e.g. Southern Europe)
    population BIGINT          -- Population count
)
''')




# Step 5: Insert selected countries into the database
for country in countries_rand:
    name = country.get('name', 'Unknown')
    capital = country.get('capital', 'Unknown')
    flag = country.get('flag', '')
    subregion = country.get('subregion', 'Unknown')
    population = country.get('population', 0)

    cursor.execute("""
    INSERT INTO countries (name, capital, flag, subregion, population)
    VALUES (%s, %s, %s, %s, %s)
    """, (name, capital, flag, subregion, population))

# Step 6: Commit changes and close the connection
conn.commit()
cursor.close()
conn.close()