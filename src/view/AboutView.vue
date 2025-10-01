<script setup>
// Vous pouvez ajouter ici des variables réactives si nécessaire
import { ref, onMounted } from 'vue'
//@ts-ignore
import Header from "@/components/Header.vue"
//@ts-ignore
import FooterComponent from "@/components/FooterComponent.vue";

//@ts-ignore
import agent1 from '../assets/images/home/agent1.webp'
//@ts-ignore
import agent2 from '../assets/images/home/agent2.webp'


//@ts-ignore
import fassade from '../assets/images/home/fassade.png'
//@ts-ignore
import home_001 from '../assets/images/home/home_001.jpeg'
//@ts-ignore
import home_002 from '../assets/images/home/home_002.jpeg'
//@ts-ignore
import home_003 from '../assets/images/home/home_003.jpeg'
//@ts-ignore
import home_004 from '../assets/images/home/home_004.jpeg'
//@ts-ignore
import home_005 from '../assets/images/home/home_005.jpeg'
//@ts-ignore
import home_006 from '../assets/images/home/home_006.jpeg'
//@ts-ignore
import home_007 from '../assets/images/home/home_007.jpeg'
//@ts-ignore
import home_008 from '../assets/images/home/home_008.jpeg'
//@ts-ignore
import home_009 from '../assets/images/home/home_009.jpeg'
//@ts-ignore
import home_010 from '../assets/images/home/home_010.jpeg'

// Exemple de données réactives
const activeService = ref(null)
const animatedElements = ref([])

const setActiveService = (index) => {
  activeService.value = index
}

// Animation au défilement
const handleScroll = () => {
  const elements = document.querySelectorAll('.scroll-animate')
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
</script>

<template>
  <Header/>

  <!-- Hero Section -->
  <div class="relative  w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
    <div class="absolute inset-0">
      <img 
        :src=home_008 
        alt="DWELT - Votre partenaire immobilier de confiance"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#1a5f5f]/80 to-[#2F4F4F]/60"></div>
    </div>
    
    <div class="relative z-10 flex items-center justify-center h-full px-4 text-center">
      <div class="max-w-4xl scroll-animate">
        <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-title">
          À propos de <span class="text-white">DWELT</span>
        </h1>
        <p class="text-white text-xl lg:text-2xl font-light max-w-3xl mx-auto animate-subtitle">
          Votre partenaire de confiance pour une expérience immobilière exceptionnelle
        </p>
      </div>
    </div>
  </div>

  <!-- Section Notre Identité -->
  <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
    <div class="absolute top-0 left-0 w-64 h-64 bg-[#1a5f5f]/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-[#FFD166]/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
    
    <div class="absolute top-1/4 right-20 w-3 h-3 bg-[#1a5f5f]/30 rounded-full animate-bounce"></div>
    <div class="absolute bottom-1/3 left-16 w-2 h-2 bg-[#2F4F4F]/30 rounded-full animate-bounce delay-500"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- En-tête avec animation -->
      <div class="text-center mb-20 transform transition-all duration-500 hover:scale-105 scroll-animate">
        <div class="inline-flex items-center space-x-3 mb-6">
          <div class="w-1 h-8 bg-gradient-to-b from-[#1a5f5f] to-[#2F4F4F] rounded-full"></div>
          <span class="text-sm font-medium tracking-widest text-[#1a5f5f] uppercase bg-[#1a5f5f]/5 px-4 py-2 rounded-full">
            Notre Identité
          </span>
        </div>
        <h2 class="text-4xl md:text-5xl font-light text-gray-900 tracking-tight mb-4">
          Qui <span class="font-medium text-[#1a5f5f]">sommes-nous</span> ?
        </h2>
        <div class="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-transparent rounded-full mx-auto"></div>
      </div>

      <!-- Contenu principal -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Texte avec animations -->
        <div class="space-y-8">
          <!-- Premier paragraphe -->
          <div class="flex items-start space-x-4 group transform hover:-translate-y-1 transition-all duration-300 scroll-animate">
            <div class="flex-shrink-0 w-8 h-8 bg-[#1a5f5f] text-white rounded-lg flex items-center justify-center mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <p class="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              <span class="font-medium text-[#1a5f5f]">DWELT</span> n'est pas qu'un nom, c'est une promesse. Issu de <span class="text-[#2F4F4F] font-medium">"Demeure"</span>, <span class="text-[#2F4F4F] font-medium">"Welcoming"</span> et <span class="text-[#2F4F4F] font-medium">"Living"</span>, notre nom incarne notre vision de créer des lieux où l'on se sent véritablement chez soi.
            </p>
          </div>

          <!-- Deuxième paragraphe -->
          <div class="flex items-start space-x-4 group transform hover:-translate-y-1 transition-all duration-300 scroll-animate delay-100">
            <div class="flex-shrink-0 w-8 h-8 bg-[#FFD166] text-gray-900 rounded-lg flex items-center justify-center mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <p class="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Notre équipe, animée par le dynamisme et un professionnalisme aiguisé, est composée d'agents immobiliers expérimentés. Portés par des valeurs d'engagement et de confiance.
            </p>
          </div>

          <!-- Valeurs avec animations -->
          <div class="pt-6 border-t border-gray-200 scroll-animate delay-200">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="group flex items-center space-x-3 p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-[#FFD166] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div class="w-10 h-10 bg-[#FFD166] rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-gray-900 group-hover:text-[#FFD166] transition-colors duration-300">Expérience</span>
              </div>
              
              <div class="group flex items-center space-x-3 p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-[#1a5f5f] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 delay-75">
                <div class="w-10 h-10 bg-[#1a5f5f] rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-gray-900 group-hover:text-[#1a5f5f] transition-colors duration-300">Confiance</span>
              </div>
              
              <div class="group flex items-center space-x-3 p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-[#2F4F4F] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 delay-150">
                <div class="w-10 h-10 bg-[#2F4F4F] rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-gray-900 group-hover:text-[#2F4F4F] transition-colors duration-300">Innovation</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Image avec animations -->
        <div class="relative scroll-animate delay-300">
          <!-- Image principale -->
          <div class="relative group">
            <div class="overflow-hidden rounded-2xl shadow-xl">
              <img 
                :src=home_007 
                alt="Équipe DWELT - Professionnels de l'immobilier"
                class="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <!-- Overlay animé -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-2xl"></div>
          </div>

          <!-- Statistique avec animation -->
          <div class="absolute -bottom-6 -left-6 bg-white border border-gray-200 p-5 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 group">
            <div class="text-center">
              <p class="text-2xl font-bold text-[#1a5f5f] mb-1 group-hover:scale-110 transition-transform duration-300">10+</p>
              <p class="text-xs font-medium text-gray-600 uppercase tracking-wider">Années d'expérience</p>
            </div>
          </div>

          <!-- Indicateur de qualité animé -->
          <div class="absolute -top-4 -right-4 bg-[#1a5f5f] text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 group">
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="text-sm font-medium">Expertise</span>
            </div>
          </div>

          <!-- Élément décoratif flottant -->
          <div class="absolute -top-2 -left-2 w-6 h-4 bg-[#FFD166] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      <!-- Séparateur animé -->
      <div class="mt-15 pt-4 border-t border-gray-200">
        <div class="flex justify-center"></div>
      </div>
    </div>
  </section>

  <!-- Notre mission -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 scroll-animate">
          <div class="relative">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Technologies innovantes DWELT - Réalité virtuelle"
                class="w-full h-80 object-cover"
              />
            </div>
            <div class="absolute -top-6 -right-6 bg-[#FFD166] p-4 rounded-2xl shadow-xl">
              <p class="text-lg font-bold text-gray-900">Innovation</p>
              <p class="text-sm text-gray-700">Solutions avant-gardistes</p>
            </div>
          </div>
        </div>
        
        <div class="order-1 lg:order-2 scroll-animate delay-100">
          <span class="inline-block bg-[#2F4F4F] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Notre engagement
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Notre mission
          </h2>
          <p class="text-lg text-gray-700 mb-6">
            Faciliter et enrichir votre expérience immobilière est au cœur de notre démarche. Nous repoussons constamment les frontières du possible en intégrant des solutions avant-gardistes telles que le home staging virtuel et l'immersion en réalité virtuelle.
          </p>
          <p class="text-lg text-gray-700 mb-8">
            Chez DWELT, le client est notre priorité absolue, central, important et unique. Nous sommes entièrement à votre écoute et mettons tout notre savoir-faire à votre service pour vous proposer des solutions véritablement sur mesure.
          </p>
          <a href="#services" class="inline-flex items-center bg-[#1a5f5f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#144747] transition duration-300">
            Découvrir nos services
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Nos valeurs -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a5f5f] to-[#2F4F4F] text-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 scroll-animate">
        <span class="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-md">
          Notre fondation
        </span>
        <h2 class="text-4xl md:text-5xl font-bold leading-tight">
          Nos valeurs fondamentales
        </h2>
        <p class="text-xl text-white/90 mt-4 max-w-3xl mx-auto">
          Chez DWELT, chaque action est guidée par un ensemble de valeurs inébranlables. Elles sont le pilier de notre engagement envers vous et la clé de notre succès commun.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Confiance relationnelle</h3>
          <p class="text-white/80">Bâtir des relations solides et durables, fondées sur la transparence et la fiabilité.</p>
        </div>
        
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 scroll-animate delay-100">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Innovation</h3>
          <p class="text-white/80">Repousser les limites de l'immobilier avec des technologies de pointe pour des solutions avant-gardistes.</p>
        </div>
        
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 scroll-animate delay-200">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Dynamisme</h3>
          <p class="text-white/80">Agir avec énergie et réactivité pour concrétiser vos projets les plus audacieux.</p>
        </div>
        
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 scroll-animate delay-300">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Professionnalisme</h3>
          <p class="text-white/80">Garantir un service d'excellence, rigoureux et expert à chaque étape de votre parcours.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Notre équipe -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 scroll-animate">
        <span class="inline-block bg-[#2F4F4F] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          L'équipe dirigeante
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Notre équipe
        </h2>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Farah Kokobile -->
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 scroll-animate">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex-shrink-0">
              <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FFD166]">
                <img 
                  :src=agent1 
                  alt="Farah Kokobile, Co-fondatrice DWELT"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Farah Kokobile</h3>
              <p class="text-[#1a5f5f] font-semibold mb-4">Co-fondatrice et entrepreneure</p>
              <p class="text-gray-700">
                Farah Kokobile est une femme d'affaires hautement motivée et axée sur les résultats, avec plus de 10 ans d'expérience en gestion d'équipes. Sa maîtrise de la gestion de projet, de l'engagement des parties prenantes et du développement commercial est inégalée, portée par une passion constante pour l'excellence.
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span class="bg-[#1a5f5f]/10 text-[#1a5f5f] px-3 py-1 rounded-full text-sm">Gestion d'équipe</span>
                <span class="bg-[#1a5f5f]/10 text-[#1a5f5f] px-3 py-1 rounded-full text-sm">Stratégie</span>
                <span class="bg-[#1a5f5f]/10 text-[#1a5f5f] px-3 py-1 rounded-full text-sm">Innovation</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Chrispin Ilunga -->
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 scroll-animate delay-100">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex-shrink-0">
              <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FFD166]">
                <img 
                   :src=agent2
                  alt="Chrispin Ilunga, Co-fondateur DWELT"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Chrispin Ilunga</h3>
              <p class="text-[#1a5f5f] font-semibold mb-4">Co-fondateur et agent immobilier</p>
              <p class="text-gray-700">
                Chrispin Ilunga est un expert immobilier chevronné avec plus de 10 ans d'expérience sur le marché. Son parcours est marqué par une connaissance approfondie des dynamiques immobilières, des transactions complexes et des subtilités du marché local et international.
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span class="bg-[#1a5f5f]/10 text-[#1a5f5f] px-3 py-1 rounded-full text-sm">Expertise immobilière</span>
                <span class="bg-[#1a5f5f]/10 text-[#1a5f5f] px-3 py-1 rounded-full text-sm">Négociation</span>
                <span class="bg-[#1a5f5f]/10 text-[#1a5f5f] px-3 py-1 rounded-full text-sm">Conseil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pourquoi nous choisir ? -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="scroll-animate">
          <span class="inline-block bg-[#2F4F4F] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Notre différence
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Pourquoi nous choisir ?
          </h2>
          <p class="text-lg text-gray-700 mb-6">
            Chez DWELT, nous comprenons que l'achat ou la vente d'un bien immobilier est bien plus qu'une simple transaction : c'est une décision de vie, profondément personnelle et importante.
          </p>
          <p class="text-lg text-gray-700 mb-8">
            C'est pourquoi notre priorité absolue est de placer le choix du client au cœur de notre démarche, en nous engageant à vous offrir une expérience sur mesure, parfaitement adaptée à vos besoins et vos aspirations uniques.
          </p>
          
          <div class="space-y-4">
            <div class="flex items-start scroll-animate delay-100">
              <div class="flex-shrink-0 w-6 h-6 bg-[#FFD166] rounded-full flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <p class="ml-3 text-gray-700">Service de qualité supérieure avec un accompagnement rigoureux et transparent</p>
            </div>
            <div class="flex items-start scroll-animate delay-200">
              <div class="flex-shrink-0 w-6 h-6 bg-[#FFD166] rounded-full flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <p class="ml-3 text-gray-700">Relations bâties sur l'intégrité, la fiabilité et le respect mutuel</p>
            </div>
            <div class="flex items-start scroll-animate delay-300">
              <div class="flex-shrink-0 w-6 h-6 bg-[#FFD166] rounded-full flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <p class="ml-3 text-gray-700">Expertise qui vous guide pour éviter les tracas et optimiser chaque investissement</p>
            </div>
          </div>
        </div>
        
        <div class="relative scroll-animate delay-400">
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              :src=home_006 
              alt="DWELT - Service client personnalisé"
              class="w-full h-96 object-cover"
            />
          </div>
          <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
            <p class="text-3xl font-bold text-[#1a5f5f]">100%</p>
            <p class="text-gray-600">Satisfaction client</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Nos services -->
  <section id="services" class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 scroll-animate">
        <span class="inline-block bg-[#2F4F4F] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Nos solutions
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Nos services de qualité pour valoriser votre bien
        </h2>
        <p class="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Nous allons au-delà de l'ordinaire pour valoriser votre bien grâce aux services les plus complets et innovants du marché.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[#2F4F4F]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate">
          <div class="w-14 h-14 bg-[#1a5f5f] rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Home staging virtuel</h3>
          <p class="text-gray-600">Mettez en valeur votre propriété avec des aménagements virtuels personnalisés.</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[#2F4F4F]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate delay-100">
          <div class="w-14 h-14 bg-[#1a5f5f] rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Immersion en réalité virtuelle</h3>
          <p class="text-gray-600">Vivez une expérience immersive unique de votre futur logement.</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[#2F4F4F]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate delay-200">
          <div class="w-14 h-14 bg-[#1a5f5f] rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Plans 2D et 3D</h3>
          <p class="text-gray-600">Visualisez votre espace avec des plans détaillés et réalistes.</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[#2F4F4F]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate delay-300">
          <div class="w-14 h-14 bg-[#1a5f5f] rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2 2V9z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Rénovation virtuelle</h3>
          <p class="text-gray-600">Visualisez les possibilités de rénovation avant de vous lancer.</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[#2F4F4F]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate delay-400">
          <div class="w-14 h-14 bg-[#1a5f5f] rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Simulations architecturales</h3>
          <p class="text-gray-600">Explorez différentes options architecturales pour votre projet.</p>
        </div>
        
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[#2F4F4F]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate delay-500">
          <div class="w-14 h-14 bg-[#1a5f5f] rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Visites virtuelles</h3>
          <p class="text-gray-600">Découvrez les propriétés à distance avec des visites interactives.</p>
        </div>
      </div>

    </div>
  </section>
  <FooterComponent/>

  <!-- CTA Final -->
  <!-- <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1a5f5f] to-[#2F4F4F] text-white">
    <div class="max-w-4xl mx-auto text-center scroll-animate">
      <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Prêt à concrétiser votre projet immobilier ?
      </h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        Contactez-nous dès aujourd'hui pour une consultation personnalisée et découvrez comment DWELT peut transformer votre vision en réalité.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" class="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
          Prendre rendez-vous
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </a>
      </div>
    </div>
  </section> -->
</template>

<style scoped>
/* Animations de base */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes title-animation {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes subtitle-animation {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Classes d'animation de base */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.delay-75 {
  animation-delay: 75ms;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-600 {
  animation-delay: 600ms;
}

/* Animation pour le titre principal */
.animate-title {
  animation: title-animation 1s ease-out forwards;
}

/* Animation pour le sous-titre */
.animate-subtitle {
  animation: subtitle-animation 1s ease-out 0.3s forwards;
  opacity: 0;
}

/* Animations au défilement */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.scroll-animate.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Animations spécifiques pour différents types d'éléments */
.scroll-animate.left {
  transform: translateX(-30px);
}

.scroll-animate.right {
  transform: translateX(30px);
}

.scroll-animate.scale {
  transform: scale(0.9);
}

.scroll-animate.animate-in.left {
  transform: translateX(0);
}

.scroll-animate.animate-in.right {
  transform: translateX(0);
}

.scroll-animate.animate-in.scale {
  transform: scale(1);
}

/* Délais progressifs pour les éléments en grille */
.scroll-animate.delay-100.animate-in {
  transition-delay: 100ms;
}

.scroll-animate.delay-200.animate-in {
  transition-delay: 200ms;
}

.scroll-animate.delay-300.animate-in {
  transition-delay: 300ms;
}

.scroll-animate.delay-400.animate-in {
  transition-delay: 400ms;
}

.scroll-animate.delay-500.animate-in {
  transition-delay: 500ms;
}

.scroll-animate.delay-600.animate-in {
  transition-delay: 600ms;
}

/* Améliorations de l'UX */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Style pour les images avec effet de zoom */
.image-zoom {
  transition: transform 0.5s ease;
}

.image-zoom:hover {
  transform: scale(1.05);
}

/* Amélioration du scroll pour une expérience plus fluide */
html {
  scroll-behavior: smooth;
}

/* Support pour le mode sombre */
@media (prefers-color-scheme: dark) {
  .bg-white {
    background-color: #0f172a;
  }
  
  .bg-gray-50 {
    background-color: #1e293b;
  }
  
  .text-gray-900 {
    color: #f1f5f9;
  }
  
  .text-gray-700 {
    color: #cbd5e1;
  }
  
  .text-gray-600 {
    color: #94a3b8;
  }
  
  .border-gray-200 {
    border-color: #334155;
  }
  
  .border-gray-100 {
    border-color: #475569;
  }
}

/* Optimisations pour les mobiles */
@media (max-width: 768px) {
  .scroll-animate {
    transform: translateY(20px);
  }
  
  .scroll-animate.left,
  .scroll-animate.right {
    transform: translateY(20px);
  }
  
  .scroll-animate.animate-in.left,
  .scroll-animate.animate-in.right {
    transform: translateY(0);
  }
}

/* Réduction des animations pour les utilisateurs préférant moins de mouvement */
@media (prefers-reduced-motion: reduce) {
  .scroll-animate {
    transition: none;
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .animate-title,
  .animate-subtitle {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>