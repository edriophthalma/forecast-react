import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {


    const [ready, setReady] = useState(false);
    const [data, setData] = useState({});
function handleResponse(response){

setData({
    city: response.data.name,
    date: new Date(response.data.dt *1000),
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    windspeed: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    temperature: response.data.main.temp});
setReady(true);
}
if (ready) {return (
     <div className="weather-app">
            <div className="row"> 
            <div className="col-3">
                <h1>Gibellina</h1>
            </div>
            <div className="col-9">
            <form> 
                <input type="search" placeholder="Enter a location"/>
                <input type="submit" value="Search" />
                </form>
            </div>
            </div>
 <div className="row">
     <div className="col-3">
     <ul>
    
    <li></li>
    <li>{data.icon}</li>
    <li className="text-capitalize">{data.description}</li>
</ul></div>    
     <div className="col-9">
    <ul>
     <li>Temperature: {Math.round(data.temperature)}ºC | ºF</li>
    <li>Humidity: {data.humidity}%</li>
    <li>Windspeed: {data.windspeed} Kn</li>
    </ul></div> 

    </div>     

        </div>); }
        else 
{
    const apiKey = `2d50c0d7967e795bde908aa93c3e908d`;
    let city = "Gibellina";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
axios.get(apiUrl).then(handleResponse);
return "something";
}
}