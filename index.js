// Your code here
function mapToNegativize(sourceArray) {
    const output = []
    sourceArray.forEach(element => {
        output.push(element*-1)        
    });
    return output;
}

function mapToNoChange(sourceArray) {
    const output = []
    sourceArray.forEach(element => {
        output.push(element)        
    });
    return output;
}

function mapToDouble(sourceArray) {
    const output = []
    sourceArray.forEach(element => {
        output.push(element*2)        
    });
    return output;
}

function mapToSquare(sourceArray) {
    const output = []
    sourceArray.forEach(element => {
        output.push(element**2)        
    });
    return output;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(element => {
        startingPoint += element;
    });
    return startingPoint;
}

function reduceToAllTrue(sourceArray) {
    let output = true;
    sourceArray.forEach(element => {
        if(element){
        } else {
            output = false;
            // return output
        }
    });
    return output;
}

function reduceToAnyTrue(sourceArray) {
    let output = false;
    sourceArray.forEach(element => {
        if(element){
            output = true;
            // return output
        } else {}
    });
    return output;
}