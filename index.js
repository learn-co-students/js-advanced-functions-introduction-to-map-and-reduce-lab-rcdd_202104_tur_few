// Your code here
function mapToNegativize(sourceArray) {

    let newArr = [];

    sourceArray.forEach(element => {
        newArr.push ( element * (-1));
    });

    return newArr;
}

function mapToNoChange(sourceArray){

    let newArr = [];

    sourceArray.forEach(element => {
        newArr.push (element);
    });

    return newArr;

}

function mapToDouble(sourceArray){

    let newArr = [];

    sourceArray.forEach(element => {
        newArr.push ( element * (2));
    });

    return newArr;

}

function mapToSquare(sourceArray) {

    let newArr = [];

    sourceArray.forEach(element => {
        newArr.push ( element ** (2));
    });

    return newArr;

}

function reduceToTotal(sourceArray, startingPoint){
    let total = 0;
    if(!arguments[1]) {
        sourceArray.forEach(item => {
            total += item;
        })
    }
    else {
        total += startingPoint;
        sourceArray.forEach(item => {
            total += item;
        })
    }
    return total;
}

function reduceToAllTrue(sourceArray){
    
    let value;
    // const falsies = [undefined, null, NaN, 0, "", false];
    // const checkIfFalsy = [undefined, null, NaN, 0, "", false].some(item => item.test);
    sourceArray.forEach(item => {
        if(item === undefined || item === null || item === NaN || item === 0 || item === "" || item === false){
            value = false;
        }
        else value = true;
    })
    return value;
    
}

function reduceToAnyTrue(sourceArray){
    let value = false;
    sourceArray.forEach(item => {
        if (item) {
            value = true;
        } 
    })
    return value;
}