import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import milkListReducer from '../../reducers/milk-list-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {
	test('Should return default state if no action type is recognized', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			mainMilkList: {},
			formVisibleOnPage: false,
		});
	});

	test('Check that initial state of milkListReducer matches root reducer', () => {
		expect(store.getState().mainMilkList).toEqual(
			milkListReducer(undefined, { type: null })
		);
	});

	test('Check that initial state of formVisibleReducer matches root reducer', () => {
		expect(store.getState().formVisibleOnPage).toEqual(
			formVisibleReducer(undefined, { type: null })
		);
	});

	test('Check that initial state of milkListReducer matches root reducer', () => {
		const action = {
			type: c.ADD_MILK,
			name: 'Chocolate Milk',
			brand: "Gerry's",
			price: '15.00',
			origin: 'West of the coastal range of Oregon',
			remaining: 5,
			id: 1,
		};

		store.dispatch(action);
		expect(store.getState().mainMilkList).toEqual(
			milkListReducer(undefined, action)
		);
	});

	test('Check that initial state of formVisibleReducer matches root reducer', () => {
		const action = {
			type: c.TOGGLE_FORM,
		};
		store.dispatch(action);
		expect(store.getState().formVisibleOnPage).toEqual(
			formVisibleReducer(undefined, action)
		);
	});
});
