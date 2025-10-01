<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

interface Partner {
  id: number
  name: string
  logo: string
  website?: string
  category: string
  description: string
  featured?: boolean
}

//@ts-ignore
import partenaire1 from '../assets/images/safricode.webp'
//@ts-ignore
import partenaire2 from '../assets/images/emaar.webp'
//@ts-ignore
import partenaire3 from '../assets/images/modern-contruction.webp'

const partners = ref<Partner[]>([
  {
    id: 1,
    name: "Safricode",
    logo: partenaire1,
    website: "#",
    category: "Construction",
    description: "Expert en construction durable et innovante",
    featured: true
  },
  {
    id: 2,
    name: "Emmar",
    logo: partenaire2,
    website: "#",
    category: "Développement",
    description: "Leader en développement immobilier de prestige"
  },
  {
    id: 3,
    name: "Modern Construction",
    logo: partenaire3,
    website: "#",
    category: "Innovation",
    description: "Spécialiste des techniques de construction modernes"
  },
])

const currentIndex = ref(0)
const isAutoPlaying = ref(true)
const isHovering = ref(false)

// Configuration spéciale pour 3 partenaires
const getVisiblePartners = () => {
  return partners.value.map((partner, index) => {
    const position = (index - currentIndex.value + partners.value.length) % partners.value.length
    let scale = 1
    let opacity = 1
    let zIndex = 10
    let transform = "translateX(0)"
    
    // Pour 3 éléments, on crée un effet de focus sur l'élément central
    if (position === 0) {
      // Élément central - mis en avant
      scale = 1.1
      opacity = 1
      zIndex = 30
    } else if (position === 1 || position === partners.value.length - 1) {
      // Éléments adjacents - légèrement réduits
      scale = 0.9
      opacity = 0.8
      zIndex = 20
      transform = position === 1 ? "translateX(40px)" : "translateX(-40px)"
    }
    
    return {
      ...partner,
      position,
      style: {
        opacity,
        transform: `${transform} scale(${scale})`,
        zIndex,
        transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }
    }
  })
}

// Navigation simplifiée pour 3 éléments
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % partners.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + partners.value.length) % partners.value.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

// Auto-play optimisé
let autoPlayInterval: any

const startAutoPlay = () => {
  if (isAutoPlaying.value && !isHovering.value) {
    stopAutoPlay()
    autoPlayInterval = setInterval(() => {
      nextSlide()
    }, 5000) // Plus lent pour 3 éléments
  }
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
}

// Animation au scroll
const handleScroll = () => {
  const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-title, .scroll-animate-subtitle, .scroll-animate-carousel, .scroll-animate-card, .scroll-animate-indicator')
  const windowHeight = window.innerHeight
  const triggerBottom = windowHeight * 0.85

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top
    
    if (elementTop < triggerBottom) {
      element.classList.add('animate-in')
    }
  })
}

// Cycle de vie
onMounted(() => {
  startAutoPlay()
  window.addEventListener('scroll', handleScroll)
  // Déclencher une fois au chargement pour les éléments déjà visibles
  setTimeout(handleScroll, 100)
})

onUnmounted(() => {
  stopAutoPlay()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
    <!-- Arrière-plan élégant -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Formes géométriques subtiles -->
      <div class="absolute top-10 left-10 w-72 h-72 bg-[#2F4F4F]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-[#05b1b1]/5 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <!-- Lignes décoratives -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2F4F4F] to-transparent"></div>
        <div class="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#05b1b1] to-transparent"></div>
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête élégant -->
      <div class="text-center mb-16 lg:mb-20">
        <!-- Badge sophistiqué -->
        <div class="scroll-animate-title">
          <span class="inline-block bg-gradient-to-r from-[#2F4F4F]/10 to-[#05b1b1]/10 text-[#2F4F4F] text-sm font-semibold px-4 py-2 rounded-full border border-[#2F4F4F]/20 backdrop-blur-sm mb-6">
            Partenariats stratégiques
          </span>
        </div>
        
        <!-- Titre principal avec effet de gradient -->
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight scroll-animate-title delay-100">
          Nos partenaires 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] relative inline-block">
            d'excellence
            <span class="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
          </span>
        </h2>
        
        <!-- Description -->
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed scroll-animate-subtitle">
          Des collaborations solides avec des leaders du secteur pour garantir 
          <span class="font-semibold text-[#2F4F4F]">la qualité et l'innovation</span> dans tous nos projets
        </p>
      </div>

      <!-- Carousel optimisé pour 3 éléments -->
      <div 
        class="relative scroll-animate-carousel"
        @mouseenter="isHovering = true; stopAutoPlay()"
        @mouseleave="isHovering = false; startAutoPlay()"
      >
        <!-- Conteneur du carousel -->
        <div class="relative h-96 flex items-center justify-center">
          <div class="flex items-center justify-center space-x-4 lg:space-x-8 xl:space-x-12">
            <div
              v-for="(partner, index) in getVisiblePartners()"
              :key="partner.id"
              class="transition-all duration-600 ease-out will-change-transform scroll-animate-card"
              :style="partner.style"
              :class="`delay-${index * 200}`"
            >
              <!-- Carte partenaire -->
              <div class="group relative">
                <!-- Carte principale -->
                <a
                  :href="partner.website"
                  target="_blank"
                  rel="noopener"
                  class="relative flex flex-col items-center justify-center bg-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-white/60 hover:border-[#2F4F4F]/30 w-64 lg:w-72 xl:w-80 min-h-[280px]"
                  :class="{
                    'scale-105 border-[#2F4F4F]/40 shadow-3xl': partner.featured
                  }"
                >
                  <!-- Effet de halo pour l'élément featured -->
                  <div 
                    v-if="partner.featured"
                    class="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/10 to-[#05b1b1]/10 rounded-3xl opacity-60"
                  ></div>
                  
                  <!-- Badge de catégorie -->
                  <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <span class="bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                      {{ partner.category }}
                    </span>
                  </div>

                  <!-- Container logo avec effet de profondeur -->
                  <div class="relative z-10 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    <div class="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 shadow-inner flex items-center justify-center border border-gray-100">
                      <img
                        :src="partner.logo"
                        :alt="partner.name"
                        class="max-h-12 lg:max-h-14 grayscale group-hover:grayscale-0 transition-all duration-500 object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <!-- Nom du partenaire -->
                  <h3 class="font-bold text-gray-900 text-center text-lg lg:text-xl mb-3 relative z-10 leading-tight">
                    {{ partner.name }}
                  </h3>

                  <!-- Description visible en permanence -->
                  <p class="text-gray-600 text-sm text-center leading-relaxed relative z-10">
                    {{ partner.description }}
                  </p>

                  <!-- Indicateur featured -->
                  <div 
                    v-if="partner.featured"
                    class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </a>

                <!-- Effet d'ombre portée pour la profondeur -->
                <div 
                  class="absolute inset-0 bg-gradient-to-br from-[#2F4F4F]/20 to-[#05b1b1]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  :class="{ 'opacity-30': partner.featured }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation discrète -->
        <div class="flex justify-center space-x-4 mt-12 scroll-animate-indicator">
          <button 
            v-for="(_, index) in partners"
            :key="index"
            @click="goToSlide(index)"
            class="relative group scroll-animate-indicator-item"
            :class="`delay-${index * 100}`"
          >
            <div 
              class="w-4 h-4 rounded-full transition-all duration-300 border-2"
              :class="index === currentIndex ? 
                'bg-[#2F4F4F] border-[#2F4F4F] scale-125' : 
                'bg-transparent border-gray-300 hover:border-[#2F4F4F]'"
            ></div>
            <div class="absolute inset-0 w-4 h-4 rounded-full bg-[#2F4F4F] opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-150"></div>
          </button>
        </div>


      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

@keyframes pulse-slower {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.1); }
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 8s ease-in-out infinite;
}

/* Animations d'apparition au scroll */
.scroll-animate-title {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.scroll-animate-subtitle {
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.8s ease-out 0.2s;
}

.scroll-animate-carousel {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate-card {
  opacity: 0;
  transform: translateY(50px) scale(0.9);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate-indicator {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.scroll-animate-indicator-item {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s ease-out;
}

.scroll-animate-stats {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: all 0.7s ease-out;
}

/* États animés */
.scroll-animate-title.animate-in,
.scroll-animate-subtitle.animate-in,
.scroll-animate-carousel.animate-in,
.scroll-animate-card.animate-in,
.scroll-animate-indicator.animate-in,
.scroll-animate-indicator-item.animate-in,
.scroll-animate-stats.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Délais progressifs */
.scroll-animate-title.delay-100.animate-in {
  transition-delay: 100ms;
}

.scroll-animate-card.delay-0.animate-in { transition-delay: 200ms; }
.scroll-animate-card.delay-200.animate-in { transition-delay: 400ms; }
.scroll-animate-card.delay-400.animate-in { transition-delay: 600ms; }

.scroll-animate-indicator-item.delay-0.animate-in { transition-delay: 700ms; }
.scroll-animate-indicator-item.delay-100.animate-in { transition-delay: 800ms; }
.scroll-animate-indicator-item.delay-200.animate-in { transition-delay: 900ms; }

.scroll-animate-stats.delay-0.animate-in { transition-delay: 300ms; }
.scroll-animate-stats.delay-150.animate-in { transition-delay: 450ms; }
.scroll-animate-stats.delay-300.animate-in { transition-delay: 600ms; }

/* Animation spécifique pour les cartes partenaires */
.scroll-animate-card:nth-child(odd) {
  transform: translateY(50px) translateX(-30px) scale(0.9);
}

.scroll-animate-card:nth-child(even) {
  transform: translateY(50px) translateX(30px) scale(0.9);
}

.scroll-animate-card.animate-in:nth-child(odd),
.scroll-animate-card.animate-in:nth-child(even) {
  transform: translateY(0) translateX(0) scale(1);
}

/* Animation du gradient du titre */
.text-transparent {
  background-size: 200% 100%;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Effets d'ombre premium */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(50, 147, 147, 0.25), 
              0 15px 30px -15px rgba(0, 0, 0, 0.3);
}

/* Optimisations de performance */
.will-change-transform {
  will-change: transform;
}

/* Animation supplémentaire pour les cartes au survol */
.group:hover .scroll-animate-card {
  transition: all 0.3s ease;
}

/* Support du réduit de mouvement */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-pulse-slower {
    animation: none;
  }
  
  .scroll-animate-title,
  .scroll-animate-subtitle,
  .scroll-animate-carousel,
  .scroll-animate-card,
  .scroll-animate-indicator,
  .scroll-animate-indicator-item,
  .scroll-animate-stats {
    transition: none;
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .text-transparent {
    animation: none;
  }
  
  .transition-all,
  .transition-transform,
  .transition-opacity {
    transition: none;
  }
}

/* Responsive amélioré */
@media (max-width: 1024px) {
  .scroll-animate-card {
    transform: translateY(40px) scale(0.9);
  }
  
  .scroll-animate-card:nth-child(odd),
  .scroll-animate-card:nth-child(even) {
    transform: translateY(40px) scale(0.9);
  }
}

@media (max-width: 768px) {
  .scroll-animate-title {
    transform: translateY(20px);
  }
  
  .scroll-animate-carousel {
    transform: translateY(30px);
  }
  
  .scroll-animate-card {
    transform: translateY(35px) scale(0.9);
  }
  
  /* Stagger animation pour mobile */
  .scroll-animate-card:nth-child(1) { transition-delay: 200ms; }
  .scroll-animate-card:nth-child(2) { transition-delay: 350ms; }
  .scroll-animate-card:nth-child(3) { transition-delay: 500ms; }
}

@media (max-width: 640px) {
  .w-64 {
    width: 240px;
  }
}

@media (max-width: 480px) {
  .w-64 {
    width: 200px;
  }
  
  .scroll-animate-card {
    transform: translateY(30px) scale(0.9);
  }
}

/* Animation de rebond léger pour les indicateurs */
.scroll-animate-indicator-item.animate-in {
  animation: bounce-in 0.6s ease-out;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Animation de flottement pour les statistiques */
.scroll-animate-stats.animate-in {
  animation: float-in 0.8s ease-out;
}

@keyframes float-in {
  0% {
    transform: translateY(30px) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
</style>