const CAKE_ORDERED = "CAKE_ORDERED"; //<-------This is actually constant string

// {
//     type: CAKE_ORDERED,   //<-------This is actually an action
//     quantity: 1
// }

//action creator --> The func that returns the action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
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
        totalCake: state.totalCake - 1,
      };
    default:
      return state;
  }
};
