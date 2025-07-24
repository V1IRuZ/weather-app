class Weather {
  constructor(location, condition, temperature) {
    this.location = location,
    this.condition = condition,
    this.temperature = Math.round((temperature - 32) * 5 / 9); // Convert to celsius
  }
}

async function getWeather(location) {
  const apiKey = "59MW3J2YZPNZMZWKMG5R4D4NM";
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
  
  try {
    const response = await fetch(url, { mode: "cors" });

    if(!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const locationData = data.currentConditions;

    // console.log(data);

    const weather = new Weather(
      location,
      locationData.conditions,
      locationData.temp,
    );

    console.log(weather);
    return weather;

  } catch (err) {
    console.error("Error fetching weather:", err.message);
    return null;
  }
}

export { getWeather };
