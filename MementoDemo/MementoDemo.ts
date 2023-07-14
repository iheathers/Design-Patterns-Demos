class LocationDemo {
    private static locationSequence = 1;
    private sequence = LocationDemo.locationSequence++;
    private city: string = "";

    public moveTo(city: string): void {
        this.city = city;
    }

    public print(): void {
        console.log(`${this.sequence}: ${this.city}`);
    }
}



let locationDemo = new LocationDemo();
locationDemo.moveTo("Kolkata");
locationDemo.print();
locationDemo.moveTo("Indore");
locationDemo.print();
locationDemo.moveTo("Mumbai");
locationDemo.print();