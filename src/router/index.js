import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactIndex from '../pages/ContactsIndex.vue'
import ContactsDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import StatisticPage from '../pages/StatisticPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex
    },
    {
      path: '/contact/:id',
      name: 'contactId',
      component: ContactsDetails
    },
    {
      path: '/contact/edit/:id?',
      name: 'ContactEdit',
      component: ContactEdit
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: StatisticPage
    },
  ]
})

export default router
