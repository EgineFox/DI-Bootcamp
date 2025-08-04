# Exercise 1
import random

# Step 1: read words from the file
def get_words_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            content = file.read()
            words = content.split()
            return words
    except FileNotFoundError:
        print("Error: Word list file not found.")
        return[]
    
# Step 2: Generate random sentence

def get_random_sentence(lenght, word_list):
    if not word_list:
        return "Cannot generate sentence - word list is empty."
    selected_words = [random.choice(word_list) for _ in range(lenght)]
    sentence = " ".join(selected_words).lower()
    return sentence 

# Step 3: Main function

def main():
    print("Welcome! This programming generator of random sentences with your chosen length (2 - 20 words) \n ")
    word_file = r'C:\\Repositories\\DI-Bootcamp\\Week3\\Day2\test.txt'


    user_input = input("Enter the desired sentence lenght (2-20): \n")
    try:
        lenght = int(user_input)
        if 2 <= lenght <= 20:
            words = get_words_from_file(word_file)
            sentence = get_random_sentence(lenght, words)
            print("Generate sentenсe: ")
            print(sentence)
        else:
            print("Error: Please enter a number between 2 and 20)")
    except ValueError:
        print("Error: Invalid input. Please enter an integer.")

if __name__ == "__main__":
    main()

# 🌟 Exercise 2: Working with JSON
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""
# Parse JSON string into dictionary
data = json.loads(sampleJson)

# Step 2: Access the nested "salary" key
salary = data["company"]["employee"]["payable"]["salary"]
print("Employee salary: ", salary)

# Step 3: Add the "BDay" key

data["company"]["employee"]["birth_date"] = "1989-06-08"
print(data) # Check adding  a birth_date

# Step 4: Save the modified JSON to a file
with open("modified_employee.json", "w") as file:
    json.dump(data, file, indent=4)