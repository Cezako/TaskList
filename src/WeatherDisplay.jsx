import React, { useContext } from 'react'
import { WeatherContext } from './WeatherContext.jsx'


const WeatherDisplay = () => {
  const { weatherData } = useContext(WeatherContext)

  if (!weatherData) {
    return <div>No weather data available</div>
  }

  const { main, weather } = weatherData

  return (
    <>
      {weatherData ? (
        <div>
          <h2>Weather for {weatherData.name}</h2>
          <p>Temperature (Kelvin) : {weatherData.main.temp} K</p>
          <p>Temperature (Celsius) : {(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
          <p>Conditions: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <div>No weather data available</div>
      )}
    </>
  )
}

export default WeatherDisplay