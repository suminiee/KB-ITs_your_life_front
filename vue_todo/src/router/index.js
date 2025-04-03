import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/pages/todo/TodoPage.vue'),
      //인증인가 옵션 -> Meta
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/detail/:id',
      name: 'todo/detail',
      component: () => import('@/pages/todo/TodoDetailPage.vue'),
      meta: { requiresAuth: true },
      //파라미터 전달하는 친구입니다...
      props: true,
    },
    {
      path: '/todo/write',
      name: 'todo/write',
      component: () => import('@/pages/todo/TodoWritePage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/:id',
      name: 'todo/delete',
      component: () => import('@/pages/todo/TodoDetailPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todo/:id',
      name: 'todo/edit',
      component: () => import('@/pages/todo/TodoEditPage.vue'),
      meta: { requiresAuth: true },
      props: true,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth') === 'true') {
      next();
    } else {
      alert('로그인이 필요 합니다');
      next({ name: 'login' });
    }
  }

  next();
});

export default router;
