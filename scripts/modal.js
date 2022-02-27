const card = document.querySelector('a#card');
const modal = document.querySelector('div#modal');
const close = document.querySelector('a#close');

card.addEventListener('click', () => {
    modal.style.display = "flex";
});

window.addEventListener('click', (Event) => {
    if(Event.target == modal){
        modal.style.display = "none";  
    }
});