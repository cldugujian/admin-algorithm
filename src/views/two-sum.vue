<template>
  <main>

    给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。<br>
    <br>
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。<br>
    <br>
    你可以按任意顺序返回答案。<br>
    <br>
    示例 1：<br>
    <br>
    输入：nums = [2,7,11,15], target = 9<br>
    输出：[0,1]<br>
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。<br>
    示例 2：<br>
    <br>
    输入：nums = [3,2,4], target = 6<br>
    输出：[1,2]<br>
    示例 3：<br>
    <br>
    输入：nums = [3,3], target = 6<br>
    输出：[0,1]<br>

  </main>
</template>

<script>
  export default {
    name: "two-sum",
    methods:{
      // 暴力解
      twoSum_1(nums, target){
        if( nums.length === 2 ){
          return [0,1];
        }
        for ( let i=0; i<nums.length; i++ ){
          for ( let j=i+1; j<nums.length; j++ ){
            if( nums[i] + nums[j] === target ){
              console.log('[i, j]',[i, j]);
              return [i,j];
            }
          }
        }
      },
      // 二分法
      twoSum_2(nums, target){
        let num1,num2;
        if( nums.length === 2 ){
          num1 = 0;num2 = 1;
        }
        // 先排序
        let list = JSON.parse( JSON.stringify(nums) ).sort( (a,b) => { return a-b } );
        function searchSup(current,arr,start,end) {
          // 运气好 +1
          if( current >= arr.length-1 ){
            return;
          }
          // 运气好 +1
          if( arr[current] + arr[start] === target ){
            num1 = current;num2 = start;
            return;
          }
          // 运气好 +1
          if( arr[current] + arr[end] === target ){
            num1 = current;num2 = end;
            return;
          }
          // 运气好 +1
          if( arr[start] + arr[end] === target ){
            num1 = start;num2 = end;
            return;
          }
          // 判断边缘情况
          if( arr[current] + arr[end] < target || end - start === 1 || end === start ){
            return searchSup(current+1,arr,current+2,arr.length-1);
          }
          // 熬到中间下标
          let middleSup = start + Math.floor( (end-start)/2 );
          // 运气好 +1
          if( list[current] + list[start+middleSup] === target ){
            num1 = current;num2 = middleSup;
            return ;
          }
          // 判根据中间数之和的大小，舍弃另一半
          if( list[current] + list[middleSup] > target ){
            return searchSup(current,arr,start,middleSup);
          }else{
            return searchSup(current,arr,middleSup,end);
          }
        }
        searchSup(0,list,1,list.length-1);
        // 找到原数组中对应的下标
        num1 = nums.indexOf(list[num1]);
        num2 = nums.lastIndexOf(list[num2]);
        let result = [num1,num2].sort( (a,b) => { return a-b } );
        console.log('result',result);
        return result;
      },
    },
    created(){
      this.twoSum_1([2,7,11,15],9);
    },
  }
</script>

<style scoped>

</style>