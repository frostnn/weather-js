import { API_KEY } from "./root";

API_KEY;

const getAirPollutionApi = async (lon, lat) => {
  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=RU`;
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

export default getAirPollutionApi;
