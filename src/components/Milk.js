import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Milk(props) {
	const myStyledList = {
		listStyle: 'none',
		cursor: 'pointer',
	};
	return (
		<React.Fragment>
			<div style={myStyledList} onClick={() => props.whenMilkClicked(props.id)}>
				<Card style={{ width: '18rem' }} bg="secondary" text="light">
					<Card.Body>
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
					</Card.Body>
				</Card>
			</div>
			<hr />
		</React.Fragment>
	);
}

Milk.propTypes = {
	name: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	origin: PropTypes.string.isRequired,
	remaining: PropTypes.number.isRequired,
	whenMilkClicked: PropTypes.func,
};

export default Milk;
