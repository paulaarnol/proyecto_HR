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
            cards.forEach(c => {
                c.classList.remove('active');
                c.classList.add('dimmed');
            });
            card.classList.add('active');
            card.classList.remove('dimmed');
        }
    });
});
const botones = document.querySelectorAll('.boton-le');
botones.forEach(boton => {
   boton.addEventListener('mouseenter', () => {
    
  });
});