const Axios = require('axios');

const weatherApiKey = 'd44d3b73ab153c53d14ebb98eaa7f4b1';
const weatherApiRoot = 'https://api.openweathermap.org/data/2.5';

// async function
async function getCurrentWeather(zip){
  const method ='/weather';
  const params =`?zip=${zip},us&units=imperial&appid=${weatherApiKey}`;

  const url = `${weatherApiRoot}${method}${params}`;

  let obj ={};
  try{
    const respones = await Axios.get(url);
    obj = respones.data;
  }catch(error){
    obj.error = error;
  }
  return obj;
}
module.exports = {
  getCurrent: getCurrentWeather
};
