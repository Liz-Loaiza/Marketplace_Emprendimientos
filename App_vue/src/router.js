import Vue from 'vue';
import  Router from 'vue-router';
import Landing from '@/components/Landing';
import Registro from '@/views/Registro'
import Error from '@/views/Error404';

Vue.use(Router);

 export default new Router({
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
            path: '*',
            name: 'error',
            component:  Error
        }
    ]
 });
