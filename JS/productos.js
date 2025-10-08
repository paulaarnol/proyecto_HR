const cards = document.querySelectorAll('.taller');

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('active')){
            cards.forEach(c => {
                c.classList.remove('active');
                c.classList.remove('dimmed');
          });
        }
        else{

        }
    });
});