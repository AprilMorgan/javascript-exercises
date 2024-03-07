const removeFromArray = function(array, ...args) {
  //take an array and an argument
  const newArray = [];
  //manipulate or create new array
  array.forEach((item) => {

    if (!args.includes(item)) {
      newArray.push(item);
    }
  }
  )
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
