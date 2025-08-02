# Exercise 1 : Use the terminal
# Exercise 2 : Alias
# Exercise 3 : Outputs
print(3 <= 3 < 9)
print(3 == 3 == 3)
print(bool(0))
print(bool(5 == "5"))
print(bool(4 == 4) == bool("4" == "4"))
print(bool(bool(None)))

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

# Exercise 4 : How many characters in a sentence ?
my_text ='''Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit 
           esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum.'''
print(len(my_text))

Exercise 5: Longest word without a specific character
user_sentence = input('Enter the longest sentence you can without the character “A”\n')
print("Congratulations!")