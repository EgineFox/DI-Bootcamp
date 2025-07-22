# Exercise 1 : Hello World-I love Python
print(("Hello world \n" * 4) + ("I love Python\n" * 4))

# Exercise 2 : What is the Season ?
season = int(input("Enter the number of the month (from 1 to 12): "))
if season == 3 or season == 4 or season == 5:
    print("It's Spring!")
elif season == 6 or season == 7 or season == 8:
    print("It's Summer!")
elif season == 9 or season == 10 or season == 11:
    print("It's Autumn!")
elif season == 12 or season == 1 or season == 2:
    print("It's Winter!")
else:
    print("Invalid month number. Please enter a number between 1 and 12.")