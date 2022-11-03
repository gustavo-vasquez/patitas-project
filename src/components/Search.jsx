import React from 'react';
import {Link,useLocation,useNavigate} from 'react-router-dom';

const shelterDb = require('./helpers/sheltersDb.json');

export const Search = (props) => {
	const location = useLocation();
	const navigate = useNavigate();
	//let shouldBeFocus = location.pathname === '/' ? true : false;
	//console.log(location);

	const triggerSuggestions = (event) => {
		if(event.target.value.length >= 3) {
			document.querySelector('.suggestions-wrapper').style.removeProperty('display');
		}
		else
			document.querySelector('.suggestions-wrapper').style = "display: none;";
	}

	const suggestionClick = (event, id) => {
		event.preventDefault();
		document.querySelector('.suggestions-wrapper').style = "display: none;";
		navigate(`/shelter/${id}`);
	}

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
			<input id="shelter_search" onChange={triggerSuggestions} onClick={triggerSuggestions} type="text" className="form-control" placeholder="Buscar por refugio o barrio porteño" aria-label="Buscar por refugio o barrio porteño"/>
			<button id="shelter_search_button" type="button" className="btn"><i className="bi bi-search"></i></button>
			<div className="list-group suggestions-wrapper" style={{'display': 'none'}}>
				{shelterDb.map((shelter, index) =>
					<Link to={`/shelter/${shelter.id}`} onClick={(event) => suggestionClick(event, shelter.id)} className="list-group-item list-group-item-action" aria-current="true" key={index}>
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">{shelter.name}</h5>
							<span>{shelter.stars} <i className="bi bi-star-fill"></i></span>
						</div>
						<p className="mb-1 text-muted">{shelter.address}, {shelter.district}</p>
					</Link>
				)}
				<Link to="/results" onClick={triggerSuggestions} className="list-group-item list-group-item-action text-center">
					<div className="d-flex w-100 justify-content-between text-center">
						<small className="mb-1">Ver todos los resultados</small>
					</div>
				</Link>
			</div>
		</div>
	);
}