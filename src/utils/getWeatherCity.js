import { API_KEY } from "./root";

const getWeatherCity = async (city, urls) => {
  const url = `http://api.openweathermap.org/data/2.5${urls}?q=${city},RU&appid=${API_KEY}&lang=RU`;
  /*   const {
    name,
    id,
    country,
    coord: { lon, lat },
  } = await getCity(city); */
  try {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  } catch (error) {
    console.log("eroro", error);
  }
};

export default getWeatherCity;
