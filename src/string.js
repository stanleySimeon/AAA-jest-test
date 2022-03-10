// Function stringLength start
const stringLength = (string) => {
    const characterCount = string.length;
    if (characterCount) {
        if (characterCount <= 10) {
            return characterCount;
        }
        throw new Error('String can\'t be longer than 10 characters');
    }
    throw new Error('Unexpected Empty String');
};
// Function stringLength end

// Function reverseString start
const reverseString = (string) => string.split('').reverse().join('');
// function reversedString end

// Function Calculator start
function Calculator() {
    this.add = (a, b) => a + b;
    this.substract = (a, b) => a - b;
    this.multiply = (a, b) => a * b;
    this.divide = (a, b) => {
        if (b === 0) {
            throw new Error('Can\'t Divide By Zero');
        }
        return a / b;
    };
}
// Function Calculator end

// function capitalize start
const capitalize = (string) => {
    if (typeof string !== 'string') {
        throw new Error('Error: Cannot capitalize other type than String');
    }
    const newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
};
// Function capitalize end

// Export function 
module.exports = {
    stringLength,
    reverseString,
    Calculator,
    capitalize,
};
// End export function