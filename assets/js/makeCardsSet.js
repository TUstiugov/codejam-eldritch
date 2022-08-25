import { blueCardsData } from '../../data/mythicCards/blue/index.js'
import { greenCardsData } from '../../data/mythicCards/green/index.js'
import { brownCardsData } from '../../data/mythicCards/brown/index.js'

function makeCardsSet(globalState, cardsQuantity) {
  const difficult = globalState.difficulty;
  const cardsSet = {
    blueCards: [],
    greenCards: [],
    brownCards: [],
  };

  if (difficult === 'normal') {
    cardsSet.blueCards = blueCardsData;
    cardsSet.greenCards = greenCardsData;
    cardsSet.brownCards = brownCardsData;

    return cardsSet;
  } else if (difficult === 'easy') {
    sortCardsWithout(cardsSet, 'hard');

    return cardsSet;
  } else if (difficult === 'hard') {
    sortCardsWithout(cardsSet, 'easy');

    return cardsSet;
  } else if (difficult === 'very-easy') {
    sortCardsOnly(cardsSet, 'easy', cardsQuantity);

    return cardsSet;
  } else if (difficult === 'very-hard') {
    sortCardsOnly(cardsSet, 'hard', cardsQuantity);

    return cardsSet;
  }
}

export { makeCardsSet };

function sortCardsWithout(cardsSet, level) {
  blueCardsData.forEach(card => {
    if (card.difficulty !== level) {
      cardsSet.blueCards.push(card);
    }
  })

  greenCardsData.forEach(card => {
    if (card.difficulty !== level) {
      cardsSet.greenCards.push(card);
    }
  })

  brownCardsData.forEach(card => {
    if (card.difficulty !== level) {
      cardsSet.brownCards.push(card);
    }
  })
}

function sortCardsOnly(cardsSet, level, cardsQuantity) {
  blueCardsData.forEach(card => {
    if (card.difficulty === level) {
      cardsSet.blueCards.push(card);
    }
  })

  if (cardsSet.blueCards.length < cardsQuantity.blueCards) {
    blueCardsData.forEach(card => {
      if (card.difficulty === 'normal') {
        if (cardsSet.blueCards.length < cardsQuantity.blueCards) {
          cardsSet.blueCards.push(card);
        }
      }
    })
  }

  greenCardsData.forEach(card => {
    if (card.difficulty === level) {
      cardsSet.greenCards.push(card);
    }
  })

  if (cardsSet.greenCards.length < cardsQuantity.greenCards) {
    greenCardsData.forEach(card => {
      if (card.difficulty === 'normal') {
        if (cardsSet.greenCards.length < cardsQuantity.greenCards) {
          cardsSet.greenCards.push(card);
        }
      }
    })
  }


  brownCardsData.forEach(card => {
    if (card.difficulty === level) {
      cardsSet.brownCards.push(card);
    }
  })

  if (cardsSet.brownCards.length < cardsQuantity.brownCards) {
    brownCardsData.forEach(card => {
      if (card.difficulty === 'normal') {
        if (cardsSet.brownCards.length < cardsQuantity.brownCards) {
          cardsSet.brownCards.push(card);
        }
      }
    })
  }
}