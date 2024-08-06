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