import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function MyStyledForm(props) {
	return (
		<React.Fragment>
			<Form onSubmit={props.formSubmissionHandler}>
				<Form.Row>
					<Col s={5}>
						<Form.Group controlId="formGroupName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" name="name" placeholder="Enter Name" />
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<Form.Group controlId="formGroupBrand">
							<Form.Label>Brand of Milk</Form.Label>
							<Form.Control type="text" name="brand" placeholder="Brand" />
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<Form.Group controlId="formGroupPrice">
							<Form.Label>Price of Milk</Form.Label>
							<Form.Control type="text" name="price" placeholder="Price" />
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<Form.Group controlId="formGroupOrigin">
							<Form.Label>Origin of Milk</Form.Label>
							<Form.Control
								type="text"
								name="origin"
								placeholder="Where's it from?"
							/>
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<Form.Group controlId="formGroupRemaining">
							<Form.Label>Brand of Milk</Form.Label>
							<Form.Control
								type="text"
								name="remaining"
								placeholder="How many pints left?"
							/>
						</Form.Group>
					</Col>
				</Form.Row>
				<Button type="submit" variant="outline-success">
					{props.buttonText}
				</Button>{' '}
			</Form>
			<br />
		</React.Fragment>
	);
}

MyStyledForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string,
};

export default MyStyledForm;
