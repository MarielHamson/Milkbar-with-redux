import formVisibleReducer from './form-visible-reducer';
import milkListReducer from './milk-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	mainMilkList: milkListReducer,
});

export default rootReducer;
