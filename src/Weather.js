import React, { useState } from "react";
import Weathersearch from "./Weathersearch";
import TableForecast from "./TableForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {


    const [city, setCity] = useState(props.defaultCity);
    const [wdata, setWData] = useState({ ready: false });
function handleResponse(response){
    
setWData({
    ready: true,
    coordinates: response.data.coord,
    city: response.data.name,
    date: formatDate(response.data.timezone),
    description: response.data.weather[0].description,
    
    humidity: response.data.main.humidity,
    windspeed: response.data.wind.speed,
    icon: response.data.weather[0].icon,
    temperature: response.data.main.temp,});

}
function formatDate(timezone) {
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    return new Date(utc + 1000 * timezone);
  }
function getCity(event) {
    setCity(event.target.value);
    
}
  
function searchResult() {

 const apiKey = "2d50c0d7967e795bde908aa93c3e908d";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
axios.get(apiUrl).then(handleResponse);
}

function getSubmit(event) {
event.preventDefault();
searchResult();

}


if (wdata.ready) {return (
     <div className="weather-app">
            <div className="row"> 
            <div className="col-6">
                <h1 className="title">Weather in {city}</h1>
            </div>
            <div className="col-6">
            <form onSubmit={getSubmit}> 
                <input type="search" placeholder="Enter a location" onChange={getCity}/>
                <input type="submit" value="Search" />
                </form>   
            </div>
            <div className="weather-search">
                <Weathersearch data={wdata} /></div>
           
             
            </div>
            <TableForecast coordinates={wdata.coordinates} />
</div>); 
}
        else 
{
   
 searchResult();
 return <div>{city}</div>}
}
