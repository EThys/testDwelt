<template>
  <footer class="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        "></div>
      </div>
      
      <!-- Animated Orbs -->
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#2F4F4F]/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-32 -left-32 w-80 h-80 bg-[#2F4F4F]/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/3 left-1/4 w-32 h-32 bg-[#2F4F4F]/5 rounded-full blur-2xl"></div>
    </div>

    <!-- Main Footer Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      
      <!-- Top Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
        
        <!-- Company Info -->
         <div class="lg:col-span-4">
  <!-- Logo -->
  <div class="flex items-center gap-3 mb-6" :class="{'animate-in': isVisible}">
    <div class="w-10 h-10 bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
      <!-- Remplace ce lien par le tien -->
      <img src="../assets/images/logos/Logo_White.png" alt="Logo Dwelt Immo" class="w-15 h-15 object-contain" />
    </div>
    <span class="text-2xl font-bold bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] bg-clip-text text-transparent">Dwelt Immo</span>
  </div>

  <p class="text-gray-300 text-lg leading-relaxed mb-6 max-w-md" :class="{'animate-in': isVisible}">
    Votre partenaire de confiance pour une expérience immobilière exceptionnelle. 
    Innovation, transparence et excellence depuis 2018.
  </p>

  <!-- Social Links -->
  <div class="flex gap-4" :class="{'animate-in': isVisible}">
    <a v-for="(social, index) in socialLinks" :key="social.name" 
       :href="social.url" 
       class="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#2F4F4F]/20 hover:border-[#2F4F4F]/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#2F4F4F]/20"
       :style="isVisible ? { 'animation-delay': `${index * 100}ms` } : {}">
      <component :is="social.icon" class="w-5 h-5 text-gray-400 group-hover:text-[#2F4F4F] transition-colors" />
    </a>
  </div>
</div>



        <!-- Quick Links -->
        <div class="lg:col-span-2" :class="{'animate-in': isVisible}">
          <h3 class="text-lg font-semibold mb-6 flex items-center gap-2">
            <span class="w-2 h-2 bg-[#2F4F4F] rounded-full"></span>
            Navigation
          </h3>
            <ul class="space-y-3">
              <li v-for="(link, index) in quickLinks" :key="link.name"
                  :style="isVisible ? { 'animation-delay': `${index * 50 + 200}ms` } : {}">
                <router-link 
                  :to="link.url" 
                  class="text-gray-300 hover:text-[#2F4F4F] transition-colors duration-300 flex items-center gap-2 group"
                  :class="{ 'text-[#2F4F4F]': $route.path === link.url }"
                >
                  <span 
                    class="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#2F4F4F] transition-colors"
                    :class="{ 'bg-[#2F4F4F]': $route.path === link.url }"
                  ></span>
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
        </div>

        <!-- Contact Info -->
        <div class="lg:col-span-3" :class="{'animate-in': isVisible}">
          <h3 class="text-lg font-semibold mb-6 flex items-center gap-2">
            <span class="w-2 h-2 bg-[#2F4F4F] rounded-full"></span>
            Contact
          </h3>
          <ul class="space-y-4">
            <li v-for="(contact, index) in contactInfo" :key="contact.type" 
                class="flex items-start gap-3"
                :style="isVisible ? { 'animation-delay': `${index * 100 + 300}ms` } : {}">
              <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <component :is="contact.icon" class="w-4 h-4 text-[#2F4F4F]" />
              </div>
              <div>
                <p class="text-gray-300 text-sm">{{ contact.value }}</p>
                <p class="text-gray-500 text-xs">{{ contact.label }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Google Maps - Improved Section -->
        <div class="lg:col-span-3" :class="{'animate-in': isVisible}">
          <h3 class="text-lg font-semibold mb-6 flex items-center gap-2">
            <span class="w-2 h-2 bg-[#2F4F4F] rounded-full"></span>
            Localisation
          </h3>
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <!-- Map Container with Loading State -->
            <div class="relative h-48 w-full bg-gray-800/50 overflow-hidden">
              <!-- Loading Skeleton -->
              <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse flex items-center justify-center">
                <div class="text-center">
                  <div class="w-8 h-8 border-2 border-[#2F4F4F] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <p class="text-gray-400 text-xs">Chargement de la carte...</p>
                </div>
              </div>
              
              <!-- Google Maps Iframe -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.150342108471!2d15.29785927504866!3d-4.317343395732573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33b8c5b5b5b5%3A0x1a6a33b8c5b5b5b5!2sImmeuble%20Itimbiri%2C%20Boulevard%20du%2030%20Juin%2C%20Kinshasa%2C%20R%C3%A9publique%20D%C3%A9mocratique%20du%20Congo!5e0!3m2!1sfr!2sfr!4v1690000000000!5m2!1sfr!2sfr"
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                @load="handleMapLoad"
              ></iframe>
              
              <!-- Map Overlay for Better UX -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              
              <!-- Interactive Button -->
              <div class="absolute bottom-3 right-3">
                <a 
                  href="https://maps.google.com/?q=Immeuble+Itimbiri,Boulevard+du+30+Juin,Kinshasa,RDC" 
                  target="_blank"
                  class="bg-white/90 hover:bg-white text-gray-900 hover:text-[#2F4F4F] px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm flex items-center gap-1 group/btn"
                >
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Ouvrir
                </a>
              </div>
            </div>
            
            <!-- Address Info -->
            <div class="p-4 bg-gradient-to-r from-white/5 to-transparent">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-[#2F4F4F]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-[#2F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white font-medium text-sm mb-1">Immeuble Itimbiri</p>
                  <p class="text-gray-300 text-xs">3A, 3e niveau, Boulevard du 30 Juin</p>
                  <p class="text-gray-400 text-xs">Kinshasa/Gombe, RDC</p>
                  <div class="flex items-center gap-1 mt-2">
                    <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span class="text-green-400 text-xs">Accessible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Additional Map Info -->
          <div class="mt-3 flex items-center justify-between text-xs text-gray-400">
            <div class="flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Lun - Ven: 8h - 18h
            </div>
            <div class="flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Parking disponible
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="pt-8 pb-20 md:pb-8" :class="{'animate-in': isVisible}">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <!-- Copyright -->
          <div class="text-gray-400 text-sm">
            <p>&copy; 2025 Dwelt Immobilier. Tous droits réservés.</p>
          </div>

          <!-- Legal Links -->
          <div class="flex flex-wrap gap-6 justify-start md:justify-end">
            <a v-for="(legal, index) in legalLinks" :key="legal.name" 
               :href="legal.url" 
               class="text-gray-400 hover:text-[#2F4F4F] transition-colors text-sm"
               :style="isVisible ? { 'animation-delay': `${index * 50 + 200}ms` } : {}">
              {{ legal.name }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave Decoration -->
    <div class="absolute bottom-0 left-0 right-0" :class="{'animate-in': isVisible}">
      <svg class="w-full h-12 text-slate-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="currentColor" opacity="0.25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              fill="currentColor" opacity="0.5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="currentColor"></path>
      </svg>
    </div>
  </footer>

  <!-- Back to Top Button -->
  <button 
    @click="scrollToTop"
    class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] rounded-xl flex items-center justify-center shadow-2xl hover:shadow-[#2F4F4F]/30 transition-all transform hover:scale-110 z-40 back-to-top-btn"
    :class="showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'"
  >
    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import '@n8n/chat/style.css';
import '../../src/chatBot.css'
import { createChat } from '@n8n/chat';

// État pour contrôler la visibilité
const isVisible = ref(false)
const showBackToTop = ref(false)
const mapLoaded = ref(false)

onMounted(() => {
  // Initialiser le chatbot
  createChat({
    webhookUrl: 'https://n8n.srv911679.hstgr.cloud/webhook/a6ea84bf-b470-41d1-86c6-5a6dc8b82e62/chat',
    chatId: 'tonton-dwelt',
    initialMessages: [
      "Bonjour et bienvenue ! Je suis TONTON DWELT, votre agent immobilier virtuel chez DWELT Immobilier 🏡Je suis ici pour vous aider à trouver, acheter ou louer le bien idéal. Commençons par comprendre vos besoins 🧭.",
      "🏠 Quel type de bien recherchez-vous ? Maison 🏡, Appartement 🏢, Terrain 🌱, Local commercial 🏬"
    ],
    i18n: {
      en: {
        title: 'Tonton DWELT👋',
        subtitle: "Discutez avec moi, je suis ici pour vous aider 24/7.",
        footer: '',
        getStarted: 'New Conversation',
        inputPlaceholder: 'Écrivez votre question...',
      },
    },
    enableStreaming: false,
    title: 'Tonton Dwelt',
    subtitle: 'Votre assistant immobilier',
    language: 'fr'
  });

  // Afficher immédiatement le contenu du footer
  isVisible.value = true
  
  // Configurer le scroll
  window.addEventListener('scroll', handleScroll)
  adjustButtonPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleMapLoad = () => {
  mapLoaded.value = true
}

// Icons
const FacebookIcon = { template: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' }
const TwitterIcon = { template: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>' }
const LinkedinIcon = { template: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' }

const PhoneIcon = { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>' }
const EmailIcon = { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' }
const MapIcon = { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' }

// Data
const socialLinks = [
  { name: 'Facebook', url: '#', icon: FacebookIcon },
  { name: 'Twitter', url: '#', icon: TwitterIcon },
  { name: 'LinkedIn', url: '#', icon: LinkedinIcon }
]

const quickLinks = [
  { name: 'Accueil', url: '/' },
  { name: 'Proprietés', url: '/all' },
  { name: 'À propos', url: '/about' },
  { name: 'Services', url: '/services' },
]

const contactInfo = [
  { type: 'phone1', value: '+243 840 777 722', label: 'Numéro principal', icon: PhoneIcon },
  { type: 'phone2', value: '+243 827 777 722', label: 'Numéro secondaire', icon: PhoneIcon },
  { type: 'phone3', value: '+243 854 000 001', label: 'Service client', icon: PhoneIcon },
  { type: 'email', value: 'contact@dwelt.com', label: 'Réponse sous 24h', icon: EmailIcon },
]

const legalLinks = [
  { name: 'Politique de confidentialité', url: '/privacy-policy' },
  { name: 'Termes & Conditions', url: '/terms-conditions' },
]

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  })
}

const adjustButtonPosition = () => {
  const chatWidget = document.querySelector('#n8n-chat') || document.querySelector('.n8n-chat')
  const backToTopBtn = document.querySelector('.back-to-top-btn')
  
  if (chatWidget && backToTopBtn) {
    backToTopBtn.style.bottom = '140px'
  }
}
</script>

<style scoped>
/* ANIMATIONS SIMPLIFIÉES ET OPTIMISÉES */
.animate-in {
  opacity: 1 !important;
  transform: none !important;
}

/* Animations de base uniquement pour les éléments principaux */
footer > div:first-child > div:last-child > * {
  opacity: 1;
  transform: none;
  transition: all 0.6s ease-out;
}

/* Délais très courts pour éviter les problèmes de performance */
.animate-in:nth-child(1) { transition-delay: 0.1s; }
.animate-in:nth-child(2) { transition-delay: 0.2s; }
.animate-in:nth-child(3) { transition-delay: 0.3s; }
.animate-in:nth-child(4) { transition-delay: 0.4s; }

/* Back to Top Button */
.back-to-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 40;
  transition: all 0.3s ease-out;
}

.back-to-top-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(50, 147, 147, 0.3);
}

/* Ajustements pour le chatbot */
:deep(#n8n-chat) ~ .back-to-top-btn,
:deep(.n8n-chat) ~ .back-to-top-btn {
  bottom: 140px !important;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .lg\:col-span-3 {
    grid-column: span 6;
  }
  
  .lg\:col-span-4 {
    grid-column: span 12;
    margin-bottom: 2rem;
  }
  
  .lg\:col-span-2 {
    grid-column: span 6;
  }
}

@media (max-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
  
  .lg\:grid-cols-12 > * {
    grid-column: span 12 !important;
  }
  
  .md\:grid-cols-2 {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .flex-wrap {
    justify-content: center;
  }
  
  .back-to-top-btn {
    bottom: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
  }

  /* Ajustement de la hauteur de la carte sur mobile */
  .h-48 {
    height: 200px;
  }

  :deep(#n8n-chat) ~ .back-to-top-btn,
  :deep(.n8n-chat) ~ .back-to-top-btn {
    bottom: 120px !important;
  }
}

@media (max-width: 480px) {
  .back-to-top-btn {
    bottom: 0.5rem;
    right: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .back-to-top-btn svg {
    width: 1rem;
    height: 1rem;
  }

  /* Ajustement de la hauteur de la carte sur très petits écrans */
  .h-48 {
    height: 180px;
  }

  :deep(#n8n-chat) ~ .back-to-top-btn,
  :deep(.n8n-chat) ~ .back-to-top-btn {
    bottom: 100px !important;
  }
}

/* Focus states for accessibility */
a:focus-visible,
button:focus-visible {
  outline: 2px solid #2F4F4F;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Style amélioré pour la carte Google Maps */
iframe {
  filter: grayscale(20%) contrast(90%) brightness(0.9);
  transition: all 0.5s ease;
}

.group:hover iframe {
  filter: grayscale(0%) contrast(100%) brightness(1);
  transform: scale(1.02);
}

/* Animation de chargement pour la carte */
.map-loading {
  background: linear-gradient(90deg, #2d3748 25%, #4a5568 50%, #2d3748 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Désactiver les animations si l'utilisateur préfère les réduire */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
  
  .group:hover iframe {
    transform: none;
  }
}
</style>