import React from 'react';
import Milk from './Milk';
import PropTypes from 'prop-types';

function MilkList(props) {
	return (
		<React.Fragment>
			<hr />
			<h1>Our Milk Lineup</h1>
			{Object.values(props.milkList).map((milk) => {
				return (
					<Milk
						whenMilkClicked={props.onMilkSelection}
						whenClickingSell={props.onClickingSell}
						name={milk.name}
						brand={milk.brand}
						price={milk.price}
						origin={milk.origin}
						remaining={milk.remaining}
						id={milk.id}
						key={milk.id}
					/>
				);
			})}
		</React.Fragment>
	);
}

MilkList.propTypes = {
	milkList: PropTypes.object,
	onMilkSelection: PropTypes.func,
	onClickingSell: PropTypes.func,
};
export default MilkList;
