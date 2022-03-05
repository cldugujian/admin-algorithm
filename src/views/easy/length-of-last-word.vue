<template>
  <main>

    给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。<br>
    <br>
    单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。<br>
    <br>
     <br>
    <br>
    示例 1：<br>
    <br>
    输入：s = "Hello World"<br>
    输出：5<br>
    解释：最后一个单词是“World”，长度为5。<br>
    示例 2：<br>
    <br>
    输入：s = "   fly me   to   the moon  "<br>
    输出：4<br>
    解释：最后一个单词是“moon”，长度为4。<br>
    示例 3：<br>
    <br>
    输入：s = "luffy is still joyboy"<br>
    输出：6<br>
    解释：最后一个单词是长度为6的“joyboy”。<br>
     <br>
    <br>
    提示：<br>
    <br>
    1 -- s.length -- 104<br>
    s 仅有英文字母和空格 ' ' 组成<br>
    s 中至少存在一个单词<br>

  </main>
</template>

<script>
  export default {
    name: "length-of-last-word",
    methods:{
      // 数组 split 方法
      lengthOfLastWord_1(s){
        console.log('');
        console.log('');
        console.log('分割前',s);
        s = s.split(' ');
        console.log('分割后',s);
        // 去除空元素
        s = s.filter( item => { return item.length !== 0 } );
        console.log('去空后',s);
        // 最后一个单词
        let result = s[s.length-1].length;
        console.log('最后一个单词',result);
        return result;
      },
      // 遍历 - 将所有单词存起来
      lengthOfLastWord_2(s){
        console.log('');
        console.log('');
        console.log(s);
        // 用一个数组存放所有单词
        let words = [];
        // 用一个字符串存放当前有效单词
        let str = '';
        for( let i=0; i<s.length; i++ ){
          // 如果不是空格，则直接添加到 str
          if( s[i] !== ' ' ){
            str += s[i];
            // 如果当前已经遍历到最后一个字符
            if( i === s.length-1 ){
              words.push(str);
              str = '';
            }
          }
          // 如果遇到空格，先判断当前 str 是不是有效单词
          else{
            if( str.length ) {
              words.push(str);
              str = '';
            }
          }
        }
        console.log('words',words);
        return words[words.length-1].length;
      },
      // 遍历 - 仅保留最后一个单词
      lengthOfLastWord_3(s){
        console.log('');
        console.log('');
        console.log(s);
        // 用一个字符串存放当前有效单词
        let word = '';
        // 最后一个有效单词
        let lastWord = '';
        for( let i=0; i<s.length; i++ ){
          // 如果不是空格，则直接添加到 str
          if( s[i] !== ' ' ){
            word += s[i];
            // 如果当前已经遍历到最后一个字符
            if( i === s.length-1 ){
              lastWord = word;
              word = '';
            }
          }else{
            if( word.length ){
              lastWord = word;
              word = '';
            }
          }
        }
        console.log('lastWord',lastWord);
        return lastWord.length;
      },
      // 遍历 - 仅记录下标
      lengthOfLastWord_4(s){
        console.log('');
        console.log('');
        console.log(s);
        // 设置起始下标
        let start = null,end = null,isEmpty = false;
        for( let i=0; i<s.length; i++ ){
          if( s[i] !== ' ' ){
            if( start === null || isEmpty ){
              start = i;
              isEmpty = false;
            }
            end = i;
          }else{
            isEmpty = true;
          }
          console.log(start,end,isEmpty);
        }
        return end-start+1;
      },
    },
    created(){
      let test = [
        { s:"Hello World",answer:5 },
        { s:"   fly me   to   the moon  ",answer:4 },
        { s:"luffy is still joyboy",answer:6 },
      ];
      test.forEach(item => {
        console.log( this.lengthOfLastWord_4(item.s) === item.answer );
      });
    },
  }
</script>

<style scoped>

</style>