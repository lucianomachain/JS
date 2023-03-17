 const url = "https://mindhub-xj03.onrender.com/api/amazing"
 const response = await fetch(url);
 const data = await response.json();

const eventos = data.events

let categorias = ["Food", "Museum", "Concert", "Race", "Books", "Cinema","Party"]


function crea_fila(tabla, categoria, ventas, porcentajes){
    if(ventas==0 && isNaN(porcentajes)==true ){}
    else{
        let id = tabla
        let add = document.getElementById(id);
        let newRow = document.createElement('tr');
        let row = `<td>${categoria}</td>
                    <td>$ ${ventas}</td>
                    <td>${porcentajes}%</td>
        `

        add.appendChild(newRow);

        newRow.innerHTML = row;
        }
}

var calculos = eventos.map(function(item) {
    const percent_up = item.estimate / item.capacity 
    const revenues_up = item.price * item.estimate
    const percent_past = item.assistance / item.capacity 
    const revenues_past = item.price * item.assistance
    return {
        id: item._id,
        category: item.category,
        name: item.name ,
        capacity: item.capacity,
        percent_upcoming: percent_up,
        revenues_upcoming: revenues_up,
        percent_past: percent_past,
        revenues_past: revenues_past,
       
    };
});

let upcoming_events = calculos.filter((e)=> e.percent_upcoming >=0)
let past_events = calculos.filter((e)=> e.percent_past >=0)
const percent = past_events.map( e =>e.percent_past);
const max_cap = past_events.map( e =>e.capacity );

const max_perc = Math.max(...percent)
const min_perc = Math.min(...percent)
const lar_cap = Math.max(...max_cap)

//First table
let text1 = calculos.find((e)=> e.percent_past ==max_perc).name + " (" + (max_perc * 100).toFixed(2) + "%)"  
let text2 = calculos.find((e)=> e.percent_past ==min_perc).name + " (" + (min_perc * 100).toFixed(2) + "%)"  
let text3 = calculos.find((e)=> e.capacity ==lar_cap).name + " (" + lar_cap + ")"  

document.getElementById("mayor").innerHTML = text1;
document.getElementById("menor").innerHTML = text2;
document.getElementById("capacidad").innerHTML = text3;

//Second table
categorias.forEach(function(param){
    let sum = suma(upcoming_events,param,"revenues_upcoming")
    let por = porcentaje(upcoming_events,param,"percent_upcoming")

    crea_fila("tabla2",param,sum,por)

})


//Third table
categorias.forEach(function(param){
    let sum = suma(past_events,param,"revenues_past")
    let por = porcentaje(past_events,param,"percent_past")

    crea_fila("tabla3",param,sum,por)

})



function suma(datos, grupo, campo) {
    const data = datos.filter((e)=> e.category == grupo)   
    const array = data.map( e => e[campo])
    let suma = 0;
    array.forEach((e) => { suma += e})
    return suma ;
    
  }

function porcentaje(datos, grupo, campo) {
    const data = datos.filter((e)=> e.category == grupo)   
    const array = data.map( e => e[campo])
    let suma = 0;
    array.forEach((e) => { suma += e})
    return (suma / Array.from(array).length * 100).toFixed(2);
    
} 






