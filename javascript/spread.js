var  numbers = [1,2,3];

//Copy the reference, i.e. shallow copy
var copyRef = numbers;

var copy = [...numbers];
numbers[1]=100;
console.log("numbers", numbers)
console.log("copy ", copy)

var merge = [...numbers , ...copy, 300, 400];

console.log("merge" , merge)

//for objects
 
var obj = {
    id: 100,
    name: "avinash"
}

var user = {...obj, age:23}

console.log("merged", user)


//REST operator ...
function rest_exp(...args){
    console.log(args);
}

rest_exp(1,2,3);
rest_exp(1,2,3,4,5,6);
rest_exp(1,2,3,4,5,6,7,8);
