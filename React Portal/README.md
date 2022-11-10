# React Portal

React Portal provides a way to render child component into dom node while sitting outside the parent Dom hierarchy.
The Portal's most common use cases are when the child components need to visually break out of the parent container as shown below.

1. Modal dialog boxes
2. Tooltips
3. Hovercards
4. Loaders

In this project I have used React Portal to render a modal component. Of course, I could use traditional way to create a modal component and then render it conditionaly, but in this approach we might face some problems related to the inheriting css properties like overflow or z-index from parents or ancestors.

React Portal stays Independent from the root tree thats why it doesn't inherit properties. Thats why displaying a modal or loaders using React portal is a very common and popular choice.

However, There are couple of things need to keep in mind and these are:

1. Event Bubbling will work as usual.
2. React has control over Portals nodes and its lifecycle.
3. Portals only effects the dom stracture not the component tree.

In this project, I simply have a App component where I have bunch of information related to the app and an input and a button. The idea here is we ask user to enter their name and click the button, when users click the button a modal pop up and display the name. Pretty simple...

For that, I have created a <div> with a id of portal in the index.html file and then I created a functional component where I imported ReactDom from react-dom package. Then in the return statement of that component I declared ReactDom.createPortal() which take 2 arguments. The first argument is the element that will be rendered to the dom and second one is the dom node which in this case the <div> with id portal i created in the index.html file. And I also add some styling so it looks like a modal and finaly, I rendered the component conditionaly when the button was clicked.

Hope that will help a bit. Thank you for read it through.
Happy Coding...