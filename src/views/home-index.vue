<template>
    <main>
        首页

        <ul>
            <li @click="goJump('is-palindrome')">回文数</li>
            <li @click="goJump('two-sum')">两数之和</li>
            <li @click="goJump('my-sqrt')">x的平方根</li>
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
        this.$router.push(routerName);
      },
    },
    created(){

    },
  });
</script>

<style scoped lang="scss">

</style>