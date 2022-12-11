# useMemo

## what is useMemo
usMemo is a hook that return memorized value. It allow us to store some value in a cache or in memory. So we can call a function inside useMemo and it will remember the return value until its dependency changed. Like useEffect, useMemo takes a dependency array as second parameter.

Common use cases of useMemo are:
1. Expensive operation
2. Referencial equality

## How to use it
we wrap the expensive function call or the value we want to memorized with useMemo and like useEffect, we can pass a dependencty array to control its behaviour as a second argument. If we pass a dependencies in that array, useMemo will only run when the dependency's value has changed or we can make useMemo run on conponent mount by passing an empty array. If we dont pass a dependency array then it will run on every render.

However, Since we use useMemo to optimize our app, overusing it will affect the appplication performance. The reason is, useMemo will store returned value to a different location of the memory. The more we use useMemo the more the memory get loads up with values. Thats why we should only use it when we can't solve the problem by using vanilla js operation. Particularly, we want to use useMemo when we have a expensive function call that affecting the application performance.

Another scenario we can use useMemo is referencial equality, JS object array and functions are reference type. Every time our app re render, array, object or functions are pointed to different memory location even if the value contain the same. So if we have a scenario where some changes are depends on the objects or arrays are declared in the component(function) body then they will keep changing on every render. So in this case, we can use useMemo to overcome this problem.

In this app, I revealed a very simple and common use cases of useMemo. I have two state variable, one called count which I used to increment the value by 1 with a button pressed and another is word which I used to store the input from a input field. The increment function is very simple, it just update the count variable and render to the UI but the update user input is quite expensive. It loop through 200000000 times and then return the word from the input field and then render it to the UI. I intentionally made it quite long to demonstrates the problem we might face in this kind of scenario.

Now when I enter a word in the input field, it takes about a second or so to finish execute and render. The problem here is that when I increment the count variable it also takes the same amount of time to update even though update count function isn't expensive. The reason its slow because the expensive function execute whenever the component reload. We need to tell React to execute that function only when the word vaiable is updated. Thats where we can use useMemo to only execute the expensive function whenever the word variable has changed and return the value.

So I passed the expensive function inside the useMemo and passed the word variable in the dependency array. Now When I enter a text in the input field its still slow but when I update count variable its not slow beause the expensive function didn't execute.

Hope that helps a bit.
Thank you and Happy coding ...