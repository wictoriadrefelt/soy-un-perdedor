
// creating and retriving elements
let quote = undefined
let quoteToSave = ''

let textDiv = document.getElementById('gloriusQuote')
let generateQuote = document.getElementById('showQuote');
//let displayList = document.getElementById('displayList')
let bigContainer = document.getElementById('big-container')



const fetchQuote = () => {
  fetch('http://localhost:3004/kanye').then((response) => {
  console.log(response)
  return response.json()
}).then((data) => {
 
  quote = data
  displayText(quote.quote); 
  quoteToSave = quote
  generateQuote.innerText = 'Get another one'
})


}


const fetchList = () => {
  fetch('http://localhost:3004/kanye').then((response) => {
  console.log(response)
  return response.json()
}).then((data) => {
  console.log(data, 'this is data')
 
  //console.log(data[0].quote)
  
})
}


const getSavedQuotesFromServer = async () => {
  try {
    let quoteToAdd = {
      quote: quote
    }
    const response = await fetch('http://localhost:3004/kanye', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(quoteToAdd)
    })
    const body = await response.json() 
    console.log(body)
  }catch(err) {
    console.log(err, 'bläääää')
  }
}


const getSavedListFromServer = async () => {
  try {
    bigContainer.innerHTML = ''
    const response = await fetch('http://localhost:3004/quotes', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const quotes = await response.json() 
    
    findElements(quotes)
  }catch(err) {
    console.log(err, 'something went wrong')
  }
}


const deleteSavedQuote = async () => {
  try {
    const response = await fetch('http://localhost:3004/quotes/id', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const quotes = await response.json() 
    console.log(quotes)
  }catch(err) {
    console.log(err, 'bläääää')
  }
}



// loops through list of saved quotes
const findElements = (listToLoop) => {
  
  //displayList.innerHTML = ''
  for(let i = 0; i < listToLoop.length; i++ ){
    console.log(listToLoop)
    
    let element = listToLoop[i];
    if(listToLoop !== listToLoop.length){

 
    let displayList = document.createElement('div')
    displayList.textContent = `quote: ${element.quote.quote}, with id: ${element.id} `
    
    bigContainer.append(displayList)
   
    }
  }   
  }

  const removeSavedQuote = () => {
    console.log('click')
  }
  

let removeQuote = document.getElementById('delete'); 
removeQuote.addEventListener('click', () => {
  removeSavedQuote();
  deleteSavedQuote();
})



let showAll = document.getElementById('showAll')
showAll.addEventListener('click', function () {
  
  getSavedListFromServer();
 
  
})


// button for retreiving quote 
const showQuote = (quote) => {
  fetchQuote();
  generateQuote.innerText = quote; 
}

generateQuote.addEventListener('click', showQuote)





// displays quote from api 
const displayText = (quote) => {
textDiv.innerHTML = quote


}



function addData(object) {
  // the push method add a new item to an array
  // here it will be adding the object from the function getRandomUser each time it is called
  listOfQuotes.push(object);
  //the fetched data is available only on this scope
  console.log(listOfQuotes, 'quote added')
 /*  if(listOfQuotes){
    let iterator = listOfQuotes.values()
    for (let elements of iterator) {
      let done = JSON.stringify(elements)
     
    }
  } */
  
}


let saveButton = document.getElementById('save')
saveButton.addEventListener('click', function () {
  getSavedQuotesFromServer();
  
})



// trying out geolocation, becuase - procrastination
if('geolocation' in navigator){
  console.log('geolocation avaliable')
  navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude)
  console.log( position.coords.longitude)
  console.log(position)
  console.log(position.coords)
})
}else{
  console.log('geolocation not avaliable')
}










/* 
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

 */
 

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

