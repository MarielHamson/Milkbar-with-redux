import React from 'react';
import NewMilkForm from './NewMilkForm';
import MilkList from './MilkList';
import MilkDetail from './MilkDetail';
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
		if (this.props.selectedMilk != null) {
			const action2 = a.selectedMilkToNull();
			dispatch(action2);
		} else {
			const action = a.toggleForm();
			dispatch(action);
		}
	};

	handleSellClick = () => {
		const { dispatch } = this.props;
		const action = a.selectedMilkToNull();
		dispatch(action);
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
		const action2 = a.selectedMilkToNull();
		dispatch(action2);
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

		if (this.props.selectedMilk !== null) {
			currentlyVisibleState = (
				<MilkDetail
					milk={this.props.selectedMilk}
					onClickingDelete={this.handleDeletingMilk}
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
