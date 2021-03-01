<template lang="html">

  <section class="src-components-header">
   

    <div id="app">

      <b-navbar type="dark" variant="dark">
        <b-icon icon="menu-button-wide" class="text-white" v-b-toggle.sidebarEjemplo></b-icon>
       
        <b-navbar-nav>
            <b-nav-item v-bind:to="{path:'/'}">Home</b-nav-item>
            <b-nav-item v-bind:to="{path:'/about'}">About</b-nav-item>
            <b-nav-item v-bind:to="{path:'/pagina'}">Pagina</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
           <b-nav-item-dropdown right>
              <template #button-content>
                <em>{{usuario}}</em>
              </template>
              <b-dropdown-item href="#" @click="profile">Perfil</b-dropdown-item>
              <b-dropdown-item href="#" @click="logout">Cerrar Sesion</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      </b-navbar>
      

      <b-sidebar id="sidebarEjemplo" title="Menu" shadow>
          <b-navbar-nav>
            <b-nav-item v-bind:to="{path:'/'}">Home</b-nav-item>
            <b-nav-item v-bind:to="{path:'/about'}">About</b-nav-item>
            <b-nav-item v-bind:to="{path:'/pagina'}">Pagina</b-nav-item>
          </b-navbar-nav>
      </b-sidebar>

    </div>
    


  </section>

</template>

<script lang="js">
import firebase from 'firebase/app';
import 'firebase/auth';

  export default  {
    name: 'src-components-header',
    props: [],
    mounted () {

    },
    data () {
      return {
        usuario: firebase.auth().currentUser.email //obtiene el usuario que ha iniciado sesion
      }
    },
    methods: {
        logout(){
             firebase.auth().signOut().then(()=>this.$router.replace('/login'))
        },
        profile(){
          this.$router.replace('/profile')
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .src-components-header {

  }
</style>
