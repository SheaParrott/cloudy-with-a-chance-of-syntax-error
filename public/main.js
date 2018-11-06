let searchText = ''

const addTempToDiv = weatherData => {
  // Find the Div
  let theDiv = document.querySelector('div')

  // Create a new p
  let newP = document.createElement('p')

  // make the text content of the P the weather data
  // not an array, this is a number without the brackets
  // so pDivl data like this
  newP.textContent = `${weatherData.main.temp}°`

  // add the P to the Div
  theDiv.appendChild(newP)
}

const addHumidityToDiv = weatherData => {
  let theDiv = document.querySelector('div')
  let newP = document.createElement('p')

  newP.textContent = `${weatherData.main.humidity}%`

  theDiv.appendChild(newP)
  newP.classList.add('mediumFont')
}
const addForecastToDiv = weatherData => {
  let theDiv = document.querySelector('div')
  let newP = document.createElement('p')

  newP.textContent = `${weatherData.weather[0].description}`

  theDiv.appendChild(newP)
  newP.classList.add('mediumFont')
}

const addTempMaxToDiv = weatherData => {
  let theDiv = document.querySelector('div')
  let newP = document.createElement('p')

  newP.textContent = `Max: ${weatherData.main.temp_max}°`

  theDiv.appendChild(newP)
  newP.classList.add('mediumFont')
}
const addTempMinToDiv = weatherData => {
  let theDiv = document.querySelector('div')
  let newP = document.createElement('p')

  newP.textContent = `Min: ${weatherData.main.temp_min}°`

  theDiv.appendChild(newP)
  newP.classList.add('mediumFont')
}
let restartButtonFunction = () => {
  window.location.reload(true)
}
let SearchButtonFunction = () => {
  // searchText = document.getElementById('searchTxt').value
  searchText = 'Tampa'
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=331443de8011d520ea2d97aad9cea963&units=imperial`
  )
    .then(response => {
      return response.json()
    })
    .then(weatherData => {
      addTempToDiv(weatherData)
      addHumidityToDiv(weatherData)
      addForecastToDiv(weatherData)
      addTempMaxToDiv(weatherData)
      addTempMinToDiv(weatherData)
      console.log(weatherData.main.temp)
    })
}

const main = () => {
  let searchButton = document.querySelector('button')
  searchButton.addEventListener('click', SearchButtonFunction)
  let reloadButton = document.querySelector('.reload')
  reloadButton.addEventListener('click', restartButtonFunction)
}

document.addEventListener('DOMContentLoaded', main)

//
// x create search button function to record input
// x attach input to url
//
//
// - find Div
//   - create li
//   - display weather info per li
//    - find content wanted to be displayed
//
