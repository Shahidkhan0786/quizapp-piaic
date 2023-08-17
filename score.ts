const score = (answers: number[], questions: any) => {
  let score: number = 0;
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].correctAnswerIndex) {
      score++;
    }
  }

  return score;
};

export default score;
