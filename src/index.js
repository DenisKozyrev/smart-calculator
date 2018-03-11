class SmartCalculator {
    constructor(initialValue) {
        this.result = initialValue;
        this.operations = [];
    }

    getResult() {
        const operation = this.operations.reduce(function(result, item) {
            return result + item.operation + item.value;
        }, this.result.toString());

        return eval(operation);
    }

    addOperation(operation, value) {
        this.operations.push({
            operation: operation,
            value: value
        });
    }

    add(number) {
        this.addOperation('+', number);
        return this;
    }

    subtract(number) {
        this.addOperation('-', number);
        return this;
    }

    multiply(number) {
        this.addOperation('*', number);
        return this;
    }

    devide(number) {
        this.addOperation('/', number);
        return this;
    }

    pow(number) {
        this.addOperation('**', number);
        return this;
    }

    toString() {
        return this.getResult();
    }
}

module.exports = SmartCalculator;