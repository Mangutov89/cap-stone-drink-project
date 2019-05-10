import { combineReducers } from 'redux';
import drinkSaveReducer from './drinkSaveReducer';

const rootReducer = combineReducers({
  drinksById: drinkSaveReducer
});

export default rootReducer;
