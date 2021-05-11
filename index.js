// Your code here


function mapToNegativize(numbers) {
  let negs = []
  for (let i = 0; i < numbers.length; i++ ) {
    negs.push(-1 * numbers[i])
  }
  return negs
};
function mapToNoChange(numbers) {
  let numbsReal = []
  for (let i =0; i<numbers.length; i++) {
    numbsReal.push(numbers[i])
  }
  return numbsReal;
};
function mapToDouble(numbers) {
  let double = []
  for (let i = 0; i < numbers.length; i++ ) {
    double.push(numbers[i] * 2 )
  }
  return double
};

function mapToSquare(numbers) {
  let sq = []
  for (let i = 0; i < numbers.length; i++ ) {
    sq.push(numbers[i] * numbers[i] )
  }
  return sq
};

function reduceToTotal(numb, startingPoint=0) {
  let totalNumb = startingPoint
  for (let i=0; i<numb.length; i++) {
    totalNumb = totalNumb + numb[i]
  }
  return totalNumb;
};

function reduceToAllTrue(sourceArray) {
  for (let i=0; i<sourceArray.length; i++) {
    if (!sourceArray[i])
     return false;
  }
  return true;
};


function reduceToAnyTrue(sourceArray) {
  for (let i=0; i<sourceArray.length; i++) {
    if (sourceArray[i])
     return true;
  }
  return false;
}
