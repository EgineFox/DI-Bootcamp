# Exercise 1 : Hello World
print("Hello world \n" *4)

# Exercise 2 : Some Math
print(99**3*8)

#Exercise 3 : What is the output ?
print('False: 5 < 3')
print('True: 3 == 3')
print('Error: 3 == "3"')
print('Error:"3" > 3')
print('False: "Hello" == "hello"')

# Exercise 4 : Your computer brand
computer_brand = "Acer Predator"
print("I have a", computer_brand, "computer")

# Exercise 5 : Your information
name = "Ekaterina"
age = 30
shoe_size = 39
info = f"My name is {name}, I am {age} years old and my shoe size is {shoe_size}."
print(info)

# Exercise 6 : A & B
a = 10
b = 5
if a > b:
    print("Hello World")

# Exercise 7 : Odd or Even
number = int(input("Enter a number: "))
if number % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")

# Exercise 8 : What is your name ?
user_name = input("Enter your name: ")
if user_name == name:
    print("Hello, Ekaterina!")
else:
    print("Hello, stranger!")

# Exercise 9 :  Tall enough to ride a roller coaster
height = int(input("Enter your height in cm: "))
if height >= 145:
    print("You are tall enough to ride!")
else: 
    print("Sorry, you need to grow some more to ride.")
