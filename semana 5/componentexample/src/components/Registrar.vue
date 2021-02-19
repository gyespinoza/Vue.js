<template lang="html">

  <section class="src-components-registrar">
    <h1>CRUD EXample</h1>

     <b-card-group>
        
        <b-card title="Nuevo Registro">
          <b-form>
            <b-row class="my-1">
                <b-col sm="2">
                  <label>Nombre:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input v-model="name" placeholder="Nombre de categoria"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="2">
                  <label>Descripcion:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-input v-model="description" placeholder="Descripcion"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">               
                <b-col sm="10">
                  <b-button type="button" variant="success" @click="add()">Registrar</b-button>
                </b-col>
            </b-row>
          </b-form>


        </b-card>


        <b-card title="Registros" header-tag="header" footer-tag="footer">          
          <b-card-text><Listar :cantidad="cantidad" :data="data" @update="updateCount" /></b-card-text>        
        </b-card>
      </b-card-group>

    
  </section>

</template>

<script lang="js">
import Listar from './Listar.vue'

  export default  {
    name: 'src-components-registrar',
    components:{
      Listar
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        name:'',
        description:'',
        data:[],
        cantidad:0
      }
    },
    methods: {
      add(){
        this.data.push({
          name:this.name, description:this.description
        });

        //enviar el arreglo hacia el localStorage
        localStorage.setItem('dataA', JSON.stringify(this.data));
        this.cantidad= this.data.length;
      },
      updateCount(value){
        this.cantidad=value;
      }

    },
    computed: {

    },
    created(){
      let dataA= JSON.parse(localStorage.getItem('dataA'));
      if(dataA===null){
        this.data=[];
      }else{
        this.data=dataA;
        this.cantidad= this.data.length;
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-registrar {

  }
</style>
