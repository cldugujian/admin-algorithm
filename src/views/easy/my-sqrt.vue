<template>
  <main>

    x 的平方根
    <br>
    <br>

    给你一个非负整数x，计算并返回x的 算术平方根 。<br>
    <br>
    由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。<br>
    <br>
    注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。<br>
    <br>
    <br>
    <br>
    示例 1：<br>
    <br>
    输入：x = 4<br>
    输出：2<br>
    示例 2：<br>
    <br>
    输入：x = 8<br>
    输出：2<br>
    解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。<br>

  </main>
</template>

<script>
  export default {
    name: "my-sqrt",
    methods:{
      // 二分法递归
      mySqrt_1(x){
        // 将数字转为字符串后，再一分为二
        let string = x.toString();
        let divide = Math.ceil(string.length/2);
        // 判断极端情况
        if( x === 0 ){ return 0 }
        let min = this.getMin(divide);
        let max = this.getMax(divide);
        let result = this.middleSearch(min,max,x);
        console.log('result',result);
        console.log('');
        return result;
      },
      // 递归改循环
      mySqrt_2(x){
        if( x === 0 ){
          return 0
        }
        let string = x.toString();
        // 数字位数的的一半
        let divide = Math.ceil(string.length/2);
        // 设定目标区间段的最小值
        let min = this.getMin(divide);
        // 设定目标区间段的最大值
        let max = this.getMax(divide);
        let result = 1;
        let flag = true;
        while( flag ){
          if( min*min === x ){
            result = min;
            flag = false;
          }
          if( max*max === x ){
            result = max;
            flag = false;
          }
          if( max-min === 1 ){
            result = min;
            flag = false;
          }
          // 找到分割点
          let middle = min + parseInt( ( max-min )/2 );
          if( middle*middle < x ){
            min = middle;
          }else if( middle*middle > x ){
            max = middle;
          }else{
            result = middle;
            flag = false;
          }
        }
        console.log('result',result);
        return result;
      },
      // 寻找中位
      middleSearch(min,max,target){
        // 判断边缘情况 - 最小值
        if( min*min === target ){return min;}
        // 判断边缘情况 - 最大值
        if( max*max === target ){return max;}
        // 判断边缘情况 - 二选一
        if( max-min === 1 ){return min;}
        // 找到区间的中间数
        let middle = min + parseInt( ( max-min )/2 );
        // 根据中间数的平方，来舍弃另一半
        if( middle*middle < target ){
          return this.middleSearch(middle,max,target);
        }else if( middle*middle > target ){
          return this.middleSearch(min,middle,target);
        }else{
          return middle;
        }
      },
      // 设定答案区间中最小值
      getMin(length){
        if( length === 1 ){
          return 1;
        }
        let result = 10;
        for( let i=0; i<length-2; i++ ){
          result *= 10;
        }
        return result;
      },
      // 设定答案区间中最大值
      getMax(length){
        if( length === 1 ){
          return 10;
        }
        let result = 10;
        for( let i=0; i<length-1; i++ ){
          result *= 10;
        }
        return result;
      },
      // 三分法
      mySqrt_3(x){
        let string = x.toString();
        let divide = Math.ceil(string.length/2);
        let min = this.getMin(divide);
        let max = this.getMax(divide);
        function middleSearch(min,max,x) {
          if( x === 0 ){
            return 0;
          }
          if( min*min === x ){return min;}
          if( max*max === x ){return max;}
          if( max-min === 1 ){return min;}
          if( max-min === 2 ){
            if( (min+1)*(min+1) <= x ){ return min+1; }
            return min;
          }
          let front = min + parseInt( ( max-min )/3 );
          let end = min + 2*parseInt( ( max-min )/3 );
          if( front*front === x ){return front;}
          if( end*end === x ){return end;}
          if( front*front > x ){
            return middleSearch(min,front,x);
          }
          if( end*end < x ){
            return middleSearch(end,max,x);
          }
          return middleSearch(front,end,x);
        }
        let result = middleSearch(min,max,x);
        console.log('result',result);
        console.log('');
        return result;
      },
    },
    created(){
      let test = [4,8,16,25,1000];
      test.forEach(item=>{
        this.mySqrt_1(item);
      });
    },
  }
</script>

<style scoped>

</style>