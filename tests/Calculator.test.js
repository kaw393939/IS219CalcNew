const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    //assigning the results of the calc sum method to an object, calculator returns an object
    let calculation = Calculator.Sum(1,2);
    //expect is used to test if the results are correct
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.GetResults()).toBe(3);
});
test('Calculator subtract two numbers', () => {
    //assigning the results of the calc sum method to an object, calculator returns an object
    let calculation = Calculator.Difference(1,2);
    //expect is used to test if the results are correct
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.GetResults()).toBe(-1);
});