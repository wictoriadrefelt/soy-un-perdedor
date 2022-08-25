
// creating and retriving elements
let quote = ''
let quoteToSave = ''

let textDiv = document.getElementById('gloriusQuote')


let generateQuote = document.getElementById('showQuote');



const fetchQoute = () => {
  fetch('http://localhost:3004/kanye').then((response) => {
  console.log(response)
  return response.json()
}).then((data) => {
  //console.log(data)
 
  let quote = data
  //console.log(data[0].qoute)
  console.log(typeof(quote))
  console.log(typeof(quote.quote))
  displayText(quote.quote); 
  quoteToSave = quote
  generateQuote.innerText = 'Get another one'
})
}


let listOfQuotes = []; 


// button for retreiving quote 
const showQuote = (qoute) => {
  fetchQoute();
  generateQuote.innerText = qoute; 
  
}

generateQuote.addEventListener('click', showQuote)





// displays quote from api 
const displayText = (quote) => {
  
/*  if(quote){
  let save = document.createElement('button')
  textDiv.append(save)
}  */

textDiv.innerHTML = quote


}



function addData(object) {
  // the push method add a new item to an array
  // here it will be adding the object from the function getRandomUser each time it is called
  listOfQuotes.push(object);
  //the fetched data is available only on this scope
  console.log(listOfQuotes, 'quote added')
  
}

let saveButton = document.getElementById('save')

saveButton.addEventListener('click', function () {
  addData(quoteToSave)
  

})


/* const showAllSaved = (data) => {
  addData(data); 
  console.log(listOfQuotes)
}

showAllSaved(); */






//import { displayCocktails } from '../controllers/users.js'

/* 
import fetch from 'node-fetch'

//let drinkDisplay = document.getElementById('drinkDiv') 



// fetch to recieve our data 
fetch("https://api.kanye.rest")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("no");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktails(data)
    showDrink();
  })
  .catch((error) => console.error("FETCH ERROR:", error));


  let qoutes = []

  //

export function displayKanye(data) {
    
    qoutes.push(data)
    console.log(qoutes)
    
} */

/* let show = document.createElement('button')
show.innerHTML = 'hej'
show.append(drinkDisplay) */

/* let showDrink = (data) => {

   // drinkDisplay.innerHTML = data.drinks[0].idDrink
    console.log(data.drinks[0].idDrink)
}
 */



/* let show = () => {
    let something = displayCocktails()
    console.log(something, 'katt')
} */

