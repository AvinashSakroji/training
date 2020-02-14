//implicit args ==> this, aruguments
function sum(x,y){
    console.log("in sum..",this, arguments)
}

// function sum(){
//     console.log("in sum.. no args")
// }

// the first function definition gets hidden
// there is no method overloading in javascript
//below method function calls second mthod
sum(1,5);
sum();
sum(1,2,3,4,5);

// var add = function(x,y){
//     return x+y;
// }

//Arrow function.
// 1. No implicit args
// 2. Async programming
// 3. Functional programming
var add = (x,y) =>{
    return x+y;
}
console.log("Calling add" , add(3,4))

var squareIt = x => x * x;
console.log("square :", squareIt(9));


//example of callback of a Async programming
var obj ={
    id:10,
    print :function(){
        var self =  this;
        console.log("Id : ", this.id)
        setTimeout(function(){
            console.log("Id : ", self.id)    
        }, 2000);

        //arrow function
        //it uses the lexical scoping
        // arrow functions doesnt recieve any implicit arguments
        setTimeout(() => {
            console.log("Id from arrow function : ", this.id)    
        }, 2000);
    }
}

obj.print()

// Functional programming
var numbers = [1,2,3,4,5,6,7,8,9 ];

//filter takes a call back function
var even_numbers = numbers.filter((n, index)=> n%2 == 0)

console.log("Even numbers are" , even_numbers)

//bind examples

var emp = {
    id:1000
    
}

var empPrint= obj.print.bind(emp);
empPrint();

function bar(x,y){
    console.log("in bar",x,y)
}

var barOne =  bar.bind(this,2,3)
barOne();