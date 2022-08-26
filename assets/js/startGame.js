import { ancientsData } from "../../data/ancients.js";
import { countCards } from "./countCards.js";
import { makeCardsSet } from "./makeCardsSet.js";
import { makeStagesMatrix } from "./makeStagesMatrix.js";
import { makeGameDeck } from "./makeGameDeck.js";
import { showStagesMatrix } from "./showStagesMatrix.js";

function startGame(globalState) {
  const ancient = ancientsData[globalState.ancient];
  const difficulty = globalState.difficulty;

  const cardsQuantity = countCards(ancient);

  const cardsDeck = makeCardsSet(difficulty, cardsQuantity);

  const stagesMatrix = makeStagesMatrix(ancient);

  const gameDeck = makeGameDeck(cardsDeck, stagesMatrix);

  showStagesMatrix(stagesMatrix);

  console.log(gameDeck);

}

export { startGame };