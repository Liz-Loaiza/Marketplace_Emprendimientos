<template>
	<div>
		<head>
			<meta charset="utf-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			<link rel="apple-touch-icon" sizes="76x76" href="assets/img/login/favicon.ico">



			<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
			<meta name="viewport" content="width=device-width" />

			<link rel="apple-touch-icon" sizes="76x76" href="assets/img/login/apple-icon.png" />
			<link rel="icon" type="image/png" href="assets/img/login/favicon.png" />

			<!--     Fonts and icons     -->
			<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

			<!-- CSS Files -->
			<link href="assets/css/bootstrap.min.css" rel="stylesheet" />
			<link href="assets/css/material-bootstrap-wizard.css" rel="stylesheet" />

			<!-- CSS Just for demo purpose, don't include it in your project -->
			<link href="assets/css/demo.css" rel="stylesheet" />
		</head>

		<body>
			<div class="image-container set-full-height" style="background-image: url('assets/img/login/wizard-profile.jpg')">

				<!--   Big container   -->
				<div class="container">
					<div class="row">
						<div class="col-sm-8 col-sm-offset-2">
							<!--      Wizard container        -->
							<div class="wizard-container">
								<div class="card wizard-card" data-color="green" id="wizardProfile">
									<form action="" method="">
								<!--        You can switch " data-color="purple" "  with one of the next bright colors: "green", "orange", "red", "blue"       -->

										<div class="wizard-header">
											<h3 class="wizard-title">
											Registrate
											</h3>
										</div>
										<div class="wizard-navigation">
											<ul>
												<li><a href="#about" data-toggle="tab">Acerca de</a></li>
												<li><a href="#account" data-toggle="tab">Tipo de cuenta</a></li>
											</ul>
										</div>

										<div class="tab-content">
											<div class="tab-pane" id="about">
											<div class="row">
													<h4 class="info-text">Información Básica</h4>
													<div class="col-sm-4 col-sm-offset-1">
														<div class="picture-container">
															<div class="picture">
																<img src="assets/img/login/default-avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
																<input type="file" id="wizard-picture">
															</div>
															<h6>Foto de perfil</h6>
														</div>
													</div>
													<div class="col-sm-6">
														<div class="input-group">
															<span class="input-group-addon">
																<i class="material-icons">face</i>
															</span>
															<div class="form-group label-floating">
															<label class="control-label">Nombre <small>(requirido)</small></label>
															<input name="firstname" type="text" class="form-control">
															</div>
														</div>

														<div class="input-group">
															<span class="input-group-addon">
																<i class="material-icons">record_voice_over</i>
															</span>
															<div class="form-group label-floating">
															<label class="control-label">Apellido <small>(requirido)</small></label>
															<input name="lastname" type="text" class="form-control">
															</div>
														</div>
													</div>
													<div class="col-sm-10 col-sm-offset-1">
														<div class="input-group">
															<span class="input-group-addon">
																<i class="material-icons">email</i>
															</span>
															<div class="form-group label-floating">
																<label class="control-label">Correo <small>(requirido)</small></label>
																<input name="email" type="email" class="form-control">
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="tab-pane" id="account">
												<h4 class="info-text"> Cuál tipo de cuenta deseas? (checkboxes) </h4>
												<div class="row">
													<div class="col-sm-10 col-sm-offset-1">
														<div class="col-sm-6">
															<div class="choice" data-toggle="wizard-radio" rel="tooltip" title="Seleccione esta opción si desea mostrar su emprendimiento">
																<input type="radio" name="job" value="Design">
																<div class="icon">
																	<i class="fa fa-user-o"></i>
																</div>
																<h6>Emprendedor</h6>
															</div>
														</div>
														<div class="col-sm-6">
															<div class="choice" data-toggle="wizard-radio" rel="tooltip" title="Seleccione esta opción si solo desea comprar" >
																<input type="radio" name="job" value="Code">
																<div class="icon">
																	<i class="fa fa-users"></i>
																</div>
																<h6>Comprador</h6>
															</div>
														</div>

													</div>
												</div>
											</div>
											
										</div>
										<div class="wizard-footer">
											<div class="pull-right">
												<input type='button' class='btn btn-next btn-fill btn-success btn-wd' name='next' value='Siguiente' />
												<input type='button' class='btn btn-finish btn-fill btn-success btn-wd' name='finish' value='Finalizar' />
											</div>

											<div class="pull-left">
												<input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Anterior' />
											</div>
											<div class="clearfix"></div>
										</div>
									</form>
								</div>
							</div> <!-- wizard container -->
						</div>
					</div><!-- end row -->
				</div> <!--  big container -->

			</div>	

		</body>

	</div>		
</template>