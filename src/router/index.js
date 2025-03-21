import { createRouter, createWebHistory } from 'vue-router'

import TableView from '../views/TableView.vue';
import FormView from '../views/FormView.vue';


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
      path: '/edit/:id',
      name: 'editForm',
      component: FormView,
      props: true
      
    },
    
  ],
})

export default router
