import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SignUp from '../pages/SignUp.vue'
import ContactIndex from '../pages/ContactsIndex.vue'
import ContactsDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import SimpleChart from '../cmps/SimpleChart.vue'
import MasterChart from '../cmps/MasterChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      beforeEnter: (to, from, next) => {
        // Redirect to signup if there's no logged-in user
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
          next('/signup');
        } else {
          next();
        }
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
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
      component: () => import('../pages/StatisticPage.vue'),
      children: [
				{
					path: 'simple-chart',
					name: 'simple-chart',
					component: SimpleChart,
				},
				{
					path: 'master-chart',
					name: 'master-chart',
					component: MasterChart,
				},
			],
    },
  ]
})

export default router
