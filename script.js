//JS 10 Questions Practice
//Question No.01
//Write a program to swap two numbers using a temporary variable.
// let num1 =5;
// let num2 =10;
// console.log(`Before Swapping : Number 1 =${num1}, Number 2 =${num2}`);
// let temporary =num1;
// num1 =num2;
// num2 =temporary;
// console.log(`After Swapping : Number 1 =${num1}, Number 2 =${num2}`);


//Question No.02
// Create a simple calculator that adds, subtracts, multiplies, and divides two numbers.
// let num1 = Number(prompt("Enter a Number1"));
// let operator = (prompt('Enter an Operator')); 
// let num2 = Number(prompt("Enter a Number2"));
// switch(operator){
//     case '+':
//         console.log('Addition of num1 & num2 is =', num1 + num2);
//         break;
//     case '-':
//         console.log('Subtraction of num1 & num2 is =',num1 - num2);
//         break;
//     case '*':
//         console.log('Multiplication of num1 & num2 is =',num1 * num2);
//         break;
//     case '/':
//         console.log('Division of num1 & num2 is =',num1 / num2);
//         break;
//     case '%':
//         console.log('Modulus of num1 & num2 is =',num1 % num2);
//         break;
//         default:
//             console.log('Error Input!');
// };


//Question No.03
// // Write a program to check if a number is even or odd.
// let num = Number(prompt('Enter a Number'));
// if(num % 2 === 0){
//     console.log('This is a Even Number.');
// }else{
//     console.log("This is an Odd Number.")
// };


//Question No.04
// Create a program to check whether a year is a leap year or not.
// let year = Number(prompt('Enter a Year'));
// if((year % 400 === 0) ||( year % 4 === 0 && year % 100 !== 0)){
//     console.log('This is a Leap Year');
// }else

// {
//     console.log('This is Not a Leap Year.')
// };


//Question No.05
// Write a program to find the largest of three numbers
// let num1 = 20;
// let num2 = 160;
// let num3 = 80;
// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is the Greatest Number of all.`);
// }else
// if(num2 > num1 && num2 > num3){
// console.log(`${num2} is the Greatest Number of all.`);
// }else{
//     console.log(`${num3} is the Greatest Number of all.`)
// };

//Question No.06
// // Write a program to print the first 10 natural numbers.
// for(let i = 1; i <= 10; i++){
//     console.log(`${i}`)
// };


//Question No.07
// Print a multiplication table for a given number using a loop.
// let num = Number(prompt('Enter a Nunber'));
// console.log(`Table of ${num} is:`);
// for(let i = 1; i <= 10; i++){
//     console.log(`${num} * ${i} = `,num * i)
// };


//Question No.08
// Calculate the factorial of a number using a loop
// Prompt the user for a number
// let num = parseInt(prompt('Enter any Number:'));
// let factorial = 1;
// for(let i =1; i<=num; i++){
//     factorial *= i;
// }
// console.log(`Factorial of ${num} is = ${factorial} `);

//Question No.09
// // Write a program to find the largest and smallest elements in an array.
// let arr = [100,  200, 300, 400, 500];
// let largest = Math.max(...arr);
// let smallest = Math.min(...arr);
// console.log(`Largest Value in Array = ${largest}`);
// console.log(`Smallest Value in Array = ${smallest}`);
//Alternative Code to Find the Largest and Smallest Values in an Arrays
// Write a program to find the largest and smallest elements in an array.
// let arr = [100, 200, 300, 400, 500];

// // Find the smallest element
// let smallest = arr[0];
// let largest = arr[0];

// // Loop through the array to find smallest and largest
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log(`Largest value in the array is: ${largest}`);
// console.log(`Smallest value in the array is: ${smallest}`);
   

//Question No.10
// Reverse an array without using the reverse() method.
// const arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);


//Question No.11
// Create a program that merges and sorts two arrays.
// const arr1 = [5, 4, 3, 2, 1];
// const arr2 = [6, 7, 8, 9, 10];
// const arr3 = arr1.concat(arr2);
// arr3.sort((a , b)  => a-b);
// console.log(arr3);


//Question No.11
// Write a program to check if a string is a palindrome.
// function isPalidrome (str) {
// const reversed = str.split('').reverse().join('');
// return str === reversed;
// }
// console.log(isPalidrome('madam'));
// console.log(isPalidrome('hello'));



//Question No.12
// Find the number of vowels in a given string.
// let string = ['a', 'r', 'i', 'z', 'n', 'u', 'n', 'b', 'h', 'g'];
// const vowels = string.filter(items => 'a,e,i,o,u'.includes(items));
// console.log('Vowels in Given Elements are: ', vowels);


//Question No.13
// Convert the first letter of each word in a string to uppercase.
// let string = ['ali','ahsan','ahsan','aslam','imran'];
// const newNames = string.map(name => name.charAt(0).toUpperCase() + name.slice(1));
// console.log(newNames);


// Question No.14
// Write a function that takes a number as input and returns whether it’s prime or not.
// function isPrime(num){
//     if(num <= 1)
//         return false;
//     if(num === 2)
//         return true;
//     if(num % 2 === 0)
//         return false;
//     for(let i = 3; i * i <= num; i+2)
//         if(num % i === 0)
//             return false;{
// }
// return true;
// }
// let num = Number(prompt('Enter a Number:'));
// if (isPrime(num)){
//     console.log(`${num} is a Prime Number.`)
// }else{
//     console.log(`${num} is not a Prime Number`)
// };


// Question No.15
// Create a function to generate Fibonacci series up to n terms.
// function generateFibonacci(n) {
//     const series = [0, 1];
    
//     for (let i = 2; i < n; i++) {
//       series.push(series[i - 1] + series[i - 2]);
//     }
    
//     return series.slice(0, n); // Adjust to return exactly n terms
//   }
  
//   // Example usage
//   console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3]


// Question No.16
// Write a function that removes duplicates from an array.
// const arr = [1, 2, 3, 4, 3, 2, 5, 1];
// function removeDuplicates(){
//    return [...new Set (arr)]
// }
// console.log((removeDuplicates()));


// Question No.17
// Create a JavaScript object that stores information about a book (title, author, year). Write a function to display the book's details.

// function bookDetails(book){
//     return `${book.title} book is written by ${book.author}, in ${book.year}.`;
// }
// const book = {
//     title : 'Zarb-e-Kaleem',
//     author : 'Allama Iqbal',
//     year : '1920',
// };

// console.log(bookDetails(book));

// Question No.18
// Write a program to add dropdown menus dynamically to a webpage (use DOM manipulation).
 // JavaScript to add options to the dropdown and handle selection display
//  const dropdown = document.getElementById("dropdown");
//  const display = document.getElementById("dropdownDisplay");

//  // Options to add to the dropdown
//  const options = [
//      { value: "", text: "Select Any Player" },
//      { value: "option1", text: "Ali Ahsan" },
//      { value: "option2", text: "Baber Azam" },
//      { value: "option3", text: "M Ahmad" }
//  ];
// options.forEach(option => {
//     optionElement = document.createElement('option');
//     optionElement.value = option.value;
//     optionElement.textContent = option.text;
//     dropdown.appendChild(optionElement);
// });
// dropdown.addEventListener('change', () => {
//     const selectedText = dropdown.options[dropdown.selectedIndex].text;
//     display.textContent = dropdown.value ? `You Selected: ${selectedText}` : 'Please Select an Option!';
//     });



// Question No.19
// Implement map(), filter(), and reduce() functionalities on an array without using built-in functions.
// const arr = [
//     {name : 'car', price : 100},
//     {name : 'TV', price : 200},
//     {name : 'laptop', price : 300},
//     {name : 'bike', price : 400},
// ];
// const items = arr.map(item => 
//     item.name
// );
// // console.log(items);

// const items = arr.filter( item => 
//     item.price < 300
// );
// // console.log(items);
// const totalPrice = arr.reduce((sum , item) =>
//     sum + item.price, 0);
// console.log(totalPrice);



// Question No.20
// // Write a program that sorts an array of objects by a specific key (e.g., age).
// const arr = [1, 2, 5, 6, 7, 8, 4];
// arr.sort();
// console.log(arr);


// Question No.21
// // Write a program using promises to simulate fetching data from a server.
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//            console.log('Fetching the Data From the Server...');
//     }, 3000);
// });



// Question No.22
// Create an async/await function that waits for a set timeout before printing a message.
// async function fetchData (){
//     console.log('Fetching Data from the Server...');
//     await new Promise(resolve =>setTimeout (resolve, 3000)) 
//     console.log('Data is Fetched Successfully...');

// }
// fetchData();


// Question No.23
// Write a function that throws an error if the input isn’t a number and handles it gracefully using try-catch.
// Write a function that throws an error if the input isn’t a number and handles it gracefully using try-catch.
// function checkIfNumber(input) {
//     try {
//         if (isNaN(input)) {
//             throw new Error('Input is not a number');
//         }
//         console.log('You entered a number');
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// let number = Number(prompt('Enter a Number:'));
// checkIfNumber(number);
