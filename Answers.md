# Answers

1.  What is React JS and what problems does it try and solve?
    
    React is a javascript library that is designed around building reusable components and prioritizes the rendering of the user interface. It conserves memory by selectively rendering only updated components and is more scalable than vanilla javascript for big or complex problems. React is considered to be unopinionated because it only includes what is neccesary for building your applicated; anything additional is imported.

2.  What does it mean to _think_ in react?

    Thinking in react is to look at a design and determine what can be broken in smaller, individual, reusuable components before starting a project. Only then compose a static application with components and their props before finally adding state and functionality.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    Functional components have access to data that has been passed through in the form of props; however, unlike Class components they lack their own state and life cycle methods. They are presentational because their main function is to present some piece of the user interface. Although Class components are more robust, it's generally a good idea to be mindful of what you're trying to accomplish with a component and choose accordingly.

4.  Describe state.

    A components state is an object that contains data that can be updated to keep track and display changes to the user interface.

5.  Describe props.

    In contrast to the mutable nature of state; props are read-only data used to pass data into and display data on a component.
