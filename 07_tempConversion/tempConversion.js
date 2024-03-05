const convertToCelsius = function(fahrenheit) {
  //fahrenheit to celsius, return 0
  return Math.round ((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  //celsius to fahrenheit, return 32
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
