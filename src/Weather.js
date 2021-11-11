import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import Weathersearch from "./Weathersearch";

export default function Weather(props) {


    const [city, setCity] = useState(props.defaultCity);
    const [data, setData] = useState({ready: false});
function handleResponse(response){

setData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    windspeed: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    temperature: response.data.main.temp,});

}
function searchResult() {

 const apiKey = `2d50c0d7967e795bde908aa93c3e908d`;
 let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
axios.get(apiUrl).then(handleResponse);
}

function getSubmit(event) {
event.preventDefault();
searchResult();

}
function getCity(event) {
    setCity(event.target.value);
    
}

if (data.ready) {return (
     <div className="weather-app">
            <div className="row"> 
            <div className="col-3">
                <h1>Weather in {city}</h1>
            </div>
            <div className="col-9">
            <form onSubmit={getSubmit}> 
                <input type="search" placeholder="Enter a location" onChange={getCity}/>
                <input type="submit" value="Search" />
                </form>
                <Weathersearch data={data} />
            </div>
            </div>
</div>); 
}
        else 
{
   
 searchResult();
 return <div>{city}</div>;
}
}
