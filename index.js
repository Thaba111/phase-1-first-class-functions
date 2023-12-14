// index.js

function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      // Function logic
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      // Function logic
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  