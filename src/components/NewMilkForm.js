import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import MyStyledForm from './ReusableForm';

function NewMilkForm(props) {
	function handleNewMilkFormSubmission(event) {
		event.preventDefault();
		props.onNewMilkCreation({
			name: event.target.name.value,
			brand: event.target.brand.value,
			price: event.target.price.value,
			origin: event.target.origin.value,
			remaining: parseInt(event.target.remaining.value),
			id: v4(),
		});
	}
	return (
		<React.Fragment>
			<MyStyledForm
				formSubmissionHandler={handleNewMilkFormSubmission}
				buttonText="Add Milk!"
			/>
		</React.Fragment>
	);
}

NewMilkForm.propTypes = {
	onNewMilkCreation: PropTypes.func,
};

export default NewMilkForm;
