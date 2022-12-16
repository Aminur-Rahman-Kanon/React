# useCallback

## what is useCallback
useCallback hook returns a memorized version of callback function. We want to memorize some callback function because functions are first class citizens in javascript. That means functions are reference type like objects and arrays. They can be return by another function, pass as an argument and compare with another function. Since functions are reference type, they would be re-created and assigned in a different memory location on each render. So if we pass a function as a props to a child component, that props going to be changed and causing the child component to re-render which might cause some performance issue in some cases. To prevent this problem we can use useCallback hook.

## How to use useCallback
Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

In this app, I showed a very basic use case of useCallback hook. In the app component I declared two state variable such as count and theme respectively and I have a button that increment the count variable. I also declared a function and pass as a props to a child component as well as count variable. In the child component, I simply display the count variable and I have a button that trigger the function got from the parent (App) component which basically changes the value of the theme variable. I also declared an useEffect hook to log a message to the console whenever the function changed which was passed as props to this component.

Now when I increment the count, naturally the App component will re-render and so the child component. Thats okay but the useEffect also runs even though I declared the useEffect hook in the child component to run only when the function was changed. This is because the function re-created on every render. To solve this I simply wrap the function with the useCallback hook, store this in a variable and pass as a props to the child component. Now when I increment the update the count variable I no longer see the useEffect hook to run again.

Hope this helps a bit.
Thank you and happy coding ...