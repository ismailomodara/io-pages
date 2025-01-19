import { createRouter, createWebHistory } from 'vue-router';

// route level code-splitting
// this generates a separate chunk per page (X.[hash].js) for the route
// which is lazy-loaded when the route is visited.

const Error = () => import('@/pages/error.vue');
const Home = () => import('@/pages/index.vue');
const PagesBuilder = () => import('@/pages/pages/builder.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: Error
    },
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/pages',
      redirect: "/pages/build",
    },
    {
      path: '/pages/:params',
      redirect: "/pages/build",
    },
    {
      path: '/pages/build',
      name: 'pages.build',
      component: PagesBuilder,
      meta: {
        layout: "builder"
      }
    },
  ],
})

export default router
