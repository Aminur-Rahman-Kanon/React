# useContext Hook

useContext hook takes a context object as argument and return the current context value provided in the value props from the Provider component. Mostly we use context to share data throughout components or the entire application, so that we don't have pass data as a props throughout the components nested inside which is called as props drilling.

To use useContext, first we have to create a context object using React.createContext(). Then we have to wrap the entire component tree where we need to share the data with that context object. Then we pass the value to the value props in the Provider component of the context object. Please note that we also need to export the context object so we can use that in the consumer component.

In the consumer component, after importing the context object, we need to call the useContext() hook passing in the context object, then we will get the value provided from the provider component. In that way we can share data very deep inside the component tree.

When the context object value is changed then all the component receiving that value will trigger a re-render even if the ancestor using useMemo.

In this project, I simply have a state that i want to share with grand children and giving that grand component ability to change the state. So for that First, I created the context object using React.createContext() and then in the return statement of my parent component I wrap the child component with that context object and declaring the Provider component we then pass the state in the value props.

Then in the grand child component I first import the context object and then called the useContext hook with that context object and then I used those vallue to render some UI. Since I pass the entire useState hook as a value, the grnad child who is receiving the value will be able to update the value by calling the setState function.

And that is the very simple use case og useContext.

Hope that will help you a bit.
Happy Coding...