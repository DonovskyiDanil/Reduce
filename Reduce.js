// const matrix = [
//     [0, 1],
//     [2, 3],
//     [4, 5]
// ];
// console.log(matrix.reduce((acum, curr) => acum.concat(curr)));
// //impl
// const myReduce = (arr, callback, startValue) => {
//     let result = startValue || [];
//     for (let i = 0; i < arr.length; i++) {
//         result = callback(result, arr[i], i, arr);
//     }
//     return result;
// }
// console.log(myReduce(matrix,(acum, curr) => acum.concat(curr)));

const myReduceRight = (arr, callback, startValue) => {
    let result = startValue;
    let i = arr.length - 1;

    if (result === undefined && arr.length > 0) {
        result = arr[i];
        i--;
    }

    for (; i >= 0; i--) {
        result = callback(result, arr[i], i, arr);
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];

const sum = myReduceRight(numbers, (acum, curr) => acum + curr);

console.log(sum); // Ответ 15




