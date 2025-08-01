# Daily challenge: Old MacDonald’s Farm
# Create the Farm Class
class Farm:
    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animals = {} # animal_type: count

# Implement the add_animal Method
    def add_animal(self, animal_type, count=1):
        '''Adding animals to the farm'''
        if animal_type in self.animals:
            self.animals[animal_type] += count # Increment existing count
        else:
            self.animals[animal_type] = count #Add new animal type
    
    
    def show_animals(self):
        '''Display animals'''
        print(f"{self.farm_name} has the following animals:")
        for animal, count in self.animals.items():
            print(f"{animal}: {count}")

    def get_info(self):
        '''return a string that displays the farm’s name, the animals and their counts, and the “E-I-E-I-O!” phrase.'''
        output = f"{self.farm_name}'s Farm Inventory\n"
        output += '-'*30+'\n'
        output += f"{'Animal':<20}{'Count':>5}\n"
        output += "-" * 30 + "\n"
        for animal, count in self.animals.items():
            output += f"{animal:<20}{count:>5}\n"
        output += "-" * 30 + "\n"
        output += "E-I-E-I-O!\n"
        return output
    
    def get_animal_types(self):
        '''return a sorted list of all animal types'''
        return sorted(self.animals.keys())  # Sorted list of animal types
    
    def get_short_info(self):
        animal_list = []
        for animal in self.get_animal_types():
            count = self.animals.get(animal, 0)
            if count > 1:
                animal_list.append(f"{animal}s")
            else:
                animal_list.append(animal)
    
    # Build final sentence
        animal_str = ", ".join(animal_list[:-1])
        if len(animal_list) > 1:
            animal_str += f" and {animal_list[-1]}"
        else:
            animal_str = animal_list[0]

        return f"{self.farm_name} farm has {animal_str}."

# Creating a farm object
my_farm = Farm("Old MacDonald's")
my_farm.add_animal("cow", 25)
my_farm.add_animal("pig", 73)
my_farm.add_animal("horse", 1)
my_farm.show_animals()
my_farm.add_animal("cow", 7)
my_farm.show_animals()

print(my_farm.get_info())
print(my_farm.get_animal_types())
print(my_farm.get_short_info())