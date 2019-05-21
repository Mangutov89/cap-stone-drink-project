import * as types from './../constants/ActionsTypes';

export const saveDrink = (currentDrink) => ({
  type: types.SAVE_DRINK,
  currentDrink
});
