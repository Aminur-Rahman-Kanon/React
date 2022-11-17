# useState hook

## what is useState:

useState hook is a special function that allow us to add React state in functional component. Basically useState is the ability to encapsulate local state in a functional component.

React functional component doesn't have this keyword, we cant assign this.state in functional component, instead we use useState hook to declare states in functional components.

UseState encapsulate only singular value from the state, for multiple state need to have multiple useState calls. A state can be an object, an array, a boolean, or any other type. We can also pass a function as an argument if the initial state has to be computed. And the value returned by the function will be used as the initial state. If we dont pass anything in the useState() hook then the initial state will be undefined


## When to use:

We need useState hook to write a statefull functional component. When we write a functional component and we need some state in it then we should use useState.

## How to use:

To use useState you need to import useState from react.

" import { useState } from 'react'; "

useState hook is a special function that takes a value as an argument which is called the initial state and returns an array of two entries. The first element is the initial state on first render or the current state on the following renders, and the second element is a function that is used for updating the state. consider the following example:
  
  " const [count, setCount] = useState(0); "

Here, we called the useState hook with the value of 0 and since we know that useState return an array of 2 elements so we are using array destructuring to return the value as the first element as "count" and the setter function as the second element as setCount. Now we can use the count variable anywhere in this component or even pass it to the child component via props or context Api.

Whenever we need to update the value, we can use the "setCount" function.
  
However please note that, every time we call the setter function which update the state value trigger a re-render of the component meaning to call the functional component again causing the useState() hook to call again which return a new state variable with the updated value and the setter function hence we are able to use const here because we know that constant variable are not re-assignable.

# Rules of using hooks

## We need to follow 2 rules when using React hooks.

1. Call React hooks at the top level. Dont call hooks inside loops, condition and nested function because React relies on the order in which they were called meaning that React hooks call must be the same order in every render.
  
2. Only call hooks from a react functional components.

## example:

For demonstration purpose I created a app where I declared a useState() hook with value of 0 which returns an array of the value called count and a setter function called setCount. Then I passed the count variable to the return statement with a h3 tag to display it to the browser. I also created a component called Child where I declared 2 buttons to increment and decrement the count variable and imported it in the App component.

I could declare the buttons in the App component but just to demonstrates how to manipulate the count variable from another component I created the Child component. Now to increment and decrement the count variable I created 2 function called incrementCounter and decrementCounter and passed those to the child component via increment and decrement props. The incrementCounter function call the setCount function with the ( current value of count + 1 )where decrementCounter function call the setCount function with ( current value of count - 1 ). Finally in the Child component, I passed the functions to the corresponding button's onClick handler.

So when clicked on the increment button it increment the count value with 1 and decrement button decrement the count value with 1.

To understand how useState works behind the cover, I am leaving a code example below:

  const React = (() => {
    let hooks = [];
    let idx = 0
        
    const useState = initVal => {
        let state = hooks[idx] || initVal;
        let _idx = idx
        const setState = newVal => {
            hooks[_idx] = newVal
        }
        idx++;
        return [state, setState];
    }

    const render = (Com) => {
        idx = 0;
        const C = Com();
        return C;
    }

    return {useState, render}
    })()

    const App = () => {
        const [num, setNum] = React.useState(1); // 1
        const [text, setText] = React.useState('Hello') //2
        console.log({num, text});
        return {
            increment: () => setNum(num + 1),
            type: (word) => setText(word)
        }
    }

var app = React.render(App);
app.increment();
var app = React.render(App)
app.type('World');
var app = React.render(App)


Hope that helps a bit.
Happy coding ...
