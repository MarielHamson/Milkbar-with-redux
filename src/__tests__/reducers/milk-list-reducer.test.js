import milkListReducer from '../../reducers/milk-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('milkListReducer', () => {
	let action;

	const milkData = {
		name: 'Almond Milk',
		brand: 'Alpenrose',
		price: '10.00',
		origin: 'West of the coastal range of Oregon',
		remaining: 5,
		id: 1,
	};

	const updateTicktData = {
		name: 'Chocolate Milk',
		brand: "Gerry's",
		price: '15.00',
		origin: 'West of the coastal range of Oregon',
		remaining: 5,
		id: 1,
	};

	const currentState = {
		1: {
			name: 'Almond Milk',
			brand: 'Alpenrose',
			price: '10.00',
			origin: 'West of the coastal range of Oregon',
			remaining: 5,
			id: 1,
		},
		2: {
			name: 'Milk Tea',
			brand: 'Whole Foods',
			price: '10.00',
			origin: 'Somewhere where they have happy cows',
			remaining: 10,
			id: 2,
		},
	};

	test('Should return default state if there is no action type passed into the reducer', () => {
		expect(milkListReducer({}, { type: null })).toEqual({});
	});

	test('Should successfully add new milk data to mainMilkList', () => {
		const { name, brand, price, origin, remaining, id } = milkData;

		action = {
			type: c.ADD_MILK,
			name: name,
			brand: brand,
			price: price,
			origin: origin,
			remaining: remaining,
			id: id,
		};

		expect(milkListReducer({}, action)).toEqual({
			[id]: {
				name: name,
				brand: brand,
				price: price,
				origin: origin,
				remaining: remaining,
				id: id,
			},
		});
	});

	test('Should successfully update milk data to mainMilkList', () => {
		const { name, brand, price, origin, remaining, id } = updateTicktData;
		action = {
			type: c.ADD_MILK,
			name: name,
			brand: brand,
			price: price,
			origin: origin,
			remaining: remaining,
			id: id,
		};
		expect(milkListReducer(currentState, action)).toEqual({
			1: {
				name: 'Chocolate Milk',
				brand: "Gerry's",
				price: '15.00',
				origin: 'West of the coastal range of Oregon',
				remaining: 5,
				id: 1,
			},
			2: {
				name: 'Milk Tea',
				brand: 'Whole Foods',
				price: '10.00',
				origin: 'Somewhere where they have happy cows',
				remaining: 10,
				id: 2,
			},
		});
	});

	test('Should successfully delete a milk', () => {
		action = {
			type: c.DELETE_MILK,
			id: 1,
		};
		expect(milkListReducer(currentState, action)).toEqual({
			2: {
				name: 'Milk Tea',
				brand: 'Whole Foods',
				price: '10.00',
				origin: 'Somewhere where they have happy cows',
				remaining: 10,
				id: 2,
			},
		});
	});
});
