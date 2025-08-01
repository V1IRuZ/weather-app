export default async function getGiphyGif(weather) {
  const apiKey = "JsTvY8DZjCDCPimPNeQMhxRKuiSYw5x0";
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${weather}`;

  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  const source = data.data.images.original.url;
  return source;
}
