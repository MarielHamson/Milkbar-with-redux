import * as c from './ActionTypes';

export const deleteMilk = (id) => ({
	type: c.DELETE_MILK,
	id,
});

export const toggleForm = () => ({
	type: c.TOGGLE_FORM,
});

export const addMilk = (milk) => {
	const { name, brand, origin, price, remaining, id } = milk;
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

export const selectMilk = (milk) => {
	const { name, brand, origin, price, remaining, id } = milk;
	return {
		type: c.SELECT_MILK,
		name: name,
		brand: brand,
		origin: origin,
		price: price,
		remaining: remaining,
		id: id,
	};
};

export const selectedMilkToNull = () => {
	return {
		type: c.SELECT_MILK_NULL,
	};
};
