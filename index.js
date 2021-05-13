// Your code here

const mapToNegativize = (sourceArray) => {
                let arr = [];
                for (let i = 0; i < sourceArray.length; i++){
                                arr.push((-1 * sourceArray[i]));
                }
                return arr;
};

const mapToNoChange = (sourceArray) => {
                let arr = [...sourceArray];
                return arr;
};

const mapToDouble = (sourceArray) => {
                let arr = [];
                for (let i = 0; i < sourceArray.length; i++){
                                arr.push((sourceArray[i] * 2));
                }
                return arr;
};


const mapToSquare = (sourceArray) => {
                let arr = [];
                for (let i = 0; i < sourceArray.length; i++){
                                arr.push((sourceArray[i] ** 2));
                }
                return arr;
};


const reduceToTotal = (sourceArray, startingPoint) => {
                let total = 0;
                if(startingPoint) {
                                total += startingPoint;
                                for(let i = 0; i < sourceArray.length; i++) total += sourceArray[i];
                }
                else for(let i = 0; i < sourceArray.length; i++) total += sourceArray[i];
                return total;
};

const reduceToAllTrue = (sourceArray) => {
                for(let i = 0; i < sourceArray.length; i++) if (!sourceArray[i]) return false;
                return true;
};

const reduceToAnyTrue = (sourceArray) => {
                for(let i = 0; i < sourceArray.length; i++) if (sourceArray[i]) return true;
                return false;
};