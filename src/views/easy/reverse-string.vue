<template>
  <main>

    编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。<br>
    <br>
    不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。<br>
    <br>
    示例 1：<br>
    <br>
    输入：s = ["h","e","l","l","o"]<br>
    输出：["o","l","l","e","h"]<br>
    示例 2：<br>
    <br>
    输入：s = ["H","a","n","n","a","h"]<br>
    输出：["h","a","n","n","a","H"]<br>
    <br>
    提示：<br>
    <br>
    1 -- s.length -- 105<br>
    s[i] 都是 ASCII 码表中的可打印字符<br>

  </main>
</template>

<script>
  export default {
    name: "reverse-string",
    methods:{
      reverseString_1(s){
        console.log('前',s);
        let result = s.reverse();
        console.log('后',result);
        console.log('');
      },
      reverseString_2(s){
        console.log('前',s);
        let length = s.length;
        let iteratorLength = parseInt( length/2 );
        for( let i=0; i<iteratorLength; i++ ){
          [ s[i] , s[length-i-1] ] = [ s[length-i-1] , s[i] ];
        }
        console.log('后',s);
        console.log('');
      },
      reverseString_3(s){
        console.log('前',s);
        let length = s.length;
        let cache = [];
        for( let i=length-1; i>=0; i-- ){
          cache.push(s[i]);
        }
        for( let i=length-1; i>=0; i-- ){
          s[i] = cache[i];
        }
        cache = null;
        console.log('后',s);
        console.log('');
      }
    },
    created(){
      let test = [
        ["1","2","3","3","4"],
        ["1","2","3","3","1","2"],
        ['1'],
        ['1','1'],
        ["1","2","3","2","1"],
      ];
      test.forEach(item=>{
        this.reverseString_3(item);
      });
    },
  }
</script>

<style scoped>

</style>