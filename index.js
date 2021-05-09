// Your code here

function mapToNegativize(sourceArray) {
    let i = 0;
    let returnArray  = [];
    while (i < sourceArray.length) {
        returnArray.push(sourceArray[i] * -1)
        i++;
    }
    return returnArray;
};

function mapToNoChange(sourceArray) {
    let i = 0;
    let returnArray = [];
    while (i < sourceArray.length) {
        returnArray.push(sourceArray[i]);
        i++;
    }
    return returnArray;
}

function mapToDouble(sourceArray) {
    let i = 0;
    let returnArray = [];
    while (i < sourceArray.length) {
        returnArray.push(sourceArray[i] * 2);
        i++;
    }
    return returnArray;
}

function mapToSquare(sourceArray) {
    let i = 0;
    let returnArray = [];
    while (i < sourceArray.length) {
        returnArray.push(sourceArray[i] * sourceArray[i]);
        i++;
    }
    return returnArray;
}

// reduce-likes

function reduceToTotal(sourceArray, startingPoint = 0) {
    let runningTotal = startingPoint;

    if (startingPoint === 0) {

        let i = 0;
        while (i < sourceArray.length) {
            startingPoint += sourceArray[i];
            console.log(startingPoint);
            console.log(runningTotal);
            i++;
        }
        return startingPoint;
    }

    else if (startingPoint !== 0) {
        
        let i = 0;
        while (i < sourceArray.length) {
            startingPoint += sourceArray[i];
            console.log(startingPoint);
            console.log(runningTotal);
            i++;
        }
        return startingPoint;
    }
}


function reduceToAllTrue(sourceArray) {
    let status;
    sourceArray.forEach(element => {
        if (element != "") {
            console.log("truthy");
            status = true;
        } 

        else if (element != 0) {
            console.log("truthy");
            status = true;
        }

        else if (element != false) {
            console.log("truthy");
            status = true;
        }

        else {
            console.log("falsy");
            status = false;
        }

    });

    if (status === true) {
        return true; 
    }

    else if (status === false) {
        return false;
    }
}

function reduceToAnyTrue(sourceArray) {
    let i = 0;
    let status;
    while (i < sourceArray.length) {
        if (sourceArray[i] === true) {
            status = true; 
        }
        i++;
    }

    if (status !== true) {
        status = false;
    }
    return status;
}