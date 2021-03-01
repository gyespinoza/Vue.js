<template>

<section>
    <Header></Header>
    <h1>Usuario: {{usuario}}</h1>
    <b-card-group deck class="p-3 mb-4">
        
        <b-card bg-variant="light">
          <h2>Cambiar clave</h2>
          <b-form>                  
            <b-form-group label="Clave:" description="Escriba la clave">
              <b-form-input v-model="clave" type="password" placeholder="*****" required></b-form-input>
            </b-form-group>
                              
            <b-form-group label="Confirmar clave:" description="Confirmar clave">
              <b-form-input v-model="confirmarClave" type="password" placeholder="*****" required></b-form-input>
            </b-form-group>           
            
            <b-button variant="success" @click="resetPassword">Cambiar clave</b-button>
            
          </b-form>
        </b-card>
    </b-card-group>
  </section>
    
        
</template>
<script lang="js">
import Header from "./Header.vue";
import firebase from 'firebase/app';
import 'firebase/auth';

export default  {
    name: "perfil",
    components:{
        Header
    },
    data(){
    return {
            clave:'',
            confirmarClave:'',
            usuario: firebase.auth().currentUser.email
        }
     },

    methods:{
         resetPassword(){
            var user = firebase.auth().currentUser;            

            if (this.clave != this.confirmarClave){
                alert("Las claves no coinciden");
                this.clave='',
                this.confirmarClave=''
            }else{
                user.updatePassword(this.clave).then(function() {
                    alert("Se ha cambiado la clave con exito!");
                }).catch(function(error) {
                    alert(error.message)
                });
            }
         },

    }
}
</script>