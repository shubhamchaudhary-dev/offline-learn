// Storage service - handles local storage
const fs = require("fs-extra");
const path = require("path");

const storageDir = path.join(__dirname, "../../storage");

exports.saveCourse = async (name, data) => {
  await fs.ensureDir(storageDir);
  await fs.writeJson(path.join(storageDir, `${name}.json`), data);
};

exports.loadCourse = async (name) => {
  return fs.readJson(path.join(storageDir, `${name}.json`));
};

exports.listCourses = async () => {
  await fs.ensureDir(storageDir);
  return fs.readdir(storageDir);
};