async function getWeather() {
  const apiKey = "59MW3J2YZPNZMZWKMG5R4D4NM";
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/helsinki?key=${apiKey}`;

  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  const city = data.currentConditions.conditions;

  console.log(city);
};

export { getWeather }