# Exercise 1: Quizz
# Answer the following questions:

# What is a class?
# - A class serves as a blueprint or a template for creating objects. It defines the structure and behavior that objects of that type will possess.
# What is an instance?
#  - An instance or a object of a class is a concrete realization of a class. If create an object from a class, it inherits all the attributes and methods defined in that class.
# What is encapsulation?
# - A class bundles together related data (attributes) and functions (methods) that operate on that data into a single, cohesive unit. This promotes modularity and organization in code.
# What is abstraction?
#  - As a core principle of Object-Oriented Programming (OOP), focuses on simplifying complex systems by hiding unnecessary details and exposing only the essential functionalities to the user.
# What is inheritance?
# - Inheritance allows a new class to inherit attributes and methods from an existing class. This mechanism promotes code reusability and enables the creation of a hierarchical structure among classes, modeling "is-a" relationships (e.g., a "Dog" is an "Animal"). 
# What is multiple inheritance?
#  - Multiple inheritance in Python is a feature that allows a class to inherit attributes and methods from more than one parent class. This means a single child class can combine functionalities and characteristics from several distinct base classes. 
# What is polymorphism?
#  - Polymorphism allows objects of different classes to be treated in a unified way through a common interface. It enables a single entity (like a function, method, or operator) to exhibit different behaviors depending on the data type or object it operates on. 

# What is method resolution order or MRO?
# - MRO defines the order in which Python searches for attributes and methods within a class hierarchy, especially in scenarios involving multiple inheritance.


# Exercise 2: Create a deck of cards class
import random # for the shuffle method

class Card:
    def __init__(self, suit, value):
        self.suit = suit #Hearts, Diamonds, Clubs, Spades
        self.value = value #A,2,3,4,5,6,7,8,9,10,J,Q,K
   
    def show(self):
        print(f"{self.value} of {self.suit}")

class Deck:
    def __init__(self):
        self.cards = [] #an empty list for a deсk of 54 cards
        self.shuffle()

    def shuffle(self):
        '''makes sure the deck of cards has all 52 cards and then rearranges them randomly.'''
        for suit in ['Hearts', 'Diamonds', 'Clubs', 'Spades']:
            for value in ['2','3','4','5','6','7','8','9','10','J','Q','K','A']:
                self.cards.append(Card(suit, value)) # creation of an object (instance) of a card with a given suit and value.
        for i in range(len(self.cards) - 1, 0, -1):
            r = random.randint(0, i)
            self.cards[i], self.cards[r] = self.cards[r], self.cards[i]


    def deal(self):
        '''deals a single card from the deck. After a card is dealt, it should be removed from the deck.'''
        return self.cards.pop()
    
# For the test of building the desk
    def show(self):
        for c in self.cards:
            c.show()
    


desk = Deck()
desk.shuffle() # test shuffle() 
# card = deck.deal()
desk.show()
# card.show()


