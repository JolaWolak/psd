import React from 'react';
import RegistrationInfo from './Info';

export default class App extends React.Component {

render(){
	return (
    	<div>
    	 <img className='logo' src='psd_logo_jpg.jpg' />
     	 <h1>Witamy na stronie rejestracyjnej naszej szkoły!</h1>
     	 <RegistrationInfo school_year='2017/18'/>
    	</div>
 	 );
}
 

};