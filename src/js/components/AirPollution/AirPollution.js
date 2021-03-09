import getAirPollutionApi from "../../../utils/getAirPollutionApi";
import { pollutionMap } from "../../../utils/root";

const AirPollution = async (lon, lat, city) => {
  const data = await getAirPollutionApi(lon, lat);
  console.log(data);
  const {
    list: { [0]: compon },
  } = data;
  const { aqi } = compon.main;
  console.log(aqi);
  const { co, nh3, no, no2, o3, pm2_5, pm10, so2 } = compon.components;
  const html = `
  <div>
    <div>${city} - индекс качества воздуха ${aqi} </div>
    <div>${co}</div>
    <div>${nh3}</div>
    <div>${no}</div>
    <div>${no2}</div>
    <div>${o3}</div>
    <div>${pm2_5}</div>
    <div>${pm10}</div>
    <div>${so2}</div>
  </div>
  `;
  pollutionMap.insertAdjacentHTML("beforeend", html);
};

export default AirPollution;

//fn CO mg/m3 = 302 × 24,05526 / 28,01 ppm
