//@ts-ignore
import AboutView from '@/view/AboutView.vue'
import ContactView from '@/view/ContactView.vue'
import HomeView from '@/view/HomeView.vue'
import AllHouseView from '@/view/house/AllHouseView.vue'
//@ts-ignore
import DetailHouseView from '@/view/house/DetailHouseView.vue'
//@ts-ignore
import NosServiceView from '@/view/NosServiceView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Accueil' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { title: 'Contact' },
    },
    {
      path: '/detail/', // Ajouter un paramètre d'ID
      name: 'detail',
      component: DetailHouseView,
      meta: { title: 'Détails' },
      props: true // Permet de passer l'ID comme prop
    },
    {
      path: '/all',
      name: 'all',
      component: AllHouseView,
      meta: { title: 'Toutes les propriétés' },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'A propos de nous' },
    },
    {
      path: '/services',
      name: 'services',
      component: NosServiceView,
      meta: { title: 'Nos services' },
    },
    
    // Route de fallback pour les 404
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
})

// Navigation guard pour mettre à jour le titre
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - Dwelt` : 'Dwelt'
  next()
})

export default router