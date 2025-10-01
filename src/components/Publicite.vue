<template>
  <!-- SECTION CAROUSEL PUBLICITAIRE -->
  <section class="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#2F4F4F]/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-[#05b1b1]/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/60 shadow-sm mb-6">
          <svg class="w-5 h-5 text-[#2F4F4F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
          </svg>
          <span class="text-gray-700 font-medium">PUBLICITÉS & PARTENARIATS</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span class="bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] bg-clip-text text-transparent">
            Découvrez
          </span>
          <span class="text-gray-900"> nos Annonces</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Des offres exclusives de nos partenaires et annonceurs
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-[#2F4F4F]"></div>
      </div>

      <!-- Empty State -->
      <div v-else-if="publicites.length === 0" class="text-center py-20">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucune publicité disponible</h3>
        <p class="text-gray-600">Revenez plus tard pour découvrir nos offres exclusives.</p>
      </div>

      <!-- Carousel Container -->
      <div v-else class="relative">
        <!-- Navigation -->
        <button 
          @click="slidePrev"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg -left-6 lg:-left-12"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <button 
          @click="slideNext"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg -right-6 lg:-right-12"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Swiper Carousel -->
        <swiper
          :modules="[Autoplay, Pagination]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ 
            clickable: true, 
            el: '.promo-pagination',
            bulletClass: 'promo-bullet',
            bulletActiveClass: 'promo-bullet-active'
          }"
          :breakpoints="{
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }"
          :speed="800"
          class="w-full pb-12"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <!-- Publicités dynamiques depuis l'API -->
          <swiper-slide v-for="pub in publicitesActives" :key="pub.id">
            <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/60 h-full">
              <!-- Badge Catégorie -->
              <div class="absolute top-6 left-6 z-20">
                <div :class="getCategoryBadgeClass(pub.path)" class="text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {{ getCategoryEmoji(pub.path) }} {{ getCategoryLabel(pub.path) }}
                </div>
              </div>

              <!-- Image avec QR Code -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  :src="processBase64Image(pub.image)" 
                  :alt="pub.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  @error="handleImageError"
                />
                <div class="absolute inset-0 bg-black/10"></div>
                
                <!-- Indication QR Code -->
                <div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  📱 Scannez l'image
                </div>
              </div>

              <!-- Contenu -->
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2F4F4F] transition-colors duration-300">
                  {{ pub.name }}
                </h3>
                
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                  {{ pub.description }}
                </p>

                <!-- Avantages basés sur le chemin -->
                <div class="grid grid-cols-2 gap-2 mb-6">
                  <div class="flex items-center text-xs text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span>{{ getAvantage1(pub.path) }}</span>
                  </div>
                  <div class="flex items-center text-xs text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span>{{ getAvantage2(pub.path) }}</span>
                  </div>
                </div>

                <!-- CTA -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div class="bg-green-50 rounded-xl px-4 py-2">
                    <div class="text-xs text-green-600">{{ getPrixLabel(pub.path) }}</div>
                    <div class="text-lg font-bold text-green-700">{{ getPrix(pub.path) }}</div>
                  </div>
                  
                  <button 
                    @click="handlePubClick(pub)"
                    class="group bg-[#2F4F4F] hover:bg-[#287373] text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center text-sm"
                  >
                    <span>{{ getBoutonTexte(pub.path) }}</span>
                    <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Pagination personnalisée -->
        <div class="promo-pagination flex justify-center mt-8 space-x-3"></div>
      </div>

      <!-- Indicateur de progression (optionnel) -->
      <div class="mt-8 px-4">
        <div class="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] transition-all duration-100 ease-linear"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { useAxiosRequest } from "@/utils/custom"
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

// Types adaptés à votre API
interface Publicite {
  id: number
  name: string
  description: string
  image: string
  path: string
  is_active: boolean
}

// États réactifs
const publicites = ref<Publicite[]>([])
const loading = ref(true)
const swiperInstance = ref<any>(null)
const progress = ref(0)

// Computed property pour filtrer les publicités actives
const publicitesActives = computed(() => {
  return publicites.value.filter(pub => pub.is_active === true)
})

// Méthode pour récupérer les publicités depuis l'API
const fetchPublicites = async () => {
  try {
    loading.value = true
    const response = await useAxiosRequest().get('/publicite') // Adaptez l'endpoint selon votre API
    
    if (response.data ) {
      publicites.value = response.data.pubs.map((pub: any) => ({
        id: pub.id,
        name: pub.name || 'Publicité',
        description: pub.description || 'Description non disponible',
        image: pub.image || '',
        path: pub.path || 'general',
        is_active: pub.is_active !== undefined ? pub.is_active : true
      }))
    }
  } catch (error) {
    console.error('Erreur lors du chargement des publicités:', error)
    // En cas d'erreur, chargez des données de démonstration
    publicites.value = getDonneesDemonstration()
  } finally {
    loading.value = false
  }
}

// Données de démonstration en cas d'erreur API
const getDonneesDemonstration = (): Publicite[] => {
  return [
    {
      id: 1,
      name: "Service de Ménage Premium",
      description: "Service de nettoyage complet pour particuliers et entreprises. Réservation en ligne instantanée.",
      image: "",
      path: "services",
      is_active: true
    },
    {
      id: 2,
      name: "Festival Urban Music 2024",
      description: "Le plus grand festival de musique urbaine de l'année. Artistes internationaux et locaux.",
      image: "",
      path: "evenements",
      is_active: true
    },
    {
      id: 3,
      name: "Le Bistro Moderne",
      description: "Cuisine fusion française et africaine. Cadre élégant avec terrasse panoramique.",
      image: "",
      path: "restauration",
      is_active: true
    },
    {
      id: 4,
      name: "Voyage Safari Aventure",
      description: "Expérience unique de safari en Afrique avec hébergement luxueux et guides experts.",
      image: "",
      path: "voyage",
      is_active: true
    },
    {
      id: 5,
      name: "Boutique Mode Éthique",
      description: "Vêtements éco-responsables et accessoires durables. Livraison gratuite dès 50€.",
      image: "",
      path: "shopping",
      is_active: true
    },
    {
      id: 6,
      name: "Appartement Centre-Ville",
      description: "Bel appartement 3 pièces avec terrasse et vue imprenable. Proche commodités.",
      image: "",
      path: "immobilier",
      is_active: true
    }
  ]
}

// Fonction pour traiter les images base64
const processBase64Image = (base64String: string): string => {
  if (!base64String) {
    // Images par défaut selon le chemin
    return getDefaultImageByPath()
  }
  
  // Si c'est déjà une URL data valide
  if (base64String.startsWith('data:image/')) {
    return base64String
  }
  
  // Si c'est juste le base64 sans le préfixe
  if (base64String.startsWith('iVBORw')) { // PNG
    return `data:image/png;base64,${base64String}`
  }
  
  if (base64String.startsWith('/9j/')) { // JPEG
    return `data:image/jpeg;base64,${base64String}`
  }
  
  // Fallback vers une image par défaut
  return getDefaultImageByPath()
}

// Image par défaut selon le chemin
const getDefaultImageByPath = (path?: string): string => {
  const defaultImages: { [key: string]: string } = {
    'services': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'evenements': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'restauration': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'voyage': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'shopping': 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'immobilier': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
  
  return defaultImages[path || 'services'] || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
}

// Gestion des erreurs d'image
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = getDefaultImageByPath()
}

// Classes CSS pour les badges de catégorie basés sur le path
const getCategoryBadgeClass = (path: string): string => {
  const classes: { [key: string]: string } = {
    'services': 'bg-gradient-to-r from-green-500 to-emerald-600',
    'evenements': 'bg-gradient-to-r from-purple-500 to-pink-600',
    'restauration': 'bg-gradient-to-r from-rose-500 to-pink-600',
    'voyage': 'bg-gradient-to-r from-blue-500 to-cyan-600',
    'shopping': 'bg-gradient-to-r from-orange-500 to-red-600',
    'immobilier': 'bg-gradient-to-r from-indigo-500 to-purple-600'
  }
  
  return classes[path] || 'bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1]'
}

// Labels pour les catégories
const getCategoryLabel = (path: string): string => {
  const labels: { [key: string]: string } = {
    'services': 'SERVICES',
    'evenements': 'ÉVÉNEMENT',
    'restauration': 'RESTAURATION',
    'voyage': 'VOYAGE',
    'shopping': 'SHOPPING',
    'immobilier': 'IMMOBILIER'
  }
  
  return labels[path] || 'GÉNÉRAL'
}

// Emojis pour les catégories
const getCategoryEmoji = (path: string): string => {
  const emojis: { [key: string]: string } = {
    'services': '🧹',
    'evenements': '🎉',
    'restauration': '🍽️',
    'voyage': '✈️',
    'shopping': '🛍️',
    'immobilier': '🏠'
  }
  
  return emojis[path] || '📢'
}

// Avantages dynamiques basés sur le path
const getAvantage1 = (path: string): string => {
  const avantages: { [key: string]: string } = {
    'services': 'Écologique',
    'evenements': 'Artistes internationaux',
    'restauration': 'Cuisine fusion',
    'voyage': 'Destinations exclusives',
    'shopping': 'Produits qualité',
    'immobilier': 'Emplacements premium'
  }
  
  return avantages[path] || 'Professionnel'
}

const getAvantage2 = (path: string): string => {
  const avantages: { [key: string]: string } = {
    'services': '24h/24',
    'evenements': 'Scènes multiples',
    'restauration': 'Terrasse panoramique',
    'voyage': 'Guide local',
    'shopping': 'Livraison rapide',
    'immobilier': 'Vue exceptionnelle'
  }
  
  return avantages[path] || 'Disponible'
}

// Prix dynamiques basés sur le path
const getPrix = (path: string): string => {
  const prix: { [key: string]: string } = {
    'services': '50$',
    'evenements': '25$',
    'restauration': '35$',
    'voyage': '299$',
    'shopping': '79$',
    'immobilier': 'Contact'
  }
  
  return prix[path] || 'Sur devis'
}

const getPrixLabel = (path: string): string => {
  const labels: { [key: string]: string } = {
    'services': 'À partir de',
    'evenements': 'Billets dès',
    'restauration': 'Menu à',
    'voyage': 'À partir de',
    'shopping': 'À partir de',
    'immobilier': 'À partir de'
  }
  
  return labels[path] || 'À partir de'
}

// Texte des boutons
const getBoutonTexte = (path: string): string => {
  const textes: { [key: string]: string } = {
    'services': 'Réserver',
    'evenements': 'Acheter',
    'restauration': 'Réserver',
    'voyage': 'Découvrir',
    'shopping': 'Acheter',
    'immobilier': 'Visiter'
  }
  
  return textes[path] || 'Voir l\'offre'
}

// Gestion du clic sur une publicité
const handlePubClick = (pub: Publicite) => {
  // Vous pouvez adapter cette logique selon vos besoins
  console.log('Publicité cliquée:', pub)
  // Exemple: ouvrir un lien externe ou un modal
  // window.open(`/publicite/${pub.id}`, '_blank')
}

// Méthodes Swiper
const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
}

const onSlideChange = () => {
  if (swiperInstance.value) {
    const total = swiperInstance.value.slides.length
    const current = swiperInstance.value.realIndex + 1
    progress.value = (current / total) * 100
  }
}

const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

// Chargement initial
onMounted(() => {
  fetchPublicites()
})
</script>

<style scoped>
/* Styles pour la pagination personnalisée */
.promo-bullet {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #cbd5e1;
  border-radius: 50%;
  margin: 0 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.promo-bullet-active {
  background-color: #2F4F4F;
  transform: scale(1.2);
}

/* Animation pour les cartes */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Styles Swiper améliorés */
:deep(.swiper) {
  padding: 10px 5px 30px 5px;
}

:deep(.swiper-slide) {
  height: auto;
  display: flex;
}

:deep(.swiper-wrapper) {
  align-items: stretch;
}
</style>