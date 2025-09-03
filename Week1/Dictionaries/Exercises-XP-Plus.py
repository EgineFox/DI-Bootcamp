student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

# 1. Calculate the average grade for each student and store the results in a new dictionary called student_averages.
student_averages = {}

for student, grades in student_grades.items():
    average = sum(grades)/len(grades)
    student_averages[student] = average

# print(student_averages)

# 2 Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades
student_letter_grades = {}
for student, grades in student_averages.items():
    if grades >= 90:
       student_letter_grades[student] = 'A'
    elif 80 <= grades < 90:
       student_letter_grades[student] = 'B' 
    elif 70 <= grades <= 79:
       student_letter_grades[student] = 'C'
    elif 60 <= grades <= 69:
       student_letter_grades[student] = 'D'    
    else:
       student_letter_grades[student] = 'F'

print(student_letter_grades)

# 3. Calculate the class average (the average of all students’ averages) and print it.

class_average = sum(student_averages.values())/len(student_averages)
print(class_average)

# 4 Print the name of each student, their average grade, and their letter grade.

for name, av_grade in student_grades:
   for 