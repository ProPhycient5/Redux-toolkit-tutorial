const redux = require("redux");
const createStore = redux.createStore();

const CAKE_ORDERED = "CAKE_ORDERED"; //<-------This is actually constant string
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// {
//     type: CAKE_ORDERED,   //<-------This is actually an action
//     quantity: 1
// }

//action creator --> The func that returns the action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(amount = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: amount,
  };
}

//(prevState, action) => newState
const initialState = {
  totalCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        totalCake: state.totalCake - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        totalCake: state.totalCake + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer); //store holding the state of an app.
console.log("initial_state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update_state", store.getState())
); //need to study about the subscribe method

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(4));

unsubscribe();
