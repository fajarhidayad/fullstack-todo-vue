import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'
import ProductDetailView from './ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/products/:id', component: ProductDetailView },
  ],
})

export default router
