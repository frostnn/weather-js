import cloud from "../img/cloud.png";
import rain from "../img/rain.png";
import show from "../img/show.png";
import sun from "../img/sun.png";
import thunderstorm from "../img/thunderstorm.png";

const getImgWeather = (desc) => {
  if (desc == "ясно" || desc == "небольшая облачность") {
    return sun;
  } else if (
    desc == "снег" ||
    desc == "сильный снег" ||
    desc == "небольшой снег"
  ) {
    return show;
  } else if (
    desc == "пасмурно" ||
    desc == "переменная облачность" ||
    desc == "облачно с прояснениями"
  ) {
    return cloud;
  } else if (desc == "дождь") {
    return rain;
  } else if (desc == "гроза") {
    return thunderstorm;
  } else {
    return cloud;
  }
};

export default getImgWeather;
