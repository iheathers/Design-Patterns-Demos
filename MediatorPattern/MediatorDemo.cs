
class User
{
    private int id;
    private string name;
    private Dictionary<int, User> friends;

    public User(int id, string name)
    {
        this.id = id;
        this.name = name;
        friends = new Dictionary<int, User>();
    }

    private void SendMessage(string message)
    {
        Console.WriteLine($"{name} got a message: {message}");
    }

    public void AddFriend(User friend)
    {
        friends.Add(friend.id, friend);
    }

    public void MessageAll(string message)
    {
        foreach (var entry in friends)
            entry.Value.SendMessage($"[ From: {name} ] {message}");
    }

    public void MessageOne(int id, string message)
    {
        if (friends.TryGetValue(id, out User friend))
            friend.SendMessage($"[ From: {name} ] {message}");
    }
}

class MediatorDemo
{
    static void Main(string[] args)
    {
        var eric = new User(1, "Eric Gamma");
        var john = new User(2, "John Vlissides");
        var ralph = new User(3, "Ralph Johnson");
        var richard = new User(4, "Richard Helm");

        eric.AddFriend(john);
        eric.AddFriend(ralph);
        eric.AddFriend(richard);

        john.AddFriend(eric);
        john.AddFriend(ralph);
        john.AddFriend(richard);

        ralph.AddFriend(eric);
        ralph.AddFriend(john);
        ralph.AddFriend(richard);

        richard.AddFriend(eric);
        richard.AddFriend(john);
        richard.AddFriend(ralph);

        eric.MessageAll("Hey everybody!");
        ralph.MessageOne(1, "Hi Eric!");
    }
}
