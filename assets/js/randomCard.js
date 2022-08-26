function randomCard(cardsArray) {
  return cardsArray[Math.floor(Math.random() * (cardsArray.length - 1))];
}

export { randomCard };