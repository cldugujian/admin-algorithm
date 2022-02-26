<template>
  <main class="home">
    <h1 class="home-title">Common</h1>
    <ul class="home-main flex">
      <li v-for="item in common"
          @click="goJump(item.routeName)"
          class="home-list"
          :key="item">
        {{ item.title }}
      </li>
    </ul>
    <h1 class="home-title">Easy</h1>
    <ul class="home-main flex">
      <li v-for="item in easy"
          @click="goJump(item.routeName)"
          class="home-list"
          :key="item">
        {{ item.title }}
      </li>
    </ul>

  </main>
</template>

<script>
  import {defineComponent} from 'vue'
  export default defineComponent({
    name: 'home-index',
    data(){
      return{
        common:[
          { routeName:'bubble-sort',title:'冒泡排序'},
          { routeName:'insert-sort',title:'插入排序'},
          { routeName:'select-sort',title:'选择排序'},
        ],
        easy:[
          { routeName:'two-sum',title:'1. 两数之和'},
          { routeName:'is-palindrome',title:'9. 回文数'},
          { routeName:'longest-common-prefix',title:'14. 最长公共前缀'},
          { routeName:'remove-duplicates',title:'26. 删除有序数组中的重复项'},
          { routeName:'remove-element',title:'27. 移除元素'},
          { routeName:'search-insert',title:'35. 搜索插入位置'},
          { routeName:'my-sqrt',title:'69. x的平方根'},
          { routeName:'climb-stairs',title:'70. 爬楼梯'},
        ],
      }
    },
    methods: {
      goJump(routerName) {
        this.$router.push({ name:routerName });
      },
    },
  });
</script>

<style scoped lang="scss">
  .home {
    width: 100%;
  }
  .home-main{
    flex-wrap: wrap;
  }
  .home-title {
    display: block;
    width: 100%;
    font-size: 24px;
    text-align: center;
    margin-top:40px;
  }
  .home-list {
    width: 100%;
    font-size: 14px;
    margin-top: 20px;
    padding-left:40px;
    line-height: 38px;
    background: rgba(0, 162, 255, 0.1);
    border-radius: 10px;
    transition: all 0.5s;
    cursor: pointer;
  }
</style>