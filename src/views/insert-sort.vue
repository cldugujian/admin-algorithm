<template>
  <main>
    
    插入排序
    
  </main>
</template>

<script>
  export default {
    name: "insert-sort",
    methods:{
      insertSort(nums){
        console.log('前',nums);
        let i,j;
        // 插入排序
        for( i=1; i<nums.length; i++ ){
          // 如果前数比后数大
          if( nums[i] < nums[i-1] ){
            // 临时缓存 - 记录数值
            nums.cache = nums[i];
            // 从待调项的前一项开始，往前遍历，直到找到小于待调项的位置结束，记为目标项
            for( j=i-1; nums[j] > nums.cache; j-- ){
              nums[j+1] = nums[j];
            }
            // 给目标项赋值
            nums[j+1] = nums.cache;
            // 删除缓存
            delete nums.cache;
          }
        }
        console.log('后',nums);
        return nums;
      },
    },
    created(){
      this.insertSort([0, 4, 9, 8, 1, 3, 2, 6, 7, 5]);
    },
  }
</script>

<style scoped>

</style>