const currentforecastMockData = {
  temp: -1,
  location: "Helsinki",
  windSpeed: 5.14,
  minTemp: -1,
  maxTemp: 3,
  weatherStatusDescription: "snow",
  weatherStatusId: 600,
  feelLikeTemp: -4,
};

export function getForecastByLocation(location: { lat: number; lon: number }) {
  return currentforecastMockData;
}
