//@ts-ignore
import AboutView from '@/view/AboutView.vue'
import AgentsView from '@/view/AgentsView.vue'
import ContactView from '@/view/ContactView.vue'
import HomeView from '@/view/HomeView.vue'
import AllHouseView from '@/view/house/AllHouseView.vue'
//@ts-ignore
import DetailHouseView from '@/view/house/DetailHouseView.vue'
//@ts-ignore
import NosServiceView from '@/view/NosServiceView.vue'
//@ts-ignore
import PolitiqueView from '@/view/PolitiqueView.vue'
//@ts-ignore
import TermsConditionView from '@/view/TermsConditionView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { 
        title: 'Accueil - Dwelt',
        description: 'Dwelt révolutionne le marché immobilier avec une expertise pointue. Trouvez votre propriété idéale.',
      },
    },
    {
      path: '/terms-conditions',
      name: 'termsConditions',
      component: TermsConditionView,
      meta: { 
        title: 'Termes & Conditions - Dwelt',
        description: 'Consultez les termes et conditions d\'utilisation de Dwelt.',
      },
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: PolitiqueView,
      meta: { 
        title: 'Politique de confidentialité - Dwelt',
        description: 'Découvrez comment Dwelt protège vos données personnelles.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { 
        title: 'Contact - Dwelt',
        description: 'Contactez l\'équipe Dwelt pour toute question.',
      },
    },
    {
      path: '/detail/:id',
      name: 'PropertyDetail',
      component: DetailHouseView,
      meta: { 
        title: 'Détails de la propriété - Dwelt',
        description: 'Découvrez en détail cette propriété exceptionnelle.',
        noLoader: true // ← Pas de loader pour cette page
      },
      props: true
    },
    {
      path: '/all',
      name: 'all',
      component: AllHouseView,
      meta: { 
        title: 'Toutes nos propriétés - Dwelt',
        description: 'Parcourez notre catalogue complet de propriétés.',
      },
    },
    {
      path: '/agents',
      name: 'agents',
      component: AgentsView,
      meta: { 
        title: 'Nos Agents - Dwelt',
        description: 'Découvrez notre équipe d\'agents immobiliers experts chez Dwelt.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { 
        title: 'À propos de Dwelt',
        description: 'Découvrez l\'histoire et les valeurs de Dwelt.',
      },
    },
    {
      path: '/services',
      name: 'services',
      component: NosServiceView,
      meta: { 
        title: 'Nos services - Dwelt',
        description: 'Découvrez tous les services immobiliers de Dwelt.',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, left: 0, behavior: 'smooth' }
    }
  }
})

// Gestion SEO simple
router.beforeEach((to, from, next) => {
  // Titre de la page
  const pageTitle = to.meta.title ? `${to.meta.title}` : 'Dwelt'
  document.title = pageTitle
  
  // Métas données simples
  updateMetaTags(to.meta)
  
  next()
})

function updateMetaTags(meta: any) {
  // Description
  let description = document.querySelector('meta[name="description"]')
  if (!description) {
    description = document.createElement('meta')
    description.setAttribute('name', 'description')
    document.head.appendChild(description)
  }
  description.setAttribute('content', meta.description || 'Dwelt - Votre agence immobilière de confiance')
  
  // Open Graph simple
  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (!ogTitle) {
    ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    document.head.appendChild(ogTitle)
  }
  ogTitle.setAttribute('content', meta.title || 'Dwelt')
  
  let ogDescription = document.querySelector('meta[property="og:description"]')
  if (!ogDescription) {
    ogDescription = document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    document.head.appendChild(ogDescription)
  }
  ogDescription.setAttribute('content', meta.description || 'Dwelt - Votre agence immobilière de confiance')
}

export default router