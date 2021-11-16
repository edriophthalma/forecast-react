import React from "react";
import axios from "axios";

export default function TableForecast(props) {
 function DailyForecast(response){
 console.log(response.data);
}
    let apiKey = "2d50c0d7967e795bde908aa93c3e908d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DailyForecast);

    return (<div>Ciao</div>);
}