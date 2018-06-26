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

  getWeatherFrom_Api =(e)=>{

    const WeatherApi = '5308ac176eceea519b8c00d76a48438f';
    const WeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${WeatherApi}`;
     fetch(WeatherUrl)
    .then((response)=>{
      console.log(response);
      return response.json();
    })
    .then((data)=>{
      console.log(data);
    });

  }

  render() {
    return (
      <div className="App">
        <Titles />
        <Form getweather={this.getWeatherFrom_Api} />
        <Weather />
      </div>
    );
  }
}

export default App;
