/**
 *  Date
 * 
 * **/

//this in addis ababa will return -180 minutes. since we are UTC+3
console.log(new Date().getTimezoneOffset());

//conversion from local to UTC
//this will output 2077-01-26T21:00:00.000Z even though the local date passed to new date was 27

console.log(new Date(2077,0,27))
console.log(new Date(2077,0,27).toISOString())


//if a date only contains a string it will be converted to UTC
console.log(new Date('2077-01-27').toISOString())

// with Z and with out Z difference
console.log(new Date('2077-01-27T00:00').toISOString())
console.log(new Date('2077-01-27T00:00Z').toISOString())


