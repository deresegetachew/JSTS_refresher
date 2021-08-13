//Generic function
function joinStringOrNumbers<T>(... data: T[]): string {
    return data.join('-');
}

console.log(joinStringOrNumbers<number>(1,2,3));


// Generic Class : 

class Stringify<T> {
    add(a:T,b:T):string {
        return `${a} - ${b}`;
    }
}

let _stringify = new Stringify<number>();
console.log(_stringify.add(1,2));


// Generics of more than one type

function concat<T,Y>(a:T,b:Y): string[] {
    return [`${a}`,`${b}`]
}

console.log(concat(1,'a'))

// constrained generic function

function add<T extends number | string> (a:T,b:T):string {
    return a + '-' + b;
}

// add([],'a');  //this wont work
// console.log(add(1,'a')); // this wont work we are expecting only of one type
console.log(add(1,2)); //works
console.log(add('a','b')); //works