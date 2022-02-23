import { createRouter,createWebHistory } from 'vue-router'
const routerHistory = createWebHistory();

import HomeIndex from '../views/home-index'
import PalindromeNumber from '../views/palindrome-number'

const router = createRouter({
  history:routerHistory,
  routes:[
    { path:'/',name:'home-index',component:HomeIndex },
    { path:'/palindrome-number',name:'palindrome-number',component:PalindromeNumber },
  ],
});

export default router;