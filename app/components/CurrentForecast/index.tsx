import { CurrentForecastByLocation } from "@/app/types";

function getIcon(weatherStatusId: number) {
  switch (weatherStatusId) {
    case 0:
      return "☀️";
    case 1:
    case 2:
    case 3:
      return "🌤️";
    case 45:
    case 48:
      return "🌫️";
    case 51:
    case 53:
    case 55:
      return "🌧️";
    case 56:
    case 57:
      return "🌨️";
    case 61:
    case 63:
    case 65:
      return "🌧️";
    case 66:
    case 67:
      return "🌨️";
    case 71:
    case 73:
    case 75:
      return "🌨️";
    case 77:
      return "🌨️";
    case 80:
    case 81:
    case 82:
      return "🌧️";
    case 85:
    case 86:
      return "🌨️";
    case 95:
      return "⛈️";
    case 96:
    case 99:
      return "⛈️";
    default:
      return "🌤️";
  }
}

function getWeatherStatusDescription(weatherStatusId: number) {
  switch (weatherStatusId) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Drizzle: Light intensity";
    case 53:
      return "Drizzle: Moderate intensity";
    case 55:
      return "Drizzle: Dense intensity";
    case 56:
      return "Freezing Drizzle: Light intensity";
    case 57:
      return "Freezing Drizzle: Dense intensity";
    case 61:
      return "Rain: Slight intensity";
    case 63:
      return "Rain: Moderate intensity";
    case 65:
      return "Rain: Heavy intensity";
    case 66:
      return "Freezing Rain: Light intensity";
    case 67:
      return "Freezing Rain: Dense intensity";
    case 71:
      return "Snow fall: Slight intensity";
    case 73:
      return "Snow fall: Moderate intensity";
    case 75:
      return "Snow fall: Heavy intensity";
    case 77:
      return "Snow grains";
    case 80:
      return "Rain showers: Slight intensity";
    case 81:
      return "Rain showers: Moderate intensity";
    case 82:
      return "Rain showers: Violent intensity";
    case 85:
      return "Snow showers slight";
    case 86:
      return "Snow showers heavy";
    case 95:
      return "Thunderstorm: Slight or moderate";
    case 96:
      return "Thunderstorm with slight hail";
    case 99:
      return "Thunderstorm with slight and heavy hail";
    default:
      return "Mainly clear, partly cloudy, and overcast";
  }
}

function CurrentForecastCard({
  temp,
  location,
  windSpeed,
  minTemp,
  maxTemp,
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
        <p>{getWeatherStatusDescription(weatherStatusId)}</p>
        <p>Min: {minTemp}°C</p>
        <p>Max: {maxTemp}°C</p>
        <p>Wind: {windSpeed} m/s</p>
      </div>
    </div>
  );
}

export default CurrentForecastCard;
