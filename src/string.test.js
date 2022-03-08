const {
    stringLength, reverseString, Calculator, capitalize } = require('./string');

describe('String length count', () => {
    it('String: HelloWorld', () => {
        const charCount = stringLength('HelloWorld');
        expect(charCount).toBe(10);
    });
    it('String: HW', () => {
        const charCount = stringLength('HW');
        expect(charCount).toBe(2);
    });
    it('Empty String', () => {
        expect(() => {
            stringLength('');
        }).toThrow('Unexpected Empty String');
    });
    it('String longer than 10 characters', () => {
        expect(() => {
            stringLength('ThisWordIsLongerThanHello');
        }).toThrow('String can\'t be longer than 10 characters');
    });
});

describe('Reverse String', () => {
    it('Reverse Hello', () => {
        const reversedString = reverseString('Hello');
        expect(reversedString).toBe('olleH');
    });
    it('Reverse H', () => {
        const reversedString = reverseString('H');
        expect(reversedString).toBe('H');
    });
});

describe('Calculator', () => {
    const calculator = new Calculator();
    describe('Addition Method', () => {
        it('Add 20 to 27', () => {
            const result = calculator.add(20, 27);
            expect(result).toBe(47);
        });
        it('Add 7.3 to 0.7', () => {
            const result = calculator.add(7.3, 0.7);
            expect(result).toBeCloseTo(8.0);
        });
        it('Add 11 to -9', () => {
            const result = calculator.add(11, -9);
            expect(result).toBe(2);
        });
    });
    describe('Substract Method', () => {
        it('Substract 7 to 95', () => {
            const result = calculator.substract(7, 95);
            expect(result).toBe(-88);
        });
        it('Substract -7 to 95', () => {
            const result = calculator.substract(-7, 95);
            expect(result).toBe(-102);
        });
        it('Substract 100 to 0.5', () => {
            const result = calculator.substract(0.5, 100);
            expect(result).toBeCloseTo(-99.5);
        });
    });
    describe('Multiply Method', () => {
        it('Multiply 25 to 0.5', () => {
            const result = calculator.multiply(0.5, 25);
            expect(result).toBe(12.5);
        });
        it('Multiply -10 to 25', () => {
            const result = calculator.multiply(25, -10);
            expect(result).toBe(-250);
        });
        it('Multiply 2 to 0.5', () => {
            const result = calculator.multiply(0.5, 2);
            expect(result).toBeCloseTo(1.0);
        });
    });
    describe('Divide Method', () => {
        it('Divide 25/10', () => {
            const result = calculator.divide(25, 10);
            expect(result).toBeCloseTo(2.5);
        });
        it('Divide 25/-10', () => {
            const result = calculator.divide(25, -10);
            expect(result).toBeCloseTo(-2.5);
        });
        it('Divide 0.5/2', () => {
            const result = calculator.divide(0.5, 2);
            expect(result).toBeCloseTo(0.25);
        });
        it('Divide by Zero', () => {
            expect(() => calculator.divide(5, 0)).toThrow('Can\'t Divide By Zero');
        });
    });
});

describe('Capitalize', () => {
    it('Capitalize hello', () => {
        const capitalized = capitalize('hello');
        expect(capitalized).toBe('Hello');
    });
    it('Capitalize sum', () => {
        expect(() => capitalize(3)).toThrow('Error: Cannot capitalize other type than String');
    });
});