/**
 *  EXPORTS
 * 
 * **/

// Named exports
export function f() {}
export const one = 1;
export {foo, b as bar};

// Default exports
export default function f() {} // declaration with optional name
// Replacement for `const` (there must be exactly one value)
export default 123;

// Re-exporting from another module
export {foo, b as bar} from './some-module.mjs';
export * from './some-module.mjs';
export * as ns from './some-module.mjs'; // ES2020

/**
 *  IMPORTS
 * 
 * **/


// Named imports
import {foo, bar as b} from './some-module.mjs';
// Namespace import
import * as someModule from './some-module.mjs';
// Default import
import someModule from './some-module.mjs';

// Combinations:
import someModule, * as someModule from './some-module.mjs';
import someModule, {foo, bar as b} from './some-module.mjs';

// Empty import (for modules with side effects)
import './some-module.mjs';



/**
 *  SCRIPTS as Modules
 * 
 * **/

var myModule = (function () { // Open IIFE
    // Imports (via global variables)
    var importedFunc1 = otherModule1.importedFunc1;
    var importedFunc2 = otherModule2.importedFunc2;
  
    // Body
    function internalFunc() {
      // ···
    }
    function exportedFunc() {
      importedFunc1();
      importedFunc2();
      internalFunc();
    }
  
    // Exports (assigned to global variable `myModule`)
    return {
      exportedFunc: exportedFunc,
    };
  })(); // Close IIFE


 /**
 *  COMMON JS Module system example
 * 
 * **/

  // Imports
    var importedFunc1 = require('./other-module1.js').importedFunc1;
    var importedFunc2 = require('./other-module2.js').importedFunc2;

    // Body
    function internalFunc() {
    // ···
    }
    function exportedFunc() {
    importedFunc1();
    importedFunc2();
    internalFunc();
    }

    // Exports
    module.exports = {
    exportedFunc: exportedFunc,
    };


 /**
 *  AMD module system
 * 
 * **/

define(['./other-module1.js', './other-module2.js'],
  function (otherModule1, otherModule2) {
    var importedFunc1 = otherModule1.importedFunc1;
    var importedFunc2 = otherModule2.importedFunc2;

    function internalFunc() {
      // ···
    }
    function exportedFunc() {
      importedFunc1();
      importedFunc2();
      internalFunc();
    }
    
    return {
      exportedFunc: exportedFunc,
    };
  });


   /**
 *  ES6 Module System
 * 
 * **/

    import {importedFunc1} from './other-module1.mjs';
    import {importedFunc2} from './other-module2.mjs';
    
    function internalFunc() {
      ···
    }
    
    export function exportedFunc() {
      importedFunc1();
      importedFunc2();
      internalFunc();
    }