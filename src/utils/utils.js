const API_KEY = "195464f1d38e5a863401fc4f0ed00086";

const getWeatherCity = async (city) => {
  /*   const {
    name,
    id,
    country,
    coord: { lon, lat },
  } = await getCity(city); */

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},RU&appid=${API_KEY}&lang=RU`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getWeatherCity;
