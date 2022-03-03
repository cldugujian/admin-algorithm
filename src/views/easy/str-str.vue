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
        console.log('');
        if( needle.length === 0 ){
          console.log('空字符',haystack,needle,0);
          return 0;
        }
        let commonStr = '';
        for( let i=0; i<needle.length; i++ ){
          for( let j=0; j<haystack.length; j++ ){
            // console.log('j',j,'haystack[j]',haystack[j],'needle[i]',needle[i]);
            if( needle[i] === haystack[j] ){
              // 先判断第一个字符是否匹配
              if( i === 0 ){
                commonStr = needle[i];
              }else{
                // 如果之前匹配了第一个字符，则继续添加
                if( commonStr.length !== 0 ){
                  commonStr += needle[i];
                }
              }
              // console.log('commonStr',commonStr);
              if( commonStr === needle ){
                console.log('找到了',haystack,needle,`第${j-(needle.length-1)}个`);
                return j-(needle.length-1);
              }
              i++;
            }else{
              // 如果剩余字符串的长度已经小于 needle 的长度，则直接判定为找不到
              if( haystack.length - (j-commonStr.length) - 1 < needle.length ){
                console.log('长度肯定不够',haystack,needle,-1);
                return -1;
              }
              // 众神归位
              if( commonStr.length !== 0 ){
                j -= (commonStr.length);
                i = 0;
                commonStr = '';
              }
            }
          }
        }
        console.log('找不到',haystack,needle,-1);
        return -1;
      },
    },
    created(){
      let test = [
        { haystack:"mississippi",needle:'pi',answer:9 },
        { haystack:"mississippi",needle:'ppi',answer:8 },
        { haystack:"mississippi",needle:'ssiss',answer:2 },
        { haystack:"mississippi",needle:'ssissip',answer:2 },
        { haystack:"111234",needle:'1235',answer:-1 },
        { haystack:"mississippi",needle:'issipi',answer:-1 },
        { haystack:"mississippi",needle:'ssi',answer:2 },
        { haystack:"mississippi",needle:'issip',answer:4 },
        { haystack:"mississippi",needle:'issi',answer:1 },
        { haystack:'aaaaa',needle:'bba',answer:-1 },
        { haystack:'abcde',needle:'ab',answer:0 },
        { haystack:'abcxyz',needle:'yz',answer:4 },
        { haystack:'abcabcabcabc',needle:'cabc',answer:2 },
        { haystack:'',needle:'',answer:0 },
      ];
      let result = [];
      test.forEach((item)=>{
        result.push(this.strStr_2(item.haystack,item.needle) === item.answer);
      });
      console.log('result',result);
    },
  }
</script>

<style scoped>

</style>