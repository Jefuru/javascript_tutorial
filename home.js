// console.log('Hello!');


// // alert('yooo!');

// // Variable
// var b = 'smoothie';
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

// // var age = prompt('What is your age?');
// // document.getElementById('someText').innerHTML = age;

// // Numbers in JavaScript
// var num1 = 5.72;
// num1 += 1.58;
// console.log(num1 / 2);

// // functions define
// function fun(){
//     alert('this is a afunction');
// }

// // call function
// fun();

// function greeting(yourName){
//     var result = 'Hello ' + yourName;
//     console.log(result);
// }

// var name = prompt('what is your name?');
// greeting(name);

// // function taking argument
// function sumNumber(num1, num2){
//     console.log(num1+num2)
// }

// sumNumber(1, 2)
// sumNumber('He','llo')

// // while loops

// var num = 0;

// while (num < 100) {
//     num += 1;
//     console.log(num)
// }

// // For loop

// for (let num = 0; num <= 100; num++) {
//     console.log(num);
// }

// // Data types
// let yourAge = 10; // number
// let yourName = 'Jeff' // string
// let name = {first: 'Jane', last: 'Huang'}; // object
// let truth = False; // boolean
// let groceries = ['apple', 'banana', 'cookie']; // array
// let random; // undefined
// let nothing = null; // value null

// // string in Javascript
// let fruit = 'banana';
// let moreFruit = 'banana\napple';

// console.log(moreFruit);
// console.log(fruit.length);
// console.log(fruit.indexOf('nan'));
// console.log(fruit.slice(2,6));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(3));
// console.log(fruit[3]);
// console.log(fruit.split(''));


// // Array
// let fruits = ['banana', 'apple', 'pineapple']
// fruits = new Array('banana', 'apple', 'pineapple')

// console.log(fruits[1]);

// fruits[0] = 'Guava'

// console.log(fruits[0]);

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// console.log('to string', fruits.toString());
// console.log(fruits.join('-'));
// console.log(fruits, fruits.pop(), fruits); // remove last item
// console.log(fruits, fruits.push('raspberry'), fruits);
// console.log(fruits[4]);
// fruits[4] = 'new fruit';
// console.log(fruits)
// fruits.shift(); // remove first item
// fruits.unshift('kiwi'); // add first item to array
// console.log(fruits);

// let vegetables = ['tomato', 'broccoli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);
// console.log(allGroceries.slice(1,4));
// console.log(allGroceries.reverse());

// let numbers = [1,4,6,2,31,,5,4,2,432,5];
// console.log(numbers.sort(function(a, b){return a-b})); // sorted in ascending order
// console.log(numbers.sort()); // sorted in alphabetical order

// let emptyArray = new Array();
// for(let num = 0; num < 10; num++){
//     emptyArray.push(num);
// }
// console.log(emptyArray);

// object oriented programming
// let student = {
//     first: 'Jeff', 
//     last:'Liu', 
//     age: 27, 
//     height: 175,
//     studentInfo: function(){
//         return this.first + '\t' + this.last + '\t' + this.age;
//     }
// };
// console.log(student.first);
// console.log(student.last);
// student.first = 'Jennifer';
// console.log(student.first);
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo());

// // control flow 
// // if else && AND || OR
// let age = prompt('what is your age?')
// if ((age >= 18) && (age <= 35)){
//     status = 'target demo';
// } else{
//     status = 'not my audience';
// }
// console.log(status);

// // switch
// let day = prompt('what day is today?')
// switch(parseInt(day)){
//     case 0:
//         text = 'weekend';
//         break;
//     case 5:
//         text = 'weekend';
//         break;
//     case 6:
//         text = 'weekend';
//         break;
//     default:
//         text = 'weekday';
// }
// console.log(text);