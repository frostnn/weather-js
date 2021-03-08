import getWeatherCity from "../../../utils/getWeatherCity";
import { forecast, modalContent } from "../../../utils/root";

const WeeklyWeather = async (city) => {
  let data = await getWeatherCity(city, forecast);
  let html = "";
  console.log(data);
  console.log(data.list);
  data.list.forEach((item) => {
    const {
      dt_txt,
      visibility,
      weather: { [0]: description },
      wind: { speed },
      main: { temp },
    } = item;
    html = `
      <div class="weekly">
        <div>${dt_txt}</div>
        <div>${description}</div>
        <div>${speed}</div>
        <div>${Math.round(temp - 273.15)}°C</div>
      </div>
    `;
    modalContent.insertAdjacentHTML("beforeend", html);
  });
};

export default WeeklyWeather;
