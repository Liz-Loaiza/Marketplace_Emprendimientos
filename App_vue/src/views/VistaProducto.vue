<template> 
    <div>
      <div class="container mt5" style="margin-top:100px">      
               <div class="col-lg-4 col-md-6 portfolio-item filter-app" style="margin-top:100px" v-for= "p in prodxcategoria" v-bind:key= "p._id">
             <img :src="url+p.img" class="img-fluid" alt="">
             <div class="portfolio-info" >
                <h4>{{p.nombre_producto}}</h4>
                <p>{{p.descripcion_producto}}</p>
                <p>{{p.precio}}</p>                
                </div>
            </div>
      </div> 
    </div>
</template>
<script>

export default {    
    data() {
        return{
            prodxcategoria:{},
            url: 'http://localhost:3000'
        }
    },
    created(){
        this.getCategorias(this.$route.params.id)
    },
    methods:{
        getCategorias(id){
             this.axios.get(`/productoxcat/${id}`)
            .then(res=>{
                this.prodxcategoria=res.data;
            })
        }
    }
}
</script>