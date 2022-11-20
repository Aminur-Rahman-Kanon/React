# useEffect hook

## What is useEffect

useEffect is a function that allow us to execute side effect after rendering the dom. Some example of side effects are:

1. Fetching data from a server.
2. setting up a subscription.
3. changing Dom elements.

useEffect works the similiar way as componentDidMount, componentDidUpdate and componentWillUnmount of a class based component, but we need to define how its going to behave.

useEffect also let us to run a cleanup function which helps to prevent memory leaks and removes unnecessary and unwanted behaviours.

## Why useEffect

Lets consider a scenario where we need to fetch some data from an external server and we have a functional component and not using useEffect. At first we will declare the http request in the component body using fetch or axios, then if the request is successfull then we are going to store the result in a state variable using the setter function of useState. When the result was saved in the state variable the component will re-render and since the http request are in the component body the request will be called again causing to fetch data from the server again and store it to the state variable and then re-render again. In that way we will have an unwanted infinite loop. Since functional component doesn't have the componentDidMount lifecycle hook, we haven't got a better choice of calling the http request. That's why the useEffect is here for.

We can use the useEffect hook to prevent the above problem by calling the useEffect on component mount and declare the api call inside the hook and then we no longer have that problem.

Another useCase is to run a side effect on whenever a specific element is changed. Lets consider when a certain state changed we want to change the title meta tag to something. For that we need to pass the state variable in the dependency array of the useEffect which is the second parameter. Something like this:


`

useEffect(() => {

    document.title = 'useEffect is awesome'
    
}, [ state variable ])

`

Not just side effect, we can perform any other operation we want which is going to run after the dom being rendered.

## How to use useEffect

useEffect function takes 2 argument, first is a callback function and in that callback function we declare what the useEffect will do for us and second is the dependency array with what we control how useEffect is going to behave. For example, if we pass an empty array its going run on component mount, if we pass an array with one or more variable inside then useEffect will run on whenever any of these variable has changed and if we dont pass anything as the second argument then useEffect will run on every render.

Another important feature is the cleanup function. useEffect has been design in a way so we can return a function inside the useEffect function and that is called the cleanup function. Its important sometimes especially when we have side effect such as setInterval that need to be clear before the component unmount, we can optionally return a function inside the useEffect hook and useEffect will run it before component unmount if the useEffect hook was called on component mount or right before the next update if the useEffect hook was called with a dependency variable.

We can't call the useEffect hook inside of a loop, condition or any function because the hooks call order must be exactly the same on every render. Also,  we can call multiple useEffect in a component. However, please note that, if you have multiple useEffect in the component then all of them will finish execution one after one and then re-render.

## example

In this app, I want to fetch some data from a server and store them in a state variable when the component mount. For that I have declared an useEffect with a callback function as first argument and an empty array as the second argument, as a result the useEffect will invoke on component mount. Then I call the fetch method and pass the url of the server endpoint and if the request was successfull then I stored them in a state and since the useEffect runs only on mount so I dont have any infinite loop. Now since I made a http request on component mount, I should clean up the request or the useEffect hook before unmount. So at the top of the useEffect I initialize a "controller" object from "AbortController" interface then I took the "signal" property from that "controller" object. The signal property returns an AbortSignal object instance which can be used to communicate with or abort the request and I passed that signal property as an option inside the fetch option object. Now this associates the controller and signal with the fetch request and lets us cancel it anytime we want using AbortController.abort() method. So I return a function in the useEffect and in the function I called controller.abort() to clean up the useEffect before unmount.

Then I ran a for loop to create 6 buttons each with an onClick event attached with it. When clicked on a button it invoke a function that was passed in the onClick handler and that function update a state variable "changeUserId" which I passed in the dependency array of another useEffect hook, this useEffect hook whenever the "changeUserId" is changed is going to filter through the "todos" array and return those items which UserId is equal to the changeUserId and store the returned item in the "displayFilteredUser" state. In this useEffect hook there's nothing we can clean up so I log a text in the console jus for demonstration purpose and one thing to note here is that this useEffect cleanup function will run right before the next update.

In the component body whenever the displayFilteredUser contains value, I loop through the items and display it to the browser.

Hope this helps a bit.
Happy coding ...
