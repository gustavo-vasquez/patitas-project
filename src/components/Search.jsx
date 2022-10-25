import React from 'react';
import {useLocation} from 'react-router-dom';

export const Search = (props) => {
	const location = useLocation();
	let shouldBeFocus = location.pathname === '/' ? true : false;

	return (
		<div id="search_wrapper" className="input-group">
			<input type="text" className="form-control" placeholder="Buscar por refugio o zona" aria-label="Buscar por refugio o zona" autoFocus={!shouldBeFocus}/>
			<button type="button" id="search_button"><i className="bi bi-search"></i></button>
		</div>
	);
}