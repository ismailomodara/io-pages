import { createRouter, createWebHistory } from 'vue-router';

// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const Home = () => import('@/pages/index.vue');

const Dashboard = () => import('@/pages/dashboard.vue');
const PagesIndex = () => import('@/pages/pages/index.vue');
const PagesBuilder = () => import('@/pages/pages/builder.vue');
const Settings = () => import('@/pages/settings.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        layout: "dashboard"
      }
    },
    {
      path: '/pages',
      name: 'pages.index',
      component: PagesIndex,
      meta: {
        layout: "dashboard"
      }
    },
    {
      path: '/pages/:id',
      name: 'pages.builder',
      component: PagesBuilder,
      meta: {
        layout: "builder"
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {
        layout: "dashboard"
      }
    }
  ],
})

export default router
