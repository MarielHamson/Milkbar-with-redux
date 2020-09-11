import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MilkDetail(props) {
	const { milk, onClickingDelete } = props;
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
					<Button variant="outline-info" onClick={props.onClickingEdit}>
						{' '}
						Edit Milk Details
					</Button>
					<br />
					<Button
						variant="outline-danger"
						onClick={() => onClickingDelete(milk.id)}
					>
						Delete Milk
					</Button>
				</Card.Body>
			</Card>{' '}
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
