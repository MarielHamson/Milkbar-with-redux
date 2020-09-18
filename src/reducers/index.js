import formVisibleReducer from './form-visible-reducer';
import milkListReducer from './milk-list-reducer';
import selectedMilkReducer from './selected-milk-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	mainMilkList: milkListReducer,
	selectedMilk: selectedMilkReducer,
});

export default rootReducer;
