import { createRouter,createWebHistory } from 'vue-router'
const routerHistory = createWebHistory();

import homeIndex from '../views/home-index'
import isPalindrome from '../views/easy/is-palindrome'
import twoSum from '../views/easy/two-sum'
import mySqrt from '../views/easy/my-sqrt'
import removeDuplicates from '../views/easy/remove-duplicates'
import bubbleSort from '../views/common/bubble-sort'
import insertSort from '../views/common/insert-sort'
import selectSort from '../views/common/select-sort'
import longestCommonPrefix from '../views/easy/longest-common-prefix'
import removeElement from '../views/easy/remove-element'
import climbStairs from '../views/easy/climb-stairs'
import searchInsert from '../views/easy/search-insert'
import plusOne from '../views/easy/plus-one'
import reverseString from '../views/easy/reverse-string'
import maxRepeating from '../views/easy/max-repeating'

const router = createRouter({
  history:routerHistory,
  routes:[

    { path:'/',name:'home-index',component:homeIndex, },
    { path:'/easy/bubble-sort',name:'bubble-sort',component:bubbleSort },
    { path:'/easy/insert-sort',name:'insert-sort',component:insertSort },
    { path:'/easy/select-sort',name:'select-sort',component:selectSort },
    { path:'/easy/is-palindrome',name:'is-palindrome',component:isPalindrome },
    { path:'/easy/two-sum',name:'two-sum',component:twoSum },
    { path:'/easy/my-sqrt',name:'my-sqrt',component:mySqrt },
    { path:'/easy/remove-duplicates',name:'remove-duplicates',component:removeDuplicates },
    { path:'/easy/longest-common-prefix',name:'longest-common-prefix',component:longestCommonPrefix },
    { path:'/easy/remove-element',name:'remove-element',component:removeElement },
    { path:'/easy/climb-stairs',name:'climb-stairs',component:climbStairs },
    { path:'/easy/search-insert',name:'search-insert',component:searchInsert },
    { path:'/easy/plus-one',name:'plus-one',component:plusOne },
    { path:'/easy/reverse-string',name:'reverse-string',component:reverseString },
    { path:'/easy/max-repeating',name:'max-repeating',component:maxRepeating },

  ],
});

export default router;