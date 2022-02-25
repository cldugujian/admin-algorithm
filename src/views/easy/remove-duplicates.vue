<template>
  <main>

    删除有序数组中的重复项
    <br>
    <br>

    给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。<br>
    <br>
    由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有k个元素，那么nums的前k个元素应该保存最终结果。<br>
    <br>
    将最终结果插入nums的前 k 个位置后返回 k 。<br>
    <br>
    不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。<br>
    <br>
    <br>
    示例 1：<br>
    <br>
    输入：nums = [1,1,2]<br>
    输出：2, nums = [1,2,_]<br>
    解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。<br>
    示例 2：<br>
    <br>
    输入：nums = [0,0,1,1,1,2,2,3,3,4]<br>
    输出：5, nums = [0,1,2,3,4]<br>
    解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。<br>
    <br>

  </main>
</template>

<script>
  export default {
    name: "remove-duplicates",
    methods:{
      // 每次发现重复元素，都调用一次splice
      removeDuplicates_1(nums){
        // 极端情况
        if( nums.length === 1 ){
          return nums;
        }
        deleteEl(0,nums);
        function deleteEl(index,arr){
          if( index === arr.length-1 ){
            let result = `${arr.length}, nums = [${arr}]`;
            console.log(result);
            return result;
          }
          if( arr[index] === arr[index+1] ){
            arr.splice(index+1,1);
            return deleteEl(index,arr);
          }else{
            return deleteEl(index+1,arr);
          }
        }
      },
      // 先将非重复的元素添加都数组尾部，最后一次性splice
      removeDuplicates_2(nums){
        // 极端情况
        if( nums.length === 1 ){
          return nums;
        }
        // 先获取数组初始长度
        let initLength = nums.length;
        // console.log('initLength',initLength);
        // 逐个遍历查找重复元素
        for( let i=0; i<initLength; i++ ){
          let item = nums[i];
          // console.log('item',item);
          // 默认数组尾部无重复
          let flag = true;
          // 如果数组尾部新增的元素中有重复的，则不添加
          for( let j=initLength; j<=nums.length; j++ ){
            // console.log('itemInner',nums[j]);
            if( item === nums[j] ){
              flag = false;
              break;
            }
          }
          flag && nums.push(item);
        }
        console.log('前',nums);
        // nums = nums.splice(initLength,nums.length);
        let cache = nums.splice(initLength,nums.length);
        nums.splice( 0,cache.length,...cache );
        console.log('后',nums);
        return nums;
      },
      // 新增一个数组
      removeDuplicates_3(nums){
        // 极端情况
        if( nums.length === 1 ){
          return nums;
        }
        let arr = [];
        for( let i of nums ){
          if( arr.indexOf(i) === -1 ){
            arr.push(i);
          }
        }
        console.log('arr',arr);
        return arr;
      },
      // 原地移动数组
      removeDuplicates_4(nums){
        // 当前用于对比的元素下标，初始值为 0
        let currentSup = 0;
        for( let i=0; i<nums.length-1; i++ ){
          if( nums[i] !== nums[i+1] ){
            currentSup ++;
            nums[currentSup] = nums[i+1];
          }
        }
        console.log('nums',nums,'currentSup',currentSup);
        return currentSup+1;
      },
      // 每次发现重复元素，都调用一次splice
      removeDuplicates_5(nums){
        // 极端情况
        if( nums.length === 1 ){
          return nums;
        }
        let length = nums.length;
        for( let i=nums.length-1; i>=0; i-- ){
          if( nums[i] === nums[i-1] ){
            nums.splice(i,1);
            length++;
            i++;
          }
        }
        console.log('nums',nums);
        return nums.length;
      },
    },
    created(){
      let test = [
        [1,1,2],
        [0,0,1,1,1,2,2,3,3,4],
        [0,1,2,3,4,5]
      ];
      test.forEach(item=>{
        this.removeDuplicates_5(item);
      });
    },
  }
</script>

<style scoped>

</style>