const storage = require("../services/storageService");
const pdfService = require("../services/pdfService");

module.exports = async (course) => {
  try {
    const data = await storage.loadCourse(course);
    const filePath = pdfService.generatePDF(data, course);

    console.log("✅ PDF exported successfully!");
    console.log(`📁 Location: ${filePath}`);
  } catch (err) {
    console.log("❌ " + err.message);
  }
};