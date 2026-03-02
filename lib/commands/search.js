const storage = require("../services/storageService");
const searchService = require("../services/searchService");

module.exports = async (keyword) => {
  const files = await storage.listCourses();

  for (let file of files) {
    if (!file.endsWith(".json")) continue;
    if (file === "progress.json") continue;  // 🔥 ignore progress DB

    const course = file.replace(".json", "");
    const data = await storage.loadCourse(course);

    if (!data.topics || !data.topics.length) continue; // 🔥 safety

    const results = searchService.search(data.topics, keyword);

    if (results.length) {
      console.log(`\nResults in ${data.title}`);
      results.forEach(r => console.log("- " + r.item.name));
    }
  }
};