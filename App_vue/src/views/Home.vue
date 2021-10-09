<template>
    <div>
     <appheader></appheader> 
     <div id ="enlaces" style="margin-top: 120px">
            <h1>Bienvenido</h1>
            <h2>Opciones de usuario</h2>
            <a href="/producto">Administracion de productos</a>
    </div>
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