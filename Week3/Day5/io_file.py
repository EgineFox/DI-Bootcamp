import os #module operation system
# # Python I/O

# # how to read file?
# dir_path = os.path.dirname(os.path.realpath(__file__))
# print("dir path:", dir_path)

# with open(f"{dir_path}/secret.txt",'r', encoding='utf-8') as file_obj:
#     file_content = file_obj.read()

#     print(file_content)

# EX STAR WARS
dir_path = os.path.dirname(os.path.realpath(__file__))
# # read line by line
with open(f"{dir_path}/star_wars.txt",'r', encoding='utf-8') as f:
    txt_list = f.readlines()
#     for line in txt_list:
#         print(line)
#     print("The End")

# read only 5th line of the file:
# print(txt_list[4])

# Read only the 5 first characters of the file
# print(txt_list[0][:4])

# Read all the file and return it as a list of strings. Then split each word into letters
# temp = [list(line) for line in txt_list]
# print(temp)

# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
# counts = {'Darth':0, 'Luke': 0, 'Lea': 0}
# for line in txt_list:
#     #    if line in counts:
#     #       counts[line] += 1
#     # line +=1

#     if line == 'Darth':
#         counts['Darth'] += 1

#     if line == 'Luke':
#         counts['Luke'] += 1 
    
#     if line == 'Lea':
#         counts['Lea'] += 1 

# print(counts)

    

# Append your first name at the end of the file



# Append "SkyWalker" next to each first name "Luke"
modified_lines = []
for line in txt_list:
  
    if line.split() == 'Luke':
        modified_lines.append('Luke Skywalker')
    else:
        modified_lines.append(line)


    
print("Success!")