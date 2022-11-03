import React from 'react';
import {Link, useLocation} from 'react-router-dom';

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
			<div className="list-group suggestions-wrapper">
				<Link href="#" className="list-group-item list-group-item-action" aria-current="true">
					<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">Refugio #1</h5>
					<span>4.5 <i className="bi bi-star-fill"></i></span>
					</div>
					<p className="mb-1">Moreno 1623, Monserrat</p>
				</Link>
				<Link href="#" className="list-group-item list-group-item-action">
					<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">Refugio #2</h5>
					<span>3 <i className="bi bi-star-fill"></i></span>
					</div>
					<p className="mb-1 text-muted">Av. del Libertador 4101, Palermo</p>
				</Link>
				<Link href="#" className="list-group-item list-group-item-action">
					<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">Refugio #3</h5>
					<span>5 <i className="bi bi-star-fill"></i></span>
					</div>
					<p className="mb-1 text-muted">Hipólito Yrigoyen 1849, Balvanera</p>
				</Link>
				<Link href="#" className="list-group-item list-group-item-action">
					<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">Refugio #4</h5>
					<span>2.6 <i className="bi bi-star-fill"></i></span>
					</div>
					<p className="mb-1 text-muted">Av. San Juan 350, San Telmo</p>
				</Link>
				<Link href="#" className="list-group-item list-group-item-action text-center">
					<div className="d-flex w-100 justify-content-between text-center">
						<small className="mb-1">Ver todos los resultados</small>
					</div>
				</Link>
			</div>
		</div>
	);
}