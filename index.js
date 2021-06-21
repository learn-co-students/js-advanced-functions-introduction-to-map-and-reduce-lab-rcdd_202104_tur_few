function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(-1 * src[i])
    }
    return r
  }
  
  function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i])
    }
    return r
  }
  
  function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(2 * src[i])
    }
    return r
  }
  
  function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * src[i])
    }
    return r
  }
  
  function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }





// // Your code here
// /* ♬ I HATE ARROW FUNCTION ♬ */
// const numbers = [ -1, -2, -3, 9 ]


// function mapToNegativize (numbers){
//     return numbers.map(function (index){
//     //console.log("index: ",index,"index çarpım:",index*-1)
//     return index * -1})
// }
// console.log(mapToNegativize(numbers))


// function mapToNoChange (numbers){
//     return numbers.map(function (index){
//     return index})
// }
// console.log(mapToNoChange(numbers))


// function mapToDouble (numbers){
//     return numbers.map(function (index){
//     return index * 2})
// }
// console.log(mapToDouble(numbers))


// function mapToSquare (numbers){
//     return numbers.map(function (index){
//     return index * index})
// }
// console.log(mapToSquare(numbers))


// function reduceToTotal (numbers, starting = 0){
//     let sum = numbers.reduce(function (accumulator, currentValue) {
//         // console.log("Acc: ", accumulator, "Current: ", currentValue)
//         // console.log(accumulator + currentValue)
//         return accumulator + currentValue
//       }, starting)
//       return sum
// }
// console.log(reduceToTotal(numbers))



// const truthValues = [true, true, true]
// function reduceToAllTrue (){
//     let truths = truthValues.reduce(function (accumulator, currentValue) {
//         // console.log("Index: ",accumulator,"Current Value: ",currentValue)
//         if(currentValue === true) return true
//         else return false
//       })
//       return truths
// }
// console.log(reduceToAllTrue(truthValues))




// const anyTruthValues = [false, false, false]
// function reduceToAnyTrue (){
//     let truths = anyTruthValues.reduce(function (accumulator, currentValue) {
//         // console.log("Index: ",accumulator,"Current Value: ",currentValue)
//         if(currentValue === true) return true
//         else return false
//       })
//       return truths
// }
// console.log(reduceToAnyTrue(anyTruthValues))