import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      // props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Category.vue')
    },
    {
      path: '/product/:id',
      name: 'product_detail',
      component: () => import('../views/Product.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }

    // always scroll 10px above the element #main
    // return {
      // could also be
      // el: document.getElementById('main'),
    //   el: '#main',
    //   top: -10,
    // }

    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { top: 0 }
    // }
  }
})

export default router
