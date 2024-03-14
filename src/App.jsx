import React from 'react'
import WeatherForm from './WeatherForm.jsx'
import WeatherDisplay from './WeatherDisplay.jsx'
import { WeatherProvider } from './WeatherContext.jsx'

const App = () => {
    return (
        <WeatherProvider>
            <div className="App">
                <h1>Weather App</h1>
                <WeatherForm />
                <WeatherDisplay />
            </div>
        </WeatherProvider>
    )
}

export default App

