function activateAncient(obj) {
  const ancientsBlock = document.querySelector('.main__ancients');
  const ancientCards = document.querySelectorAll('.main__ancient-card');

  ancientsBlock.addEventListener('click', (e) => {
    ancientCards.forEach((card) => {
      card.classList.remove('active');

      if (e.target.id === card.id) {
        card.classList.add('active');
      }
    })

    obj.ancient = e.target.id;
  });
}

export { activateAncient }