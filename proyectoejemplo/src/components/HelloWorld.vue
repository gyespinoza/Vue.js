<template>
  <div class="hello">
    <h1 v-color="'green'">{{ msg }}</h1>
    

    <!--a v-bind:href="ruta">Enlace</!--a-->
    <span v-html="mensajeHTML"></span>
    <h3 v-mensaje="'red'"></h3>

    <b-form>
        <b-row class="my-1">
            <b-col sm="3">
                <label for="nombre">Escriba el nombre</label>
            </b-col>
            <b-col sm="3">
              <!--agregamos la directiva creada en la definicion del elemento-->
                <b-form-input v-focus type="text" v-model="nombre" placeholder="Jose Flores"></b-form-input>
            </b-col>
        </b-row>
         <b-row class="my-1">
            <b-col sm="3">
                <label for="edad">Escriba la edad</label>
            </b-col>
            <b-col sm="3">
                <b-form-input type="number" v-model="edad" placeholder="20"></b-form-input>
            </b-col>
        </b-row>
         <b-row class="my-1">
            <b-col sm="3">
                <label for="edad">Seleccione el sexo</label>
            </b-col>      
            <b-col sm="1">
                <b-form-radio value="m" v-model="sexo">Masculino</b-form-radio>
                <b-form-radio value="f" v-model="sexo">Femenino</b-form-radio>
            </b-col>    
        </b-row>

        <b-button variant="primary" v-on:click="agregarDato()">Agregar Dato</b-button>
      </b-form>
    <!--mostrar la data en un table-->
    <!--b-table striped hover :items="arreglo"></!--b-table-->
    <b-table-simple>
      <b-thead>
          <b-th>ID</b-th>
          <b-th>Nombre</b-th>
          <b-th>Edad</b-th>
          <b-th>Sexo</b-th>
          <b-th></b-th>
      </b-thead>
      <b-tbody>
          <b-tr v-for="(dato, index) in arreglo" :key="dato.id">
            <b-td>{{dato.id}}</b-td>
              <b-td>
                <span v-if="actualizarF && idActualizar==index">
                    <input type="text" v-model="nuevoNombre" class="form-class"/>
                </span>
                <span v-else>
                    {{dato.nombre}}
                </span>                    
              </b-td>
              <b-td>
                 <span v-if="actualizarF &&  idActualizar==index">
                    <input type="number" v-model="nuevaEdad" class="form-class"/>
                </span>
                <span v-else>
                    {{dato.edad}}
                </span>    
              </b-td>              
              <b-td>{{ dato.sexo =='m'?'Masculino' : 'Femenino'}}</b-td>              
              <b-td>
                  <span v-if="actualizarF &&  idActualizar==index">
                      <b-button variant="primary" v-on:click="guardarActualizacion(index)">Guardar</b-button>
                  </span>
                  <span v-else>
                      <b-button variant="success" v-on:click="actualizar(index)">Actualizar</b-button>
                      <b-button variant="danger" v-on:click="eliminar(index)">Eliminar</b-button>
                  </span>
              </b-td>
          </b-tr>
      </b-tbody>
    </b-table-simple>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
           /* arreglo:[
                    {nombre: 'Nahum', edad:20, sexo: 'm'},
                    {nombre: 'Jose', edad:5, sexo: 'm'},
                    {nombre: 'Maritza', edad:15, sexo: 'f'}
                ],*/
                id:1,
                idActualizar:-1,
                nombre:'',
                edad:'',
                sexo:'',
                arreglo: [],
                nuevoNombre: '',
                nuevaEdad: '',
                nuevoSexo:'',
                registro_id:'',
                ruta:'https://ugb.instructure.com/',
                estilo:{
                  color:'blue',
                  fontSize: '20px'
                },
                actualizarF:false,
                mensajeHTML: `<h2><b>Ciclo I-2021</b></h2>
                  <b>INGENIERIA EN SISTEMAS Y REDES INFORMATICAS</b>
                `
                
    }  
  },
  methods:{
      agregarDato(){
                    this.arreglo.push({
                       id:this.id++, nombre: this.nombre, edad: this.edad, sexo: this.sexo
                    });
                },
      actualizar(registro_id){
        //rellenar los campos
        this.idActualizar= registro_id;
        this.nuevoNombre=this.arreglo[registro_id].nombre;
        this.nuevaEdad=this.arreglo[registro_id].edad;
        this.nuevoSexo=this.arreglo[registro_id].sexo;
        this.actualizarF=true;
      },
      guardarActualizacion(registro_id){
        this.actualizarF=false;
        this.arreglo[registro_id].nombre= this.nuevoNombre,
        this.arreglo[registro_id].edad=this.nuevaEdad
      },
     eliminar(registro_id){
       //borrar elemento de la lista
        this.arreglo.splice(registro_id, 1);
     }

},
  directives:{
    mensaje:{
      bind:function(el, binding){
        el.innerHTML="Mensaje desde directiva"
        el.style.color=binding.value
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
