import {Link,Outlet,useLocation,useParams} from 'react-router-dom';

const shelterDb = require('../helpers/sheltersDb.json');

function ShelterDetails(props) {
	const location = useLocation();
    const {pathname} = location;
    const params = useParams();

    let shelterInfo = shelterDb.find(x => x.id === params.id);

    function thumbnail_loop() {
		let thumbs = [];

		for(let i = 0;i < 16;i++) {
			thumbs.push(
                <div className='col-md-4 col-xl-3' key={i}>
                    <Link to={`${pathname}/publication/${i+1}`}><img className='img-fluid' src='/img/thumbnail.jpg' alt='post_thumbnail'/></Link>
                </div>
            );
		}

		return thumbs;
	}

    function comments_loop() {
        let comments = [];
        // valoraciones: excelente, muy recomendable, buen lugar, poco recomendable, un desastre
        const estrellas = [5,4,3,2,1];
        const leyendas = ['Excelente', 'Muy recomendable', 'Buen lugar', 'Poco recomendable', 'Un desastre'];

        for(let i = 0;i < 10;i++) {
            let stars_llenas = [];
            if(i < estrellas.length) {
                for(let j = 0; j < estrellas[i]; j++) {
                    stars_llenas.push(<i className="bi bi-star-fill" key={j}></i>);
                }

                for(let k = estrellas[i]; k < 5; k++) {
                    stars_llenas.push(<i className="bi bi-star" key={k}></i>);
                }
            }
            else {
                for(let j = 0; j < estrellas[1]; j++) {
                    stars_llenas.push(<i className="bi bi-star-fill" key={j}></i>);
                }

                for(let k = estrellas[1]; k < 5; k++) {
                    stars_llenas.push(<i className="bi bi-star" key={k}></i>);
                }
            }

            comments.push(
                <div className="comment-wrapper" key={i}>
                    <div className="row pb-2">
                        <div className="col-auto">
                            <img className="img-fluid" src="/img/default_profile_picture.png" alt="profile_picture"/>
                        </div>
                        <div className="col-auto">
                            <Link to="/user/10"><p className="comment-name">cosme_fulanito</p></Link>
                            <p className="comment-date">27/10/2022 21:47</p>
                        </div>
                        <div className="col-auto ms-auto">
                            <h4 className="d-inline-block">{stars_llenas}</h4>
                            <span className="ps-2">{(i < leyendas.length) ? leyendas[i] : leyendas[1]}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            );
        }

        return comments;
    }

    return (
        <div className="shelter-details-wrapper">
            <div className="row">
                <div className="col-6">
                    <h1 className="display-3">{shelterInfo.name}</h1>
                    <p className="text-muted"><i className="bi bi-geo-alt-fill"></i> Ubicado en {shelterInfo.address}, {shelterInfo.district}</p>
                </div>
                <div className="col-6 text-end">
                    <h1 className="display-3">{shelterInfo.stars} <i className="bi bi-star-fill"></i></h1>
                    <p className="text-muted">500 valoraciones</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
					<ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className="nav-link active" id="pills-animal-tab" data-bs-toggle="pill" data-bs-target="#pills-animal" type="button" role="tab" aria-controls="pills-animal" aria-selected="true">Animales</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-comment-tab" data-bs-toggle="pill" data-bs-target="#pills-comment" type="button" role="tab" aria-controls="pills-comment" aria-selected="false">Comentarios</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-veterinary-tab" data-bs-toggle="pill" data-bs-target="#pills-veterinary" type="button" role="tab" aria-controls="pills-veterinary" aria-selected="false">Veterinarias asociadas</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-moreinfo-tab" data-bs-toggle="pill" data-bs-target="#pills-moreinfo" type="button" role="tab" aria-controls="pills-moreinfo" aria-selected="false">Más información</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div className="tab-pane fade show active" id="pills-animal" role="tabpanel" aria-labelledby="pills-animal-tab" tabIndex="0">
							<div className='row thumbnails-wrapper'>
								{thumbnail_loop()}
							</div>
						</div>
						<div className="tab-pane fade" id="pills-comment" role="tabpanel" aria-labelledby="pills-comment-tab" tabIndex="0">
                            {comments_loop()}
                        </div>
						<div className="tab-pane fade" id="pills-veterinary" role="tabpanel" aria-labelledby="pills-veterinary-tab" tabIndex="0">Pendiente...</div>
						<div className="tab-pane fade" id="pills-moreinfo" role="tabpanel" aria-labelledby="pills-moreinfo-tab" tabIndex="0">Pendiente...</div>
					</div>
				</div>
            </div>
            <Outlet/>
        </div>
    );
}

export default ShelterDetails;