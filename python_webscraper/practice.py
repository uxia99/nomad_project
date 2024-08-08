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

# List[]
days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

days_of_week.append("Sun")
print(days_of_week)

days_of_week.remove("Mon")
print(days_of_week)

# Tuples()
days_of_week = ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")

print(days_of_week[-1]) # Sun
print(days_of_week[-2]) # Sat

# Dictionary{} - 많은 속성을 가진 데이터를 만들 때 사용
player = {
    'name' : "Xia",
    'age' : 25,
    'alive' : True,
    'fav_food' : ["🍝", "🍗"]
}

print(player.get('age'))


# Loops
websites = (
    "google.com",
    "facebook.com",
    "https://instagram.com",
    "youtube.com",
    "https://github.com"
)

for website in websites:
    if website.startswith("https://"):
        print(website)
    else:
        website = f'https://{website}'
        print(website)


# Status Code
from requests import get

websites = (
    "google.com",
    "facebook.com",
    "https://instagram.com",
    "youtube.com",
    "https://github.com"
)

results = {}

for website in websites:
    if not website.startswith("https://"):
        website = f'https://{website}'

    response = get(website)
    if response.status_code == 200:
        results[website] = "Success"
    else:
        results[website] = "Failed"

print(results)


# OOP
""" # 이런 식의 코드를 아래와 같이 바꿔주는 게 객체지향프로그래밍
xia = {
    "name" : "Xia",
    "age" : 25,
    "team" : "1Z Lab's"
}

def introduce_player(player):
    name = player["name"]
    team = player["team"]

    print(f"Hello, My name is {name}, and I'm play at {team}")

introduce_player(xia)
"""

class Staff:
    # 데이터 세팅
    def __init__(self, name, age, team): # 모든 method는 첫 번째 argument로 그들 자신을 참조함
        self.name = name
        self.age = age
        self.team = team

    # 데이터 접근
    def __str__(self):
        return f"Staff name : {self.name}, age : {self.age}, team : {self.team}"

# Class의 인스턴스(instance)
xia = Staff(
    name = "Xia",
    age = 25,
    team = "1Z Lab's")
jh = Staff(
    name = "Jaeheon",
    age = 27,
    team = "ROKA")

print(xia, jh)


# Inheritance 상속
# OOP는 기능성과 행동들로 데이터와 속성(property)을 완전히 캡슐화할 수 있음

class Human:
    # 데이터 세팅
    def __init__(self, name, age, team):
        self.name = name
        self.age = age
        self.team = team


class Crazy_Staff(Human):
    def __init__(self, name, team):
        super().__init__(name, 27, team)

    def rrrrr(self):
        print("I'll kill you")


class Staff(Human):
    def __init__(self, name, team):
        super().__init__(name, 25, team) # Super는 부모 Class 참조

    def crazy(self):
        print("aslejkhr234564709fkladshakjhsearfklnjasdh34598nlkciwhepf9uiksjdhn")

    def introduce(self):
        print(f"My name is {self.name}, I'm {self.age} years old and I'm a team of {self.team}")
        self.crazy()


# Class의 인스턴스(instance)
xia = Staff(
    name="Xia",
    age=25,
    team="1Z Lab's")
jh = Crazy_Staff(
    name="Jaeheon",
    age=27,
    team="ROKA")

xia.introduce()
jh.rrrrr()


# Inheritance Challenge
class Player:
    def __init__(self, name, team):
        self.name = name
        self.xp = 1500
        self.team = team

    def introduce(self):
        print(f"Hi, I'm {self.name}, I'm play at {self.team}")


class Team:
    def __init__(self, team_name):
        self.team_name = team_name
        self.players = []

    def add_player(self, name):
        new_player = Player(name, self.team_name)
        self.players.append(new_player)

    def show_players(self):
        for player in self.players:
            player.introduce()

    def remove_player(self, name):
        for player in self.players:
            if player.name == name:
                self.players.remove(player)
                print(f"{player.name} is dead.. TT")

    def total_xp(self):
        total = 0
        for player in self.players:
            total += player.xp
        print(f"{self.team_name} has {total} points")


"""
xia = Player(
    name="Xia",
    team="Solomon AI"
)

jh = Player(
    name="Jaeheon",
    team="ROKA"
)
"""

solomon = Team("Solomon AI")
solomon.add_player("Xia")
solomon.add_player("Minsoo")

roka = Team("Korea Army")
roka.add_player("JaeHeon")
roka.add_player("WooJin")
roka.add_player("Rich")

solomon.show_players()
roka.show_players()
roka.remove_player("Rich")
solomon.total_xp()
roka.total_xp()




