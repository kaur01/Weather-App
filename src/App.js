import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "739b27f5b0419c6fe0ad1ff312772495";

class App extends React.Component{

state = {
  temperature: undefined,
  humidity: undefined,
  city: undefined,
  country: undefined,
  description: undefined

};

onSubmit = async (e) => {
e.preventDefault();
const City = e.target.City.value;
const Country = e.target.Country.value;
if (City && Country){
const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}&units=metric`);
const data = await api_call.json();
console.log(data);
this.setState({
  temperature: data.main.temp,
  humidity: data.main.humidity,
  city: data.name,
  country: data.sys.country,
  description: data.weather[0].description,
});
}
}

  render(){
    return(
      <div>
        <div className="wrapper">
        <div className="col-xs-5 title-container">
            <Title/>
        </div>
        <div className="col-xs-7 form-container">
          <Form onSubmit= {this.onSubmit} />
          <Weather
          temp = {this.state.temperature}
          humidity = {this.state.humidity}
          city = {this.state.city}
          country = {this.state.country}
          description = {this.state.description}
           />
        </div>
        </div>
      </div>
    );

  }

};





export default App;
