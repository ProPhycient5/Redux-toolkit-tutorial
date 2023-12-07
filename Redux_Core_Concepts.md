### 1. Consider a real world scenario, where there is a cake shop who sells a varieties of cakes.
### 2. You visited the cake to buy a cake by placing an order.

## Here are few entities:
1. Shop - Stores cakes on a shelf.
2. Shopkeeper -Behind the counter
3. Customer - At the store entrance

## Here are some usual activities:
1. Customer - order a cake
2. Shopkeer - Box a cake from the shelf 
3. Shop register - Receipt to keep track

## The following table clearly describes the analogies between the real world scenario and Redux concepts

![redux_core_concepts](https://github.com/ProPhycient5/Redux-toolkit-tutorial/assets/71059909/ad0e5cf4-05b3-4213-9d7f-d326284b323b)

- A `store` that holds the state(information in the form of an global object) in app.
- An `action` that implies interaction/activities in an app.
- A `reducer` which handles the action and manages how to update the state.

## `Actions`:
- The only way your application can interact with the store.
- Carry some information from your app to the redux store.
- It is a plain JS object
- Have a `type` property that describes something that happened in the application
- The `type` property is typically defined as string constants.

## `Reducers`:
- Specify how the app's state changes in response to actions sent to the store.
- Function that accepts state and action as arguments and returns the next state of the application
- (previousState, action) => newState

## Redux `Store`:

- One store for the entire application.

#### Responsibilities:
- Holds application state
- Allow access to state via getState()
- Allow state to be updated via dispatch(action)
- Registers listeners via subscribe(listener)
- Handles unregistering of listeners via the function returned by subscribe(listener) 

## Three Principle of Redux:
- ### First Principle
  - "The global state of your application is stored as an object inside a single store".
  - Maintain our application state in a single object which would be managed by the Redux store.

  - Ex:
Cake Shop -
Let's assume we are tracking the number of cakes on the shelf
{
numberOfCakes: 10
}

- ### Second Principle
  - "The only way to change the state is to dispatch an action, an object that describes what happened".
  - To update the state of the app, you need to let Redux know about that with an action.
  - Not allowed to directly update the state object.
  - Ex:
Cake Shop: Scan the QR code and place an order - Cake_Ordered

{
 type : `CAKE_ORDERED`
}

- ### Third Principle
  - "To specify how the state tree is updated based on actions, you write pure reducers".
  - Reducer - (previousState, action) => newState
  - Ex:
Cake Shop: Reducer is the shopkeeper


![Redux_architecture](https://github.com/ProPhycient5/Redux-toolkit-tutorial/assets/71059909/04778499-567e-403e-a3ab-c5974d32d650)

