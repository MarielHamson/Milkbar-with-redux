import selectedMilkReducer from '../../reducers/selected-milk-reducer';
import * as c from '../../actions/ActionTypes';

describe('selectedMilkReducer', () => {
	let action;

	const milkData = {
		name: 'Almond Milk',
		brand: 'Alpenrose',
		price: '10.00',
		origin: 'West of the coastal range of Oregon',
		remaining: 5,
		id: 1,
	};

	test('Should return null if no milk is selected', () => {
		expect(selectedMilkReducer(null, { type: null })).toEqual(null);
	});

	test('Should return selected milk', () => {
		const {
			name: name,
			brand: brand,
			price: price,
			origin: origin,
			remaining: remaining,
			id: id,
		} = milkData;
		action = {
			type: c.SELECT_POST,
			name: name,
			brand: brand,
			price: price,
			origin: origin,
			remaining: remaining,
			id: id,
		};
		expect(selectedMilkReducer(null, action)).toEqual({
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
});
