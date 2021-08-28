// const num1 = 10;
// const num2 = 20;

// value = num1 + num2;

// value = 0.6 + 0.7;
// value = value.toFixed(2);
// //1
// value = parseFloat(Math.PI.toFixed(2));

// //2
// value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
// value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

// //3
// value = parseFloat(Math.random().toFixed(2));
// value = Math.floor(Math.random() * 101);

// //4
// value = 0.6 + 0.7;
// value = parseFloat(value.toFixed(2));

// //5
// value = parseInt("100$");

// console.log(value);

// let value;

// value = "" || 0;

// let a = 0 || "string"; //string
// console.log(a);
// a = 1 && "string"; // str
// console.log(a);
// a = null || 25; //25
// console.log(a);
// a = null && 25; //null
// console.log(a);
// a = null || 0 || 35; //35
// console.log(a);
// a = null && 0 && 35; //null
// console.log(a);

// console.log(true + 2);
// 12 + 14 + '12'

// 3 + 2 - '1'

// '3' + 2 - 1

// true + 2

// +'10' + 1

// undefined + 2

// null + 5

// true + undefined

// let b = "visible";

// if (b === "hidden") b = "visible";
// else b = "hidden";
// console.log(b);

// let c = 0;

// if (c === 0) c = 1;
// else if (c < 0) c = "less then zero";
// else c *= 10;
// console.log(c);

// let car = {
//   name: "Lexus",
//   age: 10,
//   create: 2008,
//   needRepair: false,
// };

// if (car.age > 5) {
//   console.log("Need Repair");
//   car.needRepair = false;
// }

// let item = {
//   name: "Intel core i7",
//   price: "100$",
//   discount: "15%",
// };

// if (item.discount && item.discount != NaN && item.price && item.price != NaN) {
//   item.priceWithDiscount =
//     parseInt(item.price) -
//     (parseInt(item.price) * parseInt(item.discount)) / 100;
//   console.log(item.priceWithDiscount);
// } else if (!item.discount) console.log(item.price);

// let product = {
//   name: "Яблоко",
//   price: "10$",
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// if (parseInt(product.price) >= min && parseInt(product.price) <= max)
//   console.log(product.name);
// else console.log("Товаров не найдено");

// let a = "none";

// switch (a) {
//   case "block":
//     console.log("block");
//     break;
//   case "none":
//     console.log("none");
//     break;
//   case "inline":
//     console.log("inline");
//     break;
// }

// let b = "visible";

// b = b === "hidden" ? "visible" : "hidden";
// console.log(b);

// let c = 5;

// c = c === 0 ? 1 : c < 0 ? "less then zero" : c * 10;
// console.log(c);

// let string = "some test string";
// let lastlet;
// let firstlet;
// //1
// lastlet = string[string.length - 1];
// firstlet = string[0];

// console.log(lastlet, firstlet);
// //2
// string = string
//   .replace(firstlet, firstlet.toUpperCase())
//   .replace(lastlet, lastlet.toUpperCase());
// //3
// console.log(string);
// string = "some test string";
// let index = string.indexOf("string");
// console.log(index);
// //4
// index = string.indexOf(" ", string.indexOf(" ") + 1);

// console.log(index);
// //5
// index = string.slice(5, 9);
// console.log(index);
// //6
// index = string.slice(5, 8);
// console.log(index);
// //7
// index = string.slice(0, -6);
// console.log(index);
// //8
// let a = 20,
//   b = 16;

// string = `${a}${b}`;
// console.log(string);

// let company = {
//   product: "iphone",
// };

// company.price = 1000;
// company.currency = "dollar";

// console.log(company);

// company.details = {};
// company.details.model = "XR";
// company.details.color = "red";

// let s = "i am in the easycode";
// let r = "";

// for (let i = 0; i < s.length; i++) {
//   r += s[i].toUpperCase();
//   for(let j=i+1; j<s.length-1;j++){
//     r += s[j];
//     if(s[j] === ' ')
//     else {i = j;}
//   }
// }

// for (let i = 0; i < s.length; i++) {
//   r += s[i].toUpperCase();
//   let j = i + 1;
//   while (s[j] !== " " && j < s.length) {
//     r += s[j];
//     j++;
//   }
//   if (s[j] === " ") r += " ";
//   i = j;
// }
// console.log(r);

// let s = "tseb eht ma i";
// let r = "";

// for (let i = s.length - 1; i >= 0; i--) {
//   r += s[i];
// }

// console.log(r);

// let num = 5;
// let res = 1;
// for (let i = 1; i <= num; i++) {
//   res *= i;
//   console.log(res);
// }

// console.log(res);

// let s = "JavaScript is a pretty good language";
// let r = "";

// for (let i = 0; i < s.length; i++) {
//   r += s[i].toUpperCase();
//   let j = i + 1;
//   while (s[j] !== " " && j < s.length) {
//     r += s[j];
//     j++;
//   }
//   i = j;
// }
// console.log(r);

// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let value of arr) {
//   if (value % 2) console.log(value);
// }

// let list = {
//   name: "denis",
//   work: "easycode",
//   age: 29,
// };

// for (let key in list) {
//   if (typeof list[key] === "string") list[key] = list[key].toUpperCase();
// }

// console.log(list);

////////////////////ПРИМЕР ПРЕПОДА/////////////////////
//////////////////////////////////////////////////////
// let str = 'JavaScript is a pretty good language';//
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   if (i === 0 || str[i - 1] === ' ') {
//     res += str[i].toUpperCase();
//   } else if (str[i] !== ' '){
//     res += str[i];
//   }
// }

// console.log(res);

// let str = 'i am in the easycode';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   if (i === 0 || str[i - 1] === ' ') {
//     res += str[i].toUpperCase();
//   } else {
//     res += str[i];
//   }
// }

////////////////////////////////////////////////////
////////////////////////////////////////////////////

// var x = 1;
// var x = 2;

// console.log(typeof null);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Что вы усвоилиВопросы, на которые вы ответили правильно с первого раза.
// Какой тип у {}?
// Какой тип данных у null?
// Какие имена из перечисленных допустимые для переменных?
// Что будет в консоли ?let user = {"name":"Smith", age: 30}; console.log(user['name'] == user.name);
// Что будет в консоли?console.log(+'-' + 2)
// Что будет в консоли?let str = '123'; let result = +str; console.log(typeof(result), result);
// Как узнать длину строки?
// Какое значение имеет объявленная переменная (например, var a;)?
// Выберите корректное объявление переменной?
// Что будет в консоли?let arr = [] arr[500] = 1 console.log(arr.length);
// Как можно преобразовать строку в целое число?
// Как полностью остановить работу цикла?
// Какие есть циклы в JavaScript из перечисленных?
// Какой тип данных у NaN?
// Что будет в консоли?let y; if (y) { let y = 2; console.log(y); } else { let y = 10; console.log(y); } console.log(y);
// Что будет в консоли?const obj = { brand: 'EasyCode' }; obj.country = 'Ukraine'; console.log(obj)

// Что вам следует проверить
// Что будет в консоли?let foo = { str: 'test' }; console.log(foo && foo.str);
// Что будет в консоли?var x = 1; if (x) { var x = 2; console.log(x); } console.log(x);
// Что будет в консоли?console.log(typeof null)
// Что будет в консоли?const z = 1; z = 20; z++ console.log(z);
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// function multiply() {
//   if (arguments.length === 0) return 0;
//   let m = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     m *= arguments[i];
//   }
//   return m;
// }

// console.log(multiply());

// function reverseString(str) {
//   str = String(str);
//   let r = "";
//   for (let i = str.length; i--; ) {
//     r += str[i];
//   }
//   console.log(r);
// }

// reverseString("test");
// reverseString("");
// reverseString(null);
// reverseString(undefined);
// reverseString();

// function getCodeStringFromText(str) {
//   let res = "";
//   for (let i = 0; i <= str.length - 1; i++) {
//     res += str.charCodeAt(i) + " ";
//   }
//   return res.trim();
// }

// console.log(getCodeStringFromText("hello"));

// function guessTheNumber(num) {
//   num = parseInt(num);
//   if (num) {
//     if (num <= 10 && num >= 0) {
//       let r = Math.floor(Math.random() * 11);
//       if (num === r) console.log("You win!");
//       else
//         console.log(
//           `You are lose, your number is ${num}, the random number is ${r}`
//         );
//     } else return new Error("Please provide number in range 1-10");
//   } else return new Error("Please provide a valid number");
// }

// guessTheNumber(null);

// function getArray(num) {
//   let arr = [];
//   arr.length = num;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = i + 1;
//   }
//   return arr;
// }

// getArray(5);

// function doubleArray(arr) {
//   let arr2 = [];
//   arr2 = arr.concat(arr);
//   console.log(arr2);
// }

// doubleArray([1, 2, 3]);

// function changeCollection() {
//   let arg2 = [];
//   for (let i = 0; i < arguments.length; i++) {
//     if (Array.isArray(arguments[i])) {
//       arguments[i].shift();
//       arg2[i] = arguments[i];
//     } else return 0;
//   }
//   return arg2;
// }

// console.log(changeCollection([1, 2, 3, 4], [4, 5, 6]));

// const users = [
//   {
//     _id: "5e36b779dc76fe3db02adc32",
//     balance: "$1,955.65",
//     picture: "http://placehold.it/32x32",
//     age: 33,
//     name: "Berg Zimmerman",
//     gender: "male",
//   },
//   {
//     _id: "5e36b779d117774176f90e0b",
//     balance: "$3,776.14",
//     picture: "http://placehold.it/32x32",
//     age: 37,
//     name: "Deann Winters",
//     gender: "female",
//   },
//   {
//     _id: "5e36b779daf6e455ec54cf45",
//     balance: "$3,424.84",
//     picture: "http://placehold.it/32x32",
//     age: 36,
//     name: "Kari Waters",
//     gender: "female",
//   },
// ];

// function filterUsers(arr, key, value) {
//   if (!arr && !key && !value) {
//     return new Error("Error message");
//   } else {
//     let res_arr = [];
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i][key] === value) {
//         res_arr[j] = arr[i];
//         j++;
//       }
//     }
//     return res_arr;
//   }
// }

// console.log(filterUsers(users, "age", 36));

// function filterUsers(arr, key, value) {
//   return arr[0][key];
// }

// console.log(filterUsers(users, "age", 36));

// function firstFunc(arr, fn) {
//   return `New value: ${fn(arr)}`;
// }

// function handler1(el) {
//   let str = "";
//   for (let value of el) {
//     for (let j = 0; j < value.length; j++) {
//       if (j === 0) str += value[j].toUpperCase();
//       else str += value[j];
//     }
//   }
//   return str;
// }

// console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));

// function handler2(el) {
//   let str = "";
//   for (let value of el) {
//     str += String(value * 10) + ", ";
//   }
//   return str.trim();
// }

// console.log(firstFunc([10, 20, 30], handler2));

// function handler3(el) {
//   let str = "";
//   for (let value of el) {
//     str += `${value["name"]} is ${value["age"]}, `;
//   }
//   return str.trim();
// }

// console.log(
//   firstFunc(
//     [
//       { age: 45, name: "Jhon" },
//       { age: 20, name: "Aaron" },
//     ],
//     handler3
//   )
// );

// function handler4(el) {
//   let str = "";
//   for (let value of el) {
//     for (let i = value.length; i--; ) {
//       str += value[i];
//     }
//     str += ", ";
//   }
//   return str.trim();
// }

// console.log(firstFunc(["abs", "123"], handler4));

// function every(arr, fn) {
//   if (!Array.isArray(arr) || typeof fn !== "function") new Error("fuck");
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) return true;
//     else false;
//   }
// }

// function cb(element, index, array) {
//   return element >= 10;
// }

// console.log(every([3, 4, 5], cb));

// function every(arr, fn) {
//   if (!Array.isArray(arr))
//     return new Error("The first argument expected as array");
//   if (!fn || typeof fn !== "function")
//     return new Error("The second argument expected as function");

//   for (let i = 0; i < arr.length; i++) {
//     if (!fn(arr[i], i, arr)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(
//   every([1, 2], function (el) {
//     console.log(el);
//     return typeof el === "number";
//   })
// );

// const rectangle = {
//   width: 100,
//   height: 50,
//   getSquare: function () {
//     return this.width * this.height;
//   },
// };

// console.log(rectangle.getSquare());

// const price = {
//   price: 10,
//   discount: "15%",
//   getPrice() {
//     return this.price;
//   },
//   getPriceWithDiscount() {
//     return this.price * (parseInt(this.discount) / 100);
//   },
// };

// console.log(price.getPrice());

// console.log(price.getPriceWithDiscount());

// const object = {
//   height: 0,
//   pluser() {
//     this.height++;
//   },
// };

// object.height = 10;

// object.pluser();

// console.log(object.height);

// const numerator = {
//   value: 1,

//   double: function () {
//     this.value *= 2;
//     return this;
//   },

//   plusOne: function () {
//     this.value++;
//     return this;
//   },

//   minusOne: function () {
//     this.value--;
//     return this;
//   },
// };

// numerator.double().plusOne().plusOne().minusOne();

// console.log(numerator.value);

// const market = {
//   price: 14,
//   count: 20,
//   total_price() {
//     return this.price * this.count;
//   },
// };

// const market2 = {
//   price: 10,
//   count: 30,
// };

// market2.total_price = market.total_price;

// console.log(market2.total_price());

// let sizes = { width: 5, height: 10 };

// getSquare = function () {
//   return this.width * this.height;
// };

// console.log(getSquare.call(sizes));

// let element = {
//   height: 25,

//   getHeight: function () {
//     return this.height;
//   },
// };

// let getElementHeight = element.getHeight.bind(element);

// console.log(getElementHeight());

// function sum() {
//   const params = Array.prototype.slice.call(arguments);
//   if (!params.length) return 0;

//   return params.reduce(function (prev, next) {
//     return prev + next;
//   });
// }

// function sum() {
//   const params = Array.prototype.slice.call(arguments);
//   if (!params.length) return 0;

//   return params.reduce((prev, next) => prev + next);
// }

// console.log(sum(1, 2, 3, 4)); // 10
// console.log(sum()); // 0

// convertToObject = (num) => {
//   return {
//     value: num,
//     isOdd: Boolean(num % 2),
//   };
// };

// let numArr = [1, 2, 3, 5, 8, 9, 10];
// let numArrNew;
// numArrNew = numArr.map((num) => {
//   return {
//     digit: num,
//     odd: num % 2 ? true : false,
//   };
// });

// console.log(numArrNew);

// let arr = [12, 4, 50, 1, 0, 18, 40];

// let isis = arr.some((num) => num === 0);

// console.log(isis);

// let arr = ["yes", "hello", "no", "easycode", "what"];

// let isis = arr.every((word) => word.length > 3);

// console.log(isis);

// let lettersArr = [
//   { char: "a", index: 12 },
//   { char: "w", index: 8 },
//   { char: "Y", index: 10 },
//   { char: "p", index: 3 },
//   { char: "p", index: 2 },

//   { char: "N", index: 6 },
//   { char: " ", index: 5 },
//   { char: "y", index: 4 },
//   { char: "r", index: 13 },
//   { char: "H", index: 0 },

//   { char: "e", index: 11 },
//   { char: "a", index: 1 },
//   { char: " ", index: 9 },
//   { char: "!", index: 14 },
//   { char: "e", index: 7 },
// ];
// let strocka = lettersArr
//   .sort((prev, next) => prev.index - next.index)
//   .reduce((str, lett) => {
//     return str + lett.char;
//   }, "");

// console.log(strocka)

// let arr = [[14, 45], [1], ["a", "c", "d"]];

// let arrSort = arr.sort((prev, next) => prev.length - next.length);

// console.log(arrSort);

// let arr = [
//   { cpu: "intel", info: { cores: 2, сache: 3 } },

//   { cpu: "intel", info: { cores: 4, сache: 4 } },

//   { cpu: "amd", info: { cores: 1, сache: 1 } },

//   { cpu: "intel", info: { cores: 3, сache: 2 } },

//   { cpu: "amd", info: { cores: 4, сache: 2 } },
// ];

// arr.sort((prev, next) => prev.info.cores - next.info.cores);

// console.log(arr);

// let products = [
//   { title: "prod1", price: 5.2 },
//   { title: "prod2", price: 0.18 },

//   { title: "prod3", price: 15 },
//   { title: "prod4", price: 25 },

//   { title: "prod5", price: 18.9 },
//   { title: "prod6", price: 8 },

//   { title: "prod7", price: 19 },
//   { title: "prod8", price: 63 },
// ];

// filterCollection = (arr, minPrice, maxPrice) => {
//   let res = arr.filter((item) => {
//     console.log(item);
//     return item.price >= minPrice && item.price <= maxPrice;
//   });
//   return res;
// };

// let res2 = filterCollection(products, 15, 30);
// console.log(res2);

// function minus(x = 0) {
//   return function (y = 0) {
//     console.log(x - y);
//   };
// }

// minus(10)(6); // 4

// minus(5)(6); // -1

// minus(10)(); // 10

// minus()(6); // -6

// minus()(); // 0

function multiplyMaker(x) {
  return function (y) {
    console.log(x, y, x * y);
    x = x * y;
  };
}

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)

multiply(1); // 4 (4 * 1)

multiply(3); // 12 (4 * 3)

multiply(10); // 120 (12 * 10)
