class Location:
    __location_sequence: int = 1

    def __init__(self) -> None:
        self.__sequence: int = Location.__location_sequence
        Location.__location_sequence += 1
        self.__city: str

    def move_to(self, city: str):
        self.__city = city

    def print(self):
        print(f"{self.__sequence}: {self.__city}")


location = Location()
location.move_to("Kolkata")
location.print()
location.move_to("Indore")
location.print()
location.move_to("Mumbai")
location.print()
