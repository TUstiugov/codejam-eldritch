function showCard(gameDeck, deck, activeCard) {
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