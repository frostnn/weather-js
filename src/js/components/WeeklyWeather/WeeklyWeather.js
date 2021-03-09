import getWeatherCityApi from "../../../utils/getWeatherCityApi";
import { forecast, modalContent } from "../../../utils/root";
import thermometer_img from "../../../img/thermometer.png";
import getImgWeather from "../../../utils/getImgWeather";
const WeeklyWeather = async (city) => {
  let data = await getWeatherCityApi(city, forecast);
  let html = "";
  console.log(data);
  console.log(data.list);
  data.list.forEach((item) => {
    const {
      dt_txt,
      visibility,
      weather: { [0]: desc },
      wind: { speed },
      main: { temp },
    } = item;
    const description = desc.description;
    html = `
      <div class="weekly_cards">
        <div class="weekly_cards-item title">${dt_txt.slice(0, 16)}</div>
        <div class="weekly_cards-item desc">
        <img class="weekly_cards-item_img" src="${getImgWeather(
          description,
          true
        )}">
        </div>
        <div class="weekly_cards-item_wrapper">
          <img class="weekly_cards-item_img" src="${thermometer_img}">
          <span class="weekly_cards-item temp">${Math.round(
            temp - 273.15
          )}°C</span>
        </div>
      </div>
    `;
    modalContent.insertAdjacentHTML("beforeend", html);
  });
};

export default WeeklyWeather;
