import datetime #Import the datetime module to work with dates and times


def is_leap_year(year):
    '''Function for cgheck is a given yaer ia a leap year. A leap year is divisible by 4, but not by 100 unless also divisble by 400'''
    return year %4 ==0 and (year % 100 !=0 or year %400 == 0)

def display_cake(candles):
    '''# Function to display the birthday cake with the specified number of candles
'''
    candle_str = 'i'*candles
    # Create a string of 'i' characters representing candles

    cake =f'''  
         ___{candle_str}___
         |:H:a:p:p:y:|
       __|___________|__
      |^^^^^^^^^^^^^^^^^|
      |:B:i:r:t:h:d:a:y:|
      |                 |
      ~~~~~~~~~~~~~~~~~~~ '''
    print(cake)

# ask for a BD
bd_str = input('Enter your birthday date (DD/MM/YYYY): ')

try:
  # Convert the input string to a datetime object

    birthdate = datetime.datetime.strptime(bd_str, '%d/%m/%Y')
    today = datetime.datetime.today()
    age = today.year - birthdate.year - ((today.month, today.day )<(birthdate.month,birthdate.day))
    last_digit = age%10
    print(f'You are {age} yeras old!')
    display_cake(last_digit)

    if is_leap_year(birthdate.year):
        print('Bonus: two cake for you!')
        display_cake(last_digit)

except ValueError:
    print('Invalid date format')