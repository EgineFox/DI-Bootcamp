# Daily challenge: Solve the Matrix

MATRIX_STR = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%'''  

def decode_matrix(matrix_str):
    # Split into rows and remove empty lines
    rows = [row for row in matrix_str.strip().split('\n')]
    # Get number of columns
    num_cols = max(len(row) for row in rows)
    # Read column by column
    message = ''
    for col in range(num_cols):
        for row in rows:
            char = row[col] if col < len(row) else ' '
            message += char if char.isalpha() else ' '
    # Replace multiple spaces with a single space
    import re
    message = re.sub(r'\s+', ' ', message).strip()
    return message

print(decode_matrix(MATRIX_STR))