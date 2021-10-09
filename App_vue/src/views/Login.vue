<template>
    <div>
        <div class="card mt-4">
            <div class="card-body">
                <form action="">
                    <label  class="form-label" for="usuario">Nombre de usuario</label>
                    <input class ="form-control" type="text" id="nusuario" v-model="form.nombreusuario"> 
                    <label  class="form-label" for="pass">Contraseña</label>
                    <input class ="form-control" type="password" id="paswd" v-model="form.contraseña"> 
                    <input class = "btn btn-primary" type="button" @click="login" value="ingresar"/>
                </form>
            </div>
        </div>     
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            form:{
                nombreusuario:'',
                contraseña:''
            }
        }

    },
    methods: {
        login(){
           
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
        }
    }
}
</script>