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
		<div id="search_wrapper" className="input-group">
			<button type="button" id="search_button"><i className="bi bi-search"></i></button>
			<input id='hola' type="text" className="form-control" placeholder="Buscar por refugio o zona" aria-label="Buscar por refugio o zona" autoFocus={!shouldBeFocus}/>
		</div>
	);
}