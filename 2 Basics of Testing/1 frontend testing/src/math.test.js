import { it, expect } from 'vitest';

import { add } from './math';

it('should summarise all number values in an array', () => {

    // Arrange
    const numbers = [ 1, 2, 3 ];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
    expect(result).toBe(expectedResult);

});

it('should yield NaN if at least one invalid number is provided', () => {

    const inputs = [ 'invalid', 1 ];

    const result = add(inputs);

    expect(result).toBeNaN();

});

it('should yield a correct sum if an array of numeric string values is provided', () => {

    const inputs = [ '1', '2' ];

    const result = add(inputs);

    const expectedResult = inputs.reduce((acc, curr) => +acc + +curr, 0);

    expect(result).toBe(expectedResult);
});

it('should yield 0 if empty array is provided', () => {

    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});

it('should throw and error if no value is passed into a function', () => {

    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow();
    // expect(resultFn).not.toThrow();

});

it('should throw an error if provided with multiple arguments instead of an array', () => {

    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
        add(num1, num2);
    };

    expect(resultFn).toThrow(/is not iterable/)

});
