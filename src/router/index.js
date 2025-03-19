import { createRouter, createWebHistory } from 'vue-router'

import TableView from '../views/TableView.vue';
import FormView from '../views/FormView.vue';
import EditFormView from '@/views/EditFormView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tableau',
      component: TableView,
    },
    {
      path: '/add',
      name: 'formulaire',
      component: FormView,
      
    },
    {
      path: '/edit/:index',
      name: 'edit',
      component: EditFormView,
      
    },
    
  ],
})

export default router
