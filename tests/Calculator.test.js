const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    //assigning the results of the calc sum method to an object, calculator returns an object
    let result = Calculator.Sum(1,2);
    //expect is used to test if the results are correct
    expect(result).toBe(3);
});
test('Calculator difference between two numbers', () => {
    //assigning the results of the calc sum method to an object, calculator returns an object
    let result = Calculator.Difference(1,2);
    //expect is used to test if the results are correct
    expect(result).toBe(-1);
});
test('Calculator product of two numbers', () => {
    //assigning the results of the calc sum method to an object, calculator returns an object
    let result = Calculator.Product(1,2);
    //expect is used to test if the results are correct
    expect(result).toBe(2);
});
test('Calculator quotient of two numbers', () => {
    //assigning the results of the calc sum method to an object, calculator returns an object
    let result = Calculator.Quotient(1,2);
    //expect is used to test if the results are correct
    expect(result).toBe(.5);
});
test('Calculator adding to calculations', () => {
    //assigning the results of the calc sum method to an object, calculator returns an object
    let result = Calculator.Quotient(1,2);
    let calculations = Calculator.Calculations

    calculations.forEach(function (calculation) {
        console.log(calculation.GetResults());
    });

});