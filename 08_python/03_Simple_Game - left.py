import random

digits = list(range(10))
random.shuffle(digits)
num = digits[:3]
print(num)

def generateClues():
    clues = []
    for i in range(3):
        if guess[i] == num[i]:
            clues.append("Match")
        elif guess[i] in num:
            clues.append("Close")
        else:
            clues.append("Nope")
        print(clues)
    return set(clues)

guess = list(input("What is your guess? "))
    
while(guess != num):
    print(generateClues())
    guess = list(input("What is your guess? "))   
    
