import react, { useState } from "react";
import "../App.css";

function Details({ countryDetails }) {
    const [weather, setWeather] = useState("");
    const [city, setCity] = useState("");

    function fetchWeather(capital) {
        fetch(`http://api.weatherstack.com/current?access_key=9a9bebb38d02a2f5d5d6c6a4e7703f7c&query=${capital}`)
            .then(function (response) {
                response.json()
                    .then((jsonData) => {
                        setWeather(jsonData);
                        console.log(jsonData);
                        setCity(capital);
                    });
            })
            .catch(function (error) {
                console.log('error');
            });
    }
    return <>
        <h3 style={{ color: "white" }}>The search results :</h3>
        {(countryDetails.length) ? countryDetails.map((el, index) => {
            return <div className="card" key={index}>
                <h3>Country Name : {el.name}</h3>
                <h5>Capital : {el.capital}</h5>
                <h5>Population : {el.population}</h5>
                <h5>Lating : {el.latlng}</h5>
                <h3><img className="flag" src={el.flag}></img></h3>
                <button className="weather-button" onClick={() => { fetchWeather(el.capital) }}>Capital Weather</button>
                {(city === el.capital) ? <>
                    <p><strong>Temperature :</strong>{weather.current.temperature}</p>
                    <img src={weather.current.weather_icons[0]}></img>
                    <p><strong>Wind Speed :</strong>{weather.current.wind_speed}</p>
                    <p><strong>Humidity :</strong>{weather.current.humidity}</p></> : ""}
            </div>
        }) : ""}
        {(countryDetails.length) ? "" : <h1 style={{ background: "white", color: "red", padding: "50px", borderRadius: "10px" }}>Sorry....No country found with this keyword ☹️</h1>}
    </>
}
export default Details;
