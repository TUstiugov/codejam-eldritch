function makeStagesMatrix(ancient) {
  const resultMatrix = [[], [], []];

  resultMatrix[0].push(ancient.firstStage.greenCards);
  resultMatrix[0].push(ancient.firstStage.brownCards);
  resultMatrix[0].push(ancient.firstStage.blueCards);

  resultMatrix[1].push(ancient.secondStage.greenCards);
  resultMatrix[1].push(ancient.secondStage.brownCards);
  resultMatrix[1].push(ancient.secondStage.blueCards);

  resultMatrix[2].push(ancient.thirdStage.greenCards);
  resultMatrix[2].push(ancient.thirdStage.brownCards);
  resultMatrix[2].push(ancient.thirdStage.blueCards);

  return resultMatrix;
}

export { makeStagesMatrix };