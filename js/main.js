const header = document.querySelector('header#header');
const section = document.querySelector('section#card-area');
let sliders = [];

const json = './cards.json';
fetch(json).then(response => response.json()
    .then(data => loadContent(data)));

function loadContent(data){
    for(var i= 0; i < data.sliders.length; i++){
        section.innerHTML += `
            <div class="slider" id="slider-${i}">
            </div>`;
            sliders[i] = document.querySelector(`div#slider-${i}`);
        for(var n=0; n < data.sliders[i].length; n++){
            sliders[i].innerHTML += `
                <div class="modal" id="modal-${data.sliders[i][n].id}">
                    <div id="modal-card">
                        <a onclick="closeModal(${data.sliders[i][n].id})"><img src="images/icons/close.svg"></a>
                        <header class="modal-header">
                            <img id="modal-img" src="${data.sliders[i][n].image}">
                            <div>
                                <h3 id="modal-title">${data.sliders[i][n].name}</h3>
                                <time id="release">${data.sliders[i][n].date}</time>
                            </div>
                        </header>
                        <div class="modal-description">
                            <p id="description">${data.sliders[i][n].description}.</p>
                            <p id="modal-price" class="price">R$${data.sliders[i][n].price}</p>
                            <button id="modal-button">ORDER NOW</button>
                        </div>
                    </div>
                </div>
                <a class="card" id="card-${data.sliders[i][n].id}" onclick="openModal(${data.sliders[i][n].id})">
                    <img src="${data.sliders[i][n].image}">
                </a>`;
        }
    }
}

function openModal(index){
    var modal = document.querySelector(`div#modal-${index}`);
    header.style.display = 'none';
    modal.style.display = 'flex';
    modalIndex = index;
}

function closeModal(index) {
    var modal = document.querySelector(`div#modal-${index}`);
    modal.style.display= 'none';
    header.style.display= 'flex';
    modalIndex = index;
}

