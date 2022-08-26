import { ancientsData } from '../../data/ancients.js';
import { randomCard } from './randomCard.js';

function makeGameSet(globalState, cardsSet) {
  const ancient = ancientsData[globalState.ancient];
  const gameSet = {
    firstStage: [],
    secondStage: [],
    thirdStage: [],
  }

  let blueSet = cardsSet.blueCards;
  let greenSet = cardsSet.greenCards;
  let brownSet = cardsSet.brownCards;

}

export { makeGameSet };