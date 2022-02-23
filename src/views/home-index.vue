<template>
    <main>
        <nav-header></nav-header>
        <main-content></main-content>
        <nav-footer></nav-footer>
    </main>
</template>

<script>
  import navHeader from "@/components/nav-header"
  import mainContent from "@/components/main-content"
  import navFooter from "@/components/nav-footer"
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'home-index',
    props:{

    },
    components:{
      navHeader,
      mainContent,
      navFooter,
    },
    created(){

    },
  });
</script>

<style scoped>

</style>