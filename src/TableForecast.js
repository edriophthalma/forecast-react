import React, { useState } from "react";
import axios from "axios";



export default function TableForecast(props) {
    const [loaded, goLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
 function DailyForecast(response){
 setForecast(response.data.daily); 
 goLoaded(true);
}

    if(loaded) {
       
       
        return (<div><table>
                 <tbody>
              <tr >
                <td><ul>
                    <li>{forecast[0].dt}</li>
                    <li>{forecast[0].temp.max}º</li>
                    <li>{forecast[0].temp.min}º</li>  
                   
                    
                    </ul>
                    </td>
                     <td> <ul>
                   <li>{forecast[1].temp.max}º</li>
                    <li>{forecast[1].temp.min}º</li>  
                    <li><img src={forecast[1].weather[0].icon} alt="icon" /></li>
                    </ul>
                    </td>
                <td> <ul>
                   <li>{forecast[0].temp.max}º</li>
                    <li>{forecast[0].temp.min}º</li>  
                    <li><img src={forecast.icon} alt="icon" /></li> 
                     </ul></td>
                 <td><ul>
                     <li>{forecast[0].temp.max}º</li>
                    <li>{forecast[0].temp.min}º</li>  
                    <li><img src={forecast.icon} alt="icon" /></li>  
                    </ul></td>
                 <td><ul>
                    <li>{forecast[0].temp.max}º</li>
                    <li>{forecast[0].temp.min}º</li>  
                    <li><img src={forecast.icon} alt="icon" /></li>  
                     </ul></td>
               
              </tr>
              </tbody>
          </table></div>); }
 else { 
    let apiKey = "2d50c0d7967e795bde908aa93c3e908d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DailyForecast);
    
    return null}
   
}