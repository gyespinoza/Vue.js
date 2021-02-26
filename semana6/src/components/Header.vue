<template lang="html">

  <section class="src-components-header">
   

    <div id="app">
      <!--router-link to="/">Home</!--router-link> |
      <router-link to="/about">About</router-link>
      <router-link-- to="/pagina">Pagina 1</router-link-->


      <b-navbar type="dark" variant="dark">
        <b-icon icon="menu-button-wide" class="text-white" v-b-toggle.sidebarEjemplo></b-icon>
        <b-navbar-nav>
            <b-nav-item v-bind:to="{path:'/'}">Home</b-nav-item>
            <b-nav-item v-bind:to="{path:'/about'}">About</b-nav-item>
            <b-nav-item v-bind:to="{path:'/pagina'}">Pagina</b-nav-item>
            <a href="#" @click="logout">Logout</a>
        </b-navbar-nav>
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

      }
    },
    methods: {
        logout(){
             firebase.auth().signOut().then(()=>this.$router.replace('/login'))
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
