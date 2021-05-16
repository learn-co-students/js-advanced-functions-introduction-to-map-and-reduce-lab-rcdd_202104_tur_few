// Your code here
function mapToNegativize(sourceArray) {
  let negativeArr = sourceArray.map(x => x * -1);
  return negativeArr;
}

function mapToNoChange(sourceArray) {
  let sameArr = sourceArray.map(x => x);
  return sameArr;
}

function mapToDouble(sourceArray) {
  let doubledNum = sourceArray.map(x => x * 2);
  return doubledNum;
}

function mapToSquare(sourceArray) {
  let squaredNum = sourceArray.map(x => x * x);
  return squaredNum;  
}
//--------------

function reduceToTotal(sourceArray, startingPoint=0) {
  let totalNum = sourceArray.reduce((acc, curr) => acc + curr,
  startingPoint)
    return totalNum;
}

function reduceToAllTrue(sourceArray) {
  let allTrue = function(acc, curr){  
        if(!!acc === true && !!curr=== true){
            return true;
        } else {
            return false;
        }
    }
  return sourceArray.reduce(allTrue, true)
}


function reduceToAnyTrue(sourceArray) {
  let anyTrue = function(acc, curr){  
        if(acc === true){
            return true;
        } else {
            return !!curr;
        }
    }
  return sourceArray.reduce(anyTrue, false)
}