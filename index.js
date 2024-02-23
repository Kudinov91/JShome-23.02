// Задача 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let start = parseInt(prompt("Введите начало диапазона:"));
// let end = parseInt(prompt("Введите конец диапазона:"));
// let sum = 0;

// if (!isNaN(start) && !isNaN(end)) {
//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }
//   console.log("Сумма всех чисел в диапазоне:", sum);
// } else {
//   console.log("Ошибка ввода. Пожалуйста, введите числа.");
// }

//Задача 2. . Запросить 2 числа и найти только наибольший общий делитель.

// let num1 = parseInt(prompt("Введите первое число:"));
// let num2 = parseInt(prompt("Введите второе число:"));
// let nod;

// if (!isNaN(num1) && !isNaN(num2)) {
//   while (num2 !== 0) {
//     let temp = num2;
//     num2 = num1 % num2;
//     num1 = temp;
//   }
//   nod = num1;
//   console.log("Наибольший общий делитель:", nod);
// } else {
//   console.log("Ошибка ввода. Пожалуйста, введите числа.");
// }

//Задача 3.Запросить у пользователя число и вывести все делители этого числа.

// let number = parseInt(prompt("Введите число:"));

// if (!isNaN(number)) {
//   console.log(`Делители числа ${number}:`);
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       console.log(i);
//     }
//   }
// } else {
//   console.log("Ошибка ввода. Пожалуйста, введите число.");
// }

//Задача 4 .Определить количество цифр в введенном числе

// let number = prompt("Введите число:");
// let count = 0;

// if (!isNaN(number) && number !== null) {
//   let numString = number.toString();
//   count = numString.length;
//   console.log(`Количество цифр в числе ${number}:`, count);
// } else {
//   console.log("Ошибка ввода. Пожалуйста, введите число.");
// }

//Задача 5 .(Сделали на уроке)

// let counter = 0;
// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// let evenCount = 0;
// let oddsCount = 0;
// do {
//   let userNum = parseFloat(prompt("Введите число"));
//   if (userNum > 0) {
//     positiveCount++;
//     console.log("positive");
//   }
//   if (userNum < 0) {
//     negativeCount++;
//     console.log("negative");
//   }
//   if (userNum === 0) {
//     zeroCount++;
//     console.log("zero");
//   }
//   if (userNum % 2 === 0) {
//     evenCount++;
//     console.log("Even");
//   }
//   if (userNum % 2 !== 0) {
//     oddsCount++;
//     console.log("Odds");
//   }
//   counter++;
// } while (counter < 10);

// console.log("Положительных чисел " + positiveCount);
// console.log("Отрицательных чисел " + negativeCount);
// console.log("Нулей: " + zeroCount);
// console.log("Четных чисел: " + evenCount);
// console.log("Нечетных чисел: " + oddsCount);
