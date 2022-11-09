# React Error Boundary

Errors are bound to happen in our applications. When an error raise, the whole applicaion breaks, meaning React will unmount all components till we reload the app. It would be quite nice if we could handle those errors so our app doesn't break and we can continue using it. React 16 introduced a new concept "Error Boundary" where we create a class component then we use either static getDerivedStateFromError or componentDidCatch lifecycle method or both, then we pass the component that might occur error as children. As a result if an error raise in the child component then the class component will catch the error and then we can render a fallback UI or log it to a error logging service.

In that way, we can catch error in the constractor, life cycle method and rendering but not for:

1. Event Handlers.
2. Asynchronous code.
3. Server side rendering.
4. Error thrown in the Error boundary component itself.

We can use try catch block to catch errors in the above scenerios. But React provides a package called "react-error-boundary" where we can catch errors in the runtime as well as in the case for event-handlers and asynchronous operation.

In this project, I have demonstrates how we can use "react-error-boundary" to catch errors in our app.

The ErrorBoundary component is the main component available in react-error-boundary. It allows us to implement the typical React error boundary with less code.

ErrorBoundary component has a couple of props that we can use. Such as:

1. children
2. fallbackComponent
3. fallbackRender
4. fallback
5. onError
6. onReset
7. resetKeys
8. onResetKeyChange

However, I have used the fallbackComponent only since this project is very simple where I have created component called Test where I have wrapped it with the ErrorBoundary component from "react-error-boundary" in the App component. In the Test component, the user left with a button where it invoke a throw new Error(), since the button trigger an event, generally the error will not catch by the error boundary. To catch the error triggered by the event we have to import and call the onErrorHandler hook from the 'react-error-boundary in the Test component.

I also created a fallback component which i passed in the fallbackComponent props in the ErrorBoundary component. This fallbaack component will receive error, componentStack and resetErrorBoundary props. From which we can display the error in the display and pass the resetErrorBoundary in a button which will reset the ErrorBoundary component to the initial state.

Please note that I haven't used onReset or resetKeys because i dont have a state variable in this app. So just by calling the resetErrorBoundary function will reset the ErrorBoundary component.

Here is a link for complete documentation of 	["react-error-boundary"](https://github.com/bvaughn/react-error-boundary/blob/master/README.md)

Hope that will help you a bit.
Happy Coding...