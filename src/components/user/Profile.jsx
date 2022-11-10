function Profile() {
    return (
        <div className="profile-wrapper">
            <h1>Panel de usuario</h1>
            <div className="row">
                <div className="col">
					<ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-personal-tab" data-bs-toggle="pill" data-bs-target="#pills-personal" type="button" role="tab" aria-controls="pills-personal" aria-selected="true"><i className="bi bi-person-fill"></i> Datos personales</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link active" id="pills-adoption-tab" data-bs-toggle="pill" data-bs-target="#pills-adoption" type="button" role="tab" aria-controls="pills-adoption" aria-selected="false"><i className="bi bi-file-text-fill"></i> Formulario de pre-adopción</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#pills-settings" type="button" role="tab" aria-controls="pills-settings" aria-selected="false"><i className="bi bi-gear-fill"></i> Configuración</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div className="tab-pane fade" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab" tabIndex="0">
							<div className='row thumbnails-wrapper'>
								<p>Datos personales</p>
							</div>
						</div>
						<div className="tab-pane fade show active" id="pills-adoption" role="tabpanel" aria-labelledby="pills-adoption-tab" tabIndex="0">
                            <div className="row">
                                <div id="adoption_form_wrapper">
                                    <h4>Para poder postularse e iniciar el proceso de adopción de un animal, es necesario que completes este formulario para brindarle información a los refugios sobre tu persona y te tengan en consideración.</h4>
									{/*<img className="img-fluid" width={300} src="https://cdn.wamiz.fr/article/images/WAMIZ%20ES/FEBRERO%202021/MARZO%202021/gatoguinandoojoysonriendo.jpg" alt="gato"/>*/}
									<div class="card">
										<div class="card-body">
											<p><span className="badge rounded-pill text-bg-danger"><i className="bi bi-exclamation-circle"></i> Importante:</span> tus respuestas serán evaluadas por los responsables del refugio y, en base a su criterio, tu solicitud de adopción será aceptada o rechazada.</p>											
											<div className="row">
												<div className="col">
													<div className="form-field">
														<p>¿Alguna vez tuvo a cargo alguna mascota?*</p>	
														<div class="form-check form-check-inline">
																<input class="form-check-input" type="radio" name="radioI" id="inlineRadio1" value="option1"/>
																<label class="form-check-label" for="inlineRadio1">Si</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioI" id="inlineRadio2" value="option2"/>
															<label class="form-check-label" for="inlineRadio2">No</label>
														</div>
													</div>
													<div className="form-field">
														<p>¿Convive con más personas?*</p>	
														<div class="form-check form-check-inline">
																<input class="form-check-input" type="radio" name="radioII" id="inlineRadio3" value="option1"/>
																<label class="form-check-label" for="inlineRadio3">Si</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioII" id="inlineRadio4" value="option2"/>
															<label class="form-check-label" for="inlineRadio4">No</label>
														</div>
													</div>
													<div className="form-field">
														<p>¿Cuántos ambientes tiene su hogar?*</p>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioIII" id="inlineRadio5" value="option1"/>
															<label class="form-check-label" for="inlineRadio5">2</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioIII" id="inlineRadio6" value="option2"/>
															<label class="form-check-label" for="inlineRadio6">3</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioIII" id="inlineRadio7" value="option3"/>
															<label class="form-check-label" for="inlineRadio7">4 o más</label>
														</div>
													</div>
													<div className="form-field">
														<p>¿Cuántas veterinarias tiene cerca de su zona?*</p>
														<input type="number" className="form-control"/>
													</div>
													<div className="form-field">
														<p>Su hogar tiene...*</p>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
															<label class="form-check-label" for="inlineCheckbox1">Patio (para perros)</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
															<label class="form-check-label" for="inlineCheckbox2">Balcón (para perros)</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
															<label class="form-check-label" for="inlineCheckbox3">Redes en ventanas a altura (para gatos)</label>
														</div>
													</div>
													<div className="form-field">
														<p>¿Posee mascotas actualmente?*</p>	
														<div class="form-check form-check-inline">
																<input class="form-check-input" type="radio" name="radioIV" id="inlineRadio8" value="option1"/>
																<label class="form-check-label" for="inlineRadio8">Si</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioIV" id="inlineRadio9" value="option2"/>
															<label class="form-check-label" for="inlineRadio9">No</label>
														</div>
													</div>
													<div className="form-field">
														<p>¿Tiene conocimiento acerca de la ley del maltrato animal?*</p>
														<div class="form-check form-check-inline">
																<input class="form-check-input" type="radio" name="radioV" id="inlineRadio10" value="option1"/>
																<label class="form-check-label" for="inlineRadio10">Si</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioV" id="inlineRadio11" value="option2"/>
															<label class="form-check-label" for="inlineRadio11">No</label>
														</div>
													</div>
													<div className="form-field">
														<p>¿Con que frecuencia quedaría solo el animal en el hogar?...*</p>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioVI" id="inlineRadio12" value="option1"/>
															<label class="form-check-label" for="inlineRadio12">Poco frecuente</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioVI" id="inlineRadio13" value="option2"/>
															<label class="form-check-label" for="inlineRadio13">Algo frecuente</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioVI" id="inlineRadio14" value="option3"/>
															<label class="form-check-label" for="inlineRadio14">Muy frecuente</label>
														</div>
													</div>
													<div className="form-field">
														<p>Si hubiera una emergencia con el animal, ¿tendria alguien a quien recurrir para que lo lleve al veterinario?*</p>
														<div class="form-check form-check-inline">
																<input class="form-check-input" type="radio" name="radioVII" id="inlineRadio15" value="option1"/>
																<label class="form-check-label" for="inlineRadio15">Si</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioVII" id="inlineRadio16" value="option2"/>
															<label class="form-check-label" for="inlineRadio16">No</label>
														</div>
													</div>
													<div className="form-field">
														<p>¿Su remuneración es acorde a los gastos que estima tener para el cuidado del animal?*</p>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioVIII" id="inlineRadio17" value="option1"/>
															<label class="form-check-label" for="inlineRadio17">Si</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioVIII" id="inlineRadio18" value="option2"/>
															<label class="form-check-label" for="inlineRadio18">No</label>
														</div>
													</div>
													<div className="form-field">
														<p>¿Tiene familiares o conocidos que lo aconsejen (gracias a su experiencia) ante cualquier eventualidad durante la crianza del animal?*</p>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioIX" id="inlineRadio19" value="option1"/>
															<label class="form-check-label" for="inlineRadio19">Si</label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="radioIX" id="inlineRadio20" value="option2"/>
															<label class="form-check-label" for="inlineRadio20">No</label>
														</div>
													</div>
													<p><small><i>(*) Todos los campos son obligatorios</i></small></p>
												</div>
											</div>
										</div>
									</div>
                                </div>
                            </div>
                        </div>
						<div className="tab-pane fade" id="pills-settings" role="tabpanel" aria-labelledby="pills-settings-tab" tabIndex="0">
                            <p>Configuración</p>
                        </div>
					</div>
				</div>
            </div>
        </div>
    );
}

export default Profile;