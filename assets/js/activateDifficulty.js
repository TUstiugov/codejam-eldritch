function activateDifficulty(obj) {
  const difficultyBlock = document.querySelector('.main__difficulty-buttons')

  difficultyBlock.addEventListener('change', (e) => {
    obj.difficulty = e.target.value;
  });
}

export { activateDifficulty };