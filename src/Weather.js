import React from "react";
import "./Weather.css";
export default function Weather() {
    return (
        
        <div className="weather-app">
            <div className="row"> 
            <div className="col-3">
                <h1>Gibellina</h1>
            </div>
            <div className="col-9">
            <form> 
                <input type="search" placeholder="Enter a location" />
                <input type="submit" value="Search" className="btn btn-primary" />
                </form>
            </div>
            </div>
 <div className="row">
     <div className="col-3">
     <ul>
    
    <li>Thursday 13:50</li>
    <li>Image</li>
    <li>Scattered clouds</li>
</ul></div>    
     <div className="col-9">
    <ul>
     <li>Temperature</li>
    <li>Humidity</li>
    <li>Windspeed</li>
    </ul></div> 

    </div>     

        </div>);
}