//Generic function
function joinStringOrNumbers<T extends string >(... data: T[]): string {
    return data.join('-');
}

console.log(joinStringOrNumbers<boolean>();


// Generic Class : 

class Stringify<T> {
    x:T
    add(a:T,b:T):string {
        return `${a} - ${b}`;
    }
}

let _stringify = new Stringify<boolean>();
console.log(_stringify.add(1,2);
_stringify.x


// Generics of more than one type


function concat<T,Y>(a:T,b:Y): string[] {

    return [`${a}`,`${b}`]
}

console.log(concat<number,string>(1,'a'))

// constrained generic function

function add<T extends number | string> (a:T,b:T):string {
    return a + '-' + b;
}

// add([],'a');  //this wont work
// console.log(add(1,'a')); // this wont work we are expecting only of one type
console.log(add(1,2)); //works
console.log(add('a','b')); //works