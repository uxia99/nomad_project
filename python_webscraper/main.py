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
