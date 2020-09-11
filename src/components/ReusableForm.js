import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
	return (
		<React.Fragment>
			<form onSubmit={props.formSubmissionHandler}>
				<input type="text" name="name" placeholder="Name of Milk" />
				<input type="text" name="brand" placeholder="Brand of Milk" />
				<input type="text" name="price" placeholder="Price of Milk" />
				<input
					type="text"
					name="origin"
					placeholder="Where is this milk from?"
				/>
				<input
					type="number"
					name="remaining"
					placeholder="how many pints left?"
				/>
				<button type="submit">{props.buttonText}</button>
			</form>
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string,
};

export default ReusableForm;
