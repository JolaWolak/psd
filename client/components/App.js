import React from 'react';
import RegistrationInfo from './Info';
import RegistrationForm from './FormContainer';
import str from '../util/translation';

export default class App extends React.Component {

constructor (props){
	super(props);
	this.state = {
		lang: 'pl',
		schoolYear: '2017/18'
	};
	this.handleClick = this.handleClick.bind(this);
}

handleClick(event) {
	//clicking the button here toggles between PL and EN
	if (this.state.lang==='pl') this.setState({ lang: 'en'})
		else this.setState({ lang: 'pl'});
}

render(){
	let lang = this.state.lang;
	return (
    	<div className='col-md-12'>
  		 <img className='logo' src='psd_logo_jpg.jpg' style={{ width: '500px', borderRadius: '1%'}} />  		 
     	 <h1>{str['pageTitle'][lang]}</h1>
    	 <button type='submit' onClick={this.handleClick} className='btn btn-success'>{str['switchLanguage'][lang]}</button>
     	 <RegistrationInfo schoolYear = {this.state.schoolYear} title = {str['infoTitle'][lang]} text = {str['infoText'][lang]} />
     	 <RegistrationForm lang = {this.state.lang} title = {str['infoTitle'][lang]}/>
    	</div>
 	 );
	}
};