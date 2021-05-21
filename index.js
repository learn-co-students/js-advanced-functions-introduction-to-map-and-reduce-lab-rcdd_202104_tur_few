// Your code here
////my own map-like methods/////
let sourceArray = [1, 2, 3, -9]

function mapToNegativize(sourceArray){

    const mapToNegativize = sourceArray.map(element => element * -1)

    return mapToNegativize;
}

console.log(mapToNegativize(sourceArray))


let dune = ["paul", "gurney", "vladimir", "jessica", "chani"];

function mapToNoChange(sourceArray){
    const mapToNoChange = sourceArray.map(element => element)

    return mapToNoChange;
}
console.log(mapToNoChange(dune))


function mapToDouble(sourceArray){

    const mapToDouble = sourceArray.map(element => element * 2)

    return mapToDouble;
}

console.log(mapToDouble(sourceArray))




function mapToSquare(sourceArray){

    const mapToSquare = sourceArray.map(element => element ** 2)

    return mapToSquare;
}

console.log(mapToSquare(sourceArray))

//////////////////////

////my own reduce-like methods////


//////////// 1

sourceArray = [1,2,3];

function reduceToTotal(sourceArray, startingPoint = 0){

    const example = sourceArray.reduce((acc, curr)=>{return acc + curr},startingPoint)

 return example 

}
console.log(reduceToTotal(sourceArray))

///////////////////// 2

// function reduceToTotal(sourceArray){

    
//     const example = sourceArray.reduce((sourceArray, startingPoint)=>{return sourceArray + startingPoint},100)

//  return example 


// }console.log(reduceToTotal(sourceArray))

/////////////////////////////////////////////////////////////////


////////////////////////////////////////Done


 function reduceToAllTrue(sourceArray) {

    //  const muFunction = sourceArray.reduce((acc,item) => {
    //      console.log(acc);
    //       console.log(item);
  
        
    //      if(item === false){
    //         acc = true
    //       }
       
    //       return acc
    //     },
      
    //   )
    //   return muFunction
   
    for (let i=0; i<sourceArray.length; i++ ){
      if(sourceArray[i] === false){
        return  false
      }
    }
    return true
      }

  console.log(reduceToAllTrue([1,2, true, "razmatazz"]))

////////////////////////////////////////////




///////////////////Done

//   function reduceToAllTrue(sourceArray) {

//     const muFunction = sourceArray.reduce((acc,item) => {
//         console.log(acc);
//         console.log(item);
 
//      if(item === true){
//        acc = true
//      }
//      else if(item !== true){
//        acc = false
//         }
//      return acc
//    },
//  {}
//  )
//  return muFunction
//  }
//  console.log(reduceToAllTrue( [1, 2, true, "razmatazz", false]))

//////////////////////////////

///////////////////////// done

 function reduceToAnyTrue(sourceArray) {
    
     const muFunction = sourceArray.reduce((acc,item) => {
  
      if(item === true){
        acc = true
      }
      else{
        acc = false
         }
      return acc
    },
  {}
  )
  return muFunction
  }
  console.log(reduceToAnyTrue([ false, null, null, null, true]))


  ////////////////////////