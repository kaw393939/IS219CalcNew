const Calculation = require('../src/models/Calculation');
const MathOperations = require('../src/Operations/MathOperations');

test('Test of Calculation Instantiation', () => {
    //I need to test the instantiation of the calculation object
    let calculation = new Calculation(1,2,MathOperations.Sum);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(MathOperations.Sum);
});
test('Test Get results function', () => {
    //I need to test the get results function
    let calculation = new Calculation(1,2,MathOperations.Sum);
    expect(calculation.GetResults()).toBe(3);
});