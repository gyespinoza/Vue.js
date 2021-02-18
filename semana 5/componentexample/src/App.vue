<template>
  <div id="app">
    <Header titulo="Programacion Computacional IV"></Header>
    <Index titulo="Ejemplo Componentes"></Index>

  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'
import Ejemplo from './components/Ejemplo.vue'
import Prueba from './components/Prueba.vue'*/
import Index from './components/Index.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Index,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
