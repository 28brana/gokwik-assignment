const flattenArray = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
const SumSquares = (arr) => {
    let flattenArr = flattenArray(arr);
    let result = 0;
    for (let i = 0; i < flattenArr.length; i++) {
        result += flattenArr[i] * flattenArr[i];
    }
    return result;
}

var l = [1,2,3];
console.log(SumSquares(l)); 
l = [[1,2],3];
console.log(SumSquares(l)); 
l = [[[[[[[[[1]]]]]]]]]
console.log(SumSquares(l)); 
l = [10,[[10],10],[10]]
console.log(SumSquares(l)); 