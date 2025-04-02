import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
//주소에 어떤 컴포넌트를 매칭시킬지 설정

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
    },
    {
      path: '/dynamic/:mood',
      name: 'dynamic',
      component: () => import('@/pages/DynamicPage.vue'),
    },
    {
      path: '/user/:userNum',
      name: 'user',
      component: () => import('@/pages/UserPage.vue'),
    },
    {
      path: '/cors',
      name: 'cors',
      component: () => import('@/pages/CorsPage.vue'),
    },
    {
      path: '/ex-cors',
      name: 'ex-cors',
      component: () => import('@/pages/CorsExPage.vue'),
    },
    {
      //위에서 다 봤는데도 없다 -> 그 모든 예외 전체를 처리해줌
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
});

export default router;
