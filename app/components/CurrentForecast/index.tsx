import { CurrentForecastByLocation } from "@/app/types";

function getIcon(weatherStatusId: number) {
  if (weatherStatusId >= 200 && weatherStatusId < 300) {
    return "⛈️";
  }
  if (weatherStatusId >= 300 && weatherStatusId < 400) {
    return "🌧️";
  }
  if (weatherStatusId >= 500 && weatherStatusId < 600) {
    return "🌦️";
  }
  if (weatherStatusId >= 600 && weatherStatusId < 700) {
    return "❄️";
  }
  if (weatherStatusId >= 700 && weatherStatusId < 800) {
    return "🌫️";
  }
  if (weatherStatusId === 800) {
    return "☀️";
  }
  return "☁️";
}

function CurrentForecastCard({
  temp,
  location,
  windSpeed,
  minTemp,
  maxTemp,
  weatherStatusDescription,
  weatherStatusId,
  feelLikeTemp,
}: CurrentForecastByLocation) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md w-96 mx-auto">
      <div>
        <span>{getIcon(weatherStatusId)}</span>
        <h2>{location}</h2>
        <p>{temp}°C</p>
        <p>Feels like {feelLikeTemp}°C</p>
        <p>{weatherStatusDescription}</p>
        <p>Min: {minTemp}°C</p>
        <p>Max: {maxTemp}°C</p>
        <p>Wind: {windSpeed} m/s</p>
      </div>
    </div>
  );
}

export default CurrentForecastCard;
