function showStagesMatrix(stagesMatrix) {
  const flatStagesMatrix = stagesMatrix.flat();
  const bubbleFields = document.querySelectorAll('.game-field__circle>span');

  bubbleFields.forEach((element, index) => {
    element.innerText = flatStagesMatrix[index];
  });
}

export { showStagesMatrix };