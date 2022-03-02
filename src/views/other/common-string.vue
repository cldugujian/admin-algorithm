<template>
  <main>

    寻找公共字符

  </main>
</template>

<script>
  export default {
    name: "common-string",
    methods:{
      longestCommonPrefix(strs){
        console.log('');
        console.log('');
        // 如果数组只有一个元素
        if( strs.length === 1 ){
          return strs[0];
        }
        let result = [];
        // 将数组按长度，从大到小排列
        let sorted = strs.sort( (a,b) => { return b.length-a.length } );
        console.log('从大到小排序后',sorted);
        // 先找到字符串长度最小的那一项元素
        let minStr = sorted[sorted.length-1];
        console.log('字符最短的元素',minStr);
        // 创建一个二位数组，存放所有元素的公共字符
        let cache = [];
        // 当前正在遍历的下标
        let currentSup = null;
        // 当前公共字符的长度
        let length = 0;
        // 遍历除最后一个元素外的整个数组
        for( let i=0; i<sorted.length-1; i++ ){
          cache[i] = [];
          // 用最短字符串为基准，寻找与数组中其他各个元素的最大公共字符
          for( let j=0; j<minStr.length; j++ ){
            for( let k=0; k<sorted[i].length; k++ ){
              if( minStr[j] === sorted[i][k] ){
                // 如果当前是第一次遇到公共字符
                if( currentSup === null ){
                  currentSup = j;
                }
                // 中层索引 +1
                if( k < sorted[i].length-1 ){
                  j++;
                }
                // 当前公共字符的长度 +1
                length ++;
                // 将当前公共字符记下来
                let segment = minStr.slice(currentSup,currentSup+length);
                cache[i].indexOf(segment) === -1 && cache[i].push(segment);
                // 如果已经最后一位
                if( k === sorted[i].length-1 ){
                  // 让中层循环重新回到该有的位置并重置相关变量
                  j = minStr.indexOf(minStr[currentSup]);
                  currentSup = null;
                  length = 0;
                }
              }else{
                // 如果当前已经匹配道公共字符
                if( currentSup !== null ){
                  // 将当前公共字符记下来
                  let segment = minStr.slice(currentSup,currentSup+length);
                  cache[i].indexOf(segment) === -1 && cache[i].push(segment);
                  // 让中层循环重新回到该有的位置并重置相关变量
                  j -= length;
                  currentSup = null;
                  length = 0;
                }
              }
            }
          }
        }
        // 公共字符长度从小到大排列
        cache.sort( (a,b) => { return a.length - b.length  });
        console.log('各元素与最短元素的公共字符',cache);
        // 如果没有公共字符
        if( cache[0].length === 0 ){
          console.log('没有公共字符');
          return '';
        }
        // 从公共字符数量最少的元素开始遍历
        let target = cache[0];
        console.log('target',target);
        for ( let i=0; i<target.length; i++ ){
          // 如果每个元素都有该字符，则记录下来
          let includeStr = cache.every( item => { return item.indexOf(target[i]) !== -1 } );
          if( includeStr ){
            result.push(target[i]);
          }
        }
        // 如果没有公共字符
        if(!result.length){
          console.log('没有公共字符');
          return '';
        }
        console.log('result',result);
        return result;
      },
    },
    created(){
      let test = [
        ['abcd','bcd','ef'],
        ["racecar","car"],
        ["dog","racecar","car"],
        ['abc','ac','bc','ab'],
        ["flower","flow","flight",'flu'],
        ["dogca","racecar","car"],
        ['xacybcd','bcd','cybc'],
        ['caxy','camnxy','xyca'],
      ];
      test.forEach(item=>{
        this.longestCommonPrefix(item);
      });
    },
  }
</script>

<style scoped>

</style>