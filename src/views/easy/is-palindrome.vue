<template>
    <main>

        回文数
        <br>
        <br>

        给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
        <br>
        回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
        <br>
        例如，121 是回文，而 123 不是。
        <br>
        <br>
        示例 1：
        <br>
        输入：x = 121
        <br>
        输出：true
        <br>
        <br>
        示例 2：
        <br>
        输入：x = -121
        <br>
        输出：false
        <br>
        解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
        <br>
        <br>
        示例 3：
        <br>
        输入：x = 10
        <br>
        输出：false
        <br>
        解释：从右向左读, 为 01 。因此它不是一个回文数。
        <br>

    </main>
</template>

<script>
  export default {
    name: "is-palindrome",
    methods:{
      isPalindrome(x){
        console.log('x',x);
        let str = x.toString().split('').reverse().join('');
        console.log('转字符串',str);
        str = Number(str);
        console.log('转数字',str);
        console.log(x === str);
        return x === str;
      },
    },
    created(){
      this.isPalindrome(0);
    },
  }
</script>

<style scoped>

</style>