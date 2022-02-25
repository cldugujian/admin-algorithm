<template>
  <main>

    假设你正在爬楼梯。需要 n 阶你才能到达楼顶。<br>
    <br>
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？<br>
    <br>
    示例 1：<br>
    <br>
    输入：n = 2<br>
    输出：2<br>
    解释：有两种方法可以爬到楼顶。<br>
    1. 1 阶 + 1 阶<br>
    2. 2 阶<br>
    示例 2：<br>
    <br>
    输入：n = 3<br>
    输出：3<br>
    解释：有三种方法可以爬到楼顶。<br>
    1. 1 阶 + 1 阶 + 1 阶<br>
    2. 1 阶 + 2 阶<br>
    3. 2 阶 + 1 阶<br>

  </main>
</template>

<script>
  export default {
    name: "climb-stairs",
    methods: {
      climbStairs_1(n){

        // 1	   1   1
        // 2	   2   1+1
        // 3	   3   1+2
        // 4	   5   1+3+1
        // 5	   8   1+4+3
        // 6    13   1+5+6+1
        // 7    21   1+6+10+4
        // 8    34   1+7+15+10+1

        // AAB       3
        // AABB      6
        // AAABB    10     5! / ( 2! * 3!* )
        // AABBBB   15     6! / ( 2! * 4!* )
        // AAABBB   20     6! / ( 3! * 3!* )
        // AAABBBB  35     7! / ( 3! * 4!* )


        let count = 0;
        if( n === 0 ){
          console.log('count',count);
          return count;
        }
        // 实现阶乘函数
        function factorial(number){
          let result = number;
          while (number>1){
            result = result*(--number);
          }
          return result;
        }
        // 判断有多少个  2级  台阶
        for( let i=0; i<=n/2; i++ ){
          // 全是1级台阶 / 全是2级台阶
          if ( i === 0 || i === n/2 ){
            count ++;
          }
          // n为奇数的情况下，只有一个1级台阶，其他全是2级台阶
          else if ( n%2 === 1 && i === parseInt(n/2) ){
            count += (i+1);
          }
          else {
            // 排列组合
            count += ( factorial(i+(n-i*2))/(factorial(i)*factorial(n-i*2)) );
          }
        }
        console.log('count',count);
        return count;
      },
      climbStairs_2(n){
        function getNumber(number) {

        }
      },
    },
    created() {
      let test = [0,1,2,3,4,5,6,7,8,9,10];
      test.forEach( item =>{
        this.climbStairs_1( item );
      });
    },
  }
</script>