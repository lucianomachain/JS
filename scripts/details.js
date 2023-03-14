const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

import { data } from "./data.js"

const cdate = data.currentDate

const events = data.events
let evento = events.filter((evento)=> evento._id == id)

console.log(evento)

if (evento.length == 0) {
    alert("Not event was selected! Please go back and click on event picture or description to get details")
}
else
{
    let cardsContainer = document.querySelector('#products-cards-container');
        

    function buid_card(imagen, nombre, descripcion, precio, fecha, lugar, capacidad, asistencia) {

    
    let newCard = document.createElement('DIV');

    let cardbootstrap = `

        
        <div class="card mb-3" style="max-width: 740px" id="card-det">
        <div class="row no-gutters" style="text-align:center">
            <div class="col-md-4">
            <img src=${imagen} class="card-details1" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title" id="card-title-d">${nombre}</h5>
                <p class="card-text" id="card-text-d">${descripcion}</p>
                <p class="card-text" id="card-text-d">When: ${fecha}</p>
                <p class="card-text" id="card-text-d">Where: ${lugar}</p>
                <p class="card-text" id="card-text-d">Capacity: ${capacidad}</p>
                <p class="card-text" id="card-text-d">Assistance: ${asistencia}</p>
                <p class="card-text" id="card-text-d"><small class="text-muted">Last updated on ${cdate}</small></p>
            </div>
            </div>
        </div>

        <div style="text-align:left;">
            <p class="child" id="price-details">$ ${precio}</p>
        <span style="float:right; margin-right:20px; margin-bottom:10px;" >
            <a href="#" class="child btn btn-primary effect">Buy tickets</a>
        </span>
        </div>

        </div>

        `
        
    cardsContainer.appendChild(newCard);

    newCard.innerHTML = cardbootstrap;

    }

    buid_card(evento[0].image, evento[0].name, evento[0].description, evento[0].price, 
        evento[0].date, evento[0].place, evento[0].capacity, evento[0].assistance)


}