import math
# Import math module for pi and area calculation

class Circle:
    def __init__(self, radius=None, diameter=None):
        """
        Initialize a Circle instance.
        You can specify either the radius or the diameter.
        """

        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must specify either radius or diameter.")

    @property
    def diameter(self):
         """
        Return the diameter of the circle.
        """
         return self.radius * 2

    def area(self):
        """
        Compute and return the area of the circle.
        Formula: π * r²
        """
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f}, area={self.area():.2f})"

    def __add__(self, other):
        """
        Add two circles together.
        Returns a new Circle with the combined radius.
        """
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        raise TypeError("Can only add another Circle")

    def __lt__(self, other):
         """
        Less-than comparison based on radius.
        Enables sorting of circles.
        """
         return self.radius < other.radius

    def __eq__(self, other):
        """
        Equality comparison based on radius.
        """
        return self.radius == other.radius

    def __gt__(self, other):
        """
        Greater-than comparison based on radius.
        """
        return self.radius > other.radius
    
# Create circles using radius and diameter
c1 = Circle(radius=5)
c2 = Circle(diameter=10)
c3 = Circle(radius=7)

# Print circle attributes
print(c1)  # Circle(radius=5.00, diameter=10.00, area=78.54)
print(c2)  # Circle(radius=5.00, diameter=10.00, area=78.54)

# Compare circles
print(c1 == c2)  # True, same radius
print(c1 < c3)   # True, c1 is smaller than c3

# Add circles
c4 = c1 + c3
print(c4)  # Circle with radius 12.00

# Sort circles by radius
circles = [c1, c2, c3, c4]
circles.sort()
for circle in circles:
    print(circle)

# Bonus
import turtle  # Import turtle graphics module

def draw_circle(circle):
    """
    Draw a circle using turtle graphics.
    The turtle starts at the bottom of the circle to center it.
    """
    t = turtle.Turtle()
    t.penup()
    t.goto(0, -circle.radius)  # Move to starting position
    t.pendown()
    t.circle(circle.radius)    # Draw the circle
    t.hideturtle()

# Sort and draw circles
circles.sort()
for circle in circles:
    draw_circle(circle)

turtle.done()  # Finish drawing
