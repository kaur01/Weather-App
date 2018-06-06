import React from "react";

const Weather = (props) => {
  return(
      <div className="weather__info">
       {
         props.city && props.country && <p className="weather__key">Temperature:
         <span> {props.temp} </span>
         </p>
       }
       {
         props.city && props.country  && <p className="weather__key">Humidity:
         <span> {props.humidity} </span>
         </p>
       }
       {
         props.city && props.country  &&<p className="weather__key">City:
         <span> {props.city} </span>
         </p>
       }
       {
         props.city && props.country  &&<p className="weather__key">Country:
         <span> {props.country} </span>
         </p>
       }
       {
         props.city && props.country  &&<p className="weather__key">Description:
        <span> {props.description} </span>
         </p>
       }
      </div>
    );
}

export default Weather;
