<template>
  <main>
    <section class="home" v-for="itemOuter in category" :key="itemOuter">
      <h1 class="home-title">{{ itemOuter.classify }}</h1>
      <ul class="home-main flex">
        <li v-for="itemInner in itemOuter.list"
            @click="goJump(itemInner.routeName)"
            class="home-list"
            :key="itemInner">
          {{ itemInner.title }}
        </li>
      </ul>
    </section>

  </main>
</template>

<script>
  import {defineComponent} from 'vue'
  export default defineComponent({
    name: 'home-index',
    data(){
      return{
        category:[
          {
            classify:'other',
            list:[
              { routeName:'bubble-sort',title:'冒泡排序'},
              { routeName:'insert-sort',title:'插入排序'},
              { routeName:'select-sort',title:'选择排序'},
              { routeName:'common-string',title:'查找所有公共字符'},
            ]
          },
          {
            classify:'easy',
            list:[
              { routeName:'two-sum',title:'1. 两数之和'},
              { routeName:'is-palindrome-number',title:'9. 回文数'},
              { routeName:'longest-common-prefix',title:'14. 最长公共前缀'},
              { routeName:'remove-duplicates',title:'26. 删除有序数组中的重复项'},
              { routeName:'remove-element',title:'27. 移除元素'},
              { routeName:'str-str',title:'28. 实现 strStr()'},
              { routeName:'search-insert',title:'35. 搜索插入位置'},
              { routeName:'length-of-last-word',title:'58. 最后一个单词的长度'},
              { routeName:'plus-one',title:'66. 加一'},
              { routeName:'my-sqrt',title:'69. x的平方根'},
              { routeName:'climb-stairs',title:'70. 爬楼梯'},
              { routeName:'is-palindrome-string',title:'125. 验证回文串'},
              { routeName:'reverse-string',title:'344. 反转字符串'},
              { routeName:'common-chars',title:'1002. 查找共用字符'},
            ]
          },
          {
            classify:'medium',
            list:[
              { routeName:'longest-common-subsequence',title:'剑指 Offer II 095. 最长公共子序列'},
            ]
          },
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