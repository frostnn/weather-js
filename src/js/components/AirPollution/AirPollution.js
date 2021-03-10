import getAirPollutionApi from "../../../utils/getAirPollutionApi";
import { pollution } from "../../../utils/root";

const AirPollution = async (lon, lat, city) => {
  const data = await getAirPollutionApi(lon, lat, pollution);

  const {
    list: { [0]: compon },
  } = data;
  const { aqi } = compon.main;

  const { co, nh3, no, no2, o3, pm2_5, pm10, so2 } = compon.components;
  const getProgressLine = (numb) => {
    if (numb == 1) {
      return "normal";
    } else if (numb == 2) {
      return "mid";
    } else if (numb == 3) {
      return "high";
    } else if (numb >= 4) {
      return "very_high";
    }
  };

  const html = `
    <div class="progress_wrapper">
      <div class="progress_text">Индекс качества воздуха: <span>${aqi}</span> </div>
        <div class="progress_bar"><div class="progress_bar-line ${getProgressLine(
          aqi
        )}">
        </div>
      </div>
    </div>
  `;

  return html;
};

export default AirPollution;

//fn CO mg/m3 = 302 × 24,05526 / 28,01 ppm
