function countCards(ancient) {
  const cardsQuantity = {};

  cardsQuantity.greenCards = ancient.firstStage.greenCards + ancient.secondStage.greenCards + ancient.thirdStage.greenCards;

  cardsQuantity.brownCards = ancient.firstStage.brownCards + ancient.secondStage.brownCards + ancient.thirdStage.brownCards;

  cardsQuantity.blueCards = ancient.firstStage.blueCards + ancient.secondStage.blueCards + ancient.thirdStage.blueCards;

  return cardsQuantity;
}

export { countCards };