// Your code here

// map functions
const mapToNegativize = (arr) => {
  return arr.map(item => item * -1)
}
console.log(mapToNegativize([1,2,3]))

const mapToNoChange = (arr) => {
  return arr.map(item => item)
}
console.log(mapToNoChange([1,2,3]))

const mapToDouble = (arr) => {
  return arr.map(item => item * 2)
}
console.log(mapToDouble([1,2,3]))

const mapToSquare = (arr) => {
  return arr.map(item => item * item)
}
console.log(mapToSquare([1,2,3]))



// reduce functions
const reduceToTotal = (arr, startingPoint = 0) => {
  const reduceTotal = function (num1, num2) {
    return num1 + num2;
  };

  return arr.reduce(reduceTotal, startingPoint);
}

const value = [true, true, true]
const reduceToAllTrue = (arr) => {
  return arr.reduce(function(accumulator, currentValue) {
   if(currentValue){
     return true
   } else {
     return false
   }
})
}
console.log(reduceToAllTrue(value))


const result = [true, false, false]
const reduceToAnyTrue = (arr) => {
  return arr.reduce(function(accumulator, currentValue) {
   if(currentValue){
     return true
   } else {
     return false
   }
})
}
console.log(reduceToAnyTrue(result))


