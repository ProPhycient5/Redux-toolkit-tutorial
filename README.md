# Redux-toolkit-tutorial
It is compilation of both theory and practical aspects of Redux

## 1. What is Redux ?
##### Redux is a predictable state container for JavaScript apps.

Three main sections:
(i) It is for JS apps.
(ii) It is a state container.
(iii) It is predictable.

## (i) JS apps.
 - Redux is not limited to React.
 - Can be used for React, Angular, Vue or even vanilla JS
 - Redux is library for JS application

## (ii) State container
- Redux stores the state of your application.
- State of an app is the state shared by all the individual components of the app.
- Redux will store and manage the application state.

## (iii) Predictable
Predictable in what way🤔 ?
- Redux is a state container.
- The state of the application can change
Ex: todo list app --> item(pending) --> item(completed)
- In redux, a pattern is enforced to ensure all state transitions are explicit and can be tracked.
- This changes to your application's state become predictable(persisted across the app)

## What is Redux Toolkit?
- It is the official, opinionated, batteries-included toolset for efficient Redux development
- It is also intended to be the standard way to write Redux logic in your application.

## Why is Redux Toolkit required ?
##### Though Redux is great, but it does have a few shortcomings
 - Configuring redux in an app seems complicated.
 - In addition to redux, a lot of other packages have to be installed to get redux to do something useful.
 - Redux requires too much boilerplate code.

#### Redux toolkit serves as an abstraction over redux. It hides the difficult parts ensuring you have a good developer experience.

## React-Redux
- We have React(UI library) and Redux(state management library) but in order to leverage both in simplified manner, we have to bind together using React-Redux.
- React-Redux is the official Redux UI binding library for React.

## Summary:
1. React is a library used to build user interfaces
2. Redux is a library for managing state in a predictable way in JS application.
3. Redux toolkit is a library for efficient redux development.
4. React-redux is a library that provides bindings to use React and Redux(Toolkit) together in an application.

## When should I use redux in my react application ?
1. When the app have large amounts of state that are needed in my places.
2. The app state is updated frequently over time.
3. The logic to update the state may be complex.
4. The app has a medium or large sized codebase, and might be worked on by many people.

## Immer
We have used Immer for updating immutable state in reducer function
