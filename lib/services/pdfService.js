const PDFDocument = require("pdfkit");
const fs = require("fs-extra");
const path = require("path");

exports.generatePDF = (data, course) => {
  const exportsDir = path.join(__dirname, "../../exports");

  // Ensure exports folder exists
  fs.ensureDirSync(exportsDir);

  const filePath = path.join(exportsDir, `${course}.pdf`);

  const doc = new PDFDocument({
    margin: 50,
    size: "A4"
  });

  doc.pipe(fs.createWriteStream(filePath));

  // Title
  doc
    .fontSize(22)
    .fillColor("#1a73e8")
    .text("OFFLINE LEARN", { align: "center" });

  doc.moveDown();

  doc
    .fontSize(18)
    .fillColor("black")
    .text(`Course: ${data.title}`, { align: "center" });

  doc.moveDown();

  doc
    .fontSize(12)
    .fillColor("gray")
    .text(`Generated on: ${new Date().toLocaleString()}`, {
      align: "center"
    });

  doc.moveDown(2);

  // Divider
  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

  doc.moveDown();

  // Topics
  data.topics.forEach((topic, index) => {
    doc
      .fontSize(16)
      .fillColor("#0b8043")
      .text(`${index + 1}. ${topic.name}`);

    doc.moveDown(0.5);

    doc
      .fontSize(12)
      .fillColor("black")
      .text(topic.content, {
        align: "justify"
      });

    doc.moveDown();

    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

    doc.moveDown();
  });

  doc.end();

  return filePath;
};