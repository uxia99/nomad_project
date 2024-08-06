from random import random

user_choice = int(input("Choose number : "))
pc_choice = random.randint(1,1000)

if user_choice == pc_choice:
    print("Congratulations!")
elif user_choice > pc_choice:
    print("Lower")
elif user_choice < pc_choice:
    print("Higher")