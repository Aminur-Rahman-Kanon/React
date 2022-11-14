# useDeferredValue

useDeferredValue is the new feature in react 18 concurent model. Its almost similiar to useTransition hook, but we pass a state value as a argument instead of a setState call. useDeferredValue will take the state value and will wait until React finish any other state update and rendering dom. When finish, then useDeferredValue will return its value.

It works the same way as debouncing, but useDeferredValue doesn't take an arbitary amount of time now instead it waits until react finish all state update and rendering dom. So thats how useDefferedValue works.

In this App, I have a state variable "value" which hold the value of user inputs and when the state updates I basically took the value and loop through 10000 times to render 10000 items in the browser. In that way, this app would be quite irresponsive as it is creating and rendering 10000 items in the browser. Even the input field become irresposive and that is not good for user experience.

we can use some other method as well as useDeferredValue in this case such as lazy loading, pagination system etc but just for demonstration purpose I am going to use useDeferredValue here.

So first we need to find out from where the slow render causing. Turns out the useMemo hook operating a for loop for 10000 times and it is depends on the state value meaning when the state changed the useMemo hook is going t fire and since its got an expensive loop we can use useDeferredValue to make the loop or useMemo hook to fire only when React finished other urgent update. So if we pass the state "value" to the useDeferredValue hook then it will only pass the deferred "value" to the useMemo dependency array hence the useMemo hook is going to fire and we wiil see the 10000 items in the browser.

Hope that helps a bit.
Happy coding ...