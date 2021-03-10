import getAirPollutionApi from "../../../utils/getAirPollutionApi";
import getImgWeather from "../../../utils/getImgWeather";
import { root, weather } from "../../../utils/root";

const WidgetWeather = () => {
  let html = "";
  navigator.geolocation.getCurrentPosition(getGeoData);

  async function getGeoData(pos) {
    const { latitude, longitude } = pos.coords;
    const {
      name,
      weather: { [0]: desc },
      main: { temp },
    } = await getAirPollutionApi(longitude, latitude, weather);
    const description = desc.description;
    console.log(name, temp, description);
    html = `
      <div class="widget_current-city">
        <div class="widget_current-city_title">
          ${name}
        </div>
        <div class="widget_current-city_wrapper">
          <img class="widget_current-city_icon" src="${getImgWeather(
            description,
            true
          )}">

          <div class="widget_current-city_temp">
            ${Math.round(temp - 273.15)}°C
          </div>
        </div>
      </div>
    `;
    root.insertAdjacentHTML("afterend", html);
  }
};

export default WidgetWeather;
