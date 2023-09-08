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

# Writing a test file

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