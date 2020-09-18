import React from 'react';
import NewMilkForm from './NewMilkForm';
import MilkList from './MilkList';
import MilkDetail from './MilkDetail';
import EditMilkForm from './EditMilkForm';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import * as a from './../actions';

class MilkControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedMilk: null,
			editing: false,
		};
	}

	handleClick = () => {
		if (this.state.selectedMilk != null) {
			this.setState({
				selectedMilk: null,
				editing: false,
			});
		} else {
			const { dispatch } = this.props;
			const action = a.toggleForm();
			dispatch(action);
		}
	};

	handleEditClick = () => {
		this.setState({ editing: true });
	};

	handleSellClick = () => {
		this.setState({ editing: false });
	};

	handleEditingMilkInList = (milkToEdit) => {
		const { dispatch } = this.props;
		const action = a.addMilk(milkToEdit);
		dispatch(action);
		this.setState({
			editing: false,
			selectedMilk: null,
		});
	};

	handleSellingMilk = (id) => {
		const soldMilk = this.state.mainMilkList.filter(
			(milk) => milk.id === id
		)[0];
		if (soldMilk.remaining > 0) {
			soldMilk.remaining--;
		}
		const editedMilkList = this.state.mainMilkList
			.filter((milk) => milk.id !== id)
			.concat(soldMilk);
		this.setState({
			mainMilkList: editedMilkList,
			editing: false,
		});
	};

	handleChangingSelectedMilk = (id) => {
		const selectedMilk = this.props.mainMilkList[id];
		this.setState({ selectedMilk: selectedMilk });
	};

	handleAddingNewMilkToList = (newMilk) => {
		const { dispatch } = this.props;
		const action = a.addMilk(newMilk);
		dispatch(action);
		const action2 = a.toggleForm();
	};

	handleDeletingMilk = (id) => {
		const { dispatch } = this.props;
		const action = a.deleteMilk(id);
		dispatch(action);
	};

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;

		if (this.state.editing) {
			currentlyVisibleState = (
				<EditMilkForm
					milk={this.state.selectedMilk}
					onEditMilk={this.handleEditingMilkInList}
					onSellMilk={this.handleSellingMilk}
				/>
			);
			buttonText = 'Return to Milk List';
		} else if (this.state.selectedMilk != null) {
			currentlyVisibleState = (
				<MilkDetail
					milk={this.state.selectedMilk}
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
};

const mapStateToProps = (storeState) => {
	return {
		mainMilkList: storeState.mainTicketList,
		formVisibleOnPage: storeState.formVisibleOnPage,
	};
};

TicketControl = connect(mapStateToProps)(TicketControl);

export default MilkControl;
