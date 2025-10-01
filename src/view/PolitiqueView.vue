<template>
  <div class="min-h-screen py-6 lg:py-2 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
    <Header/>
        <div class="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
    <div class="absolute inset-0">
      <img 
        :src=home_010
        alt="DWELT - Votre partenaire immobilier de confiance"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#1a5f5f]/80 to-[#2F4F4F]/60"></div>
    </div>
    
    <div class="relative z-10 flex items-center justify-center h-full px-4 text-center">
      <div class="max-w-4xl scroll-animate">
        <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-title">
           Politique de<span class="text-white"> Confidentialité</span>
        </h1>
        <p class="text-white text-xl lg:text-2xl font-light max-w-3xl mx-auto animate-subtitle">
            Chez Dwelt, la protection de vos données personnelles est notre engagement fondamental
        </p>
      </div>
    </div>
    
    <!-- Date positionnée en bas au centre -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
      <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/20 shadow-lg text-sm md:text-base">
        <svg class="w-4 h-4 md:w-5 md:h-5 text-[#2F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="text-gray-700 font-medium">Dernière mise à jour : {{ currentDate }}</span>
      </div>
    </div>
    </div>


    <!-- Quick Navigation -->
    <section class="relative py-4 sm:py-6 md:py-8 bg-white/50 backdrop-blur-sm border-b border-gray-200/60">
      <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        <div class="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
          <a v-for="section in quickNav" 
             :key="section.id" 
             :href="`#${section.id}`"
             @click="scrollToSection(section.id)"
             class="inline-flex items-center gap-1 sm:gap-2 bg-white hover:bg-gray-50 text-gray-700 hover:text-[#2F4F4F] px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200 text-xs sm:text-sm font-medium min-w-[80px] sm:min-w-0 justify-center">
            <component :is="section.icon" class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span class="whitespace-nowrap">{{ section.title }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="relative py-8 sm:py-12 md:py-20">
      <div class="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        <div class="grid lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <!-- Sidebar Navigation - Hidden on mobile -->
          <div class="lg:col-span-1 hidden lg:block">
            <div class="sticky top-32 bg-white rounded-2xl shadow-lg border border-gray-100/60 p-6">
              <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-[#2F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
                Navigation
              </h3>
              <nav class="space-y-2">
                <a v-for="item in sidebarNav" 
                   :key="item.id"
                   :href="`#${item.id}`"
                   @click="scrollToSection(item.id)"
                   class="block text-gray-600 hover:text-[#2F4F4F] hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors duration-200 text-sm">
                  {{ item.title }}
                </a>
              </nav>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8">
            <!-- Introduction -->
            <div class="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100/60 p-4 sm:p-6 md:p-8">
              <div class="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Notre engagement envers votre vie privée</h2>
                  <p class="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                    Chez <strong>Dwelt</strong>, la confidentialité de vos données personnelles est une priorité. 
                    Nous nous engageons à protéger les informations que vous nous confiez et à respecter 
                    les lois applicables en matière de protection des données.
                  </p>
                </div>
              </div>
            </div>

            <!-- Collecte des données -->
            <div id="collecte-donnees" class="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100/60 p-4 sm:p-6 md:p-8">
              <div class="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                <div class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="text-base sm:text-lg md:text-2xl font-bold text-gray-900">1. Collecte des données personnelles</h3>
              </div>
              <div class="space-y-3 sm:space-y-4 md:space-y-6">
                <p class="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                  Nous collectons vos données personnelles de manière transparente et avec votre consentement, notamment lorsque vous :
                </p>
                <div class="grid gap-2 sm:gap-3 md:gap-4">
                  <div class="flex items-center gap-2 sm:gap-3 text-gray-600 bg-blue-50/50 rounded-lg p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2F4F4F] rounded-full flex-shrink-0"></div>
                    Remplissez un formulaire sur notre site web
                  </div>
                  <div class="flex items-center gap-2 sm:gap-3 text-gray-600 bg-blue-50/50 rounded-lg p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2F4F4F] rounded-full flex-shrink-0"></div>
                    Souscrivez à notre newsletter
                  </div>
                  <div class="flex items-center gap-2 sm:gap-3 text-gray-600 bg-blue-50/50 rounded-lg p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2F4F4F] rounded-full flex-shrink-0"></div>
                    Interagissez avec nous via nos réseaux sociaux
                  </div>
                  <div class="flex items-center gap-2 sm:gap-3 text-gray-600 bg-blue-50/50 rounded-lg p-2 sm:p-3 md:p-4 text-xs sm:text-sm md:text-base">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2F4F4F] rounded-full flex-shrink-0"></div>
                    Effectuez une transaction immobilière
                  </div>
                </div>
                <div class="bg-gray-50 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6">
                  <h4 class="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">Les données collectées incluent :</h4>
                  <div class="grid gap-1 sm:gap-2 md:gap-3 text-gray-600 text-xs sm:text-sm">
                    <div class="flex items-center gap-1 sm:gap-2">
                      <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                      Vos coordonnées complètes
                    </div>
                    <div class="flex items-center gap-1 sm:gap-2">
                      <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                      Préférences immobilières
                    </div>
                    <div class="flex items-center gap-1 sm:gap-2">
                      <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                      Informations de transaction
                    </div>
                    <div class="flex items-center gap-1 sm:gap-2">
                      <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                      Documents nécessaires
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Utilisation des données -->
            <div id="utilisation-donnees" class="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100/60 p-4 sm:p-6 md:p-8">
              <div class="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                <div class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-100 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 class="text-base sm:text-lg md:text-2xl font-bold text-gray-900">2. Utilisation des données personnelles</h3>
              </div>
              <div class="space-y-3 sm:space-y-4 md:space-y-6">
                <p class="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                  Nous utilisons vos données personnelles uniquement pour les finalités suivantes :
                </p>
                <div class="grid gap-3 sm:gap-4 md:gap-6">
                  <div class="flex items-start gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-blue-50/50 rounded-lg md:rounded-xl">
                    <div class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                      <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1 text-xs sm:text-sm md:text-base">Services immobiliers</h4>
                      <p class="text-gray-600 text-xs sm:text-sm">Vous fournir des services adaptés à vos besoins</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-green-50/50 rounded-lg md:rounded-xl">
                    <div class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                      <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1 text-xs sm:text-sm md:text-base">Communication</h4>
                      <p class="text-gray-600 text-xs sm:text-sm">Vous informer sur nos offres et nouveautés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Vos droits -->
            <div id="vos-droits" class="bg-gradient-to-br from-[#2F4F4F] to-[#05b1b1] rounded-xl md:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 text-white">
              <div class="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                <div class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 class="text-base sm:text-lg md:text-2xl font-bold">4. Vos droits</h3>
              </div>
              <p class="text-white/90 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-lg">
                Vous disposez de droits complets sur vos données personnelles :
              </p>
              <div class="grid gap-2 sm:gap-3 md:gap-4">
                <div v-for="(right, index) in rights" :key="index" 
                     class="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 border border-white/20">
                  <h4 class="font-semibold mb-1 text-xs sm:text-sm md:text-base">{{ right.title }}</h4>
                  <p class="text-white/80 text-xs sm:text-sm">{{ right.description }}</p>
                </div>
              </div>
              <div class="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/20">
                <p class="text-white font-semibold mb-2 text-xs sm:text-sm md:text-base">Pour exercer vos droits :</p>
                <a href="mailto:info@dweltimmo.net" 
                   class="inline-flex items-center gap-1 sm:gap-2 bg-white text-[#2F4F4F] px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-xs sm:text-sm md:text-base">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  info@dweltimmo.net
                </a>
              </div>
            </div>

            <!-- Cookies et modifications -->
            <div class="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
              <div id="cookies" class="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100/60 p-3 sm:p-4 md:p-6">
                <div class="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                  <div class="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 class="text-sm sm:text-base md:text-xl font-bold text-gray-900">Cookies</h3>
                </div>
                <p class="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site web. 
                  Ces cookies nous permettent d'analyser l'utilisation du site, de personnaliser 
                  les contenus et de vous offrir une navigation optimale.
                </p>
              </div>

              <div id="modifications" class="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100/60 p-3 sm:p-4 md:p-6">
                <div class="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                  <div class="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </div>
                  <h3 class="text-sm sm:text-base md:text-xl font-bold text-gray-900">Modifications</h3>
                </div>
                <p class="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                  Nous nous réservons le droit de mettre à jour cette politique de confidentialité 
                  pour refléter les évolutions légales ou technologiques. Toute modification sera 
                  publiée sur notre site avec une date de mise à jour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  <FooterComponent/>
</template>

<script setup>
import { ref } from 'vue'
//@ts-ignore
import FooterComponent from "@/components/FooterComponent.vue";
//@ts-ignore
import Header from "@/components/Header.vue"
//@ts-ignore
import home_010 from '../assets/images/home/home_010.jpeg'


const isMobileMenuOpen = ref(false)
const currentDate = ref(new Date().toLocaleDateString('fr-FR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}))

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100 // Offset pour le header fixe
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    
    // Fermer le menu mobile si ouvert
    isMobileMenuOpen.value = false
  }
}

const quickNav = ref([
  {
    id: 'collecte-donnees',
    title: 'Collecte',
    icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' }
  },
  {
    id: 'utilisation-donnees',
    title: 'Utilisation',
    icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' }
  },
  {
    id: 'vos-droits',
    title: 'Vos droits',
    icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>' }
  }
])

const sidebarNav = ref([
  { id: 'collecte-donnees', title: 'Collecte des données' },
  { id: 'utilisation-donnees', title: 'Utilisation des données' },
  { id: 'vos-droits', title: 'Vos droits' },
  { id: 'cookies', title: 'Cookies' },
  { id: 'modifications', title: 'Modifications' }
])

const rights = ref([
  {
    title: 'Accès',
    description: 'Demander une copie des données que nous détenons'
  },
  {
    title: 'Rectification',
    description: 'Corriger des informations incorrectes ou incomplètes'
  },
  {
    title: 'Suppression',
    description: 'Demander l\'effacement de vos données (sauf obligation légale)'
  },
  {
    title: 'Opposition',
    description: 'Refuser l\'utilisation de vos données à des fins de prospection'
  },
  {
    title: 'Portabilité',
    description: 'Obtenir vos données dans un format structuré'
  },
  {
    title: 'Limitation',
    description: 'Restreindre le traitement de vos données dans certains cas'
  }
])
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom hover effects */
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Gradient text animation */
.gradient-text {
  background: linear-gradient(135deg, #2F4F4F 0%, #05b1b1 100%);
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Mobile-first responsive improvements */
@media (max-width: 640px) {
  .container-padding {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .text-responsive {
    font-size: clamp(0.875rem, 4vw, 1rem);
  }
}

/* Touch-friendly button sizes */
@media (max-width: 768px) {
  .touch-button {
    min-height: 44px;
    min-width: 44px;
  }
}

/* Prevent horizontal scrolling */
body {
  overflow-x: hidden;
}

/* Improved text readability on mobile */
@media (max-width: 640px) {
  p, li, span {
    line-height: 1.5;
  }
}

/* Better spacing on very small screens */
@media (max-width: 375px) {
  .xs-padding {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>