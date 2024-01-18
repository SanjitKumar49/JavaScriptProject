var num1= window.prompt("Enter First Number");
num1= parseInt(num1);
var num2= window.prompt("Enter Second Number");
num2= Number(num2);


function add(num1,num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num2-num1;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1, num2){
    return num2/num1;
}

let addition=add(num1,num2);
let subtarction=sub(num1,num2);
let multiplication= mul(num1,num2);
let divide = div(num1,num2);

console.log(addition);
console.log(subtarction);
console.log(multiplication);
console.log(divide);