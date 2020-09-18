import * as c from './../../actions/ActionTypes';
import * as actions from './../../actions';

describe('milkbar actions', () => {
	it('deleteMilk should create DELETE_MILK action', () => {
		expect(actions.deleteMilk(1)).toEqual({
			type: c.DELETE_MILK,
			id: 1,
		});
	});

	it('toggleForm should create TOGGLE_FORM action', () => {
		expect(actions.toggleForm()).toEqual({
			type: c.TOGGLE_FORM,
		});
	});
	it('addMilk should create ADD_MILK action', () => {
		expect(
			actions.addMilk({
				name: 'Chocolate Milk',
				brand: "Gerry's",
				price: '15.00',
				origin: 'West of the coastal range of Oregon',
				remaining: 5,
				id: 1,
			})
		).toEqual({
			type: c.ADD_MILK,
			name: 'Chocolate Milk',
			brand: "Gerry's",
			price: '15.00',
			origin: 'West of the coastal range of Oregon',
			remaining: 5,
			id: 1,
		});
	});
});
