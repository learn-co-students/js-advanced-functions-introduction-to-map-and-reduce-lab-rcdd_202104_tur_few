function mapToNegativize(sourceArray) {
  return  sourceArray.map (x => x * -1);
}

function mapToNoChange(sourceArray) {
    return  sourceArray.map (x => x);
  }

function mapToDouble(sourceArray) {
    return  sourceArray.map (x => x * 2);
  }

function mapToSquare(sourceArray){
    return sourceArray.map(x => x * x);
}
  
function reduceToTotal(sourceArray){ 
    return  sourceArray.reduce((accumulator, current) => accumulator + current);
}

function reduceToTotal(sourceArray, startingPoint=0){ 
    return  sourceArray.reduce(((accumulator, current) => accumulator + current), startingPoint);
}

function reduceToAllTrue(sourceArray){ 
    return  sourceArray.reduce((accumulator, current) => {
        if (current) {
            return true
        } else {
            return false;
          }
    });
}

function reduceToAnyTrue(sourceArray){ 
    return  sourceArray.reduce((accumulator, current) => {
        if (current) {
            return true
        } else {
            return false;
          }
    });
}
