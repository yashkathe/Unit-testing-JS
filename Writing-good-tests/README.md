# Writing good tests

## What should and shouldn't be tested

Only test your code and not third party's code  

We should only test our code and not code from third party packages, libraries, frameworks etc thats built onto the environment we are working with.  

Because we don't want to test the code we can't change.  
Eg; browser apis such as querySelector, FormData, fetch api etc  

So we don't want to test if query selector works technically buy we might wanna check if there is a form in HTML document

## Writing good tests  

1. Follow **Arrange Act Assert**
2. Only test **one thing per test**
3. Keep the tests basic and simple and **focus on the essence of the thing** you're testing
4. Keep you number of **assertions ('expects') low**


## Only test one thing

- What is "one thing" ?  
One feature eg: validate input or transform it.  

