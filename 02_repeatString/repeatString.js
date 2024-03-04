const repeatString = function ( word, times ) {
  if (times < 0) return "ERROR";  //use a loop
  let string = "";  //variable to hold string that will be returned
  for (let i = 0; i < times; i++) { //create a loop that repeats a given number of times
    string += word; //add given string to the result on each loop
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
