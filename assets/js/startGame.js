import { countCards } from "./countCards.js";
import { makeCardsSet } from "./makeCardsSet.js";

function startGame(globalState) {
  const cardsQuantity = countCards(globalState);

  const cardsSet = makeCardsSet(globalState, cardsQuantity);

  console.log(cardsSet);
}

export { startGame };