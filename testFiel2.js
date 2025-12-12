function testConcatenateStrings() {
    function concatenateStrings(str1, str2) {
        return str1 + str2;
    }

    const result = concatenateStrings('Hello, ', 'World!');
    if (result !== 'Hello, World!') {
        throw new Error(`Test failed: expected 'Hello, World!' but got '${result}'`);
    }
    console.log('All tests passed!');
}

if (require.main === module) {
    testConcatenateStrings();
}   