#include <iostream>
#include <fstream>
#include <string>

using namespace std;

class Logger {
    fstream writer;
    public:
    Logger() {
        writer.open("app.log", fstream::out | fstream::ate | fstream::app);
    }

    ~Logger() {
        this->close();
    }

    void info(string message) {
        writer << "INFO: " << message << endl;
    }

    void close() {
        writer.close();
    }
};

int main() {
    auto log = new Logger();
    log->info("This is information");
    log->close();
    return 0;
}
