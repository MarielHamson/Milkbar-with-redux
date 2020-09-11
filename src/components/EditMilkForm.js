import React from 'react';
import MyStyledForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditMilkForm(props) {
	const { milk } = props;
	function handleEditMilkFormSubmission(event) {
		event.preventDefault();
		props.onEditMilk({
			name: event.target.name.value,
			brand: event.target.brand.value,
			price: event.target.price.value,
			origin: event.target.origin.value,
			remaining: event.target.remaining.value,
			id: milk.id,
		});
	}
	return (
		<React.Fragment>
			<MyStyledForm
				formSubmissionHandler={handleEditMilkFormSubmission}
				buttonText="Update Milk"
			/>
		</React.Fragment>
	);
}

EditMilkForm.propTypes = {
	onEditMilk: PropTypes.func,
};

export default EditMilkForm;
