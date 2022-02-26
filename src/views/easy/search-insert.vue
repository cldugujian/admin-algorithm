<template>
  <main>

    给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。<br>
    <br>
    请必须使用时间复杂度为 O(log n) 的算法。<br>
    <br>
    <br>
    示例 1:<br>
    <br>
    输入: nums = [1,3,5,6], target = 5<br>
    输出: 2<br>
    示例 2:<br>
    <br>
    输入: nums = [1,3,5,6], target = 2<br>
    输出: 1<br>
    示例 3:<br>
    <br>
    输入: nums = [1,3,5,6], target = 7<br>
    输出: 4<br>
    示例 4:<br>
    <br>
    输入: nums = [1,3,5,6], target = 0<br>
    输出: 0<br>
    示例 5:<br>
    <br>
    输入: nums = [1], target = 0<br>
    输出: 0<br>
    <br>

  </main>
</template>

<script>
  export default {
    name: "search-insert",
    methods:{
      searchNext(min,max,nums,target){

        // min-数组起始下表
        // max-数组结束下标
        // arr-数组
        // target-目标数字

        // 找到中间数的下标
        let middleSup = min + parseInt( (max-min)/2 );
        // 运气好 +1
        if( nums[middleSup] === target ){
          return middleSup;
        }
        // 运气好 +1
        if( nums[min] === target ){
          return min;
        }
        // 运气好 +1
        if( nums[max] === target ){
          return max;
        }
        if( max === min ){
          if( nums[max] < target ){
            return max+1;
          }
          return max;
        }
        // 判断数组内有没有目标数字
        if( max - min === 1 ){
          if( nums[min] > target ){
            return min;
          }
          if( nums[max] < target ){
            return max+1;
          }
          return max;
        }
        // 继续寻找下一区段的数组
        if( nums[middleSup] > target ){
          return this.searchNext(min,middleSup,nums,target);
        }else{
          return this.searchNext(middleSup,max,nums,target);
        }
      },
      searchInsert(nums,target){
        return this.searchNext(0,nums.length-1,nums,target);
      },
    },
    created(){
      let test = [
        { nums:[1,3,5,6,7], target:5, },
        { nums:[1,3,5,6], target:2, },
        { nums:[1,3,5,6], target:7, },
        { nums:[1,3,5,6], target:0, },
        { nums:[1,2], target:0, },
        { nums:[1], target:0, },
      ];
      test.forEach(item=>{
        this.searchInsert(item.nums,item.target);
      });
    },
  }
</script>

<style scoped>

</style>