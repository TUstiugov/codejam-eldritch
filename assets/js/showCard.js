function showCard(gameDeck) {
  const deck = document.querySelector('.game-field__stack');
  const activeCard = document.querySelector('.game-field__active-card');

  const flatGameDeck = gameDeck.flat();

  if (gameDeck.length === 1) {
    deck.classList.remove('visible');
  }

  if (!activeCard.classList.contains('visible')) {
    activeCard.classList.add('visible');
  }

  activeCard.style.backgroundImage = `url('${flatGameDeck[0].cardFace}')`;
}

export { showCard };