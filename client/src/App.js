import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get('http://localhost:5000/weather');
        setWeather(response.data);
      } catch (error) {
        setError('Error fetching weather data');
        console.error('Error fetching weather data:', error);
      }
    };

    getWeather();
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        {error && <p>{error}</p>}
        {weather ? (
          <div>
            <p>Temperature: {weather.temperature}°F</p>
            <p>Condition: {weather.condition}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </header>
    </div>
  );
}

export default App;
