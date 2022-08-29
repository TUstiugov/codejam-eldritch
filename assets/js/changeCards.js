import { showCard } from './showCard.js';
import { showStagesMatrix } from './showStagesMatrix.js';

function changeCards(gameDeck, stagesMatrix, deck, activeCard, shuffleButton, globalState) {
  let flatGameDeck = gameDeck.flat();

  const listener = () => {
    const card = flatGameDeck.shift();

    activeCard.classList.add('visible');
    activeCard.style.backgroundImage = `url('${card.cardFace}')`;

    let stage = 0;
    let done = false;

    if (card.color === 'green') {
      do {
        if (stagesMatrix[stage][0] > 0) {
          stagesMatrix[stage][0]--;
          showStagesMatrix(stagesMatrix);
          done = true;
        }

        stage++;
      } while (!done);
    } else if (card.color === 'brown') {
      do {
        if (stagesMatrix[stage][1] > 0) {
          stagesMatrix[stage][1]--;
          showStagesMatrix(stagesMatrix);
          done = true;
        }

        stage++;
      } while (!done);
    } else if (card.color === 'blue') {
      do {
        if (stagesMatrix[stage][2] > 0) {
          stagesMatrix[stage][2]--;
          showStagesMatrix(stagesMatrix);
          done = true;
        }

        stage++;
      } while (!done);
    }

    if (flatGameDeck.length === 0) {
      deck.classList.remove('visible');
      deck.removeEventListener('click', listener);

      shuffleButton.classList.remove('disable');

      globalState.isPlayed = false;
    }
  }

  deck.removeEventListener('click', listener);

  deck.addEventListener('click', listener);
}

export { changeCards };