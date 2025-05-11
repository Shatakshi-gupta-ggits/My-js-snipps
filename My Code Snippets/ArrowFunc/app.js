const sum= (a, b) =>{
    console.log(a+b);
};

const cube = (n) =>{
    return n*n*n;
}

const hello = () =>{
    console.log("Hello World");
}
//Implicit return

const square = n => n*n;
const add = (a, b) => a + b;
const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 !== 0;
const iscube = n => cube(n)=== n*n*n;