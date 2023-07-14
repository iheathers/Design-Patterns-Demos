class Location
{
    private static int locationSequence = 1;
    private int sequence = Location.locationSequence++;
    private string city;

    public void MoveTo(string city)
    {
        this.city = city;
    }

    public void print()
    {
        System.Console.WriteLine($"{sequence}: {city}");
    }
}

public class MementoDemo
{
    public static void Main(string[] args)
    {
        var location = new Location();
        location.MoveTo("Kolkata");
        location.print();
        location.MoveTo("Indore");
        location.print();
        location.MoveTo("Mumbai");
        location.print();
    }
}