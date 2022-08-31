
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
  console.log(data)
 
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
    console.log(err)
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





// loops through list of saved quotes
const findElements = (listToLoop) => {
  
  //displayList.innerHTML = ''
  for(let i = 0; i < listToLoop.length; i++ ){
    console.log(listToLoop)
    
    let element = listToLoop[i];
    
    let displayList = document.createElement('div')
    displayList.textContent = `quote: ${element.quote.quote}, with id: ${element.id} `
    
    bigContainer.append(displayList)
   
    
  }   
  }





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








