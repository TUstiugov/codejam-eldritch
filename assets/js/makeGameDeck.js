import { randomCard } from './randomCard.js';
import { removeCard } from './removeCard.js';

function makeGameDeck(cardsDeck, stagesMatrix) {
  const gameDeck = [[], [], []];

  let greenDeck = cardsDeck.greenCards.sort(() => Math.random() - 0.5);
  let brownDeck = cardsDeck.brownCards.sort(() => Math.random() - 0.5);
  let blueDeck = cardsDeck.blueCards.sort(() => Math.random() - 0.5);

  let cardsDeckArray = [greenDeck, brownDeck, blueDeck];

  for (let i = 0; i < stagesMatrix.length; i++) {
    for (let j = 0; j < stagesMatrix[i].length; j++) {
      for (let k = 0; k < stagesMatrix[i][j]; k++) {
        let card = randomCard(cardsDeckArray[j]);

        gameDeck[i].push(card);

        removeCard(card, cardsDeckArray);
      }
    }
  }

  gameDeck.forEach((stage) => {
    stage = stage.sort(() => Math.random() - 0.5);
  });

  return gameDeck;
}

export { makeGameDeck };