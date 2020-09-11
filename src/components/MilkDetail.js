import React from 'react';
import PropTypes from 'prop-types';

function MilkDetail(props) {
	const { milk, onClickingDelete } = props;

	return (
		<React.Fragment>
			<h1>Milk Detail</h1>
			<h3>
				Milk Name: {milk.name}
				Milk Brand: {milk.brand}
				Milk Price: {milk.price}
				Milk Origin: {milk.origin}
				Amount Remaining {milk.remaining}
			</h3>
			<button onClick={props.onClickingEdit}> Edit Milk Details</button>
			<button onClick={() => onClickingDelete(milk.id)}>Delete Milk</button>
			<hr />
		</React.Fragment>
	);
}

MilkDetail.propTypes = {
	milk: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
};

export default MilkDetail;
