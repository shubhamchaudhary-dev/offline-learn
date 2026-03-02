const storage = require("../services/storageService");
const quizService = require("../services/quizService");

module.exports = async (course) => {
  try {
    const data = await storage.loadCourse(course);
    await quizService.runQuiz(data, course);
  } catch (err) {
    console.log("❌ " + err.message);
  }
};