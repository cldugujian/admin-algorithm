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
        console.log('');
        // 如果数组只有一个元素
        if( strs.length === 1 ){
          return strs[0];
        }
        let result = '';
        // 将数组按长度，从大到小排列
        let sorted = strs.sort( (a,b) => { return b.length-a.length } );
        console.log('sorted',sorted);
        // 先找到字符串长度最小的那一项元素
        let minStr = sorted[sorted.length-1];
        console.log('minStr',minStr);
        // 创建一个二位数组，存放所有元素的公共前缀
        let cache = [];
        // 当前正在遍历的下标
        let currentSup = null;
        // 当前公共前缀的长度
        let length = 0;
        // 遍历除最后一个元素外的整个数组
        for( let i=0; i<sorted.length-1; i++ ){
          cache[i] = [];
          // 用最短字符串为基准，寻找与数组中其他各个元素的最大公共前缀
          for( let j=0; j<minStr.length; j++ ){
            for( let k=0; k<sorted[i].length; k++ ){
              if( minStr[j] === sorted[i][k] ){
                // 如果当前是第一次遇到公共前缀
                if( currentSup === null ){
                  currentSup = j;
                }
                // 中层索引 +1
                if( k < sorted[i].length-1 ){
                  j++;
                }
                // 当前公共前缀的长度 +1
                length ++;
                // 如果已经最后一位
                if( k === sorted[i].length-1 ){
                  let segment = minStr.slice(currentSup,currentSup+length);
                  cache[i].indexOf(segment) === -1 && cache[i].push(segment);
                  // 让中层循环重新回到该有的位置
                  j = minStr.indexOf(minStr[currentSup]);
                  currentSup = null;
                  length = 0;
                }
              }else{
                // 如果当前已经匹配道公共前缀
                if( currentSup !== null ){
                  let segment = minStr.slice(currentSup,currentSup+length);
                  cache[i].indexOf(segment) === -1 && cache[i].push(segment);
                  j -= length;
                  currentSup = null;
                  length = 0;
                }
              }
            }
          }
        }
        // 公共前缀长度从小到大排列
        cache.sort( (a,b) => { return a.length - b.length  });
        console.log('cache',...cache);
        // 如果没有公共前缀
        if( cache[0].length === 0 ){
          console.log('没有公共前缀');
          return '';
        }
        return result;
      },
    },
    created(){
      let test = [
        ["racecar","car"],
        ["dog","racecar","car"],
        ['abc','ac','bc','ab'],
        ["flower","flow","flight",'flu'],
        ["dogca","racecar","car"],
        ['xacybcd','bcd','cybc'],
        ['car','car','car'],
      ];
      test.forEach(item=>{
        this.longestCommonPrefix(item);
      });
    },
  }
</script>

<style scoped>

</style>