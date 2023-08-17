import inquirer from "inquirer";
import questions from "./question.js";
import score from "./score.js";
async function quiz() {
  let answers: number[] = [];
  for (let i = 0; i < questions.length; i++) {
    const ans = await inquirer.prompt([
      {
        type: "list",
        name: "selected",
        message: questions[i].question,
        choices: questions[i].choices,
      },
    ]);

    answers.push(questions[i].choices.indexOf(ans.selected));
  }

  const scoree = score(answers, questions);
  return { scoree, answers };
}

export default quiz;
