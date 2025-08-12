# Exercise 1: Formula
# Q = Square root of [(2 * C * D)/H]
import math

c = 50
h = 30
d_input = input('Enter comma-separated string of numbers for some D-values \n')
d_values = [int(x) for x in d_input.split(',')]
# q = ((2 * c * d) / h)**0.5
result = []
for d in d_values:
    value = (2*c*d)/h
    if value<0:
       result.append('Error: Negative value')
    else: 
        q = math.sqrt(value)
        # result.append(round(q,2))
        result.append(int(q))
print(result)