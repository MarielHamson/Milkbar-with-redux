import React from 'react';
import Milk from './Milk';
import PropTypes from 'prop-types';

function MilkList(props) {
	return (
		<React.Fragment>
			<hr />
			<h1>Our Milk Lineup</h1>
			{Object.values(props.milkList).map((milk) => (
				<Milk
					whenMilkClicked={props.onMilkSelection}
					name={milk.name}
					id={milk.id}
					key={milk.id}
				/>
			))}
		</React.Fragment>
	);
}

MilkList.propTypes = {
	milkList: PropTypes.array,
	onMilkSelection: PropTypes.func,
};
export default MilkList;
