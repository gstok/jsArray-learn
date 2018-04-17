
let arraySrc = new Array(3, 1, 44, 6, 19, 1, 90, 41);
arraySrc.sort();
//这种排序实际上是转换成为字符串之后进行排序的
console.log(arraySrc);

arraySrc.sort((a, b) => {
    return a - b;
});
//正确的排序
console.log(arraySrc);