import React from 'react';
import NewMilkForm from './NewMilkForm';
import MilkList from './MilkList';
import MilkDetail from './MilkDetail';
import EditMilkForm from './EditMilkForm';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import * as a from './../actions';
import PropTypes from 'prop-types';

class MilkControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = () => {
		const { dispatch } = this.props;
		const action2 = a.selectedMilkToNull();
		dispatch(action2);
		const action = a.toggleForm();
		dispatch(action);
	};

	handleEditClick = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	};

	handleSellClick = () => {
		const { dispatch } = this.props;
		const action = a.selectedMilkToNull();
		dispatch(action);
	};

	handleEditingMilkInList = (milkToEdit) => {
		const { dispatch } = this.props;
		const action = a.addMilk(milkToEdit);
		dispatch(action);
		const action2 = a.selectedMilkToNull();
		dispatch(action2);
		const action3 = a.toggleForm();
		dispatch(action3);
	};

	handleSellingMilk = (milkId) => {
		const milkToSell = this.props.mainMilkList[milkId];
		const { dispatch } = this.props;
		if (milkToSell.remaining > 0) {
			milkToSell.remaining--;
		}
		const sellOne = milkToSell;
		const action = a.addMilk(sellOne);
		dispatch(action);
	};

	handleChangingSelectedMilk = (id) => {
		const { dispatch } = this.props;
		const selectedMilkInMainMilkList = this.props.mainMilkList[id];
		const action = a.selectMilk(selectedMilkInMainMilkList);
		dispatch(action);
	};

	handleAddingNewMilkToList = (newMilk) => {
		const { dispatch } = this.props;
		const action = a.addMilk(newMilk);
		dispatch(action);
		const action2 = a.toggleForm();
		dispatch(action2);
	};

	handleDeletingMilk = (id) => {
		const { dispatch } = this.props;
		const action = a.deleteMilk(id);
		dispatch(action);
		const action2 = a.selectedMilkToNull();
		dispatch(action2);
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;

		if (this.state.editing) {
			currentlyVisibleState = (
				<EditMilkForm
					milk={this.props.selectedMilk}
					onEditMilk={this.handleEditingMilkInList}
					onSellMilk={this.handleSellingMilk}
				/>
			);
			buttonText = 'Return to Milk List';
		} else if (this.state.selectedMilk != null) {
			currentlyVisibleState = (
				<MilkDetail
					milk={this.props.selectedMilk}
					onClickingDelete={this.handleDeletingMilk}
					onClickingEdit={this.handleEditClick}
					onClickingSell={this.handleSellingMilk}
				/>
			);
			buttonText = 'Return to Milk List';
		} else if (this.props.formVisibleOnPage) {
			currentlyVisibleState = (
				<NewMilkForm onNewMilkCreation={this.handleAddingNewMilkToList} />
			);
			buttonText = 'Return to Milk List';
		} else {
			currentlyVisibleState = (
				<MilkList
					milkList={this.props.mainMilkList}
					onMilkSelection={this.handleChangingSelectedMilk}
				/>
			);
			buttonText = 'Add Milk';
		}

		return (
			<React.Fragment>
				{currentlyVisibleState}
				<Button variant="outline-success" onClick={this.handleClick}>
					{buttonText}
				</Button>
			</React.Fragment>
		);
	}
}

MilkControl.propTypes = {
	mainMilkList: PropTypes.object,
	formVisibleOnPage: PropTypes.bool,
	selectedMilk: PropTypes.object,
};

const mapStateToProps = (storeState) => {
	return {
		mainMilkList: storeState.mainMilkList,
		formVisibleOnPage: storeState.formVisibleOnPage,
		selectedMilk: storeState.selectedMilk,
	};
};

MilkControl = connect(mapStateToProps)(MilkControl);

export default MilkControl;
