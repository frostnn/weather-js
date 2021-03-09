import humidity_img from "../../../img/humidity.png";
import thermometer_img from "../../../img/thermometer.png";
import wind_img from "../../../img/wind.png";
import visibility_img from "../../../img/visibility.png";
import getImgWeather from "../../../utils/getImgWeather";
import getWeatherCityApi from "../../../utils/getWeatherCityApi";
import errorMessage from "../Error/errorMessage";
import { modal, weather } from "../../../utils/root";
import WeeklyWeather from "../WeeklyWeather/WeeklyWeather";
import AirPollution from "../AirPollution/AirPollution";

const CardWeather = async (city = "Ufa") => {
  let data = await getWeatherCityApi(city, weather);
  console.log(data);
  if (data.cod == 404) {
    errorMessage(data.message);
    return false;
  }
  const {
    name,
    visibility,
    id,
    wind: { speed },
    weather: { [0]: desc },
    main: { feels_like, humidity, temp, temp_max, temp_min },
    sys: { sunrise, sunset },
    coord: { lon, lat },
  } = data;
  const description = desc.description;
  let html = `
  <div class='weather_card' data-name=${name}>
    <div class="weather_card-header">
      <div class="weather_card-close" data-id=${id}>&#10006</div>
      <div class='weather_card-header_img'>
        <img src="${getImgWeather(description, false)}" alt="">
      </div>
      <div class='weather_card-header_city'>${name}</div>
      <div class='weather_card-header_desc'>${description}</div>
      <div class='weather_card-temperature'>${Math.round(temp - 273.15)}°C</div>
    </div>
    <div class="weather_card-footer">

      <div class='weather_card-footer_parametr'>
        <div class='weather_card-footer_parametr-icon'>
          <img src="${humidity_img}" alt="">
        </div>
        <div class='weather_card-footer_parametr-title'>
          <span>Влажность:</span>
          <span>${humidity}</span>
        </div>
      </div>

      <div class='weather_card-footer_parametr'>
        <div class='weather_card-footer_parametr-icon'>
          <img src="${thermometer_img}" alt="">
        </div>
        <div class='weather_card-footer_parametr-title'>
          <span>Ощущается:</span>
          <span>${Math.round(feels_like - 273.15)}°C</span>
        </div>
      </div>

      <div class='weather_card-footer_parametr'>
        <div class='weather_card-footer_parametr-icon'>
          <img src="${wind_img}" alt="">
        </div>
        <div class='weather_card-footer_parametr-title'>
          <span>Ветер:</span>
          <span>${speed} м/с</span>
        </div>
      </div>

      <div class='weather_card-footer_parametr'>
        <div class='weather_card-footer_parametr-icon'>
          <img src="${visibility_img}" alt="">
        </div>
        <div class='weather_card-footer_parametr-title'>
          <span>Видимость:</span>
          <span>${(visibility * 0.001).toFixed(2)} км</span>
        </div>
      </div>
    </div>
  </div>
  `;

  root.insertAdjacentHTML("beforeend", html);

  (function () {
    const weather = document.querySelector(`[data-name=${name}]`);
    const city = weather.getAttribute("data-name");
    const closeBtn = document.querySelector(`[data-id="${id}"]`);
    weather.addEventListener("click", (e) => {
      if (e.target !== closeBtn) {
        WeeklyWeather(city);
        modal.classList.add("show");
      }
    });
  })();

  (function () {
    AirPollution(lon, lat, name);
  })();
};

export default CardWeather;
