<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    color:#fff;
    font-family: Helvetica,"Microsoft YaHei",sans-serif;
  }
  body{
    padding:40px 60px;
    background: #09213a;
  }
</style>
