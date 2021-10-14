<template>
    <div>
        <div class="card mt-4">
            <div class="card-body">
                <form @submit="login" >            
                    <label  class="form-label" for="usuario">Nombre de usuario</label>
                    <!--<input class ="form-control" type="text" id="nusuario" v-model="form.nombreusuario" required> -->
                        <b-form-input
                    id="nusuario"
                    v-model="form.nombreusuario"
                    :state="nameState"
                    aria-describedby="input-live-help input-live-feedback"                    
                    required
                    ></b-form-input>
                    <label  class="form-label" for="pass">Contraseña</label>
                    <input class ="form-control" type="password" id="paswd" v-model="form.contraseña" required> 
                    <input class = "btn btn-primary" type="submit"  value="ingresar"/>
                </form>
            </div>
            <div class ="message">
                <h5>{{message}}</h5>
            </div>
        </div>     
    </div>
</template>
<script>
import axios from 'axios'
export default {
     computed: {
      nameState() {        
        return this.form.nombreusuario.length >= 1 ? true:null
      }
    },
    data() {
        return {           
            message:"",
            form:{
                nombreusuario:'',
                contraseña:''
            }
        }

    },
    methods: {
        login(){
            if(localStorage.getItem('token') === null)
                {
                let formData = new URLSearchParams()
                formData.append('nombreusuario', this.form.nombreusuario)
                formData.append('contraseña',this.form.contraseña)
                axios.post('/login',formData,{
                    headers:{
                        "Access-Control-Allow-Methods":"POST"
                    }
                })
                .then((response)=>{
                    console.log(response)
                     localStorage.setItem('token',response.data.token)
                     this.$router.push('/home')
                })   .catch(e=>{
                console.log(e.response);
            })   
        } else{
            this.message='Ya hay una sesion iniciada'
            this.$router.push('/home')
        }                     
        }
    }
}
</script>