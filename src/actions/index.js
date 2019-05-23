import * as types from './../constants/ActionTypes';

export const saveDrink = (currentDrink) => ({
  type: types.SAVE_DRINK,
  currentDrink
});
