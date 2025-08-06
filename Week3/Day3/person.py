from datetime import datetime, date

class Person:

    id_number = 1
    def __init__(self, name, last_name, birth_date_str):
        self.name = Person.fname(name)
        self.last_name = last_name
        self.birth_date = Person.parse_birthdate(birth_date_str)
        Person.id_number += 1

    @staticmethod
    def parse_birthdate(date_str):
        return datetime.strptime(date_str, '%d-%m-%Y').date()

    @staticmethod
    def fname(name):
       if not name[0].isupper():
           return f"{name.capitalize()}"
       else:
           return name
       
    @classmethod
    def from_age(cls,name, last_name, age):
        cur_year = datetime.today().year
        birth_year = cur_year - age
        birth_date = f'1-1-{birth_year}'
        return cls(name, last_name, birth_date)
    
    @property
    def age(self):
        today = datetime.today()
        age = today.year - self.birth_date.year
        return age
    
    def __str__(self):
        return f'name: {self.name} \n last_name: {self.last_name} \n age: {self.age}'
    
    def __repr__(self):
         return f"{self.__dict__}"
    
    def __lt__(self, other):
        return self.age < other.age
    
    def __eq__(self, other):
        return self.age == other.age
    

        

# print(datetime.today())


p1 = Person('John', 'Snow', '21-08-1990')
p2 = Person('John', 'Dow', '17-08-1989')
p3 = Person.from_age('Ania', 'Krow', 42)
p4 = Person('Ivan', 'Snow', '21-08-1990')
# print(Person.id_number)

# print(p1.birth_date)
# print(p3.birth_date)
# print(Person.fname('lise'))
# print(p2.age)

# print(p1)
# print(repr(p1))
print (p1 > p2)
print (p1 == p4)