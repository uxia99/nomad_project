# 변수 선언 및 실행
my_name = "Xia"
print("Hi, " + my_name)

# Python에서 function 생성
def say_hello():
    print("Hello World!")

# 함수 호출 버튼
say_hello()

# 함수에서 데이터(parameter) 받기
def say_hello(user_name, user_age):
    print("Hello, ", user_name, "(", user_age, ")")

# 함수 실행에 값(argument) 대입
say_hello("Xia", 25)

# Ex
def tax_calculator(money):
    print(money * 0.1)

tax_calculator(2500000)

# Argument가 없을 때
def say_hello(user_name="Anonymous"):
    print(f'Hello, {user_name}!')

say_hello("Xia")
say_hello()

# Ex Calculator
def dev_calculator(x, y):
    print(f'Plus : {x + y}')
    print(f'Minus : {x - y}')
    print(f'Divide : {x / y}')
    print(f'Multi : {x * y}')

dev_calculator(25000000, 12)

# 데이터 반환
def tax_calculator(money):
    return money * 0.35

def pay_tax(tax):
    print(f'Your tax : {tax}')

pay = tax_calculator(3000000)
pay_tax(pay)

pay_tax(tax_calculator(3000000)) # 이렇게 합쳐도 됨

# Ex Juice Maker
def make_juice(fruite):
    return f'{fruite} + 🥤'

def add_ice(juice):
    return f'{juice} + 🧊'

def add_sugar(iced_juice):
    return f'{iced_juice} + 🍬'

juice = make_juice("🍎")
sugar = add_sugar(juice)
perfect_juice = add_ice(sugar)

print(perfect_juice)


# 조건문
pw = input("Enter a password: ")

if pw == '0812':
    print("Welcome")
else:
    print("Sorry, the password is incorrect")


# elif(if + else)
# 조건문
pw = input("Enter a password: ")

if pw == '0812':
    print("Welcome")
elif pw == '812':
    print("Please enter a password 4")
else:
    print("Sorry, the password is incorrect")


# and && or ||
age = int(input("How old are you? : "))

if age >= 20 and age < 80:
    print("You can drink")
elif age < 20 or age >= 80:
    print("You can't drink")


# Random Library Module 사용
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


# 전체 주석처리 """
"""
def arrange_ex():
    print("Can not Run")

arrange_ex()
"""

# while - 조건문이 false가 될 때까지 반복 실행
distance = 0

while distance <= 20:
    print(f'I running {distance}km')
    distance += 1



# Ex_Python_Casino
from random import randint

print("Welcomt to Python Casino")
pc_choice = randint(1, 100)

playing = True

while playing:
    user_choice = int(input("Choose your number 1~100 : "))

    if user_choice == pc_choice:
        print(f'You are Winner! Your choice is {user_choice} and answer is {pc_choice}')
        playing = False
    elif user_choice > pc_choice and user_choice < 100:
        print("Lower")
    elif user_choice < pc_choice and user_choice > 0:
        print("Higher")
    else:
        print("You can choose the number between 1 and 100")



# 배열[array]
days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
print(days_of_week)


# 메서드(method) : 데이터와 결합된 function
name = "Xia"

print(name.title())
print(name.upper()) # 대문자로
print(name.endswith("a")) # 해당 문자를 포함하는 지 True, False






