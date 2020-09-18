import formVisibleReducer from './form-visible-reducer';
import milkListReducer from './milk-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	mainTicketList: milkListReducer,
});

export default rootReducer;
