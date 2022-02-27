const section = document.querySelector('section#card-area');
let sliders = [];

const json = './cards.json';
fetch(json).then(response => response.json()
    .then(data => loadContent(data)));

function loadContent(data){
    for(let i= 0; i < data.sliders.length; i++){
        section.innerHTML += `
            <div class="slider" id="slider-${i}">
            </div>`;
            sliders[i] = document.querySelector(`div#slider-${i}`);
        for(let n=0; n < data.sliders[i].length; n++){
            sliders[i].innerHTML += `
                <a class="card" id="card-${data.sliders[i][n].id}">
                    <img src="${data.sliders[i][n].image}">
                    <div class="card-information">
                        <h3>${data.sliders[i][n].name}</h3>
                        <p>R$${data.sliders[i][n].price}</p>
                    </div>
                </a>`;
        }
    }
}
