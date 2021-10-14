<template>
    <div>
     <appheader></appheader> 
     <b-container fluid>
     <b-row> 
    <b-col>
     <div id ="enlaces" style="margin-top: 120px">
        <b-jumbotron header="Bienvenido!" lead="Opciones del usuario">
            <a href="/producto">Administracion de productos</a>    
        </b-jumbotron>     
    </div>
    </b-col>
     </b-row>
    </b-container>
    </div>
</template>

<script>
import appheader from '@/components/AppHeader'
export default {
    components:{
        appheader
    }
}
</script>