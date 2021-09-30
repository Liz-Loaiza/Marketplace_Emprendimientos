import Vue from 'vue';
import  Router from 'vue-router';
import Landing from '@/components/Landing';
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
            path: '*',
            name: 'error',
            component:  Error
        }
    ]
 });
