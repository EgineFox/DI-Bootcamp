# Exercise 1: What Are You Learning?
# Create a function that pint my message
def display_message():
    '''Print message what about I learn'''
    print('Now I learn functions in the Python')

display_message()

#  Exercise 2: What’s Your Favorite Book?
def favorite_book(title):
   """Display a message about a favorite book"""
   print(f"One of my favorite books is {title}")

favorite_book("Anna Korenina by Tolstoy")

# Exercise 3: Some Geography
# Create a function that describes a city and its country.
def describe_city(city, country = "Unknown"):
    '''Print in which counry is city'''
    print(f"The {city} is in the {country}")

city = "Moscow"
country = "Russia"
describe_city(city,country)

# Exercise 4: Random
# Goal: Create a function that generates random numbers and compares them.

def compare_random():
    '''create randome number and compair this by user number'''
    import random
    random_number = random.randint(1, 100)
    user_guess = int(input("Guess a number between 1 and 100: "))
    if user_guess == random_number:
        print("Congratulations! You guessed the correct number.")
    else:
        print(f"Sorry, the correct number was {random_number} and your number is {user_guess}.")

compare_random()

# Exercise 5: Let’s Create Some Personalized Shirts!
# Create a function to describe a shirt’s size and message, with default values.
def  make_shirt(size = "large",text = "I love Python"):
    '''Print string about shirt'''
    print(f"The size of the shirt is {size} and the text is {text}.")

make_shirt()
make_shirt("medium",)
make_shirt("small","It's soo pythonic")

# ExExercise 6: Magicians…
magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"]

def show_magicians(name):
    '''Print magicins names'''
    for name in magician_names:
        print(name)

show_magicians(magician_names)


def make_great(magician_names):
    '''Add 'the Great' before each magician's name and return a new list.'''
    great_magicians = []
    for name in magician_names:
        great_magicians.append(f"The Great {name}")
    return great_magicians

# Example usage:
great_magicians = make_great(magician_names)
print("Original magicians:")
print(magician_names)
print("Great magicians:")
print(great_magicians)

# Exercise 7: Temperature Advice
# Generate a random temperature and provide advice based on the temperature range.

def get_random_temp(season):
    '''Random temperature for each specific season'''
    import random
    if season == "winter":
        return round(random.uniform(-10, 10), 1)
    elif season == "spring":
        return round(random.uniform(5, 20), 1)
    elif season == "summer":
        return round(random.uniform(15, 40), 1)
    elif season == "autumn":
        return round(random.uniform(0, 20), 1)
    else:
        return round(random.uniform(-10, 40), 1)

def main():
    '''Asking for a number of season and print temperature from get_random_temp specific to season.'''
    month = int(input("Enter the month as a number (1-12): "))
    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    elif month in [9, 10, 11]:
        season = "autumn"
    else:
        print("Invalid month entered. Please enter a number between 1 and 12.")
        return
    temperature = get_random_temp(season)
    print(f"The temperature right now is {temperature} degrees Celsius.")
    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temperature <= 23:
        print("Nice weather.")
    elif 24 <= temperature <= 32:
        print("A bit warm, stay hydrated.")
    elif 33 <= temperature <= 40:
        print("It’s really hot! Stay cool.")

main()

