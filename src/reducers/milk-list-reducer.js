import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
	const { name, brand, price, origin, remaining, id } = action;
	switch (action.type) {
		case c.ADD_MILK:
			return Object.assign({}, state, {
				[id]: {
					name: name,
					brand: brand,
					price: price,
					origin: origin,
					remaining: remaining,
					id: id,
				},
			});
		case c.DELETE_MILK:
			const newState = { ...state };
			delete newState[id];
			return newState;
		default:
			return state;
	}
};
