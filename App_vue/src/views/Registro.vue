<template>
	<div>
		<app-header></app-header>
			<b-alert 
		:show="dismissCountDown" 
		dismissible 
		:variant="mensaje.color" 
		@dismissed="dismissCountDown=0" 
		@dismiss-count-down="countDownChanged" > 
		{{mensaje.texto}} 
		</b-alert>
	<div class="container mt5" style="margin-top:100px">
		<div class="row align-items-start">
			<div class="col-5">
				<div class="card mt-4">
						<div class="card-body">
							<form action="">
								<label  class="form-label" for="nombreusuario">Nombre Usuario</label>
								<input class ="form-control" type="text" id="nombreusuario" v-model="form.nusuario"> 
								<label  class="form-label" for="pass">Contraseña</label>
								<input class ="form-control" type="password" id="pass" v-model="form.password"> 
								<label  class="form-label" for="nombres">Nombres</label>
								<input class ="form-control" type="text" id="nombres" v-model="form.nombres"> 
								<label  class="form-label" for="apellidos">Apellidos</label>
								<input class ="form-control" type="text" id="Apellidos" v-model="form.apellidos"> 
								<label  class="form-label" for="email">E-mail</label>
								<input class ="form-control" type="text" id="email" v-model="form.email">
								<label  class="form-label" for="telefono">telefono</label>
								<input class ="form-control" type="text" id="telefono" v-model="form.telefono">
								<input class = "btn btn-primary" type="button" @click="agregarUsuario" value="Registrese"/>		
							</form>
						</div>
				</div>
			</div>
		</div>
	</div>

	</div>		
</template>
<script>
import AppHeader from '@/components/AppHeader';

export default {	
	data() {
        return {
			usuarios: [],
			mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 5, 
            dismissCountDown: 0,
            form:{
				nusuario:'',
				password:'',
				nombres:'',
				apellidos:'',
                email:'',
				telefono:''               
            }
        }

    },
	methods: {
		agregarUsuario(){
            this.axios.post('/registro',this.form)
            .then(res=>{
				this.usuarios.push(res.data)
				this.form.nusuario="";
				this.form.password="";
				this.form.nombres="";
				this.form.apellidos="";
				this.form.email="";
				this.form.telefono="";
				this.mensaje.color="success";
				this.mensaje.texto="Usuario Agregado";
				this.showAlert();
            })
            .catch(e=>{
                console.log(e.response);
            })	
        },
	countDownChanged(dismissCountDown) { 
            this.dismissCountDown = dismissCountDown 
        }, 
        showAlert() { 
            this.dismissCountDown = this.dismissSecs 
        }
	},

	components: {
	AppHeader
	},
	

}
 
</script>