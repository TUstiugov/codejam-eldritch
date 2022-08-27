function removeCard(card, array) {
  array = array.filter((element) => element != card);
}

export { removeCard };