import { blueCardsData } from '../../data/mythicCards/blue/index.js';
import { greenCardsData } from '../../data/mythicCards/green/index.js';
import { brownCardsData } from '../../data/mythicCards/brown/index.js';
import { randomCard } from './randomCard.js';

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
  const blueNormalCards = [];
  const greenNormalCards = [];
  const brownNormalCards = [];

  blueCardsData.forEach(card => {
    if (card.difficulty === 'normal') {
      blueNormalCards.push(card);
    }
  });

  greenCardsData.forEach(card => {
    if (card.difficulty === 'normal') {
      greenNormalCards.push(card);
    }
  });

  brownCardsData.forEach(card => {
    if (card.difficulty === 'normal') {
      brownNormalCards.push(card);
    }
  });

  blueCardsData.forEach(card => {
    if (card.difficulty === level) {
      cardsSet.blueCards.push(card);
    }
  });

  while (cardsSet.blueCards.length < cardsQuantity.blueCards) {
    let card = randomCard(blueNormalCards);

    if (!cardsSet.blueCards.includes(card)) {
      cardsSet.blueCards.push(card);
    }
  }

  greenCardsData.forEach(card => {
    if (card.difficulty === level) {
      cardsSet.greenCards.push(card);
    }
  })

  while (cardsSet.greenCards.length < cardsQuantity.greenCards) {
    let card = randomCard(greenNormalCards);

    if (!cardsSet.greenCards.includes(card)) {
      cardsSet.greenCards.push(card);
    }
  }

  brownCardsData.forEach(card => {
    if (card.difficulty === level) {
      cardsSet.brownCards.push(card);
    }
  })

  while (cardsSet.brownCards.length < cardsQuantity.brownCards) {
    let card = randomCard(brownNormalCards);

    if (!cardsSet.brownCards.includes(card)) {
      cardsSet.brownCards.push(card);
    }
  }

  console.log(cardsQuantity);
  console.log(cardsSet);
}

export { makeCardsSet };