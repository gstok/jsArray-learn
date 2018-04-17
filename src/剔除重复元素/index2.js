
let arraySrc = new Array(1, 2, 3, 3, 33, 4 , 5, 5, 5, 5, 6, 6);
arraySrc.sort((a, b) => {
    return a - b;
});
let arrayDst = arraySrc.filter((num, index, array) => {
    let thisNum = num;
    let nextNum = array[index + 1];
    return thisNum != nextNum;
    //return num != array[index + 1];
});
console.log(arrayDst);

