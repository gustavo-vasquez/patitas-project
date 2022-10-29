import React from 'react';
import {useLocation} from 'react-router-dom';

export const Search = (props) => {
	const location = useLocation();
	let shouldBeFocus = location.pathname === '/' ? true : false;

	/* const log = (isblurred) => {
		if(isblurred) {
			document.getElementById('search_button').style = "box-shadow: 0px 1px 0px 0px var(--default-input-border-color);";
			console.log("asdasd");
		}
		else {
			document.getElementById('search_button').style.removeProperty('box-shadow');
			console.log("aaaaaaaaaa");
		}
	} */

	return (
		<div className="input-group">
			{/*<button id="shelter_zones" className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Recoleta</button>
			<ul className="dropdown-menu">
				<li><a className="dropdown-item" href="#shelter_input">Congreso</a></li>
				<li><a className="dropdown-item" href="#shelter_input">Monserrat</a></li>
				<li><a className="dropdown-item" href="#shelter_input">Palermo</a></li>
				<li><a className="dropdown-item" href="#shelter_input">San Isidro</a></li>
				<li><a className="dropdown-item" href="#shelter_input">Saavedra</a></li>
				<li><hr className="dropdown-divider"/></li>
				<li><a className="dropdown-item" href="#shelter_input">Capital federal</a></li>
			</ul>*/}
			<input id="shelter_search" type="text" className="form-control" placeholder="Buscar por refugio o barrio porteño" aria-label="Buscar por refugio o barrio porteño" autoFocus={!shouldBeFocus}/>
			<button id="shelter_search_button" type="button" className="btn"><i className="bi bi-search"></i></button>
		</div>
	);
}