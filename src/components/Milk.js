import React from 'react';
import PropTypes from 'prop-types';

function Milk(props) {
	return (
		<React.Fragment>
			<div onClick={() => props.whenMilkClicked(props.id)}>
				<h3>
					Brand: {props.brand}
					Price: {props.price}
					Origin: {props.origin}
					Amount Remaining: {props.remaining}
				</h3>
				<hr />
			</div>
		</React.Fragment>
	);
}

Milk.propTypes = {
	names: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	issue: PropTypes.string,
	whenMilkClicked: PropTypes.func,
};

export default Milk;
