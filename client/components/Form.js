import React from 'react';
import str from '../util/translation';

export default (props) => {

    console.log('These are my PROPS:');
    console.log(props);

	const lang = props.lang;
    const handleSubmit = props.handleSubmit;

    const handleChangeFirstName = props.handleChangeFirstName;
    const handleChangeLastName = props.handleChangeLastName;
    const handleChangeStreet1 = props.handleChangeStreet1;
    const handleChangeStreet2 = props.handleChangeStreet2;
    const handleChangeCity = props.handleChangeCity;
    const handleChangeState = props.handleChangeState;
    const handleChangeZip = props.handleChangeZip;
    const handleChangeGrade = props.handleChangeGrade;
    const handleChangeDOB = props.handleChangeDOB;
    const handleChangeBirthPlace = props.handleChangeBirthPlace;
    const handleChangeAllergies = props.handleChangeAllergies;

    const initFirstName = props.initFirstName;
    const initLastName = props.initLastName;
    const initStreet1 = props.initStreet1;
    const initStreet2 = props.initStreet2;
    const initCity = props.initCity;
    const initState = props.initState;
    const initZip = props.initZip;
    const initGrade = props.initGrade;
    const initDOB = props.initDOB;
    const initBirthPlace = props.initBirthPlace;
    const initAllergies = props.initAllergies;

    const message = props.child || str['formTitle'][lang];

	return (
    	<div className='col-md-12'>
       	 
         <h3> {message} </h3>
         <h4> {props.msg} </h4>
         <p>
            {str['formInfo'][lang]}
         </p>
     	 <form onSubmit={handleSubmit} id='child_registration'>
    	  <div>
     	    {str['childFirstName'][lang]}
     	 	<input onChange={handleChangeFirstName} type='text' name='firstName' value={initFirstName} />
     	  </div>
          <div style={{ color: 'white'}}>-</div>  
    	  <div>
     	    {str['childLastName'][lang]}
     	 	<input onChange={handleChangeLastName}type='text' name='lastName' value={initLastName} />
     	  </div>
    	  <div className='col-md-6'>
    	  	{str['spell'][lang]}
    	  	<br/>
     	  </div>  
     	  <div style={{ color: 'white'}}>-</div>
          <div style={{ color: 'white'}}>-</div>  
          <div>
            {str['address'][lang]}
          </div>    	  
          <div style={{ color: 'white'}}>-</div>  
          <div>
            {str['street1'][lang]}
            <input onChange={handleChangeStreet1}type='text' name='street1' value={initStreet1} />
          </div>
          <div style={{ color: 'white'}}>-</div>  
          <div>
            {str['street2'][lang]}
            <input onChange={handleChangeStreet2}type='text' name='street2' value={initStreet2} />
          </div>
          <div style={{ color: 'white'}}>-</div>  
          <div>
            {str['city'][lang]}
            <input onChange={handleChangeCity}type='text' name='city' value={initCity} />
          </div>
          <div style={{ color: 'white'}}>-</div>  
          <div>
            {str['state'][lang]}
            <input onChange={handleChangeState}type='text' name='state' value={initState} />
          </div>
          <div style={{ color: 'white'}}>-</div>  
          <div>
            {str['zip'][lang]}
            <input onChange={handleChangeZip}type='text' name='zip' value={initZip} />
          </div>
          <div style={{ color: 'white'}}>-</div>  

          <div>
     	 	{str['grade'][lang]}
     	 	<select value={initGrade} onChange={handleChangeGrade}>
     	 		<option value='dontKnow'>{str['dontKnow'][lang]}</option>
     	 		<option value='preschool'>{str['preschool'][lang]}</option>
     	 		<option value='preK'>{str['preK'][lang]}</option>
     	 		<option value='kindergarten'>{str['kindergarten'][lang]}</option>
     	 		<option value='first'>{str['first'][lang]}</option>
     	 		<option value='second'>{str['second'][lang]}</option>
     	 		<option value='third'>{str['third'][lang]}</option>
     	 		<option value='fourth'>{str['fourth'][lang]}</option>
     	 		<option value='fifth'>{str['fifth'][lang]}</option>
     	 		<option value='sixth'>{str['sixth'][lang]}</option>
     	 		<option value='seventh'>{str['seventh'][lang]}</option>
     	 		<option value='eigth'>{str['eigth'][lang]}</option>
     	 		<option value='ninth'>{str['ninth'][lang]}</option>
     	 		<option value='tenth'>{str['tenth'][lang]}</option>
     	 		<option value='eleventh'>{str['eleventh'][lang]}</option>
     	 		<option value='jpo'>{str['jpo'][lang]}</option>
     	 	</select>
     	  </div>
          <div style={{ color: 'white'}}>-</div> 
     	  <div>
            {str['birthDate'][lang]}
     	 	<input onChange={handleChangeDOB} type='text' name='dob' value={initDOB} />
     	  </div>
          <div style={{ color: 'white'}}>-</div>
     	  <div>
     	    {str['birthPlace'][lang]}
     	 	<input onChange={handleChangeBirthPlace} type='text' name='birthPlace' value={initBirthPlace} />
     	  </div>     	  
          <div style={{ color: 'white'}}>-</div>
          <div>
            {str['allergies'][lang]}
            <input onChange={handleChangeAllergies} type='text' name='allergies' value={initAllergies} />
          </div> 
          <div style={{ color: 'white'}}>-</div>
          <div style={{ color: 'white'}}>-</div>

         <div className='form-group'>
          <button type='submit' className='btn btn-success'>{str['send'][lang]}</button>
         </div>
     	 </form>
     	 <div>
    	  <img className='school_picture' src='jaselka2016.jpg' style={{ width: '500px', borderRadius: '5%'}} />
    	 </div> 
    	</div>
 	 );
};