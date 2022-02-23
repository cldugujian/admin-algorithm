<template>
  <main>
    
    冒泡排序
    
  </main>
</template>

<script>
  export default {
    name: "bubble-sort",
    methods:{
      bubbleSort(nums){
        console.log('前',nums);
        // 是否需要继续循环
        let flag = true;
        // 冒泡排序
        for( let i=0; i<nums.length && flag; i++ ){
          // 先默认为不需要继续循环
          flag = false;
          for( let j=nums.length-1; j>i; j-- ){
            if( nums[j] < nums[j-1] ){
              // 临时缓存 - 调换位置
              nums.cache = nums[j-1];
              nums[j-1] = nums[j];
              nums[j] = nums.cache;
              // 一旦调换了顺序，则需要继续循环
              flag = true;
            }
          }
        }
        // 删除临时缓存
        delete nums.cache;
        console.log('后',nums);
        return nums;
      },
    },
    created(){
      this.bubbleSort([0, 4, 9, 8, 1, 3, 2, 6, 7, 5]);
    },
  }
</script>

<style scoped>

</style>