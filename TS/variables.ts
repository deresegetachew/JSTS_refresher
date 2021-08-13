
let count: number = 1;


// this will throw an error variable is used before being assigned
let firstName:string;
console.log(firstName);

let age: number = undefined;
console.log(age);

// will throw an error  Type 'null' is not assignable to type 'number'.
const grade: number = null;
console.log(grade);

let lastName: string = 'hello';
console.log(lastName);


//func1 type definition
let func1: (num: number) =>  string;

// use func1 here


//function with callback.
function stringify123(cb:(num: number) => string) {
    return cb(123);
  }

let cbf = (num: number): string => num.toString();
const val: string  = stringify123(cbf)
console.log(val);


// defining function return types:
function stringify456(num: number): string {
    return num.toString();
}

console.log(stringify456(456));

//fix this function.
function funcGG(): void {
    return 'a';
}

// function with optional parameter

function funcABB(ab?:string): string {
    return ab || '';
}

console.log(funcABB('ab'));


// Rest Parameters

function joinNumbers(...nums: number[]): string {
    return nums.join('-');
  }

  console.log(joinNumbers(1,2,3,4));



  //union parameters

  function joinStringOrNumbers(...data: number[] | string []): string {
    return data.join('-');
  }

    // will this work ?
    // console.log(joinStringOrNumbers(1,2,'a','b'));

    console.log(joinStringOrNumbers(1,2));

    console.log(joinStringOrNumbers('a','b'));

  
// this wont work in TS but works in JS
let jj: number;
console.log(jj);

//now this will work in TS
let jj2 : null|undefined;
console.log(jj2);