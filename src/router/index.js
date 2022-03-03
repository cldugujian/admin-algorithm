import { createRouter,createWebHistory } from 'vue-router'
const routerHistory = createWebHistory();

// 首页
import homeIndex from '../views/home-index'

// other
import bubbleSort from '../views/other/bubble-sort'
import insertSort from '../views/other/insert-sort'
import selectSort from '../views/other/select-sort'
import commonString from '../views/other/common-string'

// easy
import isPalindrome from '../views/easy/is-palindrome'
import twoSum from '../views/easy/two-sum'
import mySqrt from '../views/easy/my-sqrt'
import removeDuplicates from '../views/easy/remove-duplicates'
import longestCommonPrefix from '../views/easy/longest-common-prefix'
import removeElement from '../views/easy/remove-element'
import climbStairs from '../views/easy/climb-stairs'
import searchInsert from '../views/easy/search-insert'
import plusOne from '../views/easy/plus-one'
import reverseString from '../views/easy/reverse-string'
import commonChars from '../views/easy/common-chars'
import strStr from '../views/easy/str-str'

// medium
import longestCommonSubsequence from '../views/medium/longest-common-subsequence'


const router = createRouter({
  history:routerHistory,
  routes:[

    { path:'/',name:'home-index',component:homeIndex, },

    { path:'/other/bubble-sort',name:'bubble-sort',component:bubbleSort },
    { path:'/other/insert-sort',name:'insert-sort',component:insertSort },
    { path:'/other/select-sort',name:'select-sort',component:selectSort },
    { path:'/other/common-string',name:'common-string',component:commonString },

    { path:'/easy/is-palindrome',name:'is-palindrome',component:isPalindrome },
    { path:'/easy/two-sum',name:'two-sum',component:twoSum },
    { path:'/easy/my-sqrt',name:'my-sqrt',component:mySqrt },
    { path:'/easy/remove-duplicates',name:'remove-duplicates',component:removeDuplicates },
    { path:'/easy/longest-other-prefix',name:'longest-common-prefix',component:longestCommonPrefix },
    { path:'/easy/remove-element',name:'remove-element',component:removeElement },
    { path:'/easy/climb-stairs',name:'climb-stairs',component:climbStairs },
    { path:'/easy/search-insert',name:'search-insert',component:searchInsert },
    { path:'/easy/plus-one',name:'plus-one',component:plusOne },
    { path:'/easy/reverse-string',name:'reverse-string',component:reverseString },
    { path:'/easy/common-chars',name:'common-chars',component:commonChars },
    { path:'/easy/str-str',name:'str-str',component:strStr },

    { path:'/easy/longest-common-subsequence',name:'longest-common-subsequence',component:longestCommonSubsequence },

  ],
});

export default router;