import CurrentForecastCard from "./components/CurrentForecast";
import React from "react";
import { CurrentForecastByLocation, ForecastData } from "./types";

function castCurrentForecast(data: ForecastData): CurrentForecastByLocation {
  return {
    temp: data.current.temperature_2m,
    location: "Paris",
    windSpeed: data.current.wind_speed_10m,
    minTemp: data.daily.temperature_2m_min[0],
    maxTemp: data.daily.temperature_2m_max[0],
    weatherStatusId: data.daily.weather_code[0],
    feelLikeTemp: data.current.apparent_temperature,
  };
}

// Default location is Paris
const defaultLocation = { lat: 48.8534, lon: 2.3488 };

export default async function Home() {
  const resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${defaultLocation.lat}&longitude=${defaultLocation.lon}&current=temperature_2m,apparent_temperature,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&wind_speed_unit=ms&timezone=Europe%2FLondon`
  );
  const forecast: ForecastData = await resp.json();

  const currentForecast: CurrentForecastByLocation =
    castCurrentForecast(forecast);

  return (
    <main>
      <h1>Weather App</h1>
      <CurrentForecastCard {...currentForecast} />
    </main>
  );
}
