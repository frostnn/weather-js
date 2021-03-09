import cloud from "../img/cloud.png";
import rain from "../img/rain.png";
import snow from "../img/snow.png";
import sun from "../img/sun.png";
import thunderstorm from "../img/thunderstorm.png";
import cloudy_min from "../img/cloudy_min.png";
import rain_min from "../img/rain_min.png";
import snow_min from "../img/snow_min.png";
import sun_min from "../img/sun_min.png";
import weather_min from "../img/weather_min.png";

const getImgWeather = (desc, min_img) => {
  if (desc == "ясно" || desc == "небольшая облачность") {
    return min_img ? sun_min : sun;
  } else if (
    desc == "снег" ||
    desc == "сильный снег" ||
    desc == "небольшой снег"
  ) {
    return min_img ? snow_min : snow;
  } else if (
    desc == "пасмурно" ||
    desc == "переменная облачность" ||
    desc == "облачно с прояснениями"
  ) {
    return min_img ? cloudy_min : cloud;
  } else if (desc == "дождь") {
    return min_img ? weather_min : rain;
  } else if (desc == "гроза") {
    return min_img ? rain_min : thunderstorm;
  } else {
    return min_img ? cloudy_min : cloud;
  }
};

export default getImgWeather;
