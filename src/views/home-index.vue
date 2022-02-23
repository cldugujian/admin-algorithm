<template>
  <main class="home">
    <h1 class="home-title">算法</h1>
    <ul class="home-main flex">
      <li class="home-list" @click="goJump('is-palindrome')">回文数</li>
      <li class="home-list" @click="goJump('two-sum')">两数之和</li>
      <li class="home-list" @click="goJump('my-sqrt')">x的平方根</li>
      <li class="home-list" @click="goJump('remove-duplicates')">删除有序数组中的重复项</li>
      <li class="home-list" @click="goJump('bubble-sort')">冒泡排序</li>
    </ul>

  </main>
</template>

<script>
  import {defineComponent} from 'vue'
  export default defineComponent({
    name: 'home-index',
    methods: {
      goJump(routerName) {
        this.$router.push(routerName);
      },
    },
  });
</script>

<style scoped lang="scss">
  .home {
    width: 100%;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  .home-main{
    flex-wrap: wrap;
    margin-top:40px;
  }
  .home-title {
    display: block;
    width: 100%;
    font-size: 36px;
    text-align: center;
  }
  .home-list {
    width: 23%;
    font-size: 14px;
    margin-top: 20px;
    margin-left:1%;
    margin-right:1%;
    line-height: 38px;
    text-align: center;
    background: rgba(0, 162, 255, 0.1);
    border-radius: 10px;
    transition: all 0.5s;
    cursor: pointer;
  }
</style>