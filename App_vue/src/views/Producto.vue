<template>
    <div>
        <app-header></app-header>
	<div class="container mt5" style="margin-top:100px">
		<div class="row align-items-start">
			<div class="col-5">
				<div class="card mt-4">
						<div class="card-body">
							<form @submit="agregarProducto" enctype="multipart/form-data" v-if="!modificar">
								<label  class="form-label" for="nombreproducto">Nombre del producto</label>
								<input class ="form-control" type="text" id="nombre_producto" v-model="nombre_producto"> 								
								<label  class="form-label" for="descproducto">Descripcion del producto</label>
								<input class ="form-control" type="text" id="descripcion_producto" v-model="descripcion_producto"> 
								<label  class="form-label" for="precio">Precio</label>
								<input class ="form-control" type="number" id="precio" v-model="precio"> 
                                <label  class="form-label" for="categoria">categoria</label>								
                                <select v-model="id_categoria" class="form-control" id="id_categoria">                                
                                <option v-for="(item, index) in options" :key="index" :value="item._id">{{item.nombre_categoria}}</option>
                                </select>
                                <label  class="form-label" for="imglbl">Imagen del producto</label>
                               <input class ="form-control" type="file" id="img" name="img" @change="onFileChange" accept =".png, .jpg, .jpeg" required> 
								<input class = "btn btn-primary" type="submit" value="Agregar producto"/>		
							</form>
						</div>
				</div>
			</div>
			<div class="col-5">
				<div class="card mt-4">
					<div class="card-body">
						<form @submit.prevent="Modificarproducto(producto_modificar)" v-if="modificar">
								<label  class="form-label" for="nombreproducto">Nombre del producto</label>
								<input class ="form-control" type="text" id="nproducto" v-model="producto_modificar.nombre_producto"> 								
								<label  class="form-label" for="descproducto">Descripcion del producto</label>
								<input class ="form-control" type="text" id="dproducto" v-model="producto_modificar.descripcion_producto"> 
								<label  class="form-label" for="precio">Precio</label>
								<input class ="form-control" type="text" id="precio" v-model="producto_modificar.precio"> 			
								<b-button class="btn-success my-2 mx-2" type="submit">Modificar</b-button>					
								<!--<input class = "btn btn-primary" type="button" @click="Modificarproducto" value="Modificar"/>-->
						</form>
					</div>
				</div>
			</div>			
		</div>
		<table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in producto" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.nombre_producto}}</td>
                <td>{{item.descripcion_producto}}</td>
                <td>{{item.precio}}</td>
                <td>
                    <b-button class="btn-danger mx-2" @click="eliminarNProducto(item._id)">Eliminar</b-button>
                    <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
                </td>
            </tr>

        </tbody>
    </table>
	</div>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import axios from 'axios'
export default {
    data() {
        return {
            nombre_producto:'',
            descripcion_producto:'',
            precio:0,
            id_categoria: '',	                                                                                                                                                                                                                                                                                                                                                                                                         			             
            img:'',  
			producto: [],			
           /*  form:{
				nombre_producto:'',
				descripcion_producto:'',
				precio:0,
                id_categoria: '',	                                                                                                                                                                                                                                                                                                                                                                                                         			             
                img:''
            }, */
		producto_modificar:{},
		modificar:false,
        selected: {},
        options: [                 
        ]
        }

    },
	created(){
		this.ConsultarProductos()
        this.ConsultarCategorias()
	},
    methods: {
		ConsultarProductos() {
			this.axios.get('/productos')
                .then(res => {                 
                    this.producto = res.data;

                })
                .catch(e => {

                    console.log(e.response);

                })

        },
        ConsultarCategorias() {
			this.axios.get('/categorias')
                .then(res => {                 
                    this.options=res.data
                })
                .catch(e => {
                    console.log(e.response);

                })
        },
		agregarProducto(){
           
            // this.axios.post('/producto',this.form)
            // .then(res=>{
			// 	this.producto.push(res.data)
			// 	this.form.nombre_producto="";
			// 	this.form.descripcion_producto="";
			// 	this.form.precio="";				
            //     this.form.id_categoria="";
            //     this.form.img=""
            // })
            // .catch(e=>{
            //     console.log(e.response);
            // })
            let formData = new FormData()
            formData.append('nombre_producto', this.nombre_producto)
            formData.append('descripcion_producto', this.descripcion_producto)
            formData.append('precio', this.precio)
            formData.append('id_categoria', this.id_categoria)
            formData.append('img', this.img)
            axios.post('http://localhost:3000/producto', formData,{
                header:{
                    'Access-Control-Allow-Methods':'POST'
                }
                })
                .then((response)=>
                {
                    console.log(response.data)
                    this.$router.push('/producto')
                })
            // try{
            // this.axios.post('/producto', formData)
            // }catch(err){
            //     console.log(err)    
            // }
        },

		eliminarNProducto(id){

            this.axios.delete(`/producto/${id}`)
            .then(res=>{
                const index = this.producto.findIndex(item=> item._id===res.data._id);
                this.producto.splice(index, 1);
               // this.mensaje.color="success";
                //this.mensaje.texto="Nota Eliminada";
                //this.showAlert();

            })
            .catch(e=>{

                  console.log(e.response);

            })
        },

        activarEdicion(id){

            this.modificar=true;
            this.axios.get(`/producto/${id}`)
            .then(res=>{

                this.producto_modificar=res.data;

            })
            .catch(e=>{

                 console.log(e.response);


            })


        },

        Modificarproducto(item){
            
            this.axios.put(`/producto/${item._id}`, item)
            .then(res=>{
                const index= this.producto.findIndex(n=> n._id===res.data._id);
                this.producto[index].nombre_producto=res.data.nombre_producto;
                this.producto[index].descripcion_producto=res.data.descripcion_producto;
				this.producto[index].precio=res.data.precio;
                //this.mensaje.color="success";
                //this.mensaje.texto="Nota Editada";
                //this.showAlert();
                this.modificar=false;
            })
            .catch(e=>{

                console.log(e.response);

            })



        },	
          onFileChange(e){
            let files = e.target.files || e.dataTransfer.files
            if(!files.length) return
            this.img =files[0]

        }
	},
	
    components: {
	AppHeader
	}
}
</script>