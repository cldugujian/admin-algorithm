<template>
  <main>

    实现 strStr() 函数。<br>
    <br>
    给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。<br>
    <br>
    <br>
    <br>
    说明：<br>
    <br>
    当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。<br>
    <br>
    对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。<br>
    <br>
    <br>
    <br>
    示例 1：<br>
    <br>
    输入：haystack = "hello", needle = "ll"<br>
    输出：2<br>
    示例 2：<br>
    <br>
    输入：haystack = "aaaaa", needle = "bba"<br>
    输出：-1<br>
    示例 3：<br>
    <br>
    输入：haystack = "", needle = ""<br>
    输出：0<br>
    <br>
    <br>
    提示：<br>
    <br>
    0 -- haystack.length, needle.length -- 5 * 104<br>
    haystack 和 needle 仅由小写英文字符组成<br>

  </main>
</template>

<script>
  export default {
    name: "str-str",
    methods:{
      // 字符串方法 indexOf
      strStr_1(haystack,needle){
        if( needle.length === 0 ){
          console.log('空字符串');
          return 0;
        }
        return haystack.indexOf(needle);
      },
      // 常规方法
      strStr_2(haystack,needle){
        if( needle.length === 0 ){
          console.log('空字符串');
          return 0;
        }
        for( let i=0; i<needle.length; i++ ){
          for( let j=0; j<haystack.length; j++ ){

          }
        }
      },
    },
    created(){
      let test = [
        { haystack:'hello',needle:'ll', },
        { haystack:'aaaaa',needle:'bba', },
        { haystack:'abcde',needle:'ab', },
        { haystack:'',needle:'', },
      ];
      test.forEach((item)=>{
        this.strStr_2( item.haystack,item.needle  );
      });
    },
  }
</script>

<style scoped>

</style>