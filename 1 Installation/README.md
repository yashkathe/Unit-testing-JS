# Introduction

What is **Testing** ?   
Verify if something works as intended  
1. Manual Testing
2. Automated Testing

## Unit Testing

Unit testing is testing the smallest testable unit of an application  

What are **units** ?  
Units are building blocks of our app.  
Eg: function, class, component etc

## Unit testing vs Integration testing vs E2E testing
| Unit Testing                                          | Integation Testing                      | E2E Testing                                  |
| ----------------------------------------------------- | --------------------------------------- | -------------------------------------------- |
| Testing the individual building blocks of application | test the combination of building blocks | Test entire flows and application features   |
| Every building block is tested standalone             | Verify if building blocks work together | Test the actual 'things' real users would do |

<p align="center" width="300">
<img src="https://assets.cdn.prod.twilio.com/images/1pafGbI1FKxvy_xUcTOiEruKNtMWadUCAI_v47hYnsrWgj.width-800_XlISurb.png" width="175" />
</p>

## Test driven development
<p align="center" width="300">
<img src="https://marsner.com/wp-content/uploads/test-driven-development-TDD.png" width="400" />
</p>

# Setup and Testing Software

## Testing Setup

Automated tests = Test Runner + Assertion Library

| Test Runner                        | Assertion Library                                           |
| ---------------------------------- | ----------------------------------------------------------- |
| Runs your test (the testing code)  | Used to define expected outcomes                            |
| Automativally detects testing code | Checks whether expectations are met                         |
| Displays result                    | Supports all kinds of expectations and modes (async / sync) |
| eg: Jest, Karma                    | eg: Jest, Chai                                              |


## Jest
```bash
npm install --save-dev jest
```   

Jest is not so good and provides only experimental support with ES-module file types (import export syntax in nodejs) 


## Vitest

Instead we can use Vitest which provides support for both ES-module and commonJS files  

```bash
npm install --save-dev vitest
```   

in **package.json**

```json
"scripts":{
    "test": "vitest --globals"
}
```

**-- globals** flag allows us to use functions directly provided by vitest without the need to importing them 