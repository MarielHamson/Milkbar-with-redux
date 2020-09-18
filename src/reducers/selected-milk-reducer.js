import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
	const { name, brand, price, origin, remaining, id } = action;
	switch (action.type) {
		case c.SELECT_MILK:
			return {
				[id]: {
					name: name,
					brand: brand,
					price: price,
					origin: origin,
					remaining: remaining,
					id: id,
				},
			};
		case c.SELECT_MILK_NULL:
			return null;
		default:
			return state;
	}
};
