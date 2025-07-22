string = input("Enter a string exactly 10 characters long: ")
if len(string) < 10:
    print("String not long enough")
elif len(string) > 10:
    print("String too long")
elif len(string) == 10:
    print("Perfect string"), print(string[0], string[-1]), 
    for char in string:
        print(char)
