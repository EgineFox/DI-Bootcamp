# Exercise 1: Cats
# Define class Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
cat1 = Cat("Glory", 2)
cat2 = Cat("Shiny", 6)
cat3 = Cat("Milky", 9)

# Step 2: Create a function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    # ... code to find and return the oldest cat ...
   oldests = max(cat1, cat2, cat3, key = lambda cat: cat.age)
   return oldests

# Step 3: Print the oldest cat's details
oldests_cat = find_oldest_cat(cat1, cat2, cat3)
print(f'The oldest cat if {oldests_cat.name} and is {oldests_cat.age} years old')

# Exercise 2 : Dogs
# Step 1: Create the Dog Class
class Dog():

    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f'{self.name} goes woof!')
        return self

    def jump(self):
        print(f'{self.name} jumps {self.height*2} cm high!')
        return self
    
    # Comparison based on height
    def __lt__(self, other):
        return self.height < other.height

    def __eq__(self, other):
        return self.height == other.height

    def __gt__(self, other):
        return self.height > other.height

# Create Dog Objects
davids_dog = Dog("Sharik", 65)
sarahs_dog = Dog("Shosha", 20)

#  Print Dog Details and Call Methods
print(davids_dog.__dict__)
print(sarahs_dog.__dict__)
davids_dog.bark().jump()
sarahs_dog.jump().bark()

# Step 4: Compare Dog Sizes

if davids_dog > sarahs_dog:
    print(f"{davids_dog.name} is bigger than {sarahs_dog.name}.")
elif davids_dog < sarahs_dog:
    print(f"{sarahs_dog.name} is bigger than {davids_dog.name}")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same size")

# Exercise 3 : Who’s the song producer?
# Create a Song class to represent song lyrics and print them.

class Song:
    '''Initialization Class Song'''
    def __init__(self,name = "N/A", singer = "anonymous", text = None):
        if text is None:
           text = []
        self.name = name
        self.singer = singer
        # checks if text is a string
        self.text = text.split('\n') if isinstance(text, str) else text 
#A single string with line breaks (e.g. lyrics in a long paragraph), or
# A list of strings, where each element is a line.
# The goal is to ensure self.text becomes a list of individual lines, no matter how the input is formatted. It’s a clever way to make the class more flexible!

    def about(self):
        '''Print title of the song'''
        print(f'Song: {self.name}\n')
        print(f'Singer: {self.singer}\n')
        return self

    def sing_me_a_song(self):
        '''Print song text line by line'''
        for line in self.text:
            print(line)
        return self

song_help = Song("Help!","Lennon/McCartney" , '''Help, I need somebody
Help, not just anybody
Help, you know I need someone, help

When I was younger (So much younger than) so much younger than today
(I never needed) I never needed anybody's help in any way
(Now) But now these days are gone (These days are gone), I'm not so self assured
(I know I've found) Now I find I've changed my mind and opened up the doors

Help me if you can, I'm feeling down
And I do appreciate you being round
Help me get my feet back on the ground
Won't you please, please help me

(Now) And now my life has changed in oh so many ways
(My independence) My independence seems to vanish in the haze
(But) But every now (Every now and then) and then I feel so insecure
(I know that I) I know that I just need you like I've never done before

Help me if you can, I'm feeling down
And I do appreciate you being round
Help me get my feet back on the ground
Won't you please, please help me

When I was younger so much younger than today
I never needed anybody's help in any way
(But) But now these daya are gone (These days are gone), I'm not so self assured
(I know I've found) Now I find I've changed my mind and opened up the doors

Help me if you can, I'm feeling down
And I do appreciate you being round
Help me, get my feet back on the ground
Won't you please, please help me, help me, help me, ooh''')

song_help.about().sing_me_a_song()

stairway = Song(text=["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
                
stairway.about().sing_me_a_song()

#  Exercise 4 : Afternoon at the Zoo
# Create a Zoo class to manage animals. The class should allow adding animals, displaying them, selling them, and organizing them into alphabetical groups.

class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
    # Shared class-level list of animals
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            self.animal_groups = {}
        else:
            print(f"{new_animal} is already in the zoo.\n")

    def get_animals(self): 
        print(f"Animals in the zoo '{self.zoo_name}': ")   
        for animal in self.animals:
            print(f" - {animal}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} is sold!")
            self.animal_groups = {}
        else:
            print(f"{animal_sold} didn't find in the Zoo")

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped = {}

        for animal in sorted_animals:
            first_letter = animal[0].upper()
            grouped.setdefault(first_letter, []).append(animal)
        
        self.animal_groups = grouped
        print("Grouped animals:")
        for letter, group in grouped.items():
            print(f"{letter}: {group}")
        return grouped
    
    def get_groups(self):
        if not self.animal_groups:
            print("Groups of animals is doesn't create. Use sort_animals() method first")
            return
        print("Groups of animals:")
        for letter, group in self.animal_groups.items():
            print(f"{letter}: {group}")

zoo = Zoo("Safari Park")
zoo.add_animal("Tiger")
zoo.add_animal("Turtle")
zoo.add_animal("Lion")
zoo.add_animal("Leopard")
zoo.get_animals()
zoo.sell_animal("Lion")
zoo.sort_animals()
zoo.get_groups()
