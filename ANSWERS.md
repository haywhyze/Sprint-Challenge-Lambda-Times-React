# Answers to Self Study Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
  -> PropTypes are used to make runtime assertions about what type of data a component is expecting to render appropriately.
  -> It is important to type check our data to catch errors early.

- [x] Describe a life-cycle event in React?
  -> In React ecosystem, a component undergoes different stages from birth to death. A lifecycle event is a method that is called at a particular stage. For example, ComponentDidUpdate is called every time a component gets updated.

- [x] Explain the details of a Higher Order Component?
  -> In essence, a Higher Order Component can be related to a Higher Order Component except that instead of taking a function as argument, it takes acomponent. It takes in a component and returns an enhanced version of the component.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.
  
   **Inline Styles**
  - Makes styling a lot more specific to elements in a component
  
  **External Stylesheets**
  - Seperates logic from design.
  
  **Using libraries like styled-components**
  - Makes styling specific to components and avoids style leaks.
