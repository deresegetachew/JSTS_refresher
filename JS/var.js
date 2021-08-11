/**
 *  var
 * 
 * 
 * **/


// scope
ZZ = 200; // implicit global bad pattern
var z = 100; // Global Scoped

function fOne(){
    var a = 1;
    return a;
}

function fTwo(){
    var b = 2;
    return b;
}

function fThree(){
    return z;
}

function fFour(){
    return a;
}

function fFive(){
    return ZZ;
}

console.log(`fOne: ${fOne()} fTwo: ${fTwo()}, fThree: ${fThree()}`);
console.log(`fFfive implict global`, fFive());
console.log(`fFour throws an error: ${fFour()}`)

// Hoisting
console.log(`var x is hoisted so we can access it before  definition, but trying to access a variable before declaring and initializing it will return undefined`,x)
var x = 1;


//this will throw reference error bc we are not declaring it we are just initializing it.
//only declaration is hoisted not initialization; and this one is not declared.
console.log(y);
y = 100;


// an example of hoisting complexities with var:
// the output is undefined why ?

var x = 100;

function hoist() {
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();


// Fixing the above complexity with block scoping 
let lv = 100;

function hoist() {
  if (false) {
    let lv = 200;
  }
  console.log(lv);
}

hoist();

