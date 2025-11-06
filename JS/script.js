document.addEventListener('DOMContentLoaded', () => {
    
    const titleElement = document.querySelector('.text-content h1');
    
    
    setTimeout(() => {
        titleElement.classList.add('animate-slide-in');
    }, 300);


    
    const logoImage = document.querySelector('.logo img');

    logoImage.addEventListener('click', () => {
        
        logoImage.classList.add('logo-clicked');
        
     
        setTimeout(() => {
            logoImage.classList.remove('logo-clicked');
        }, 500); 
    });
});