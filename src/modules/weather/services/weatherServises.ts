import axios from "axios";

export async function getWeatherServices(location: string) {
  const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
    params: {
      key: "88a9fc86342d4d63a98185704230712",
      q: location,
    },
  });
  return response.data;
}
