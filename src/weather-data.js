class Weather {
  constructor(location, condition, temperature) {
    this.location = location[0].toUpperCase() + location.slice(1).toLowerCase(), // First character uppercase, rest lowercase
    this.condition = condition,
    this.fahrenheit = Math.round(temperature)
    this.celsius = Math.round((temperature - 32) * 5 / 9); // Convert to celsius
    this.days = [];
  }

  addWeeklyWeatherForecast(dayObj) {
    for (let i = 0; i < 7; i++) {
      let dayData = dayObj[i];
      let day = new Day(dayData.datetime, dayData.icon, dayData.tempmin, dayData.tempmax);
      this.days.push(day);
    }
  }
}

class Day {
  constructor(date, icon, minTemp, maxTemp) {
    this.date = date;
    this.icon = icon;
    this.minFahrenheit = Math.round(minTemp);
    this.minCelsius = Math.round((minTemp - 32) * 5 / 9);
    this.maxFahrenheit = Math.round(maxTemp);
    this.maxCelsius = Math.round((maxTemp - 32) * 5 / 9);
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
    const daysData = data.days;

    console.log(daysData);
    console.log(locationData);

    const weather = new Weather(
      location,
      locationData.icon,
      locationData.temp,
    );

    weather.addWeeklyWeatherForecast(daysData);

    console.log(weather.days[0]);
    return weather;

  } catch (err) {
    console.error("Error fetching weather:", err.message);
    return null;
  }
}

export { getWeather };
