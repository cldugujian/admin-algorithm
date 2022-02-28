<template>
  <main>

    给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。<br>
    <br>
    最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。<br>
    <br>
    你可以假设除了整数 0 之外，这个整数不会以零开头。<br>
    <br>
    <br>
    <br>
    示例 1：<br>
    <br>
    输入：digits = [1,2,3]<br>
    输出：[1,2,4]<br>
    解释：输入数组表示数字 123。<br>
    示例 2：<br>
    <br>
    输入：digits = [4,3,2,1]<br>
    输出：[4,3,2,2]<br>
    解释：输入数组表示数字 4321。<br>
    示例 3：<br>
    <br>
    输入：digits = [0]<br>
    输出：[1]<br>
    <br>
    提示：<br>
    <br>
    1 -- digits.length -- 100<br>
    0 -- digits[i] -- 9<br>

  </main>
</template>

<script>
  export default {
    name: "plus-one",
    methods:{
      // 从后往前遍历+1
      plusOne_1(digits){
        console.log('前',digits);
        // 数组长度
        let length = digits.length;
        // 最后一个元素
        let lastEl = digits[length-1];
        // 如果末尾数 < 9 ,则直接 +1
        if( lastEl < 9 ){
          digits[length-1] ++;
        }else{
          // 从后往前遍历
          for( let i=length-1; i>=0; i-- ){
            if( ++digits[i] !== 10 ){
              break;
            }
            digits[i] = 0;
            // 如果第一位是 9 ，则在最前面添加 1
            if( i === 0 ){
              digits.unshift(1);
            }
          }
        }
        console.log('后',digits);
        console.log('');
        return digits;
      },
      // 转字符串 + 1 ，再转回数组
      plusOne_2(digits){
        console.log('前',digits);
        let str = digits.join('');
        // 如果目标数小于 js 能处理额最大数 (2^53 +1)
        if( window.BigInt(str) < window.BigInt('9007199254740993') ){
          str = Number( str );
          str = ++str + '';
        }else{
          str = window.BigInt(str) + window.BigInt('1') + '';
        }
        console.log('str',str);
        let result = str.split('').map(item=>{ return item*1; });
        console.log('后',result);
        console.log('');
        return result;
      },
    },
    created(){
      let test = [
        [0],
        [1,2,3],
        [9,8,9],
        [9,9,9],
        [4,3,2,1],
        [8,9,9,9],
        [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3],
      ];
      test.forEach(item=>{
        this.plusOne_1(item);
      });
    },
  }
</script>

<style scoped>

</style>