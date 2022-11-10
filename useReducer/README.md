# useReducer hook

useReducer hook is an alternative to the useState hook. When we have complicated state logic in react application we can use useReducer instead of useState. If we use useContext with useReducer then we can have the similar functionality of redux which is another javascript library for managing centralized application state.

According to react documentation:

React guarantees that dispatch function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.

We need to pass a reducer function as first argument which is a pure function that takes a state as an argument and return the updated state, and a initial state as second argument which is generally an object, and then when we call the useReducer hook, it returns an array of the state and a dispatch function which we use to send an action to the reducer fuunction. An action is nothing but an object, where we generally declare a key of "type" and value of the action we want the reducer to take. after that, the reducer take action upon the action type and return an updated state. We get the updated or initial state from the state that useReducer returns.

In this project, I used useReducer and useContext hook so I can demonstrate how we can achieve redux like functionality. For that I initialize the useReducer hook in the app component which in turns return an array of state and dispatch function. I pass the state in the context provider component and wrap the childComponent with it.
The childComponent has a nested component named user where I imported the context object and call the useContext() with that context object and then I use the value of context object which contains the value from state we pass from the reducer and dsiplay that to the UI.

In the App component the useReducer also return a dispatch function, which we use to update the reducer. In this project, I have two buttons one is for incrementing the count in the state and one for decrementing. To update the state I pass the dispatch function in the onClick event. I pass an object containing a key of type and value of increment for incrementing and decrement for decrementing in the dispatch function. So whenever I click in the increment button it sends an object of {type: 'increment'} to the reducer function and 'decrement' for the decrement button and the reducer function return an updated state.

Please note that I have declared a const of ACTION which is an object of the action type as key value pair. The reason is when our application grows, we might have many actions and we might misspelled then when declaring them separately in the reducer and dispatch function. That's why its quite handy if we declare then in a variable and use from there.

Hope that helps a bit.

Happy coding ...