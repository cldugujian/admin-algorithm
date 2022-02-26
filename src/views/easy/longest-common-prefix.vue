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

  </main>
</template>

<script>
  export default {
    name: "longest-common-prefix",
    methods:{
      longestCommonPrefix(strs){
        let result = '';

        // 如果数组只有一个元素
        if( strs.length === 1 ){
          result = strs[0];
          return result;
        }

        // 先找到字符串长度最小的那一项元素
        let minSup = 0;
        for( let i=0; i<strs.length-1; i++ ){
          if( strs[i].length < strs[i+1].length ){
            minSup = i;
          }
        }
        console.log('minSup',minSup,'strs[minSup]',strs[minSup]);

        // 有一定难度，暂时封存

        return result;
      },
    },
    created(){
      let strs = ["flower","flow","flight"];
      // let strs = ["dog","racecar","car"];
      this.longestCommonPrefix(strs);
    },
  }
</script>

<style scoped>

</style>