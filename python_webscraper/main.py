from random import randint

user_choice = int(input("Choose number : "))
pc_choice = randint(1,1000)

if user_choice == pc_choice:
    print("Congratulations!")
elif user_choice > pc_choice:
    print("Lower")
elif user_choice < pc_choice:
    print("Higher")

print(f'The answer is : {pc_choice}')