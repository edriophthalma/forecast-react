import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import Weathersearch from "./Weathersearch";
import TableForecast from "./TableForecast";


export default function Weather(props) {


    const [city, setCity] = useState(props.defaultCity);
    const [wdata, setWData] = useState({ready: false});
function handleResponse(response){
    console.log(response.data);

setWData({
    ready: true,
    city: response.data.name,
    date: formatDate(response.data.timezone),
    description: response.data.weather[0].description,
    coordinates: response.data.coord,
    humidity: response.data.main.humidity,
    windspeed: response.data.wind.speed,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    temperature: response.data.main.temp,});

}
function formatDate(timezone) {
    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    return new Date(utc + 1000 * timezone);
  }

function searchResult() {

 const apiKey = `2d50c0d7967e795bde908aa93c3e908d`;
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
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

if (wdata.ready) {return (
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
                <Weathersearch data={wdata} />
              
            </div>
             <table>
                 <tbody>
              <tr >
                <td><ul>
                    <li>Fri</li>
                    <li><img src={wdata.icon} alt="icon" /></li>
                    <li>{wdata.description}</li>  
                    </ul>
                    </td>
                <td> <ul>
                    <li>Sat</li>
                    <li><img src={wdata.icon} alt="icon" /></li>
                    <li>{wdata.description}</li>  
                    </ul>
                    </td>
                <td> <ul>
                    <li>Sun</li>
                    <li><img src={wdata.icon} alt="icon" /></li>
                     <li>{wdata.description}</li>  
                     </ul></td>
                 <td><ul>
                     <li>Mon</li>
                    <li><img src={wdata.icon} alt="icon" /></li>
                     <li>{wdata.description}</li>  
                    </ul></td>
                 <td><ul>
                     <li>Tue</li>
                    <li><img src={wdata.icon} alt="icon" /></li>
                     <li>{wdata.description}</li>  
                     </ul></td>
              </tr>
              </tbody>
          </table>
            </div>
            <TableForecast coordinates={wdata.coordinates}/>
</div>); 
}
        else 
{
   
 searchResult();
 return <div>{city}</div>;
}
}
