import { createRouter, createWebHistory} from 'vue-router';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Dashboard from './components/Dashboard.vue';
import NotFound from './components/NotFound.vue';
import store from './store/Module/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', redirect: '/register' ,
        },
        {
            path: '/register', component: Signup,
        },
        {
            path: '/login', component: Login,
        },
        {
            path: '/dashboard' ,component: Dashboard, 
        },
        {
            path: '/:notFound(.*)', component: NotFound,
        },
    ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } 
  else {
      next();
  }
  
  });
  export default router;