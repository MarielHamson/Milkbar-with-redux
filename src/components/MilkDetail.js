import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MilkDetail(props) {
	const { milk, onClickingDelete, onClickingSell } = props;
	const myStyledList = {
		listStyle: 'none',
	};

	return (
		<React.Fragment>
			<Container>
				<Row>
					<Col>
						<h1>Milk Details</h1>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>{props.name}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									{props.brand}
								</Card.Subtitle>
								<Card.Text>
									<ul style={myStyledList}>
										<li>Price ${milk.price}</li>
										<li>Origin: {milk.origin}</li>
										<li>{milk.remaining} remaining</li>
									</ul>
								</Card.Text>
								<br />
								<br />
								<Button variant="outline-info" onClick={props.onClickingEdit}>
									{' '}
									Edit Milk Details
								</Button>
								<br />
								<br />
								<Button
									variant="outline-danger"
									onClick={() => onClickingDelete(milk.id)}
								>
									Delete Milk
								</Button>
								<br />
								<br />
								<Button
									variant="outline-info"
									onClick={() => onClickingSell(milk.id)}
								>
									{' '}
									Sell Pint
								</Button>
							</Card.Body>
						</Card>{' '}
						<hr />
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

MilkDetail.propTypes = {
	milk: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
	onClickingSell: PropTypes.func,
};

export default MilkDetail;
