<template lang="html">

  <section class="src-components-login container">
    <h1>Inicio de sesión</h1>

    <b-card-group deck class="p-3 mb-4">
        <b-card bg-variant="light">
          <b-form>
            <b-form-group label="Correo Electronico:" description="Escriba el correo">
              <b-form-input v-model="correo" type="email" placeholder="correo@correo.com" required></b-form-input>
            </b-form-group>          
            <b-form-group label="Clave:" description="Escriba la clave">
              <b-form-input v-model="clave" type="password" placeholder="*****" required></b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="login()">Iniciar sesión</b-button>
            <b-button variant="primary" @click="login()">Registro</b-button>
            <b-button variant="danger" type="reset">Limpiar</b-button>
          </b-form>
        </b-card>
    </b-card-group>
  </section>

</template>

<script lang="js">
import firebase from 'firebase/app';
import 'firebase/auth';

  export default  {
    name: 'src-components-login',
    props: [],
    mounted () {

    },
    data () {
      return {
          correo:'',
          clave:''
      }
    },
    methods: {
      login(){
        firebase.auth().signInWithEmailAndPassword(this.correo, this.clave)
          .then(() => this.$router.replace('/'))
          .catch((error) => {
              alert(error.message);
          });
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .src-components-login {

  }
</style>
