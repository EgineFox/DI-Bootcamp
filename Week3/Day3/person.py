class Person:

    id_number = 1

    def __init__(self, name, last_name, birth_date):
        self.name = name
        self.last_name = name
        self.birth_date = birth_date
        Person.id_number += 1


p1 = Person('John', 'Snow', '21-08-1990')
p2 = Person('John', 'Dow', '17-08-1989')
print(Person.id_number)