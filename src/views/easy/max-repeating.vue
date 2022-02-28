<template>
  <main>

    给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中    最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。<br>
    <br>
    给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。<br>
    <br>
     <br>
    示例 1：<br>
    <br>
    输入：sequence = "ababc", word = "ab"<br>
    输出：2<br>
    解释："abab" 是 "ababc" 的子字符串。<br>
    示例 2：<br>
    <br>
    输入：sequence = "ababc", word = "ba"<br>
    输出：1<br>
    解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。<br>
    示例 3：<br>
    <br>
    输入：sequence = "ababc", word = "ac"<br>
    输出：0<br>
    解释："ac" 不是 "ababc" 的子字符串。<br>
    <br>
    提示：<br>
    <br>
    1 -- sequence.length -- 100<br>
    1 -- word.length -- 100<br>
    sequence 和 word 都只包含小写英文字母。<br>


  </main>
</template>

<script>
  export default {
    name: "max-repeating"
  }
</script>

<style scoped>

</style>