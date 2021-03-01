import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import firebase from 'firebase';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false;

// Your web app's Firebase configuration
//inicializar firebase
var firebaseConfig = {
  apiKey: "AIzaSyDAKbjl763bpy8PR2M01yRufYwIl6BCi0k",
  authDomain: "programacion-iv-91cb6.firebaseapp.com",
  projectId: "programacion-iv-91cb6",
  storageBucket: "programacion-iv-91cb6.appspot.com",
  messagingSenderId: "508143798768",
  appId: "1:508143798768:web:781bd356b51231d098f535"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(function(){
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
})