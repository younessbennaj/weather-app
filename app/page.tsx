import { getForecastByLocation } from "./api";
import CurrentForecastCard from "./components/CurrentForecast";
import React from "react";

function useForecast(location: { lat: number; lon: number }) {
  const currentForecast = getForecastByLocation(location);
  return { currentForecast };
}

export default function Home() {
  const location = { lat: 60.1695, lon: 24.9354 };
  const { currentForecast } = useForecast(location);

  return (
    <main>
      <h1>Weather App</h1>
      <CurrentForecastCard {...currentForecast} />
    </main>
  );
}
