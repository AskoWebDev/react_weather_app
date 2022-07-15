import './App.css'
import React, { useState } from 'react';

const api = {
    key: '1851adabbd4079ebf88df8f7386d0849'
  }

function App() {
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('')
  const [time, setTime] = useState()
  


  function fetchapi(evt) {
    if (city.length === 0) {
      return
    }else if(evt.key === 'Enter' || 'button')
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(res => {
          setWeather(res);
          setTime(new Date())
          console.log(weather)
        })
         
  }

  

  return (
    <div className="App" style={{ backgroundImage: `url('/public/cold')` }}>
        <div className="input">
          <input 
            onChange={e => setCity(e.target.value)} 
            value={city}
            onKeyPress={fetchapi}
            placeholder="Search"
          />     
          <button onClick={fetchapi} name='button'>Search</button>  
        </div>  
          {(typeof weather.main != 'undefined') ? (
          <div className="output">
              <h1>City: {weather.name}</h1>
              <h2>{time.toDateString()}</h2>
              <h2>Temperature: {Math.round(weather.main.temp)}°C</h2> 
              <h2>{weather.weather[0].main}</h2>
          </div>
          
        ): ('')}
        
    </div>
  );
}

export default App;
