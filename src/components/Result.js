import React from 'react';

const Result = props => {
  const { date, city, sunrise, description, sunset, temp, pressure, wind, error } = props.weather
  let content = null

  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    function weatherImage() {
      if (description) {
        const weatherDescription = description.split(' ');
        const cloudWords = ['cloudy', 'clouds', 'overcast', 'cloud'];
        const sunWords = ['sun', 'sunny', 'clear', 'clearly'];
        const rainWords = ['rain', 'rainy'];
        const snowWords = ['snow', 'snowy'];
        const stormWords = ['storm', 'stormy'];
        const mistWords = ['mist'];
        for (let i = 0; i < weatherDescription.length; i++) {
          if (cloudWords.includes(weatherDescription[i])) {
            return <img src='https://cdn.pixabay.com/photo/2012/04/18/13/22/cloud-37010_960_720.png' />
          } else if (sunWords.includes(weatherDescription[i])) {
            return <img src='https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392_960_720.png' />
          } else if (rainWords.includes(weatherDescription[i])) {
            return <img src='https://cdn.pixabay.com/photo/2012/04/18/13/22/cloud-37011_960_720.png' />
          } else if (snowWords.includes(weatherDescription[i])) {
            return <img src='https://cdn.pixabay.com/photo/2012/04/18/13/23/cloudy-37012_960_720.png' />
          } else if (stormWords.includes(weatherDescription[i])) {
            return <img src='https://cdn.pixabay.com/photo/2013/04/01/09/22/thunderstorm-98541_960_720.png' />
          }
          else if (mistWords.includes(weatherDescription[i])) {
            return <img src='https://cdn.pixabay.com/photo/2013/04/01/09/21/fog-98505_960_720.png' />
          }
        }
      }
    }
    content = (
      <>
        <h2>Results for: <em>{city}</em> </h2>

        <p>Conditions:{description}</p>
        <p>Data for day and time: {date}</p>
        <p>Actually temperature: {Math.round(temp)} &#176;C</p>
        <p>Sunrise time: {sunriseTime}</p>
        <p>Sunset time: {sunsetTime}</p>
        <p>Wind speed: {wind} m/s</p>
        <p>Pressure: {pressure} hPa</p>
        {weatherImage()}
      </>
    )
  }
  return (
    <div>
      {error ? `We don't have ${city} at database` : content}
    </div>
  );
}

export default Result;