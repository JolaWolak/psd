import React from 'react';
import str from '../util/translation';
import Form from './Form';
import axios from 'axios';

export default class RegistrationForm extends React.Component {

constructor (props) {
	super(props);
	this.state = {
		registeredChild: '',
		registeredInstruction: '',
		firstName: '',
		lastName: '',
		street1: '',
		street2: '',
		city: '',
		state: 'NJ',
		zip: '',
		grade: 'dontKnow',
		dob: '',
		birthPlace: '',
		allergies: ''
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
	this.handleChangeLastName = this.handleChangeLastName.bind(this);
	this.handleChangeStreet1 = this.handleChangeStreet1.bind(this);
	this.handleChangeStreet2 = this.handleChangeStreet2.bind(this);
	this.handleChangeCity = this.handleChangeCity.bind(this);
	this.handleChangeState = this.handleChangeState.bind(this);
	this.handleChangeZip = this.handleChangeZip.bind(this);
	this.handleChangeGrade = this.handleChangeGrade.bind(this);
	this.handleChangeDOB = this.handleChangeDOB.bind(this);
	this.handleChangeBirthPlace = this.handleChangeBirthPlace.bind(this);	
	this.handleChangeAllergies = this.handleChangeAllergies.bind(this);
}

handleSubmit(event) {
	event.preventDefault();
	axios.post('/', this.state)
		.then((resp) => {
			console.log('resetting top to ', resp.data.fullName);
			this.setState({
				registeredChild: resp.data.fullName + str['registeredName'][this.props.lang],
				registeredInstruction: str['registeredInstruction'][this.props.lang]
			});
		});
	console.log(this.state);
	this.setState ({ firstName: '',
					 //lastName: this.state.lastName,
					 //street1: this.state.street1,
					 //street2: this.state.street2,
					 //city: this.state.city,
					 state: 'NJ',
					 zip: '',
					 grade: 'dontKnow',
					 dob: '',
					 //birthPlace: this.state.birthPlace,
					 allergies: '',
					// message: str['formTitle'][this.props.lang] + '\n' + str['registered'][this.props.lang]
					 });

	
}


handleChangeFirstName (event) {
	this.setState({
		firstName: event.target.value });
}

handleChangeLastName (event) {
	this.setState({
		lastName: event.target.value });
}

handleChangeStreet1 (event) {
	this.setState({
		street1: event.target.value });
}

handleChangeStreet2 (event) {
	this.setState({
		street2: event.target.value });
}

handleChangeCity (event) {
	this.setState({
		city: event.target.value });
}

handleChangeState (event) {
	this.setState({
		city: event.target.value });
}

handleChangeZip (event) {
	this.setState({
		zip: event.target.value });
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
	console.log
	return (
		<Form lang = {this.props.lang} child = {this.state.registeredChild} msg = {this.state.registeredInstruction}
			  handleSubmit = {this.handleSubmit} 
		      handleChangeFirstName = {this.handleChangeFirstName} initFirstName = {this.state.firstName}
		      handleChangeLastName = {this.handleChangeLastName} initLastName = {this.state.lastName} 
		      handleChangeStreet1 = {this.handleChangeStreet1} initStreet1 = {this.state.street1} 
		      handleChangeStreet2 = {this.handleChangeStreet2} initStreet2 = {this.state.street2} 
		      handleChangeCity = {this.handleChangeCity} initCity = {this.state.city} 
		      handleChangeState = {this.handleChangeState} initState = {this.state.state} 
		      handleChangeZip = {this.handleChangeZip} initZip = {this.state.zip} 
		      handleChangeGrade = {this.handleChangeGrade} initGrade = {this.state.grade} 
		      handleChangeDOB = {this.handleChangeDOB} initDOB = {this.state.dob} 
		      handleChangeBirthPlace = {this.handleChangeBirthPlace} initBirthPlace = {this.state.birthPlace} 
		      handleChangeAllergies = {this.handleChangeAllergies} initAllergies = {this.state.allergies} 



		/>
	)
}

};