// Your code here

arry = [1, 2, 3, 4, 6]
function mapToNegativize(sourceArray) {
    return sourceArray.map((x) => {return x * -1})
}

mapToNegativize(arry)

function mapToNoChange(sourceArray) {
    return sourceArray.map((x) => {return x})
}
mapToNoChange(arry)

function mapToDouble(sourceArray) {
    return sourceArray.map((x) => {return x * 2})
}
mapToDouble(arry)

function mapToSquare(sourceArray) {
    return sourceArray.map((x) => {return x * x})
}
mapToSquare(arry)



// reduce
function reduceToTotal(sourceArray, startingBase = 0){
    return sourceArray.reduce((accumulator, currentValue) => {return accumulator + currentValue}, startingBase)
}

reduceToTotal(arry)
l

// function reduceToAllTrue(sourceArray){
//     return sourceArray.reduce((accumulator, currentValue) => {
//         if (!currentValue) {
//             accumulator = false;
//             return accumulator
//         } else {
//             accumulator == true;
//             return accumulator}
//         })
// }

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i])
        return false;
    }
    return true;
}

reduceToAllTrue(arry)


function reduceToAnyTrue(sourceArray){
    return sourceArray.reduce((accumulator, currentValue) => {
        if (currentValue) {
            accumulator = true;
            return accumulator
        } else {
            accumulator = false;
            return accumulator
        }
    })
}