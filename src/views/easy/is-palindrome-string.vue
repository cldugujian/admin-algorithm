<template>
  <main>

    给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。<br>
    <br>
    说明：本题中，我们将空字符串定义为有效的回文串。<br>
    <br>
     <br>
    <br>
    示例 1:<br>
    <br>
    输入: "A man, a plan, a canal: Panama"<br>
    输出: true<br>
    解释："amanaplanacanalpanama" 是回文串<br>
    示例 2:<br>
    <br>
    输入: "race a car"<br>
    输出: false<br>
    解释："raceacar" 不是回文串<br>
     <br>
    <br>
    提示：<br>
    <br>
    1 -- s.length -- 2 * 105<br>
    字符串 s 由 ASCII 字符组成<br>

  </main>
</template>

<script>
  export default {
    name: "is-palindrome-string",
    methods:{
      isPalindromeString_1(s){
        console.log('');
        console.log('');
        // 先全部转小写
        s = s.toLowerCase();
        console.log('全小写',s);
        let range = 'abcdefghijklmnopqrstuvwxyz1234567890';
        s = s.split('');
        s = s.filter( item => { return range.indexOf(item) !== -1 } );
        s = s.join('');
        console.log('有效字符',s);
        let result = s === s.split('').reverse().join('');
        console.log('result',result);
        return result;
      },
      isPalindromeString_2(s){
        // 先全部转小写
        s = s.toLowerCase();
        console.log('全小写',s);
        // 筛选出有效字符
        let filter = '',range = 'abcdefghijklmnopqrstuvwxyz1234567890';
        for( let i=0; i<s.length; i++ ){
          if( range.indexOf(s[i]) !== -1 ){
            filter += s[i];
          }
        }
        console.log('有效字符',filter);
        // 判断是不是回文字符
        let flag = true,length = filter.length;
        for( let i=0; i<length/2; i++ ){
          if( filter[i] !== filter[length-i-1] ){
            flag = false;
          }
        }
        console.log('flag',flag);
        return flag;
      },
    },
    created(){
      let test = [
        "A man, a plan, a canal: Panama",
        "race a car",
        "12321",
        "1 1",
      ];
      test.forEach(item => {
        this.isPalindromeString_2(item);
      });
    },
  }
</script>

<style scoped>

</style>