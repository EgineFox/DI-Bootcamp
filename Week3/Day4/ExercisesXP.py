#  Exercise 1: Currencies
class Currency:
    def __init__(self, currency, amount):
        ''' Initialize the currency type (e.g., 'dollar') and the amount (e.g., 5)'''
        self.currency = currency
        self.amount = amount

    def __str__(self):
        ''' Return a human-readable string representation, e.g., "5 dollars" '''
        if self.amount > 1:
           return f'{self.amount} {self.currency}s'
        else:
            return f'{self.amount} {self.currency}'
        
    def __int__(self):
        '''Allow conversion of the Currency object to an integer (the amount)'''
        return self.amount
    
    def __repr__(self):
        ''' # Return the same string as __str__, useful for debugging and console output'''
        return self.__str__()

        
    def __add__(self, other):
        '''Handle addition with either an integer or another Currency object'''
        if isinstance(other, Currency):
            # If adding another Currency, check if the currency types match
            if self.currency != other.currency:
               # Raise an error if the currency types are different
               raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
            # Return the sum of the amounts if the currency types match
            return (self.amount + other.amount)
        elif isinstance(other, (int, float)):
            # If adding an integer or float, return the sum of the amount and the number
            return (self.amount + other)
        else:
            # Raise an error if the type is unsupported
            raise TypeError("Unsupported type")

    def __iadd__(self, other):
        '''# Handle in-place addition (e.g., c1 += 5 or c1 += c2)'''
        if isinstance(other, int):
            # If adding an integer, update the amount directly
            self.amount += other
        elif isinstance (other, Currency):
             # If adding another Currency, check if the currency types match
            if self.currency != other.currency:
                # Raise an error if the currency types are different
                 raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
            # Update the amount by adding the other Currency's amount
            self.amount += other.amount
        else:
            # Raise an error if the type is unsupported
            raise TypeError(f"Unsuppoted operand type(s) for +=: 'Currency' and '{type(other).__name__}' ")
        return self


        

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1)
print(c3)
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1) 

c1 += 5
print(c1)

c1 += c2
print(c1)

print(c1 + c3)

# Exercise 2: Import

# Exercise 3: String module

# Import the Modules
import string
import random

# Create a String of All Letters
letters = string.ascii_letters  # 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
# Generate a Random String
random_string = ''.join(random.choice(letters) for _ in range(5))
print("Random string:", random_string)

# Exercise 4: Current Date
# Import tha datetime module
import datetime

# Get the current date
datetime.date.today()

# Display the date
def show_current_date():
    today = datetime.date.today()
    print("Today's date is:", today)

show_current_date()

#  Exercise 5: Amount of time left until January 1st
# Import tha datetime module
import datetime
def time_until_january_first():
# Get the current date and time
    now = datetime.datetime.now()
# Create a  Object for January 1st of the Next Year
    next_year = now.year + 1
    jan_first = datetime.datetime(next_year, 1, 1)
# Calculate the Time Difference
    time_left = jan_first - now
# Display the Time Difference
    print("Time left until January 1st:", time_left)

time_until_january_first()

# Exercise 6: Birthday and minutes
import datetime

def minutes_lived(birthdate_str):
    """
    Accepts a birthdate string in 'YYYY-MM-DD' format and prints how many minutes the user has lived.
    """
    # Step 1: Parse the birthdate string into a datetime object
    birthdate = datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")
    
    # Step 2: Get the current datetime
    now = datetime.datetime.now()
    
    # Step 3: Calculate the time difference
    time_lived = now - birthdate
    
    # Step 4: Convert the time difference to minutes
    minutes = time_lived.total_seconds() / 60
    
    # Step 5: Display the result
    print(f"You have lived approximately {int(minutes):,} minutes.")

minutes_lived("1989-06-08")

# Exercise 7: Faker Module
# (pip install faker) in terminal
from faker import Faker

# Step 3: Create an empty list to store users
users = []

# Step 4: Function to generate fake users
def generate_fake_users(num_users):
    '''Function to generate fake users'''
    fake = Faker()
    
    for _ in range(num_users):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user)

# Step 5: Call the function and print the users list
generate_fake_users(5)

# Display the generated users
for i, user in enumerate(users, start=1):
    print(f"User {i}:")
    for key, value in user.items():
        print(f"  {key}: {value}")
    print()