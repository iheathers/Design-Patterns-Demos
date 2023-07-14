import java.io.FileOutputStream;

import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.Font.FontFamily;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;

public class BuilderDemo {

  public BuilderDemo(
      String firstName,
      String lastName,
      String address,
      String email,
      String phone,
      String[] education,
      String[] skills,
      String[] experience,
      String[] interests) throws Exception {

    var pdf = new Document();
    PdfWriter.getInstance(pdf, new FileOutputStream("resume.pdf"));
    pdf.open();
    pdf.newPage();
    var paraFont = new Font(FontFamily.HELVETICA, 16f);
    var header = firstName + "  " + lastName + "      " + email + "/" + phone;
    var para = new Paragraph(header, paraFont);
    pdf.add(para);
    pdf.add(Chunk.NEWLINE);
    pdf.add(new LineSeparator());
    pdf.add(Chunk.NEWLINE);

    pdf.add(new Paragraph("Address", paraFont));
    pdf.add(new Phrase(address));
    pdf.add(Chunk.NEWLINE);
    pdf.add(Chunk.NEWLINE);

    pdf.add(new Paragraph("Education", paraFont));
    for (var edu : education) {
      pdf.add(new Phrase(edu));
    }
    pdf.add(Chunk.NEWLINE);
    pdf.add(Chunk.NEWLINE);

    pdf.add(new Paragraph("Skills", paraFont));
    for (var skill : skills) {
      pdf.add(new Phrase(skill));
      pdf.add(Chunk.NEWLINE);
    }
    pdf.add(Chunk.NEWLINE);

    pdf.add(new Paragraph("Experience", paraFont));
    for (var exp : experience) {
      pdf.add(new Phrase(exp));
      pdf.add(Chunk.NEWLINE);
    }
    pdf.add(Chunk.NEWLINE);

    pdf.add(new Paragraph("Interests", paraFont));
    for (var interest : interests) {
      pdf.add(new Phrase(interest));
      pdf.add(Chunk.NEWLINE);
    }
    pdf.add(Chunk.NEWLINE);

    pdf.close();
  }

  public static void main(String[] args) throws Exception {

    var resume = new BuilderDemo(
        "James",
        "Gosling",
        "CA US",
        "jamesgosling@gmail.com",
        "1-800-GOSLING",
        new String[] { "BE" },
        new String[] { "Java" },
        new String[] { "Sun", "Oracle" },
        new String[] { "Arts" });
  }
}
