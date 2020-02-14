console.log("in two.js")

// imports are hoisted to the top,
// as a result console.log of one.js gets executed first
import foo1 from "./one.js"
import bar from "./one.js"

foo1();
bar(); 