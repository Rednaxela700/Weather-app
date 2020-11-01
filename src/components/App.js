import React, { Component } from 'react';
import Form from './Form';
import Result from './Result'
import './App.css';
const APIkey = '30e14a2d16b4ef2e118490a52d02c246';
class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    temp: '',
    description: '',
    wind: '',
    pressure: '',
    sunset: '',
    sunrise: '',
    error: false,
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  handleCitySubmit = (e) => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Something's wrong")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        this.setState(state => ({
          error: false,
          date: time,
          city: state.value,
          temp: data.main.temp,
          description: data.weather[0].description,
          wind: data.wind.speed,
          pressure: data.main.pressure,
          sunset: data.sys.sunset,
          sunrise: data.sys.sunrise,
        }))

      }).catch(err => {
        this.setState(prevState => ({
          error: true,
          city: prevState.value,
        }))
      })
  }
  render() {
    return (
      <div className='app'>
        <h1>WEATHER APP</h1>
        <Form change={this.handleInputChange} value={this.state.value} submit={this.handleCitySubmit} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;