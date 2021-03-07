import cloud_img from "../../../img/cloud.png";
import humidity_img from "../../../img/humidity.png";
import thermometer_img from "../../../img/thermometer.png";
import wind_img from "../../../img/wind.png";
import getWeatherCity from "../../../utils/utils";

const CardWeather = async (city = "Ufa") => {
  const root = document.querySelector("#root");
  const {
    name,
    visibility,
    wind: { speed },
    weather: { [0]: desc },
    main: { feels_like, humidity, temp, temp_max, temp_min },
    sys: { sunrise, sunset },
  } = await getWeatherCity(city);
  const description = desc.description;
  let html = `
  <div class='water_card'>
    <div class="water_card-header">
      <div class='water_card-header_img'>
        <img src="${cloud_img}" alt="">
      </div>
      <div class='water_card-header_city'>${name}</div>
      <div class='water_card-header_desc'>${description}</div>
      <div class='water_card-temperature'>${Math.round(temp - 273.15)}°C</div>
    </div>
    <div class="water_card-footer">

      <div class='water_card-footer_parametr'>
        <div class='water_card-footer_parametr-icon'>
          <img src="${humidity_img}" alt="">
        </div>
        <div class='water_card-footer_parametr-title'>
          <span>Влажность:</span>
          <span>${humidity}</span>
        </div>
      </div>

      <div class='water_card-footer_parametr'>
        <div class='water_card-footer_parametr-icon'>
          <img src="${thermometer_img}" alt="">
        </div>
        <div class='water_card-footer_parametr-title'>
          <span>Ощущается:</span>
          <span>${Math.round(feels_like - 273.15)}°C</span>
        </div>
      </div>

      <div class='water_card-footer_parametr'>
        <div class='water_card-footer_parametr-icon'>
          <img src="${wind_img}" alt="">
        </div>
        <div class='water_card-footer_parametr-title'>
          <span>Ветер:</span>
          <span>${speed} м/с</span>
        </div>
      </div>

      <div class='water_card-footer_parametr'>
        <div class='water_card-footer_parametr-icon'>
          <img src="${wind_img}" alt="">
        </div>
        <div class='water_card-footer_parametr-title'>
          <span>Видимость:</span>
          <span>${visibility * 0.001} км</span>
        </div>
      </div>
    </div>
  </div>
  `;
  root.insertAdjacentHTML("beforeend", html);
};

export default CardWeather;
