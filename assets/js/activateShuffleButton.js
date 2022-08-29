import { startGame } from './startGame.js';

function activateShuffleButton(globalState) {
  const shuffleButton = document.querySelector('.main__difficulty-shuffle-cards');

  shuffleButton.addEventListener('click', (e) => {
    if (!globalState.isPlayed) {
      globalState.isPlayed = true;
      startGame(globalState);
    }
  });
}

export { activateShuffleButton };