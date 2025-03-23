const convertToCelsius = function(tempInF) {
  let ans = (tempInF - 32)* (5/9)
  return parseFloat(ans.toFixed(1))
};

const convertToFahrenheit = function(tempInC) {
  let ans = (tempInC * 9/5) + 32;
  return parseFloat(ans.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
