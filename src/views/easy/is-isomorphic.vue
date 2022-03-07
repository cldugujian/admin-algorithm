<template>
  <main>

    给定两个字符串 s 和 t ，判断它们是否是同构的。<br>
    <br>
    如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。<br>
    <br>
    每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。<br>
    <br>
    <br>
    <br>
    示例 1:<br>
    <br>
    输入：s = "egg", t = "add"<br>
    输出：true<br>
    示例 2：<br>
    <br>
    输入：s = "foo", t = "bar"<br>
    输出：false<br>
    示例 3：<br>
    <br>
    输入：s = "paper", t = "title"<br>
    输出：true<br>
     <br>
    <br>
    提示：<br>
    <br>
    1 -- s.length -- 5 * 104<br>
    t.length == s.length<br>
    s 和 t 由任意有效的 ASCII 字符组成<br>

  </main>
</template>

<script>
  export default {
    name: "is-isomorphic",
    methods:{
      isIsomorphic(s,t){
        // 都是1位字符
        if( s.length === 1 && t.length === 1  ){
          console.log('都是1位字符');
          return true;
        }
        // 转数字
        let afterS = this.transferString(s);
        let afterT = this.transferString(t);
        console.log('afterS',afterS);
        console.log('afterT',afterT);
        return afterS === afterT;
      },
      transferString(str){
        let index = 0;
        let result = [];
        for( let i=0; i<str.length; i++ ){
          let words = result.map( item=>{ return item.word } );
          if( words.indexOf(str[i]) === -1 ){
            result.push({
              word:str[i],
              index:index,
            });
            index ++;
          }else{
            result.push({
              word:str[i],
              index:result[words.indexOf(str[i])].index,
            });
          }
        }
        return result.map( item=>{ return item.index } ).join('-');
      },
    },
    created(){
      let test = [
        { s:"a",t:'b',answer:true },
        { s:"egg",t:'add',answer:true },
        { s:"foo",t:'bar',answer:false },
        { s:"paper",t:'title',answer:true },
      ];
      test.forEach((item)=>{
        console.log( this.isIsomorphic(item.s,item.t) === item.answer );
      });
    },
  }
</script>

<style scoped>

</style>