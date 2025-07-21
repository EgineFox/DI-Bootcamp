# Basics values for Python programming
#general info:
# comments = "#" or cntr+"/"

greetings ='Hello, World!'  # This is a string literal
print(greetings) 
print(greetings.upper()) 
print(greetings.lower())

# string indexing
print(greetings[0])  # First character
# string slicing
print(greetings[1:5])

# Ex #1
description = "strings are..."
print(description.upper())
print(description.replace('are', 'is'))  # Replace 'are' with 'is'
print(description[:7])  # Slicing the first 6 characters)

# Numbers

my_number = 42  # This is an integer
print(type(my_number))

my_hight = 1.75  # This is a float
print(type(my_hight))

print( 5 + 3 )  # Addition
print( 5 - 3 )  # Subtraction   
print( 5 - 7 )  
print( 5 * 3 )  # Multiplication
print( 15 / 3 )  # Division      
print( 17 // 3 )  # Floor Division
print( 5 % 3 )  # Modulus
print( 5 ** 3 )  # Exponentiation

# Ex #2
my_age = 36
years = 123879 - 2025
print(f"My age is:", my_age + years)  # Adding my age to the years difference
