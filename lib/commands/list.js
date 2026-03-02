// List command - lists available content
const storage = require("../services/storageService");

module.exports = async () => {
  const courses = await storage.listCourses();
  console.log("Downloaded Courses:");
  courses.forEach(c => console.log("- " + c.replace(".json", "")));
};