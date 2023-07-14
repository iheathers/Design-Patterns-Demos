const PDFCreator = require("pdfkit");
const fs = require("node:fs");

class Resume {
  constructor() {
    this.experience = [];
  }

  addName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  addEmail(email, phone) {
    this.email = email;
    this.phone = phone;
  }

  addAddress(address) {
    this.address = address;
  }

  addExperience(exp) {
    this.experience.push(exp);
  }

  build() {
    const pdf = new PDFCreator();
    pdf.pipe(fs.createWriteStream("sample.pdf"));
    const margin = pdf.page.margins.left;

    pdf.fontSize(25);
    pdf.text(this.firstName + " " + this.lastName);

    pdf.fontSize(10);
    const emailPhone = this.email + "/" + this.phone;
    pdf.text(
      emailPhone,
      pdf.page.width - margin - pdf.widthOfString(emailPhone) - 1,
      pdf.x
    );
    pdf.underline(margin, 20, pdf.page.width, pdf.y);

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Address", pdf.page.margins.left);
    pdf.fontSize(15);
    pdf.text(this.address);

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Work Experience", pdf.page.margins.left);
    pdf.fontSize(15);
    this.experience.forEach((exp) => pdf.text(exp));

    pdf.end();
  }
}

const brendan = new Resume();
brendan.addName("test", "Eich");
brendan.addEmail("test@test.com", 1111);
brendan.addExperience("1");
brendan.addExperience("2");
brendan.build();
