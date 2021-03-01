import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Perfil from "../views/Perfil.vue";
import firebase from 'firebase';
import 'firebase/auth'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{ //adjunta informacion a rutas
      auth:true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta:{
        auth:true
      }
  },
  {
    path:"/pagina",
    name:"Pagina 1",
    component: () =>
      import("../views/pagina1.vue"),
    meta:{
        auth:true
      }     
  },
  {
    path:'/profile',
    name:"Perfil",
    component: Perfil,
    meta:{
        auth:true
    }     
  },
  {
    path:"*",
    redirect: '/login'
  },
  {
    path: "/login",
    name:"Login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});


//navigation guards
//se utiliza para proteger la navegacion del sitio
//to: Route: el objeto de ruta de destino al que se está navegando.
//from: Route: la ruta actual de la que se está navegando.
//next: Function: ruta hacia donde se navegara
router.beforeEach((to, from, next) => { 
  const currentUser = firebase.auth().currentUser;
  const auth = to.matched.some(record => record.meta.auth);

  if (auth && !currentUser) {
    next('/login');
  } else if (auth && currentUser) {
    next();
  } else {
    next();
  }
});




export default router;