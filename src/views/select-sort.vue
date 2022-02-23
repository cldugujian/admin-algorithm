<template>
  <main>

    选择排序

  </main>
</template>

<script>
  export default {
    name: "select-sort",
    methods:{
      selectSort(nums){
        console.log('前',nums);
        // 记录较小的值在数组中的索引
        let min = 0;
        // 选择排序
        for( let i=0; i<nums.length-1; i++ ){
          min = i;
          for( let j=i+1; j<nums.length; j++ ){
            // 如果前数比后数大
            if( nums[min] > nums[j] ){
              // 记录较小的值在数组中的索引
              min = j;
            }
          }
          // 如果 min 发生了变化
          if( min !== i ){
            // 临时缓存 - 调换位置
            nums.cache = nums[min];
            nums[min] = nums[i];
            nums[i] = nums.cache;
          }
        }
        // 删除临时缓存
        delete nums.cache;
        console.log('后',nums);
        return nums;
      },
    },
    created(){
      this.selectSort([0, 4, 9, 8, 1, 3, 2, 6, 7, 5]);
    },
  }
</script>

<style scoped>

</style>