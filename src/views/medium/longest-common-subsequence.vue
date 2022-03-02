<template>
  <main>

    给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。<br>
    <br>
    一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。<br>
    <br>
    例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。<br>
    两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。<br>
    <br>
     <br>
    <br>
    示例 1：<br>
    <br>
    输入：text1 = "abcde", text2 = "ace"<br>
    输出：3<br>
    解释：最长公共子序列是 "ace" ，它的长度为 3 。<br>
    示例 2：<br>
    <br>
    输入：text1 = "abc", text2 = "abc"<br>
    输出：3<br>
    解释：最长公共子序列是 "abc" ，它的长度为 3 。<br>
    示例 3：<br>
    <br>
    输入：text1 = "abc", text2 = "def"<br>
    输出：0<br>
    解释：两个字符串没有公共子序列，返回 0 。<br>
    <br>
    提示：<br>
    <br>
    1 -- text1.length, text2.length -- 1000<br>
    text1 和 text2 仅由小写英文字符组成。<br>

  </main>
</template>

<script>
  export default {
    name: "longest-common-subsequence",
    methods:{
      longestCommonSubsequence(text1,text2){

      },
    },
    created(){
      let test = [
        ['abcd','bcd'],
        ["racecar","car"],
        ["dog","racecar"],
        ['abc','ac'],
        ["flower","flow"],
        ["dogca","racecar"],
        ['xacybcd','bcd'],
        ['caxy','camnxy'],
      ];
      test.forEach(item=>{
        this.longestCommonSubsequence(item[0],item[1]);
      });
    },
  }
</script>

<style scoped>

</style>