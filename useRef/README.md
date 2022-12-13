# useRef

## what is useRef:
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

## use cases:
A common use case is to access a child imperatively. However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes. Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render.

Another use case is when we want to store some value in the global label of the component but dont want to re-render because an infinite loop might occur.

In this app, I illustrates a very basic and common use case of useRef and that is to access a dom node. I first created a ref with an initial value of null and then I pass it to the dom node I want to access. In this scenario its an input field. I created a function so whenever I click on a button I will access the dom node through ref .current property and focus it.

Hope that helps a bit.
Thank you and happy coding ...