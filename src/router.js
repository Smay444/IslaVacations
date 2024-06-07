import { createRouter, createWebHistory } from 'vue-router';
import SavingsCalculator from './components/SavingsCalculator.vue';
import Home from './components/Home.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/savings-calculator',
    name: 'SavingsCalculator',
    component: SavingsCalculator
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
