import { data } from "./data.js"

const n = data.events.length

//const cdate = data.currentDate

 let cardsContainer = document.querySelector('#products-cards-container');
    
 // otra forma for(let i = 0;i<n;i++) {
 for (let value of Object.values(data.events)) {
  
     let newCard = document.createElement('DIV');
 
     let cardbootstrap = `
        <div class="card" style="width: 18rem;"> 
            <img src=${value.image}
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${value.name}</h5>
                <p class="card-text">${value.description}</p>
                
                <div style="text-align:left;">
                    <p class="child" id="price">Price $ ${value.price}</p>
                <span style="float:right" >
                    <a href="#" class="child btn btn-primary effect">Buy tickets</a>
                </span>
                </div>

            </div>
        </div>
        `
        
     cardsContainer.appendChild(newCard);

     newCard.innerHTML = cardbootstrap;
 
 }