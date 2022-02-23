<template>
    <main>
        首页

        <ul>
            <li @click="goJump('palindrome-number')">回文数</li>
        </ul>

    </main>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'home-index',
    props:{

    },
    methods:{
      goJump(routerName){
        console.log('routerName',routerName);
        this.$router.push(routerName);
      },
    },
    created(){

    },
  });
</script>

<style scoped>

</style>