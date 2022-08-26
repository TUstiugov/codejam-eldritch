import { ancientsData } from '../../data/ancients.js';
import { randomCard } from './randomCard.js';

function makeGameDeck(cardsDeck, stagesMatrix) {
  const gameDeck = {
    firstStage: [],
    secondStage: [],
    thirdStage: [],
  }

  let greenDeck = cardsDeck.greenCards;
  let brownDeck = cardsDeck.brownCards;
  let blueDeck = cardsDeck.blueCards;

  // console.log(greenDeck);
  // console.log(brownDeck);
  // console.log(blueDeck);

}

export { makeGameDeck };