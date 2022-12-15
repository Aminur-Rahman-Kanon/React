# useLayoutEffect

## What is useLayoutEffect
uselayoutEffect almost indentical to useEffect. The main difference is useEffect runs asynchronously in the background and doesn't intereupt do rendering dom and useLayoutEffect fires synchronously after the DOM mutation and before the browser get to paint the new changes. This hook is especially useful for performing DOM measurement like scroll height, scroll width, scroll position and other style on any DOM element.

The useLayoutEffect hook works in the same phase as componentDidMount and componentDidUpdate methods. We should only use useLayoutEffect if useEffect isn’t outputting the expected result.

In this app, I showed how useLayoutEffect works. First, I declared the useLayoutEffect with an empty array as a second parameter and in the callback function I ran a for loop over 2000000000 times to make the app run slower so we can see the difference. In the return statement of this component I simply have a h1 tag with some text. Now when I run this app, the useLayoutEffect will run before rendering the dom and since the useLayoutEffect contain a massive for loop, it is going to take a noticable amount of time to finish execution. After the component finish with useLayoutEffect it will flush the dom to the screen. As a result we will see a delay rendering the dom to the screen.

If we use useEffect in the above scenaio, we will see that the loop execute in the background doesn't interupt other execution and the dom renders immidiately.

Hope that helps a bit.
Thank you and happy coding ...