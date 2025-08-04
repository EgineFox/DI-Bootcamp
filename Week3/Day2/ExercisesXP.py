# Step 1: Create the Siamese Class
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f"{self.name} sings: {sounds}"


# Manager class
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


# Step 2: Create a List of Cat Instances

bengal_cat = Bengal("Leo", 3)
chartreux_cat = Chartreux("Luna", 5)
siamese_cat = Siamese("Milo", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Step 3: Create a Pets Instance
sara_pets = Pets(all_cats)

# Step 4: Take Cats for a Walk
sara_pets.walk()

# Exercise 2: Dogs
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f" {self.name} is barking: WUUV!")

    def run_speed(self):
        return (self.weight / self.age) * 10
    
    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        opponent_power = other_dog.run_speed() * other_dog.weight

        if my_power > opponent_power:
            return f"{self.name} wins the fight against {other_dog.name}!"
        elif my_power < opponent_power:
            return f"{other_dog.name} wins the fight against {self.name}!"
        else:
            return "It's a tie!"
# Create a dog instances
dog1 = Dog("Rex", 5, 30)      # Bigger dog, older
dog2 = Dog("Bella", 3, 20)    # Young and agile
dog3 = Dog("Max", 4, 25)      # Somewhere in between

# Test dog's methods
print(dog1.bark())               # Rex is barking
print(dog2.run_speed())          # Speed based on weight and age
print(dog1.fight(dog2))          # Fight results based on power
print(dog2.fight(dog3))
print(dog3.fight(dog1))

# Exercise 3: Dogs Domesticated
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} hasn’t been trained yet.")

# Create PetDog instances
dog1 = PetDog("Fido", 2, 10)
dog2 = PetDog("Buddy", 3, 15)
dog3 = PetDog("Max", 1, 8)

# Train and perform tricks
dog1.train()           # Fido is barking
dog1.do_a_trick()      # Fido shakes your hand (or another random trick)

# Let all dogs play together
dog1.play(dog2, dog3)  # Fido, Buddy, Max all play together

# Try a trick from an untrained dog
dog2.do_a_trick()      # Buddy hasn’t been trained yet.

# Exercise 4: Family and Person Classes
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18
# Define the  Clas
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(f"You are over 18, your parents Jane and John accept that you will go out with your friends.")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No family member named {first_name} was found.")

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        print("Family Members:")
        for member in self.members:
            print(f"{member.first_name} {member.last_name}, Age: {member.age}")

# Create a family
my_family = Family("Smith")

# Add members to the family
my_family.born("Alice", 17)
my_family.born("Bob", 20)
my_family.born("Charlie", 15)

# Present the family
my_family.family_presentation()

# Check majority status
my_family.check_majority("Bob")      # Allowed to go out
my_family.check_majority("Alice")    # Not allowed to go out
