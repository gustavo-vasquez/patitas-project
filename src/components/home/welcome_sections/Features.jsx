function Features() {
    return (
        <div id="features">
            <h1>Echa un vistazo a algunas de las características de la plataforma</h1>
            <div className="row">
                <div className="col-12 col-md-4">
                    <h3>Fácil de usar</h3>
                    <p className="text-muted">La plataforma fue echa para que sea lo más amena posible para el usuario</p>
                </div>
                <div className="col-12 col-md-4">
                    <h3>Guardado en la nube</h3>
                    <p className="text-muted">Crea una cuenta y podrás mantener siempre los cambios de tu curriculum para cuando lo necesites</p>
                </div>
                <div className="col-12 col-md-4">
                    <h3>Temas</h3>
		            <p className="text-muted">Puedes elegir entre distintas plantillas al momento de crear tu cv</p>
                </div>
                <div className="col-12 col-md-4">
                    <h3>Secciones propias</h3>
		            <p className="text-muted">Si las secciones del CV no son suficientes para ti puedes crear todas las que quieras</p>
                </div>
                <div className="col-12 col-md-4">
                    <h3>Descarga</h3>
		            <p className="text-muted">Una vez terminado podrás descargar el CV como PDF listo para enviarlo</p>
                </div>
                <div className="col-12 col-md-4">
                    <h3>Gratuito</h3>
		            <p className="text-muted">Puedes crear, editar y descargar tu CV las veces que quieras sin ningún costo</p>
                </div>
            </div>
        </div>
    );
}

export default Features;