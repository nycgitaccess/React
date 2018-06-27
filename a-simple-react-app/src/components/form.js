import React from 'react';


class Form extends React.Component{

  render(){
    return(

      // <form onSubmit={this.props.getWeather}>
      // <input type="text" name="city" placeholder="City ..." />
      // <input type="text" name="country" placeholder="Country ..."/>
      // <input type="submit" value="Get Weather"/>
      // </form>
        <form onSubmit={this.props.weather}>
          <input type="text" name="city" placeholder="City.."/>
          <input type="text" name="country" placeholder="Country.."/>
          <button>Get Weather</button>
        </form>
    );
  }

}

export default Form;
