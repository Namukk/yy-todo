const weather = document.querySelector(".weatherContainer");

const API_KEY = "4dbab2518d66804c19f6fa3b8b8e106e";
const COORDS = "coords";

const getWeather = async (lat, long) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
  )
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      weather.innerText = `${info.main.temp}℃ in ${info.name}`;
    });
};

const saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const geoHandleSuccess = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
};

const geoHandleError = () => {
  console.log("Cannot get geoInfo");
};

const getGeo = () => {
  navigator.geolocation.getCurrentPosition(geoHandleSuccess, geoHandleError);
};

const functionWeather = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    getGeo();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
};

function init() {
  functionWeather();
}

init();

// const COORDS = "coords";

// const handleSuccess = (position) => {
//   console.log(position);
// };

// const handleError = () => {
//   console.log("Cannot get geo");
// };

// const askForCoords = () => {
//   navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
// };

// function init() {
//   askForCoords();
// }

// init();
