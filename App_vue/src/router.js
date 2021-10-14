import Vue from 'vue';
import  Router from 'vue-router';
import Landing from '@/components/Landing';
import Registro from '@/views/Registro'
import Error from '@/views/Error404';
import home from '@/views/Home'
import Login from '@/views/Login'
import Producto from '@/views/Producto'
import vistaProducto from '@/views/VistaProducto'
Vue.use(Router);

const router = new Router({
    mode:'history',
    routes: [
        { 
            path: '/',
            name: 'landing',
            component: Landing

        },
        {
            path: '/registro',
            name: 'registro',
            component: Registro
        },
        {
            path: '/vistaproducto/:id',
            name: 'vistaProducto',
            component: vistaProducto
        },
        {
            path: '/producto',
            name: 'producto',
            component: Producto,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                isAuth: true
            }
        },
   
        {
            path: '*',
            name: 'error',
            component:  Error
        }
    ]
 });

 router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth){
        if(!localStorage.getItem('token'))
        {
            next({
                name: 'landing'
            })
        }else{
            next()    
        }
        
    }else{
        next()
    }

    if(to.meta.isAuth)
    {
        if(localStorage.getItem('token'))
        {
            next({
                name: 'login'
            })
        }else{
            next()    
        }
    }else
    {
        next()
    }
});
export default router