
// Personal API Key for OpenWeatherMap API
const apiKey = "<2843b6bc90ac75d0d924cfde62b77679>&units=imperial";
let baseURL =
  "api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key};

/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
