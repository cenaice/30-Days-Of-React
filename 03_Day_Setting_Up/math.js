// In React we do not use link to access modules or packages, instead we import the module by doing this:

// math.js
export const addTwo = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;



// 'export default' is usedd to export a single value as the defualt export, 
export default (function doSomeMath() {
  return {
    addTwo,
    multiply,
    subtract,
  };
});

