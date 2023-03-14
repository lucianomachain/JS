import { data } from "./data.js"

const n = data.events.length

//const cdate = data.currentDate

 let cardsContainer = document.querySelector('#products-cards-container');
    

 function buid_card(id, imagen, nombre, descripcion, precio, event_nr) {

    
    let newCard = document.createElement('DIV');
 
    let cardbootstrap = `
       <div id=${id} class="card" style="width: 18rem;"> 
           <img src=${imagen}
               id=${event_nr} class="card-img-top" alt="...">
           <div class="card-body">
               <h5 id=${event_nr} class="card-title">${nombre}</h5>
               <p id=${event_nr} class="card-text1">${descripcion}</p>
               
               <div style="text-align:left;">
                   <p class="child price" id=${event_nr}>Price $ ${precio}</p>
               <span style="float:right" >
                   <a href="#" class="child btn btn-primary effect" id=${event_nr}>Buy tickets</a>
               </span>
               </div>

           </div>
       </div>
       `
       
    cardsContainer.appendChild(newCard);

    newCard.innerHTML = cardbootstrap;

 }

// Agrega o borra segun categorias
categoria("Food Fair", "FoodFair")
categoria("Museum", "Museum")
categoria("Costume Party", "CostumeParty")
categoria("Music Concert", "MusicConcert")
categoria("Race", "Race")
categoria("Book Exchange", "BookExchange")
categoria("Cinema", "Cinema")


function categoria(category_name, checkbox_id) {

    // pone cards por defecto al inicio cuando esta todo checked
    const events = data.events
    let eventos = events.filter((evento)=> evento.category == category_name)

    eventos.forEach(function(param){
      buid_card(checkbox_id + "_card", param.image, param.name, param.description, param.price, param._id)
      })


      let checkbox = document.getElementById(checkbox_id)
      checkbox.addEventListener('click', (event) =>{
      const cards = document.querySelectorAll("#"+ checkbox_id +"_card");
      
      //si el filtro esta vacio hace un promt avisando
      if(cards==null){alert("Not event was found! Please select another event");}
      
      if(event.target.checked){

          cards.forEach(card => card.style.display = 'flex');
      }
     else {
      
          cards.forEach(card => card.style.display = 'none');
      
      }
     })
     
  }


 const cards = document.getElementsByClassName("card");

 const cardsPressed = e => {
   //console.log(e.target.id);  // Get ID of Clicked Element
   
   window.location.href = "/details.html?id=" + e.target.id;


 }


 for (let card of cards) {
    card.addEventListener("click", cardsPressed);
 
 } 


//search
const boton = document.querySelector('#submit')
const input = document.querySelector('#search')
const formulario = document.forms[0]
formulario.addEventListener('submit',buscar_evento)

function buscar_evento(e){
    e.preventDefault()    
    const search = input.value.toLowerCase()
    
    const events = data.events

    let evento = events.filter(evento => {
        return evento.name.toLowerCase().includes(search)
    })

    if(evento[0]==null){alert("Not event was found! Please select another event");}
      
 //   input.value = ''

    const cards = document.querySelectorAll("#FoodFair_card, #Museum_card,#CostumeParty_card, #MusicConcert_card,#Race_card, #BookExchange_card,#Cinema_card");
    cards.forEach(card => card.style.display = 'none');

    evento.forEach(function(param){
        
        const events = data.events
        let evento = events.filter((evento)=> evento._id == param._id)

        const card =  (document.getElementsByClassName('card'))
    
        for (let i = 0; i < card.length; i++) {  
        
            if( evento[0]._id == card[i].firstElementChild.id ){

                card[i].style.display = 'flex'
      
            }
            else{

            }
        }
    })

}







