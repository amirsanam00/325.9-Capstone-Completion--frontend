import React from 'react';

const WeatherWidget = ({ weather }) => {
  if (!weather || !weather.list || weather.list.length === 0) return null;

  const { main, weather: w } = weather.list[0];

  return (
    <div style={{ margin: '1rem 0' }}>
      <h3>Weather Forecast</h3>
      <p>{w[0].description} - {main.temp}°C</p>
    </div>
  );
};

export default WeatherWidget;
