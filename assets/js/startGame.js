import { ancientsData } from "../../data/ancients.js";
import { countCards } from "./countCards.js";
import { makeCardsSet } from "./makeCardsSet.js";
import { makeStagesMatrix } from "./makeStagesMatrix.js";
import { makeGameDeck } from "./makeGameDeck.js";
import { showStagesMatrix } from "./showStagesMatrix.js";
import { changeCards } from "./changeCards.js";

function startGame(globalState) {
  const ancient = ancientsData[globalState.ancient];
  const difficulty = globalState.difficulty;

  const deck = document.querySelector('.game-field__stack');
  const activeCard = document.querySelector('.game-field__active-card');

  deck.classList.add('visible');
  activeCard.classList.remove('visible');

  const cardsQuantity = countCards(ancient);

  const cardsDeck = makeCardsSet(difficulty, cardsQuantity);

  const stagesMatrix = makeStagesMatrix(ancient);

  showStagesMatrix(stagesMatrix);

  const gameDeck = makeGameDeck(cardsDeck, stagesMatrix);

  changeCards(gameDeck, stagesMatrix, deck, activeCard);
}

export { startGame };