/**
 *  Async functions
 * 
 * **/
//returns promise
async function asyncFunc() {
    return 123; // (A)
  }

console.log(asyncFunc());

//returns undefined
async function asyncFunc1(){}
console.log(asyncFunc1());


//returned promises are not wrapped
async function asyncFunc2() {
    return Promise.resolve('abc');
  }
  
asyncFunc2().then((r) => console.log(r));


// this throws an error as await can only be used inside async functions
await asyncFunc1();

//example if immediately invoked async arrow functions
const val = (async () => {
    return Promise.resolve('abc');
})();

console.log(val);
val.then(v => console.log(v))

//example of invocation of multiple asynchronous functions with await and their sequential execution.

const pause =  async (x) => Promise.resolve(x);

async function sequentialAwait(){
const result1 = await pause(1);
const result2 = await pause(result1);
console.log(result2);
}
async function f1() {
   console.log('sss');
   await sequentialAwait();
   console.log('yyy')
}
f1();

sequentialAwait();


// concurrently running promises

const pause =  async (x) => Promise.resolve(x);
async function concurrentPromiseAll(){
    const result = await Promise.all([pause(1),pause(2)]);

    console.log(result);
}
    
concurrentPromiseAll();

/**
 * Await vs Return vs return Await 
 * 
 * **/




// await only

async function foo1() {
  try {
     await Promise.resolve('1');
  }
  catch (e) {
    return 'caught';
  }
}

async function exec() {
  let r = await foo1();
  console.log(r);
}

exec();


//await with return
  
async function foo1() {
  try {
    return await Promise.resolve('1');
  }
  catch (e) {
    return 'caught';
  }
}

async function exec() {
  let r = await foo1();
  console.log(r);
}

exec();



// return-awaiting

async function foo1() {
  try {
    return await Promise.reject('Error')
  }
  catch (e) {
    return 'caught';
  }
}

async function exec() {
  let r = await foo1();
  console.log(r);
}

exec();