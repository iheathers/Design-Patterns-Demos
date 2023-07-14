class Superman:
    def fly(self):
        print("Superman")


class Plane:
    def fly(self):
        print("Plane")

class Mosquito:
    def fly(self):
        print("Mosquito")


flyingObjects = [Superman(), Plane(), Mosquito()]

for obj in flyingObjects:
    obj.fly()
