const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');

test('Test of Calculation Instantiation', () => {
    //I need to test the instantiation of the calculation object
    let op = Sum
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});
test('Test Get results for Sum function', () => {
    //I need to test the get results function
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});
test('Test Get results for Difference  function', () => {
    //I need to test the get results function
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});
test('Test Get results for Product  function', () => {
    //I need to test the get results function
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Quotient  function', () => {
    //I need to test the get results function
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(.5);
});