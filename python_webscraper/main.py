class Staff:
    def __init__(self): # 모든 method는 첫 번째 argument로 그들 자신을 참조함
        self.name = "Xia"
        self.age = 25
        self.team = "1Z Lab's"

xia = Staff()
print(xia.name, xia.age, xia.team)