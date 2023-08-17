#! /usr/bin/env node
import quiz from "./quiz.js";
import chalk from "chalk";
import questions from "./question.js";
const { scoree, answers } = await quiz();

for (let i = 0; i < answers.length; i++) {
  const q = questions[i];
  const userans = q.choices[answers[i]];
  const correctans = q.choices[q.correctAnswerIndex];
  let chk;
  if (userans === correctans) {
    chk = "Correct";
  } else {
    chk = "Incorrect";
  }

  console.log(`Question: ${q.question}`);
  console.log(`User Answer ${userans}`);
  console.log(`Correct Answer ${correctans}`);
  console.log(chalk.bgYellow(`${chk}`));
}

console.log(chalk.bgGreen(`Your Score is ${scoree}`));
