class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")

class Dog(Animal):
    def fetch_ball(self):
        print("I am a dog, and I love fetching balls")

class Alien(Animal):
    def __init__(self, type, number_legs, sound, planet):
        super().__init__(type, number_legs, sound)
        self.planet = planet

class Cat(Animal):
    def __init__(self, type, number_legs, sound, nickname):
        super().__init__(type, number_legs, sound)
        self.nickname = nickname

class AlienCat(Cat,Animal):
    def __init__(self, type, number_legs, sound):
        super().__init__(type, number_legs, sound, nickname, planet)

    def fly_away():
        output =f"{self.get_crazy()} as an alien cat"
        return output
    
    aliencat = AlienCat("Flufy", "Felini", 6, True, 200, "flulu")
    print(alientcat1.fly_away())