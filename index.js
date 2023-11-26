const redux = require("redux");
const createStore = redux.createStore;
const actionCreator = redux.bindActionCreators;
const combineReducer = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED"; //<-------This is actually constant string
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

const initialStateCake = {
  totalCake: 10,
};

const initialStateIceCream = {
  totalIceCream: 10,
};

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

function orderIceCream() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockIceCream(amount = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: amount,
  };
}

//(prevState, action) => newState

const cakeReducer = (state = initialStateCake, action) => {
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

const iceCreamReducer = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        totalCake: state.totalCake - 1,
      };
    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        totalCake: state.totalCake + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducer({cake: cakeReducer, iceCream: iceCreamReducer });

const store = createStore(rootReducer); //store holding the state of an app.
console.log("initial_state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update_state", store.getState())
); //need to study about the subscribe method

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(4));

const actions = actionCreator(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake();
action.restockCake();

unsubscribe();
