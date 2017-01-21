import React from 'react';

const RegistrationInfo = (props) => {

	return (
    	<div>
     	 <h2>Zasady Rejestracji w Roku Szkolnym {props.school_year}</h2>
     	 <p>
     	 	Opłata za Szkołę wynosi $200 za jedno dziecko i $320 za dwoje i $400 za troje lub więcej dzieci,$30 opłata rejestracyjna od dziecka za rok.
     	 	Co roku uiszczamy też składkę członkowską w wysokości $10. 
     	 	W opłaty wliczone są wyjazdy, poczęstunki, nagrody, upominki dla dzieci, oraz wynagrodzenia dla nauczycieli. 
     	 	Dodatkowa opłata dla parafii to $75 pierwsze, $35 drugie i $20 trzecie dziecko.
     	 </p>
    	</div>
 	 );
};

export default RegistrationInfo;