import React , {useState , useEffect}  from "react";
import axios from "axios";

function Weather() {
    const [weather , setWeather] = useState(null);
    const [city] = useState("Hyderabad");
    
    const api_key = "9df63402d890a69da1adb58ccc2c9885";

    useEffect(
        () => {
            const fetchWeather = async () =>{
                try {
                    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
                    setWeather(res.data);
                }
                catch(error){
                    console.log('Error fetching weather data :' , error);
                }
            };
            fetchWeather(); 
        } , [city]
    );

    return (
        <div>
          <h2>Weather in {city}</h2>
          {weather ? (
            <div>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Condition: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
            </div>
          ) : (
            <p>Loading Weather...</p>
          )}
        </div>
      );
      
      
}

export default Weather;