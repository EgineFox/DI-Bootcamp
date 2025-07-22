# Ask for User Input:
string = input("Enter a string exactly 10 characters long: ")
index = 0
# Check the Length of the String:
if len(string) < 10:
    print("String not long enough")
elif len(string) > 10:
    print("String too long")
elif len(string) == 10:
    print("Perfect string"), 
    # Print the First and Last Characters:
    print(string[0], string[-1]), 
    for index in range(0, 9):
        if index <= 10:
            print(string[index])
            index +=1
          
