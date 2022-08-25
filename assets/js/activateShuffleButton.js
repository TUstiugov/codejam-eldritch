import { startGame } from './startGame.js';

function activateShuffleButton(obj) {
  const shuffleButton = document.querySelector('.main__difficulty-shuffle-cards');

  shuffleButton.addEventListener('click', (e) => startGame(obj));
}

export { activateShuffleButton };