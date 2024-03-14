import React, { useContext, useState } from 'react'
import { WeatherContext } from './WeatherContext.jsx'

const WeatherForm = () => {
    const { setWeatherData } = useContext(WeatherContext)
    const [city, setCity] = useState('')
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    const handleCitySearch = async () => {
        try {
            const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality`)
            const data = await response.json()
            if (data.features.length > 0) {
                const { coordinates } = data.features[0].geometry
                console.log(coordinates)
                setLatitude(coordinates[1])
                setLongitude(coordinates[0])
                handleWeatherSearch()
                
            } else {
                throw new Error('City not found')
            }
        } catch (error) {
            console.error('Error fetching city coordinates:', error)
        }
    }

    const handleWeatherSearch = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=505337f190b13d175c5a828681497007`)
            const data = await response.json()
            console.log(data)
            setWeatherData(data)
        } catch (error) {
            console.error('Error fetching weather data:', error)
        }
    }

    return (
        <div>
            <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city name" />
            <button onClick={handleCitySearch}>Search</button>
        </div>
    )
}

export default WeatherForm