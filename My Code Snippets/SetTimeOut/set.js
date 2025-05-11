console.log('Loading function');

// setTimeout(()=>{
//     console.log('timeout');
// },4000);
// console.log('Function in progress');
// The setTimeout function is used to execute a function after a specified delay.
// setTimeout is a function that takes two arguments: a function to execute and a delay in milliseconds.

//Set Interval
let id = setInterval(()=>{
    console.log('timeout');
},4000);

console.log(id);
// The setInterval function is used to execute a function repeatedly after a specified delay.
// setInterval is a function that takes two arguments: a function to execute and a delay in milliseconds.

// To stop the interval, you can use clearInterval function
clearInterval(id);

let id2 = setInterval(()=>{
    console.log('login again--');
},3000);
console.log(id2);

clearInterval(id2);

