import "../scss/main.scss";
import "../index.html";
import "regenerator-runtime/runtime";
import CardWeather from "./components/CardWeather/CardWeather";
import { removeHeadler } from "../utils/removeHandler";
import removeHandlerModal from "../utils/removeHandlerModal";
/* import { addHeadlerModal } from "../utils/addHandlerModal"; */
import { root, searchBtn, searchCity } from "../utils/root";

CardWeather("Moscow");
CardWeather("Sankt peterburg");
CardWeather("Novosibirsk");
CardWeather("Ekaterinburg");

searchBtn.addEventListener("click", () => {
  if (searchCity.value) {
    CardWeather(searchCity.value);
  } else {
    console.log("Please fill in the field");
  }
});

root.addEventListener("click", removeHeadler);

removeHandlerModal();
