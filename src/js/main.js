import "../scss/main.scss";
import "../index.html";
import "regenerator-runtime/runtime";
import CardWeather from "./components/CardWeather/CardWeather";
import { removeHeadler } from "../utils/removeHandler";

const root = document.querySelector("#root");
const searchCity = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");

/* function fns(e) {
  searchBtn.addEventListener("click", () => {
    return console.log(searchCity.value);
  });
}

const fn = () => {
  searchCity.addEventListener("input", () => searchCity.value);
}; */
/* const Wrapper = (content) => `<div class="wrapperss">${content}</div>`;

const getData = async () => {
  return await fetch("./json/city.list.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}; */
/*
const getCity = async (town) => {
  const cities = await getData();
  let city;
  cities.forEach((citys) => {
    if (citys.name == town) {
      city = citys;
    }
  });
  return city;

"Bortnitsy"
  const cityName = arr.name;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=RU`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { temp, humidity, feels_like } = data.main;
      console.log(data);
    });
};*/

CardWeather("Moscow");
CardWeather("Sankt peterburg");
CardWeather("Novosibirsk");
CardWeather("Ekaterinburg");
searchBtn.addEventListener("click", () => {
  CardWeather(searchCity.value);
});
root.addEventListener("click", removeHeadler);
