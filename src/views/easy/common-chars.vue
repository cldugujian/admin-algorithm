<template>
  <main>

    给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。<br>
     <br>
    <br>
    示例 1：<br>
    <br>
    输入：words = ["bella","label","roller"]<br>
    输出：["e","l","l"]<br>
    示例 2：<br>
    <br>
    输入：words = ["cool","lock","cook"]<br>
    输出：["c","o"]<br>
     <br>
    <br>
    提示：<br>
    <br>
    1 -- words.length -- 100<br>
    1 -- words[i].length -- 100<br>
    words[i] 由小写英文字母组成<br>

  </main>
</template>

<script>
  export default {
    name: "common-chars",
    methods:{

    },
    created(){

    },
  }
</script>

<style scoped>

</style>