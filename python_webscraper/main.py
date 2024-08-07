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