import {Link} from 'react-router-dom';

function Missing() {
    return (
        <div className="missing-wrapper">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/forum"><i className="bi bi-house-door-fill"></i> Foros</Link></li>
                    <li className="breadcrumb-item"><Link to="/forum/missing">Mascotas extraviadas</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Se me perdió mi perro ¡por favor ayuda!</li>
                </ol>
            </nav>
            <div className="card forum-message-wrapper">
                <div className="row g-0">
                    <div className="col-md-3 user-panel">
                        <div className="card-body">
                            <img className="img-fluid" width={80} src="/img/default_profile_picture.png" alt="profile_picture"/>
                            <h5 className="card-title">cosme_fulanito</h5>
                            <p className="card-text">Mensajes: <Link to="/forum/search?userid=18&topic=all">2302</Link></p>
                            <span className="d-block"><small>Usuario desde</small></span>
                            <span className="d-block"><small>20/10/2022</small></span>
                        </div>
                    </div>
                    <div className="col-md-9 message-wrapper">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6 forum-date"><p>Publicado el 2/11/2022 15:20 hs.</p></div>
                                <div className="col-6 forum-comment-number"><p className="text-end">#1</p></div>
                            </div>
                            <h4 className="card-title">Se me perdió mi perro ¡por favor ayuda!</h4>
                            <p className="card-text forum-comment">Hola gente, hoy a la mañana estaba lavando el auto y no me di cuenta cuando mi perro "Fatiga" se alejó de la casa. Estuve buscándolo y no lo puedo encontrar ¡estoy desesperado!<br/><br/>Fatiga es un perro muy curioso asi que puede estar en cualquier parte. Les paso una foto de mi perro, si alguno lo ve por favor me avisa por acá o por teléfono. ¡Gracias!</p>
                            <img className="img-fluid forum-comment-image" src="https://static.misionesonline.news/wp-content/uploads/2019/10/31121809/fatiga_portadaa.jpeg_1710391874.jpg" alt="comment_image"/>
                            <div className="row">
                                <div className="col-6">
                                    <p className="forum-date mt-3 mb-0">Editado por última vez: 2/11/2022 15:35 hs.</p>
                                </div>
                                <div className="col-6 text-end">
                                    <button type="button" className="btn btn-primary"><i className="bi bi-quote"></i> Citar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Missing;