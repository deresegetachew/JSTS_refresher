

//Defining and using interface types
interface Point {
    x: number,
    y: number,
  }

let p: Point ;


type TPoint = {
    x: number,
    y: number
}
  
let p2: TPoint;


//optional fields and methods

interface IPerson {
    name: string;
    company?: string;
    speak(): string;
}

type TPerson = {
    name: string;
    company?: string;
    speak(): string;
}

// Method definitions

interface HasMethodDef {
    simpleMethod(flag: boolean): void;
}

interface HasFuncProp {
    simpleMethod: (flag: boolean) => void;
}

const objWithMethod: HasMethodDef = {
    simpleMethod(flag: boolean): void {}
}

const objWithMethod2: HasFuncProp = objWithMethod;