
let arraySrc = new Array(1, 2, 3, 3, 33, 4 , 5, 5, 5, 5, 6, 6);

let result1 = arraySrc.find(num => num > 3);
let result2 = arraySrc.filter(num => num > 3);

//可以看出来find仅仅是返回一个元素
console.log(result1);
console.log(result2);

let objList = [
    {
        name: "顾世豪",
        sex: "男"
    },
    {
        name: "习近平",
        sex: "男"
    },
    {
        name: "彭丽媛",
        sex: "女"
    },
    {
        name: "哈哈哈",
        sex: "女"
    }
];

let result3 = objList.filter((item) => {
    return item.sex == "女";
});

console.log(result3);

let result4 = objList.find((item) => {
    return item.sex == "女";
});

console.log(result4);