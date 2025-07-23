class Weather {
  constructor(location, condition, temperature) {
    (this.location = location),
      (this.condition = condition),
      (this.temperature = temperature);
  }
}

async function getWeather(location) {
  const apiKey = "59MW3J2YZPNZMZWKMG5R4D4NM";
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  const locationData = data.currentConditions;

  const weather = new Weather(
    location,
    locationData.conditions,
    locationData.temp,
  );

  console.log(weather);
  return weather;
}

export { getWeather };
