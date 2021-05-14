const sourceArray= [1, 2, 3, -9];
const array= [];

function mapToNegativize(array) {
    let result = array.map(function(number){
        return -number ;
})
    return result;
};

function mapToDouble(array) {
    let result = array.map(function(number){
        return number * 2 ;
})
    return result;
};

function mapToSquare(array) {
    let result = array.map(function(number){
        return number * number;
})
    return result;
};

function mapToNoChange(array) {
    let result = array.map(function(number){
        return number;
})
    return result;
};

mapToNegativize(sourceArray);
mapToDouble(sourceArray);
mapToSquare(sourceArray);
mapToNoChange(sourceArray);


function reduceToTotal(array, startingPoint = 0){
    let result = array.reduce(function(accumulator, number) {
        return accumulator + number;
      },startingPoint)
      return result;
}

const reduceToAllTrue = (arr) => {
    return arr.reduce(function(accumulator, currentValue) {
     if(currentValue){
       return true;
     } else {
       return false;
     }
  })
  }

  function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (array[i]){
        return true;
      }}
    return false;
};



reduceToTotal(sourceArray);
reduceToTotal(sourceArray, 10);
reduceToAllTrue(sourceArray);
reduceToAnyTrue(sourceArray);
