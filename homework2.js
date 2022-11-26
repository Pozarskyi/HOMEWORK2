// task 1

// let x = 1;
// let y = 2;

// let res1 = (x + '' + y);
// console.log(res1);
// console.log(typeof(res1));

// let res2 = ((x == x) + '' + y);
// console.log(res2);
// console.log(typeof(res2));

// let res3 = (x + y) == (x + y);
// console.log(res3);
// console.log(typeof(res3));

// let res4 = ((x + y) - "hi")
// console.log(res4);
// console.log(typeof(res4));

// task2

// let someNumber = +prompt("Enter the number:");

// if (someNumber > 0 && someNumber % 2 === 0) {
//     console.log(someNumber)
// } else {
//     console.log("Eror...");
// }

// if(someNumber % 7 === 0){
//     console.log(someNumber);
// }else {
//     console.log('Eror...')
// }


// task3

// let arr = [];
// arr.push(27);
// arr.push("Ukraine");
// arr.push(true);
// arr.push(null);
// console.log(arr.length);
// let someString = prompt("Enter something:")
// arr.push(someString);
// console.log(arr);
// console.log(arr[4]);
// arr.shift();
// console.log(arr);

// task4

// let cities = ["Rome", "Lviv", "Warsaw"];

// rome = cities[0];
// lviv = cities[1];
// warsaw = cities[2];
// console.log(`"${rome} * ${lviv} * ${warsaw}"`);

// task5

// let isAdult = +prompt("Скільки вам років: ");
// if(isAdult < 18) {
//     console.log("Ви ще надто молоді");
// }else if(isAdult >= 18) {
//     console.log("Ви досягли повнолітнього віку")
// }

// task6

// let sideA = +prompt("Ведіть сторону трикутника А:");
// let sideB = +prompt("Ведіть сторону трикутника B:");
// let sideC = +prompt("Ведіть сторону трикутника C:");

// let p = (sideA + sideB + sideC) / 2;
// console.log(`Напів периметр ${p}`);
// let areaTriangle =  Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
// console.log(`Площа трикутниа: ${areaTriangle}`);

// let radian = (Math.PI / 180);
// let angleA = (areaTriangle / (Math.sqrt(sideC * sideB)) / radian);
// let angleB = (areaTriangle / (Math.sqrt(sideA* sideC)) / radian);
// let angleC = (areaTriangle / (Math.sqrt(sideB* sideA)) / radian);

// console.log(angleA.toFixed(3));
// console.log(angleB.toFixed(3));
// console.log(angleC.toFixed(3));

// if(angleA >= 90 && angleA <= 91 || angleB >= 90 && angleB <= 91|| angleC >= 90 && angleC <= 91) {
//     console.log("Цей трикутник прямокутний");
// }else {
//     console.log("Incorrect data");
// }

// task7

// let data = new Date();
// let dayTime = data.getHours();
 
// if(dayTime >= 23 && dayTime < 5) {
//     console.log("Доброї ночі");
// }else if(dayTime >= 5 && dayTime <= 11) {
//     console.log("Доброго ранку");
// }else if (dayTime >= 11 && dayTime < 17) {
//     console.log("Доброго дня");
// }else if(dayTime >= 17 && dayTime < 23) {
//     console.log("Доброго вечора");
// }

// switch(true) {
//     case(dayTime >= 23 && dayTime < 5):
//         console.log("Доброї ночі");
//         break;
//     case(dayTime >= 5 && dayTime <= 11):
//         console.log("Доброго ранку");
//         break;
//     case(dayTime >= 11 && dayTime < 17):
//         console.log("Доброго дня");
//         break;
//     case(dayTime >= 17 && dayTime < 23):
//         nsole.log("Доброго вечора");
//         break;
// }