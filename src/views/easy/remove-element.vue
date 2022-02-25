<template>
  <main>

    移除元素
    <br>
    <br>

    给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。<br>
    不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。 元素的顺序可以改变。<br>
    你不需要考虑数组中超出新长度后面的元素。 <br>

    示例 1：<br>
    <br>
    输入：nums = [3,2,2,3], val = 3<br>
    输出：2, nums = [2,2]<br>
    解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。<br>
    <br>

    示例 2：<br>
    <br>
    输入：nums = [0,1,2,2,3,0,4,2], val = 2<br>
    输出：5, nums = [0,1,4,0,3]<br>
    解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。<br>


  </main>
</template>

<script>
  export default {
    name: "remove-element",
    methods:{
      // 每次重复都调用一次splice
      removeElement_1(nums, val){
        // 如果是空数组或只有一个数字，则直接返回
        if( nums.length === 0 || (nums.length === 1 && nums[0] !== val) ){
          console.log('原路返回',nums);
          console.log('');
          return nums;
        }
        deleteEl(0,nums);
        function deleteEl(index,arr){
          if( index === arr.length ){
            console.log('result',arr);
            return arr;
          }
          if( arr[index] === val ){
            arr.splice(index,1);
            return deleteEl(index,arr);
          }else{
            return deleteEl(index+1,arr);
          }
        }
      },
      // 先将非重复的元素添加都数组尾部，最后一次性splice
      removeElement_2(nums,val){
        // 如果是空数组或只有一个数字，则直接返回
        if( nums.length === 0 || (nums.length === 1 && nums[0] !== val) ){
          return nums;
        }
        // 先获取数组初始长度
        let initLength = nums.length;
        // console.log('initLength',initLength);
        // 逐个遍历查找重复元素
        for( let i=0; i<initLength; i++ ){
          let item = nums[i];
          // console.log('item',item);
          if( item !== val ){
            nums.push(item);
          }
        }
        console.log('前',nums);
        nums = nums.splice(initLength,nums.length);
        console.log('后',nums);
        console.log('');
        return nums;
      },
      // 新增一个数组
      removeElement_3(nums,val){
        // 极端情况
        if( nums.length === 0 || (nums.length === 1 && nums[0] !== val) ){
          return nums;
        }
        let arr = [];
        for( let i of nums ){
          if( i !== val ){
            arr.push(i);
          }
        }
        console.log('arr',arr);
        return arr;
      },
  },
    created(){
      let test = [
        { nums:[3,2,2,3], val:3, },
        { nums:[0,1,2,2,3,0,4,2], val:2, },
        { nums:[0], val:2, },
        { nums:[1], val:1, },
      ];
      test.forEach((item,index)=>{
        this.removeElement_3( test[index].nums,test[index].val );
      });
    },
  }
</script>

<style scoped>

</style>