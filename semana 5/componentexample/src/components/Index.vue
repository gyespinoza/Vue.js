<template lang="html">

  <section class="src-components-index">
    <h1>{{titulo}}</h1>

    <div class="container">
          <Registrar/>
    </div>

  </section>

</template>

<script lang="js">
import Registrar from './Registrar.vue'

  export default  {
    name: 'src-components-index',
    components:{
      Registrar
    },
    props: {
      titulo:String
    },
    BeforeCreate(){

    },
    created(){},
    mounted () {

    },
    updated(){},
    destroyed(){},
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-index {

  }
</style>
