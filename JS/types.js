/**
 *  NULL vs UNDEFINED
 * 
 * **/

// PRIMITIVE TYPES 
console.log(typeof undefined)
console.log(typeof null);
console.log(typeof true);
console.log(typeof 123);
console.log(typeof 'abc');

// example of primitive value being immutable
let str = "abc";
str.length = 1;
console.log(str.length);

//example of primitive value being immutable
let num = 123;
num.toString = function() { 
    return "abc";
};
console.log(num.toString());

//example of primitive value being passed by value
let num2 = 123;
let num3 = num2;
console.log(num3);
console.log(num2 === num3)


// OBJECT TYPES

console.log(typeof Number);
console.log(134 instanceof Number);
console.log(typeof new Map([]));
console.log(typeof new Set([]));
console.log(typeof new WeakMap([]));
console.log(typeof new WeakSet([]));
console.log(typeof function(){});
console.log(typeof new Date());
console.log(typeof new Error());
console.log(typeof new RegExp());
console.log(typeof new Promise(function(){}));
console.log(typeof Symbol());


//example of object is a reference type
let obj = {'a':1};
let obj2 = obj;
obj2.a = 2;
console.log(obj === obj2);
console.log(obj.a);

//example of objects being compared by identity
let obj3 = {'a':1};
let obj4 = {'a':1};
console.log(obj3 === obj4);


// importance of immutability example

const oldState = ["apple", "banana", "orange"];

// mutable
oldState[0] = "tomato";
const newState = oldState;
console.log(oldState === newState); // true - even with different content


// or immutable
const updatedState = [...oldState];
updatedState[0] = "tomato";
const newState = updatedState;
oldState === newState; // false