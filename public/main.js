class DisplayData {
  reset() {
    let theDiv = document.querySelector('.displayedElements')
    // zap all the content frmo that div
    theDiv.innerHTML = ''

    document.getElementById('zipID').value = ''
    document.getElementById('cityID').value = ''
  }

  zipcode() {
    return document.getElementById('zipID').value
  }
  cityLoctation() {
    return document.getElementById('cityID').value
  }

  addDataToInterface(data, className) {
    let theDiv = document.querySelector('.displayedElements')
    let newP = document.createElement('p')

    if (className !== '') {
      newP.classList.add(className)
    }

    newP.textContent = data

    theDiv.appendChild(newP)
  }
}

class WeatherData {
  getWeatherForZip(zipCode) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=331443de8011d520ea2d97aad9cea963&units=imperial`
    )
      .then(response => {
        return response.json()
      })
      .then(weatherData => {
        const temp = weatherData.main.temp
        const humidity = weatherData.main.humidity
        const forecast = weatherData.weather[0].description
        const maxTemp = weatherData.main.temp_max
        const minTemp = weatherData.main.temp_min

        let displayData = new DisplayData()
        displayData.addDataToInterface(`${temp}°`, 'largeFont')
        displayData.addDataToInterface(forecast, '')
        displayData.addDataToInterface(`RH: ${humidity}%`, '')
        displayData.addDataToInterface(`Max: ${maxTemp}°`, '')
        displayData.addDataToInterface(`Min: ${minTemp}°`, '')
      })
  }
  getWeatherForLocation(location) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=331443de8011d520ea2d97aad9cea963&units=imperial`
    )
      .then(response => {
        return response.json()
      })
      .then(weatherData => {
        const temp = weatherData.main.temp
        const humidity = weatherData.main.humidity
        const forecast = weatherData.weather[0].description
        const maxTemp = weatherData.main.temp_max
        const minTemp = weatherData.main.temp_min

        let displayData = new DisplayData()
        displayData.addDataToInterface(temp, 'largeFont')
        displayData.addDataToInterface(humidity, '')
        displayData.addDataToInterface(forecast, '')
        displayData.addDataToInterface(maxTemp, '')
        displayData.addDataToInterface(minTemp, '')
      })
  }
}

let restartButtonFunction = () => {
  let displayData = new DisplayData()
  displayData.reset()
}

let SearchButtonFunction = () => {
  let displayData = new DisplayData()
  let searchText = displayData.cityLoctation()

  let weatherData = new WeatherData()
  weatherData.getWeatherForLocation(searchText)
}

let SearchByZipButtonFunction = () => {
  let displayData = new DisplayData()
  let searchText = displayData.zipcode()

  let weatherData = new WeatherData()
  weatherData.getWeatherForZip(searchText)
}

const main = () => {
  let searchButton = document.querySelector('.citySearch')
  searchButton.addEventListener('click', SearchButtonFunction)

  let searchByZipButton = document.querySelector('.zipSearch')
  searchByZipButton.addEventListener('click', SearchByZipButtonFunction)

  let reloadButton = document.querySelector('.reload')
  reloadButton.addEventListener('click', restartButtonFunction)
}

document.addEventListener('DOMContentLoaded', main)
