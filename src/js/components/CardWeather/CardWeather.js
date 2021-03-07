import humidity_img from "../../../img/humidity.png";
import thermometer_img from "../../../img/thermometer.png";
import wind_img from "../../../img/wind.png";
import visibility_img from "../../../img/visibility.png";
import getImgWeather from "../../../utils/getImgWeather";
import getWeatherCity from "../../../utils/getWeatherCity";
import errorMessage from "../../../utils/errorMessage";

const CardWeather = async (city = "Ufa") => {
  let data = await getWeatherCity(city);
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
  } = data;
  const description = desc.description;
  let html = `
  <div class='water_card'>
    <div class="water_card-header">
      <div class="water_card-close" data-id=${id}>&#10006</div>
      <div class='water_card-header_img'>
        <img src="${getImgWeather(description)}" alt="">
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
          <img src="${visibility_img}" alt="">
        </div>
        <div class='water_card-footer_parametr-title'>
          <span>Видимость:</span>
          <span>${(visibility * 0.001).toFixed(2)} км</span>
        </div>
      </div>
    </div>
  </div>
  `;

  root.insertAdjacentHTML("beforeend", html);
};

export default CardWeather;
