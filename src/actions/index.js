import * as c from './ActionTypes';

export const deleteMilk = (id) => ({
	type: c.DELETE_MILK,
	id,
});

export const toggleForm = () => ({
	type: c.TOGGLE_FORM,
});

export const addMilk = (ticket) => {
	const { name, brand, origin, price, remaining, id } = ticket;
	return {
		type: c.ADD_MILK,
		name: name,
		brand: brand,
		origin: origin,
		price: price,
		remaining: remaining,
		id: id,
	};
};
