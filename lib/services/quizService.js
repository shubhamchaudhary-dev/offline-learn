const inquirer = require("inquirer");
const progress = require("./progressService");

async function runQuiz(data, course) {
  if (!data.quiz || !data.quiz.length) {
    console.log("No quiz available for this course.");
    return;
  }

  let score = 0;

  for (const q of data.quiz) {
    const ans = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: q.question,
        choices: q.options
      }
    ]);

    if (q.options.indexOf(ans.choice) === q.answer) {
      score++;
    }
  }

  console.log(`\nScore: ${score}/${data.quiz.length}`);
  await progress.saveScore(course, score, data.quiz.length);
}

module.exports = {
  runQuiz
};