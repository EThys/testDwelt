<template>
  <div class="bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32 relative overflow-hidden">
    <!-- Éléments décoratifs -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-[#329393]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#329393]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
    
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8 relative z-10">
      <!-- En-tête amélioré -->
      <div class="mx-auto max-w-3xl scroll-animate">
        <h2 class="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl lg:text-6xl">
          Rencontrez nos 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#329393] to-[#05b1b1]">experts</span>
        </h2>
        <p class="mt-6 text-xl/8 text-gray-600 max-w-2xl mx-auto scroll-animate delay-100">
          Une équipe d'agents passionnés dédiés à transformer vos rêves immobiliers en réalité
        </p>
      </div>
      
      <!-- Grille des agents améliorée -->
      <ul role="list" class="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(person, index) in people" :key="person.name" 
            class="group relative rounded-3xl bg-white px-8 py-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-animate-card"
            :style="{ 'transition-delay': `${index * 150}ms` }">
          
          <!-- Élément décoratif avec effet de profondeur -->
          <div class="absolute inset-0 bg-gradient-to-br from-[#329393]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Photo de profil avec cadre amélioré -->
          <div class="relative z-10">
            <div class="relative mx-auto w-40 h-40 mb-6 scroll-animate-image"
                 :style="{ 'transition-delay': `${index * 150 + 200}ms` }">
              <div class="absolute inset-0 bg-gradient-to-r from-[#329393] to-[#05b1b1] rounded-full transform rotate-6 scale-105 group-hover:rotate-3 transition-transform duration-500"></div>
              <img
                class="relative mx-auto size-40 rounded-full object-cover border-4 border-white shadow-lg"
                :src="person.imageUrl"
                :alt="person.name"
              />
              <!-- Badge d'expérience -->
              <div class="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#329393] to-[#05b1b1] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg scroll-animate-badge"
                   :style="{ 'transition-delay': `${index * 150 + 300}ms` }">
                Expert
              </div>
            </div>
            
            <!-- Informations de l'agent -->
            <h3 class="text-2xl font-bold tracking-tight text-gray-900 mb-2 scroll-animate-text"
                :style="{ 'transition-delay': `${index * 150 + 100}ms` }">
              {{ person.name }}
            </h3>
            <p class="text-[#329393] font-medium mb-4 scroll-animate-text delay-100"
               :style="{ 'transition-delay': `${index * 150 + 150}ms` }">{{ person.role }}</p>
            
            <!-- Description complète visible -->
            <div class="min-h-[120px] scroll-animate-text delay-200"
                 :style="{ 'transition-delay': `${index * 150 + 200}ms` }">
              <p class="text-gray-600 text-sm/6 mb-3">
                {{ person.description }}
              </p>
            </div>
            
            <!-- Réseaux sociaux avec effet hover -->
            <ul role="list" class="mt-8 flex justify-center gap-x-4 scroll-animate-social"
                :style="{ 'transition-delay': `${index * 150 + 350}ms` }">
              <li>
                <a :href="person.xUrl" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-[#329393] hover:text-white transition-all duration-300 group/social">
                  <span class="sr-only">X</span>
                  <svg class="size-4 group-hover/social:scale-110 transition-transform" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a :href="person.linkedinUrl" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-[#329393] hover:text-white transition-all duration-300 group/social">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="size-4 group-hover/social:scale-110 transition-transform" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </li>
              <li>
                <a :href="person.contactUrl" class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#329393] to-[#05b1b1] text-white hover:shadow-lg transition-all duration-300 group/social">
                  <span class="sr-only">Contact</span>
                  <svg class="size-4 group-hover/social:scale-110 transition-transform" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

//@ts-ignore
import agent1 from '../assets/images/home/agent1.webp'
//@ts-ignore
import agent2 from '../assets/images/home/agent2.webp'
//@ts-ignore
import agent3 from '../assets/images/home/agent3.webp'

const people = [
  {
    name: 'Farah Kokobile',
    role: 'Co-fondatrice & CEO',
    description: 'Entrepreneure visionnaire et co-fondatrice de Dwelt, Farah apporte une expertise unique dans le secteur immobilier avec une approche innovante centrée sur le client.',
    extendedDescription: 'Spécialiste du marché premium avec plus de 8 ans d\'expérience dans l\'immobilier de luxe, elle a accompagné plus de 200 familles dans leur projet d\'acquisition.',
    imageUrl: agent1,
    xUrl: '#',
    linkedinUrl: '#',
    contactUrl: '#'
  },
  {
    name: 'Chrispin Ilunga',
    role: 'Co-fondateur & Expert Senior',
    description: 'Chrispin Ilunga, co-fondateur de Dwelt, est un expert immobilier chevronné avec 10 ans d\'expérience dans les transactions complexes et la négociation.',
    extendedDescription: 'Diplômé de l\'ESSEC Business School, il possède une expertise reconnue en investissement immobilier et gestion de patrimoine pour les clients exigeants.',
    imageUrl: agent2,
    xUrl: '#',
    linkedinUrl: '#',
    contactUrl: '#'
  },
  {
    name: 'Dave Kalonji',
    role: 'Senior Agent & Consultant',
    description: 'Dave Kalonji est un expert immobilier confirmé, fort de 7 ans d\'expérience dans le marché immobilier local et international.',
    extendedDescription: 'Parfaitement bilingue français-anglais, il excelle dans l\'accompagnement personnalisé des clients étrangers et des investisseurs internationaux.',
    imageUrl: agent3,
    xUrl: '#',
    linkedinUrl: '#',
    contactUrl: '#'
  },
]

// Gestion des animations au scroll
const handleScroll = () => {
  const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-card, .scroll-animate-image, .scroll-animate-badge, .scroll-animate-text, .scroll-animate-social, .scroll-animate-cta')
  const windowHeight = window.innerHeight
  const triggerBottom = windowHeight * 0.85

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top
    
    if (elementTop < triggerBottom) {
      element.classList.add('animate-in')
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Déclencher une fois au chargement pour les éléments déjà visibles
  setTimeout(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Animations d'apparition au scroll */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.scroll-animate-card {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate-image {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  transition: all 0.7s ease-out;
}

.scroll-animate-badge {
  opacity: 0;
  transform: translateY(10px) scale(0.8);
  transition: all 0.5s ease-out;
}

.scroll-animate-text {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.scroll-animate-social {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.5s ease-out;
}

.scroll-animate-cta {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: all 0.8s ease-out;
}

/* États animés */
.scroll-animate.animate-in,
.scroll-animate-card.animate-in,
.scroll-animate-image.animate-in,
.scroll-animate-badge.animate-in,
.scroll-animate-text.animate-in,
.scroll-animate-social.animate-in,
.scroll-animate-cta.animate-in {
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

.scroll-animate-text.delay-100.animate-in {
  transition-delay: 100ms;
}

.scroll-animate-text.delay-200.animate-in {
  transition-delay: 200ms;
}

/* Animations spécifiques pour les cartes */
.scroll-animate-card:nth-child(odd) {
  transform: translateY(40px) translateX(-20px) scale(0.95);
}

.scroll-animate-card:nth-child(even) {
  transform: translateY(40px) translateX(20px) scale(0.95);
}

.scroll-animate-card.animate-in:nth-child(odd),
.scroll-animate-card.animate-in:nth-child(even) {
  transform: translateY(0) translateX(0) scale(1);
}

/* Animation en cascade pour les éléments internes des cartes */
.scroll-animate-card.animate-in .scroll-animate-image {
  transition-delay: 200ms;
}

.scroll-animate-card.animate-in .scroll-animate-text {
  transition-delay: 300ms;
}

.scroll-animate-card.animate-in .scroll-animate-badge {
  transition-delay: 400ms;
}

.scroll-animate-card.animate-in .scroll-animate-social {
  transition-delay: 500ms;
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

/* Animation supplémentaire pour les images au survol */
.group:hover .scroll-animate-image {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Effets de profondeur améliorés */
.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .scroll-animate-card {
    transform: translateY(30px) scale(0.95);
  }
  
  .scroll-animate-card:nth-child(odd),
  .scroll-animate-card:nth-child(even) {
    transform: translateY(30px) scale(0.95);
  }
}

@media (max-width: 640px) {
  .scroll-animate {
    transform: translateY(20px);
  }
  
  .scroll-animate-card {
    transform: translateY(25px) scale(0.95);
  }
  
  .scroll-animate-cta {
    transform: translateY(20px) scale(0.95);
  }
}

/* Support pour la réduction des mouvements */
@media (prefers-reduced-motion: reduce) {
  .scroll-animate,
  .scroll-animate-card,
  .scroll-animate-image,
  .scroll-animate-badge,
  .scroll-animate-text,
  .scroll-animate-social,
  .scroll-animate-cta {
    transition: none;
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .text-transparent {
    animation: none;
  }
}

/* Amélioration de la performance des animations */
.scroll-animate-card {
  will-change: transform, opacity;
}

.scroll-animate-image {
  will-change: transform, opacity;
}

/* Effet de stagger pour les cartes sur mobile */
@media (max-width: 768px) {
  .scroll-animate-card:nth-child(1) { transition-delay: 0ms; }
  .scroll-animate-card:nth-child(2) { transition-delay: 100ms; }
  .scroll-animate-card:nth-child(3) { transition-delay: 200ms; }
}

/* Animation pour le call-to-action */
.scroll-animate-cta.animate-in {
  box-shadow: 0 20px 40px -10px rgba(51, 147, 147, 0.3);
}
</style>