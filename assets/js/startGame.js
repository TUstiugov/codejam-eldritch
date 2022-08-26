import { countCards } from "./countCards.js";
import { makeCardsSet } from "./makeCardsSet.js";
import { makeGameSet } from "./makeGameSet.js";

function startGame(globalState) {
  const cardsQuantity = countCards(globalState);

  const cardsSet = makeCardsSet(globalState, cardsQuantity);

  const gameSet = makeGameSet(globalState, cardsSet);

  console.log(gameSet);
}

export { startGame };