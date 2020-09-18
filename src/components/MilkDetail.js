import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MilkDetail(props) {
	const { milk, onClickingDelete, onClickingSell /* onClickingEdit */ } = props;
	const myStyledList = {
		listStyle: 'none',
	};

	return (
		<React.Fragment>
			<Container>
				<Row>
					<Col>
						<h1>Milk Details</h1>
						<Card
							style={{ width: '18rem' }}
							bg="secondary"
							text="light"
							className="p-3"
						>
							<Card.Body>
								<Card.Title>{Object.values(milk)[0].name}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									{Object.values(milk)[0].brand}
								</Card.Subtitle>
								<Card.Text>
									<ul style={myStyledList}>
										<li>Price ${Object.values(milk)[0].price}</li>
										<li>Origin: {Object.values(milk)[0].origin}</li>
										<li>{Object.values(milk)[0].remaining} remaining</li>
									</ul>
								</Card.Text>
								<br />
								<br />
								{/* <Button
									variant="outline-info"
									onClick={() => onClickingEdit(Object.values(milk)[0].id)}
								>
									{' '}
									Edit Milk Details
								</Button> */}
								<br />
								<br />
								<Button
									variant="outline-danger"
									onClick={() => onClickingDelete(Object.values(milk)[0].id)}
								>
									Delete Milk
								</Button>
								<br />
								<br />
								<Button
									variant="outline-info"
									onClick={() => onClickingSell(Object.values(milk)[0].id)}
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
	// onClickingEdit: PropTypes.func,
	onClickingSell: PropTypes.func,
};

export default MilkDetail;
