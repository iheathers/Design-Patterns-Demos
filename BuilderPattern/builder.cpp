#include <iostream>
#include <fstream>
#include <string>
#include <list>

using namespace std;

class Resume {
    public:
    Resume(
        string first_name,
        string last_name,
        string address,
        string email,
        string phone,
        list<string> educations,
        list<string> skills,
        list<string> experiences,
        list<string> interests
    ) {
        fstream resume_file;
        resume_file.open("resume.txt", fstream::out | fstream::trunc);
        resume_file << "";
        resume_file.close();

        resume_file.open("resume.txt", fstream::out | fstream::ate | fstream::app);
        resume_file << first_name << " " << last_name << endl
                    << email << endl
                    << phone << endl << endl;

        resume_file << "ADDRESS" << endl;
        resume_file << address << endl << endl;

        resume_file << "EDUCATION" << endl;
        for (auto education : educations)
            resume_file << education << ", ";
        resume_file << endl << endl;

        resume_file << "SKILLS" << endl;
        for (auto skill : skills)
            resume_file << skill << ", ";
        resume_file << endl << endl;

        resume_file << "EXPERIENCE" << endl;
        for (auto exp : experiences)
            resume_file << exp << ", ";
        resume_file << endl << endl;

        resume_file << "INTERESTS" << endl;
        for (auto interest : interests)
            resume_file << interest << ", ";
        resume_file << endl << endl;

        resume_file.close();
    }
};

int main() {
    auto my_resume = new Resume(
        "Bjarne",
        "Stroustrup",
        "NY US",
        "bs2286@columbia.edu",
        "(212) 939 7000",
        { "PhD" },
        { "C++" },
        { "AT&T Bell Labs", "Texas A&M University" },
        { "Interviews" }
    );
    return 0;
}
