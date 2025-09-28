<template>
  <section class="relative py-15 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Éléments décoratifs améliorés -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-10 left-10 w-72 h-72 bg-[#329393]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-[#05b1b1]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#329393]/5 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête amélioré -->
      <div class="text-center mb-16 scroll-animate" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Ils nous font 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#329393] to-[#05b1b1] relative">
            confiance
            <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#329393] to-[#05b1b1] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed scroll-animate delay-100">
          Découvrez les expériences de nos clients satisfaits qui ont réalisé leurs rêves immobiliers avec nous
        </p>
      </div>

      <!-- Carousel amélioré -->
      <div class="relative scroll-animate delay-200">
        <!-- Conteneur du carousel -->
        <div 
          ref="carouselRef"
          class="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
          :style="{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }"
          @mousedown="startDrag"
          @touchstart="startDrag"
          @mousemove="onDrag"
          @touchmove="onDrag"
          @mouseup="endDrag"
          @touchend="endDrag"
          @mouseleave="endDrag"
        >
          <!-- Cartes de témoignages améliorées -->
          <div 
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            class="flex-shrink-0 transition-all duration-500 px-3"
            :class="cardWidthClass"
          >
            <div 
              class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100/70 backdrop-blur-sm relative overflow-hidden group scroll-animate-item"
              :class="{
                'scale-95 opacity-80': getCardOffset(index) !== 0,
                'scale-100 opacity-100': getCardOffset(index) === 0,
                'ring-2 ring-[#329393]/20': getCardOffset(index) === 0
              }"
              :style="{ 'transition-delay': `${index * 100}ms` }"
            >
              <!-- Effet de fond animé -->
              <div class="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Note étoiles améliorée -->
              <div class="flex justify-center mb-6 relative z-10">
                <div class="flex space-x-1 bg-gray-50/80 rounded-full px-4 py-2 backdrop-blur-sm">
                  <svg 
                    v-for="star in 5" 
                    :key="star"
                    class="w-5 h-5 transform transition-transform duration-300 hover:scale-125"
                    :class="star <= testimonial.rating ? 'text-yellow-400 drop-shadow-sm' : 'text-gray-300'"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>

              <!-- Citation améliorée -->
              <div class="relative mb-8 z-10">
                <svg class="absolute -top-4 -left-2 w-8 h-8 text-[#329393]/30 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p class="text-lg text-gray-700 leading-relaxed relative z-10 font-medium">
                  "{{ testimonial.text }}"
                </p>
                <svg class="absolute -bottom-4 -right-2 w-8 h-8 text-[#329393]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <!-- Auteur amélioré -->
              <div class="flex items-center space-x-4 relative z-10">
                <div class="relative">
                  <div class="w-16 h-16 bg-gradient-to-r from-[#329393] to-[#05b1b1] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {{ testimonial.author.initials }}
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-gray-900 truncate">{{ testimonial.author.name }}</h4>
                  <p class="text-[#329393] text-sm font-medium">{{ testimonial.author.position }}</p>
                  <div class="flex items-center text-gray-500 text-xs mt-1">
                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span class="truncate">{{ testimonial.author.location }}</span>
                  </div>
                </div>
              </div>

              <!-- Type de transaction amélioré -->
              <div class="mt-4 inline-flex items-center bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200/50 relative z-10">
                <span class="w-2 h-2 bg-[#329393] rounded-full mr-2"></span>
                {{ testimonial.transactionType }}
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation améliorée -->
        <button 
          @click="prevSlide"
          class="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group z-10 border border-gray-100/50 scroll-animate-nav"
          :class="{ 'opacity-30 cursor-not-allowed hover:bg-white/90': currentIndex === 0 }"
          :disabled="currentIndex === 0"
        >
          <svg class="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-[#329393] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button 
          @click="nextSlide"
          class="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group z-10 border border-gray-100/50 scroll-animate-nav delay-100"
          :class="{ 'opacity-30 cursor-not-allowed hover:bg-white/90': currentIndex >= maxIndex }"
          :disabled="currentIndex >= maxIndex"
        >
          <svg class="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-[#329393] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Indicateurs de pagination améliorés -->
        <div class="flex justify-center space-x-2 mt-12 scroll-animate delay-300">
          <button 
            v-for="dot in dotCount"
            :key="dot"
            @click="goToSlide((dot - 1) * slidesPerView)"
            class="h-2 rounded-full transition-all duration-300 relative overflow-hidden"
            :class="isDotActive(dot) ? 'bg-[#329393]' : 'bg-gray-300'"
            :style="{ width: isDotActive(dot) ? '2rem' : '0.5rem' }"
          >
            <div v-if="isDotActive(dot)" class="absolute inset-0 bg-gradient-to-r from-[#329393] to-[#05b1b1] rounded-full"></div>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Références
const carouselRef = ref(null)
const currentIndex = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

// Données des témoignages
const testimonials = ref([
  {
    id: 1,
    text: "L'accompagnement de l'équipe Dwelt a été exceptionnel. Ils ont trouvé la maison parfaite pour notre famille en un temps record. Professionnalisme et bienveillance !",
    rating: 5,
    author: {
      name: "Sophie Tshilombo",
      initials: "ST",
      position: "Acheteuse particulière",
      location: "Kinshasa/Gombe"
    },
    transactionType: "Achat résidentiel"
  },
  {
    id: 2,
    text: "En tant qu'investisseur, je suis très exigeant. L'équipe a su comprendre mes besoins et m'a proposé des opportunités très intéressantes. Retour sur investissement au-delà de mes attentes.",
    rating: 5,
    author: {
      name: "Thomas Kabasele",
      initials: "TK",
      position: "Investisseur",
      location: "Kinshasa/Ngaliema"
    },
    transactionType: "Investissement locatif"
  },
  {
    id: 3,
    text: "Vendre notre appartement avec Dwelt a été une expérience incroyablement fluide. Le prix de vente a dépassé nos espérances de 15% ! Je recommande sans hésitation.",
    rating: 5,
    author: {
      name: "Marie Mbuji",
      initials: "MM",
      position: "Vendeuse particulière",
      location: "Kinshasa/Lingwala"
    },
    transactionType: "Vente immobilière"
  },
  {
    id: 4,
    text: "Service impeccable pour notre premier achat. L'équipe nous a guidés pas à pas et a négocié un prix excellent. Un grand merci pour votre patience et expertise !",
    rating: 5,
    author: {
      name: "Julie et Marcel Tshibangu",
      initials: "J&MT",
      position: "Jeunes acheteurs",
      location: "Kinshasa/Mont-Ngafula"
    },
    transactionType: "Premier achat"
  }
])
// Statistiques
const stats = ref([
  { value: '98%', label: 'Clients satisfaits' },
  { value: '500+', label: 'Transactions' },
  { value: '4.9/5', label: 'Note moyenne' },
  { value: '24h', label: 'Support réactif' }
])

// Calculs réactifs pour le responsive
const slidesPerView = computed(() => {
  if (windowWidth.value < 640) return 1
  if (windowWidth.value < 1024) return 2
  return 3
})

const cardWidthClass = computed(() => {
  if (windowWidth.value < 640) return 'w-full'
  if (windowWidth.value < 1024) return 'w-1/2'
  return 'w-1/3'
})

const maxIndex = computed(() => {
  return testimonials.value.length - slidesPerView.value
})

const dotCount = computed(() => {
  return Math.ceil(testimonials.value.length / slidesPerView.value)
})

// Navigation du carousel
const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value += 1
  } else {
    currentIndex.value = 0 // Retour au début
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  } else {
    currentIndex.value = maxIndex.value // Aller à la fin
  }
}

const goToSlide = (index) => {
  if (index >= 0 && index <= maxIndex.value) {
    currentIndex.value = index
  }
}

const getCardOffset = (index) => {
  return Math.abs(currentIndex.value - index)
}

const isDotActive = (dotIndex) => {
  const startIndex = (dotIndex - 1) * slidesPerView.value
  return currentIndex.value >= startIndex && currentIndex.value < startIndex + slidesPerView.value
}

// Fonctions de drag pour mobile/desktop
const startDrag = (e) => {
  isDragging.value = true
  startX.value = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
  currentX.value = startX.value
}

const onDrag = (e) => {
  if (!isDragging.value) return
  
  const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX
  const diff = startX.value - x
  
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
    isDragging.value = false
  }
}

const endDrag = () => {
  isDragging.value = false
}

// Mise à jour de la largeur de fenêtre
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // Ajuster l'index courant si nécessaire
  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value
  }
}

// Auto-play du carousel
let autoPlayInterval

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  clearInterval(autoPlayInterval)
}

// Pause auto-play au survol
const pauseAutoPlay = () => {
  stopAutoPlay()
}

const resumeAutoPlay = () => {
  startAutoPlay()
}

// Animation au scroll
const handleScroll = () => {
  const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-item, .scroll-animate-nav, .scroll-animate-stats')
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
  window.addEventListener('resize', updateWindowWidth)
  window.addEventListener('scroll', handleScroll)
  
  // Déclencher une fois au chargement pour les éléments déjà visibles
  setTimeout(handleScroll, 100)
  
  // Ajouter les événements de survol pour le carousel
  const carousel = carouselRef.value
  if (carousel) {
    carousel.addEventListener('mouseenter', pauseAutoPlay)
    carousel.addEventListener('mouseleave', resumeAutoPlay)
  }
})

onUnmounted(() => {
  stopAutoPlay()
  window.removeEventListener('resize', updateWindowWidth)
  window.removeEventListener('scroll', handleScroll)
  
  const carousel = carouselRef.value
  if (carousel) {
    carousel.removeEventListener('mouseenter', pauseAutoPlay)
    carousel.removeEventListener('mouseleave', resumeAutoPlay)
  }
})
</script>

<style scoped>
/* Animations d'apparition au scroll */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.scroll-animate-item {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate-nav {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  transition: all 0.6s ease-out;
}

.scroll-animate-stats {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  transition: all 0.7s ease-out;
}

.scroll-animate.animate-in,
.scroll-animate-item.animate-in,
.scroll-animate-nav.animate-in,
.scroll-animate-stats.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Délais progressifs */
.scroll-animate.delay-100.animate-in {
  transition-delay: 100ms;
}

.scroll-animate.delay-200.animate-in {
  transition-delay: 200ms;
}

.scroll-animate.delay-300.animate-in {
  transition-delay: 300ms;
}

/* Animation personnalisée pour le carousel */
.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.5s ease;
}

.carousel-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.carousel-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Amélioration du drag */
.cursor-grab {
  cursor: grab;
}

.cursor-grab:active {
  cursor: grabbing;
}

/* Animation de pulsation lente */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Animation des indicateurs */
.pagination-dot {
  transition: all 0.3s ease;
}

/* Animation spécifique pour les cartes de témoignages */
.scroll-animate-item:nth-child(odd) {
  transform: translateY(40px) translateX(-20px) scale(0.95);
}

.scroll-animate-item:nth-child(even) {
  transform: translateY(40px) translateX(20px) scale(0.95);
}

.scroll-animate-item.animate-in:nth-child(odd),
.scroll-animate-item.animate-in:nth-child(even) {
  transform: translateY(0) translateX(0) scale(1);
}

/* Animation en cascade pour les statistiques */
.scroll-animate-stats:nth-child(1) { transition-delay: 0ms; }
.scroll-animate-stats:nth-child(2) { transition-delay: 150ms; }
.scroll-animate-stats:nth-child(3) { transition-delay: 300ms; }
.scroll-animate-stats:nth-child(4) { transition-delay: 450ms; }

.scroll-animate-stats.animate-in:nth-child(1) { transition-delay: 0ms; }
.scroll-animate-stats.animate-in:nth-child(2) { transition-delay: 150ms; }
.scroll-animate-stats.animate-in:nth-child(3) { transition-delay: 300ms; }
.scroll-animate-stats.animate-in:nth-child(4) { transition-delay: 450ms; }

/* Effets de profondeur améliorés */
.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Animation supplémentaire pour le titre */
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

/* Améliorations responsive */
@media (max-width: 1024px) {
  .testimonial-card {
    width: 50%;
  }
  
  .scroll-animate-item {
    transform: translateY(30px) scale(0.95);
  }
}

@media (max-width: 640px) {
  .testimonial-card {
    width: 100%;
  }
  
  /* Ajustements pour mobile */
  .carousel-container {
    padding: 0 0.5rem;
  }
  
  .scroll-animate {
    transform: translateY(20px);
  }
  
  .scroll-animate-item {
    transform: translateY(25px) scale(0.95);
  }
}

/* Support pour la réduction des mouvements */
@media (prefers-reduced-motion: reduce) {
  .scroll-animate,
  .scroll-animate-item,
  .scroll-animate-nav,
  .scroll-animate-stats {
    transition: none;
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .animate-pulse-slow {
    animation: none;
  }
}
</style>