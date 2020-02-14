                    // React Training day 1 //

// All declarations are hoisted to the top
//Method, variables , class
console.log("x :",x) //undefined
var x = 10;
console.log("x :",x)

var y;
console.log("y: ",y)

//Reference error because z is not declared
//console.log("z",z)

// This runs because the method declaration is hoisted to top by compiler
foo();
function foo(){
    console.log("in foo....")
     //There is no local x vairable so it will look into Global scope.
    if(x < 100){
        var msg ="hello" //var makes it a global scoped
        // let makes in blocked scope , 
        //console.log will throw Refrence error
        //let msg ="hello"
    }
    console.log("msg :", msg)
}

console.log("App over")