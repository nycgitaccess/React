import React from 'react';


class Weather extends React.Component{

  render(){
    return(
      <div>
        { this.props.city && this.props.temperatur &&<div>
        <p>Location: {this.props.city}</p>
        <p>Temperatur: {this.props.temperatur}</p>
        <p>Humidity: {this.props.humidity}</p>
        <p>Description: {this.props.description}</p>
        </div>
        }
    </div>
    );
  }
}

export default Weather;
