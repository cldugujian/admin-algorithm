import { createRouter,createWebHistory } from 'vue-router'
const routerHistory = createWebHistory();

import homeIndex from '../views/home-index'
import isPalindrome from '../views/is-palindrome'
import twoSum from '../views/two-sum'
import mySqrt from '../views/my-sqrt'
import removeDuplicates from '../views/remove-duplicates'

const router = createRouter({
  history:routerHistory,
  routes:[

    { path:'/',name:'home-index',component:homeIndex },
    { path:'/is-palindrome',name:'is-palindrome',component:isPalindrome },
    { path:'/two-sum',name:'two-sum',component:twoSum },
    { path:'/my-sqrt',name:'my-sqrt',component:mySqrt },
    { path:'/remove-duplicates',name:'remove-duplicates',component:removeDuplicates },

  ],
});

export default router;