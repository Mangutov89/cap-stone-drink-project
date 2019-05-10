import constants from './../constants';



const { initialState, types } = constants;

const drinkSaveReducer = (state = initialState.drinksById, action) => {
  switch (action.type) {
  case types.SAVE_DRINK:
    console.log(action.currentDrink);
    let newDrink = action.currentDrink;
    let newState = Object.assign({}, state, {[action.currentDrink.id]: newDrink});
    return newState;
  default:
    return state;
  }
};

export default drinkSaveReducer;
