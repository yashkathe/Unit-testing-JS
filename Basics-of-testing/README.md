# Basics of Testing

## Basic test file

We name our test files as follows:  
- file.test.js
- file.spec.js

Our test runner will pick up this file and execute it.  

## Importing keywords

To make the functions from vitest global so you dont have to import it. We can add to flag

```json
{
    "scripts":{
        "test":"vitest --globals"
    }
}
```

## Writing a test file

## it / test

**'it'** and **'test'** functions are both similar  

'it' takes two arguments:
1. A string which describes the test and what it does
2. Anonymus function which has our testing logic code

```js

import { it, expect } from 'vitest';

it('should summarise all number values in an array', () => {

});

```

## expect 

First of all we import the function(unit) we want to test.  
We then execute it and get the result.

Now we pass this result to the **'expect'** function.  
And furter chain a additional method to this.  
Eg: 1. ToBe  

_All the chained methods start with to_

```js
import { it, expect } from 'vitest';

import { add } from './math';

it('should summarise all number values in an array', () => {
    const result = add([ 1, 2, 3 ]);

    expect(result).toBe(6);
});
```

So we pass and argument to our function and expect out result **toBe** 6

## .not

.not is added to expect a opposite result

```js
    expect(resultFn).not.toThrow();
    expect(result).not.toBe(expectedResult);
```

It is chained with expect  

## Running our tests

We can use any of the following command to run our test files

```bash
npm run test
npm test
```

Understanding the flags

```json
{
    "scripts":{
        "test":"vitest --run --reporter verbose --globals"
    }
}
```

- **--run:** runs our test files once
- **-- reporter verbose:** provides a detailed output
- **-- globals:** We dont need to import functions in test files

Now we also have **Watch Mode**

```bash
npm run test:watch
```

```json
{
    "scripts":{
        "test:watch":"vitest"
    }
}
```

Now this will keep watching our code continuously  

## Following the AAA pattern

1. **Arrange** - Define the testing environment and values
2. **Act** - Run the actual code / function that should be tested
3. **Assert** - Evaluate the produced the value / get result and compare it to the expected value

```js
it('should summarise all number values in an array', () => {

    // Arrange
    const numbers = [ 1, 2, 3 ];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);

    expect(result).toBe(expectedResult);
});
```

Keep your tests simple and concise  

### Some more tests

```js
it('should yield NaN if at least one invalid number is provided', () => {

    const inputs = [ 'invalid', 1 ];

    const result = add(inputs);

    expect(result).toBeNaN();

});

```

```js
it('should yield a correct sum if an array of numeric string values is provided', () => {

    const inputs = [ '1', '2' ];

    const result = add(inputs);

    const expectedResult = inputs.reduce((acc, curr) => +acc + +curr, 0);

    expect(result).toBe(expectedResult);
});
```

## Testing for Errors - ToThrow()

Checking whether a certain unit throws an error

```js
it('should throw and error if no value is passed into a function', () => {

    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow();

});
```

- Here we store our function in a other function    
- So the function we want to test will only run when the function which is storing it, is called  
- So we will let vitest execute it by calling external function and expect it to throw  

## Testing for thrown errors and error messages


```js
it('should throw an error if provided with multiple arguments instead of an array', () => {

    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
        add(num1, num2);
    };

    expect(resultFn).toThrow(/is not iterable/)

});

```

Here we are checking with **regular expression** that the error message contains "is not iterable"  

## Test with multiple assertions (expectations)

Typically, it is a good idea if one test tests one thing.  

But there are scenarios where multiple expectations do make sense.  

```js
it('should yield Nan for non-transformable values', () => {

    const input = 'invalid';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();

});
```

## Test suites - describe

When we have multiple tests in one file, it can be hard to maintain them but that's not the biggest problem.  

Instead, it can be hard to reason about the output when you run your tests. 

It is common to organize your tests into so-called **test suites**.

To create test suites vitest provides a function called **describe**.

```js
import { describe } from 'vitest';
```

**describe** takes two arguments  
1. Description of test suit (string)
2. Anonymus function which stores all the tests related to the test suites

```js

describe('validateNumber()', () => {

    it('should throw an error if NaN is provided', () => {
        const input = NaN;
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
    });

    it('should throw an error with a message that contains a reason (invalid number)', () => {
        const input = NaN;
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow(/Invalid number/);
    });

    it('should throw an error if a non-numeric value is provided', () => {
        const input = '1';
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
    });

    it('should not throw an error, if a number is provided', () => {
        const input = 1;
        const validationFn = () => validateNumber(input);
        expect(validationFn).not.toThrow();
    });

});

```