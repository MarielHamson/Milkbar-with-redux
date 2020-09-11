import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Milk(props) {
	const myStyledList = {
		listStyle: 'none',
	};
	return (
		<React.Fragment>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<div onClick={() => props.whenMilkClicked(props.id)}>
						<Card.Title>{props.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{props.brand}
						</Card.Subtitle>
						<Card.Text>
							<ul style={myStyledList}>
								<li>{props.price}</li>
								<li>{props.origin}</li>
								<li>{props.remaining}</li>
							</ul>
						</Card.Text>
					</div>
					<div onClick={() => props.whenMinusClicked(props.id)}>
						<p> Sell One </p>
					</div>
				</Card.Body>
			</Card>
			<hr />
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
