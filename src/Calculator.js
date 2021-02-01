const MathOperations = require('./Operations/MathOperations');
const Calculation = require('./models/Calculation')
class Calculator {
    //Static methods can me called without instantiating and are good for actions
    static Sum(a,b) {
        //this is how you create a new object and this is good for data and actions
        return new Calculation(a,b,MathOperations.Sum);
    }
    static Difference(a,b) {
        //this is how you create a new object and this is good for data and actions
        return new Calculation(a,b,MathOperations.Difference);
    }
}
module.exports = Calculator;
