<template>
  <main>

    最长公共前缀
    <br>
    <br>

    编写一个函数来查找字符串数组中的最长公共前缀。 <br>
    如果不存在公共前缀，返回空字符串 ""。<br>
    <br>
    示例 1： <br>
    输入：strs = ["flower","flow","flight"] <br>
    输出："fl" <br>
    <br>
    示例 2： 输入：strs = ["dog","racecar","car"] <br>
    输出："" 解释：输入不存在公共前缀。 <br>
    <br>
    提示：<br>
    <br>
    1 -- strs.length -- 200<br>
    0 -- strs[i].length -- 200<br>
    strs[i] 仅由小写英文字母组成<br>

  </main>
</template>

<script>
  export default {
    name: "longest-common-prefix",
    methods:{
      longestCommonPrefix(strs){
        console.log('');
        // 如果有任何一个元素是空字符，则没有公共前缀
        if( strs.some( item => { return item.length === 0 } ) ){
          console.log('存在空字符，没有公共前缀');
          return '';
        }
        // 如果只有一个元素
        if( strs.length === 1 ){
          console.log('只有一个元素',strs[0]);
          return strs[0];
        }
        // 先将元素按照字符串长度，从小到大排序
        strs.sort( (a,b) => { return a.length - b.length } );
        console.log('排序后',strs);
        // 以最短的字符串为基准，遍历其他所有元素
        let target = strs[0],result = '';
        console.log('target',target);
        for( let i=0; i<target.length; i++ ){
          let flag = true;
          for( let j=1; j<strs.length; j++ ){
            if( target[i] !== strs[j][i] ){
              flag = false;
            }
          }
          if( flag ){
            result += target[i];
          }else{
            console.log('result',result);
            return result;
          }
        }
        console.log('result',result);
        return result;
      },
    },
    created(){
      let test = [
        [''],
        ['ab','a'],
        ['only one'],
        ['12','123',''],
        ['abcd','abc','abcdef'],
        ["racecar","car"],
        ["dog","racecar","car"],
        ['abc','ac','bc','ab'],
        ["flower","flow","flight",'flu'],
        ["dogca","racecar","car"],
        ['xacybcd','bcd','cybc'],
        ['caxy','camnxy','cxyca'],
      ];
      test.forEach(item=>{
        this.longestCommonPrefix(item);
      });
    },
  }
</script>

<style scoped>

</style>