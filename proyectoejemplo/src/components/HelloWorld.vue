<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <b-form>
        <b-row class="my-1">
            <b-col sm="3">
                <label for="nombre">Escriba el nombre</label>
            </b-col>
            <b-col sm="3">
                <b-form-input type="text" v-model="nuevoNombre" placeholder="Jose Flores"></b-form-input>
            </b-col>
        </b-row>
         <b-row class="my-1">
            <b-col sm="3">
                <label for="edad">Escriba la edad</label>
            </b-col>
            <b-col sm="3">
                <b-form-input type="number" v-model="nuevaEdad" placeholder="20"></b-form-input>
            </b-col>
        </b-row>
         <b-row class="my-1">
            <b-col sm="3">
                <label for="edad">Seleccione el sexo</label>
            </b-col>      
            <b-col sm="1">
                <b-form-radio value="m" v-model="nuevoSexo">Masculino</b-form-radio>
                <b-form-radio value="f" v-model="nuevoSexo">Femenino</b-form-radio>
            </b-col>    
        </b-row>

        <b-button variant="primary" v-on:click="agregarDato()">Agregar Dato</b-button>
      </b-form>

    <!--mostrar la data en un table-->
    <!--b-table striped hover :items="arreglo"></!--b-table-->
    <b-table-simple>
      <b-thead>
          <b-th>Nombre</b-th>
          <b-th>Edad</b-th>
          <b-th>Sexo</b-th>
          <b-th></b-th>
      </b-thead>
      <b-tbody>
          <b-tr v-for="dato in arreglo" :key="dato.nombre">
              <b-td>{{dato.nombre}}</b-td>
              <b-td><b-form-input type="number" v-model="dato.edad"></b-form-input></b-td>
              <b-td>{{ dato.sexo =='m'?'Masculino' : 'Femenino'}}</b-td>
              <b-td><span v-if="dato.edad>=18">Mayor de edad</span></b-td>
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
       arreglo:[
                    {nombre: 'Nahum', edad:20, sexo: 'm'},
                    {nombre: 'Jose', edad:5, sexo: 'm'},
                    {nombre: 'Maritza', edad:15, sexo: 'f'}
                ],
                nuevoNombre: '',
                nuevaEdad: '',
                nuevoSexo:''
    }  
  },
  methods:{
       agregarDato(){
                    this.arreglo.push({
                        nombre: this.nuevoNombre, edad: this.nuevaEdad, sexo: this.nuevoSexo
                    });
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
