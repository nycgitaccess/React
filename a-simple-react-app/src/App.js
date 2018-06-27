import React, { Component } from 'react';
import './App.css';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';

// Main Container ... in the main component all the the sub component gonna
// puted be ..

// const WeatherApi = '5308ac176eceea519b8c00d76a48438f';
// const WeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111';
class App extends Component {
  state ={
    temperatur: undefined,
    city: undefined,
    humidity : undefined,
    error: undefined
  }


  getWeather = async (e)=>{
    e.preventDefault();
     const city = e.target.elements.city.value;
     const country = e.target.elements.country.vlaue;
     const WeatherApi = '5308ac176eceea519b8c00d76a48438f';
     const WeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${WeatherApi}`;

     fetch(WeatherUrl)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      this.setState({
        temperatur: data.main.temp,
        city: data.name,
        humidity : data.main.humidity,
        description: data.weather[0].description,
        error : ""
      });
    })
  }

  render() {
    return (
      <div className="App">
        <Titles />
        <Form weather={this.getWeather} />

        <Weather
          temperatur={this.state.temperatur}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
           />

      </div>
    );
  }
}

export default App;
