<template>
  <main>

    给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。<br>
     <br>
    <br>
    示例 1：<br>
    <br>
    输入：words = ["bella","label","roller"]<br>
    输出：["e","l","l"]<br>
    示例 2：<br>
    <br>
    输入：words = ["cool","lock","cook"]<br>
    输出：["c","o"]<br>
     <br>
    <br>
    提示：<br>
    <br>
    1 -- words.length -- 100<br>
    1 -- words[i].length -- 100<br>
    words[i] 由小写英文字母组成<br>

  </main>
</template>

<script>
  export default {
    name: "common-chars",
    methods:{
      commonChars(words){
        console.log('');
        console.log('words',words);
        // 只有一个元素
        if( words.length === 1 ){
          console.log('只有一个元素',words[0].split(''));
          return words[0].split('');
        }
        let result = [];
        // 以第一个元素为参照，遍历其他所有元素
        let target = words[0];
        let length = target.length;
        for( let i=0; i<length; i++ ){
          let flag = true;
          // 如果有任何一个元素没有匹配上，则false并中止
          for( let j=1;j<words.length; j++ ){
            if( words[j].indexOf(target[i]) === -1 ){
              flag = false;
            }
          }
          // 如果当前字符铜鼓了，则添加进结果中
          if( flag ){
            result.push(target[i]);
            // 所有元素去除当前添加的字符
            words = words.map( item => {
              let index = item.indexOf(target[i]);
              return item.slice(0,index)+item.slice(index+1,item.length);
            });
            console.log('words',words);
          }
        }
        console.log('result',result);
        return result;
      },
    },
    created(){
      let test = [
        ['a'],
        ['ab','a'],
        ['abcd','abc','abcdef'],
        ["racecar","car"],
        ["dog","racecar","car"],
        ['abc','ac','bc','ab'],
        ["flower","flow","flight",'flu'],
        ["dogca","racecar","car"],
        ['xacybcd','bcd','cybc'],
        ['caxy','camnxy','cxyca'],
        ["cool","lock","cook"],
      ];
      test.forEach(item=>{
        this.commonChars(item);
      });
    },
  }
</script>

<style scoped>

</style>