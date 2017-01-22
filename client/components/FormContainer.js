import React from 'react';
import str from '../util/translation';
import Form from './Form';

export default class RegistrationForm extends React.Component {

constructor (props) {
	super(props);
	this.state = {
		firstName: '',
		lastName: '',
		grade: 'dontKnow',
		dob: '',
		birthPlace: '',
		allergies: ''
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
	this.handleChangeLastName = this.handleChangeLastName.bind(this);
	this.handleChangeGrade = this.handleChangeGrade.bind(this);
	this.handleChangeDOB = this.handleChangeDOB.bind(this);
	this.handleChangeBirthPlace = this.handleChangeBirthPlace.bind(this);	
	this.handleChangeAllergies = this.handleChangeAllergies.bind(this);
}

handleSubmit(event) {
	event.preventDefault();
	this.setState ({ firstName: '',
					 //lastName: this.state.lastName,
					 grade: 'dontKnow',
					 dob: '',
					 //birthPlace: this.state.birthPlace,
					 allergies: ''
					 });
	console.log(this.state);
	//TODO: trigger post request on the express side
	//ADD: axios call
}


handleChangeFirstName (event) {
	this.setState({
		firstName: event.target.value });
}

handleChangeLastName (event) {
	this.setState({
		lastName: event.target.value });
}

handleChangeGrade (event) {
	this.setState({
		grade: event.target.value });
}

handleChangeDOB (event) {
	this.setState({
		dob: event.target.value });
}

handleChangeBirthPlace (event) {
	this.setState({
		birthPlace: event.target.value });
}

handleChangeAllergies (event) {
	this.setState({
		allergies: event.target.value });
}

render(){
	return (
		<Form lang = {this.props.lang} handleSubmit = {this.handleSubmit} 
		      handleChangeFirstName = {this.handleChangeFirstName} initFirstName = {this.state.firstName}
		      handleChangeLastName = {this.handleChangeLastName} initLastName = {this.state.lastName} 
		      handleChangeGrade = {this.handleChangeGrade} initGrade = {this.state.grade} 
		      handleChangeDOB = {this.handleChangeDOB} initDOB = {this.state.dob} 
		      handleChangeBirthPlace = {this.handleChangeBirthPlace} initBirthPlace = {this.state.birthPlace} 
		      handleChangeAllergies = {this.handleChangeAllergies} initAllergies = {this.state.allergies} />
	)
}

};