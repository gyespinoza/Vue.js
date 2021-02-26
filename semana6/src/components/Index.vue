<template lang="html">

  <section class="src-components-index">

    <Header/>

    <h1>Bienvenido</h1>

  </section>

</template>

<script lang="js">
import Header from "./Header.vue"

  export default  {
    name: 'src-components-index',
    components:{
      Header
    },
    props: [],
    mounted () {

    },
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

<style scoped lang="scss">
  .src-components-index {

  }
</style>
