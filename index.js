// Your code here
  
function mapToNegativize(degisken) {
    let myArray = []
    for (let i = 0; i < degisken.length; i++ ) {
      myArray.push(-1 * degisken[i])
    }
    return myArray
  }
  
function mapToNoChange(degisken){
    let myArray=[];
    for (let i=0; i<degisken.length; i++){
        myArray.push(degisken[i])
    }
    return myArray;
}
function mapToDouble(degisken) {
    let myArray = []
    for (let i = 0; i < degisken.length; i++ ) {
      myArray.push(2 * degisken[i])
    }
    return myArray
  }
  
  function mapToSquare(degisken) {
    let myArray= []
    for (let i = 0; i < degisken.length; i++ ) {
      myArray.push(degisken[i] * degisken[i])
    }
    return myArray
  }
  
  function reduceToTotal(degisken, startingPoint=0) {
    let sum = startingPoint
    for (let i = 0; i < degisken.length; i++ ) {
      sum = sum + degisken[i]
    }
    return sum
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