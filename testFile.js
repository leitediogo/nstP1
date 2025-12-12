function concatenateStrings(str1, str2) {
    return str1 + str2;
}

function testConcatenateStrings() {
    const result = concatenateStrings('Hello, ', 'World!');
    if (result !== 'Hello, World!') {
        throw new Error(`Test failed: expected 'Hello, World!' but got '${result}'`);
    }
    console.log('All tests passed!');
}

if (require.main === module) {
    testConcatenateStrings();
}       

module.exports = concatenateStrings;
// Example usage:
// const concatenateStrings = require('./testFile');
// console.log(concatenateStrings('Hello, ', 'World!')); // Output: Hello, World!       


// To run this file, use the command: node testFile.js
