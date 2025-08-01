# class Cars:
#     def __init__(self, color, brand):
#         self.color = color
#         self.brand = brand

# red_toyota = Cars('red', 'Toyota')

# print(red_toyota)

# class Dog():
#     def __init__(self, name, color, age, istrained = False):
#         print("A new dog has been initialized !")
#         self.name = name
#         self.color = color
#         self.age = age
#         self.istrained = istrained

#     def bark(self):
#         print(f"{self.name} is barking!!!")

#     def run(self):
#         if self.age <= 5:
#            print(f"{self.name} running really fast")
#         else:
#            print(f"{self.name} running")

#     def walk(self, meters):
#         print(f"{self.name} is walking {meters} meters")


# dog1 = Dog("Pushok","Red", 15, True)
# dog1.color = "Brown"
# dog1.istrained = True
# print(dog1.__dict__)
# dog1.bark()
# dog1.run()
# dog1.walk(20)

# Exercise

class Person():
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def show_details(self):
    print("Hello my name is " + self.name)

  def change_name(self, new_name):
        self.name = new_name
        return self

first_person = Person("John", 36)
first_person.show_details()
first_person.change_name('Mike')
first_person.show_details()