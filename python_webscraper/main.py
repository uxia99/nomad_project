class Human:
    # 데이터 세팅
    def __init__(self, name, age, team):
        self.name = name
        self.age = age
        self.team = team

class Crazy_Staff(Human):
    def rrrrr(self):
        print("I'll kill you")

class Staff(Human):
    # 데이터 접근
    def __str__(self):
        return f"Staff name : {self.name}, age : {self.age}, team : {self.team}"

    def crazy(self):
        print("aslejkhr234564709fkladshakjhsearfklnjasdh34598nlkciwhepf9uiksjdhn")

    def introduce(self):
        print(f"My name is {self.name}, I'm {self.age} years old and I'm a team of {self.team}")
        self.crazy()

# Class의 인스턴스(instance)
xia = Staff(
    name = "Xia",
    age = 25,
    team = "1Z Lab's")
jh = Crazy_Staff(
    name = "Jaeheon",
    age = 27,
    team = "ROKA")

xia.introduce()
jh.rrrrr()