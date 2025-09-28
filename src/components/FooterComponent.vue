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
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#329393]/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-32 -left-32 w-80 h-80 bg-[#329393]/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/3 left-1/4 w-32 h-32 bg-[#329393]/5 rounded-full blur-2xl"></div>
    </div>

    <!-- Main Footer Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      
      <!-- Top Section -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
        
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <!-- Logo -->
          <div class="flex items-center gap-3 mb-6 scroll-animate-logo">
            <div class="w-10 h-10 bg-gradient-to-r from-[#329393] to-[#05b1b1] rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-[#329393] to-[#05b1b1] bg-clip-text text-transparent">Dwelt</span>
          </div>

          <p class="text-gray-300 text-lg leading-relaxed mb-6 max-w-md scroll-animate-description">
            Votre partenaire de confiance pour une expérience immobilière exceptionnelle. 
            Innovation, transparence et excellence depuis 2018.
          </p>

          <!-- Social Links -->
          <div class="flex gap-4 scroll-animate-social">
            <a v-for="(social, index) in socialLinks" :key="social.name" 
               :href="social.url" 
               class="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#329393]/20 hover:border-[#329393]/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#329393]/20 scroll-animate-social-item"
               :style="{ 'transition-delay': `${index * 100}ms` }">
              <component :is="social.icon" class="w-5 h-5 text-gray-400 group-hover:text-[#329393] transition-colors" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="scroll-animate-links">
          <h3 class="text-lg font-semibold mb-6 flex items-center gap-2 scroll-animate-links-title">
            <span class="w-2 h-2 bg-[#329393] rounded-full"></span>
            Navigation
          </h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in quickLinks" :key="link.name" class="scroll-animate-link-item"
                :style="{ 'transition-delay': `${index * 50 + 200}ms` }">
              <a :href="link.url" class="text-gray-300 hover:text-[#329393] transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#329393] transition-colors"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="scroll-animate-contact">
          <h3 class="text-lg font-semibold mb-6 flex items-center gap-2 scroll-animate-contact-title">
            <span class="w-2 h-2 bg-[#329393] rounded-full"></span>
            Contact
          </h3>
          <ul class="space-y-4">
            <li v-for="(contact, index) in contactInfo" :key="contact.type" 
                class="flex items-start gap-3 scroll-animate-contact-item"
                :style="{ 'transition-delay': `${index * 100 + 300}ms` }">
              <div class="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <component :is="contact.icon" class="w-4 h-4 text-[#329393]" />
              </div>
              <div>
                <p class="text-gray-300 text-sm">{{ contact.value }}</p>
                <p class="text-gray-500 text-xs">{{ contact.label }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="pt-8 scroll-animate-bottom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <!-- Copyright -->
          <div class="text-gray-400 text-sm scroll-animate-copyright">
            <p>&copy; 2025 Dwelt Immobilier. Tous droits réservés.</p>
          </div>

          <!-- Legal Links -->
          <div class="flex flex-wrap gap-6 justify-start md:justify-end scroll-animate-legal">
            <a v-for="(legal, index) in legalLinks" :key="legal.name" 
               :href="legal.url" 
               class="text-gray-400 hover:text-[#329393] transition-colors text-sm scroll-animate-legal-item"
               :style="{ 'transition-delay': `${index * 50 + 200}ms` }">
              {{ legal.name }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave Decoration -->
    <div class="absolute bottom-0 left-0 right-0 scroll-animate-wave">
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

  <!-- Back to Top Button - Positionné en dehors du footer pour être visible partout -->
  <button 
    @click="scrollToTop"
    class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#329393] to-[#05b1b1] rounded-xl flex items-center justify-center shadow-2xl hover:shadow-[#329393]/30 transition-all transform hover:scale-110 z-50 scroll-animate-backtotop"
    :class="showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'"
  >
    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Icons (vous pouvez remplacer par vos propres composants d'icônes)
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
  { name: 'Accueil', url: '#' },
  { name: 'Proprietés', url: '#' },
  { name: 'À propos', url: '#' },
  { name: 'Services', url: '#' },
  { name: 'Contact', url: '#' }
]

const contactInfo = [
  { type: 'phone', value: '+243 827 777 722', label: 'Lun-Ven 9h-18h', icon: PhoneIcon },
  { type: 'email', value: 'contact@dwelt.com', label: 'Réponse sous 24h', icon: EmailIcon },
  { type: 'address', value: '123 Avenue de l\'Immobilier', label: 'Gombe 58, Congo Kinshasa', icon: MapIcon }
]

const legalLinks = [
  { name: 'Mentions légales', url: '#' },
  { name: 'Politique de confidentialité', url: '#' },
  { name: 'Conditions d\'utilisation', url: '#' },
  { name: 'Cookies', url: '#' }
]

// Back to top functionality
const showBackToTop = ref(false)

const handleScroll = () => {
  // Afficher le bouton quand on scroll de 300px
  showBackToTop.value = window.scrollY > 300
  
  // Animation au scroll pour les éléments du footer
  const elements = document.querySelectorAll('.scroll-animate-logo, .scroll-animate-description, .scroll-animate-social, .scroll-animate-social-item, .scroll-animate-links, .scroll-animate-links-title, .scroll-animate-link-item, .scroll-animate-contact, .scroll-animate-contact-title, .scroll-animate-contact-item, .scroll-animate-bottom, .scroll-animate-copyright, .scroll-animate-legal, .scroll-animate-legal-item, .scroll-animate-wave')
  
  const windowHeight = window.innerHeight
  const triggerBottom = windowHeight * 0.9

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top
    
    if (elementTop < triggerBottom) {
      element.classList.add('animate-in')
    }
  })
}

const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
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
.scroll-animate-logo {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate-description {
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.8s ease-out 0.2s;
}

.scroll-animate-social {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out 0.4s;
}

.scroll-animate-social-item {
  opacity: 0;
  transform: translateY(15px) scale(0.8);
  transition: all 0.5s ease-out;
}

.scroll-animate-links {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.7s ease-out 0.3s;
}

.scroll-animate-links-title {
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.6s ease-out 0.4s;
}

.scroll-animate-link-item {
  opacity: 0;
  transform: translateX(-15px);
  transition: all 0.5s ease-out;
}

.scroll-animate-contact {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.7s ease-out 0.5s;
}

.scroll-animate-contact-title {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.6s ease-out 0.6s;
}

.scroll-animate-contact-item {
  opacity: 0;
  transform: translateX(15px);
  transition: all 0.5s ease-out;
}

.scroll-animate-bottom {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 1.1s;
}

.scroll-animate-copyright {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out 1.2s;
}

.scroll-animate-legal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out 1.3s;
}

.scroll-animate-legal-item {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.5s ease-out;
}

.scroll-animate-wave {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out 1.5s;
}

.scroll-animate-backtotop {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* États animés */
.scroll-animate-logo.animate-in,
.scroll-animate-description.animate-in,
.scroll-animate-social.animate-in,
.scroll-animate-social-item.animate-in,
.scroll-animate-links.animate-in,
.scroll-animate-links-title.animate-in,
.scroll-animate-link-item.animate-in,
.scroll-animate-contact.animate-in,
.scroll-animate-contact-title.animate-in,
.scroll-animate-contact-item.animate-in,
.scroll-animate-bottom.animate-in,
.scroll-animate-copyright.animate-in,
.scroll-animate-legal.animate-in,
.scroll-animate-legal-item.animate-in,
.scroll-animate-wave.animate-in {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}

/* Délais progressifs pour les éléments multiples */
.scroll-animate-social-item:nth-child(1).animate-in { transition-delay: 400ms; }
.scroll-animate-social-item:nth-child(2).animate-in { transition-delay: 500ms; }
.scroll-animate-social-item:nth-child(3).animate-in { transition-delay: 600ms; }

.scroll-animate-link-item:nth-child(1).animate-in { transition-delay: 450ms; }
.scroll-animate-link-item:nth-child(2).animate-in { transition-delay: 500ms; }
.scroll-animate-link-item:nth-child(3).animate-in { transition-delay: 550ms; }
.scroll-animate-link-item:nth-child(4).animate-in { transition-delay: 600ms; }
.scroll-animate-link-item:nth-child(5).animate-in { transition-delay: 650ms; }

.scroll-animate-contact-item:nth-child(1).animate-in { transition-delay: 600ms; }
.scroll-animate-contact-item:nth-child(2).animate-in { transition-delay: 700ms; }
.scroll-animate-contact-item:nth-child(3).animate-in { transition-delay: 800ms; }

.scroll-animate-legal-item:nth-child(1).animate-in { transition-delay: 1.3s; }
.scroll-animate-legal-item:nth-child(2).animate-in { transition-delay: 1.35s; }
.scroll-animate-legal-item:nth-child(3).animate-in { transition-delay: 1.4s; }
.scroll-animate-legal-item:nth-child(4).animate-in { transition-delay: 1.45s; }

/* Animation pour le bouton Back to Top */
.scroll-animate-backtotop {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

/* Smooth transitions */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
  
  .lg\:grid-cols-4 {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .md\:grid-cols-2 {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .flex-wrap {
    justify-content: center;
  }
  
  /* Ajustements des animations pour mobile */
  .scroll-animate-links,
  .scroll-animate-contact {
    transform: translateY(20px);
  }
  
  .scroll-animate-links.animate-in,
  .scroll-animate-contact.animate-in {
    transform: translateY(0);
  }

  /* Ajustement du bouton Back to Top pour mobile */
  .scroll-animate-backtotop {
    bottom: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
  }
}

/* Focus states for accessibility */
a:focus-visible,
button:focus-visible {
  outline: 2px solid #329393;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
  
  .scroll-animate-logo,
  .scroll-animate-description,
  .scroll-animate-social,
  .scroll-animate-social-item,
  .scroll-animate-links,
  .scroll-animate-links-title,
  .scroll-animate-link-item,
  .scroll-animate-contact,
  .scroll-animate-contact-title,
  .scroll-animate-contact-item,
  .scroll-animate-bottom,
  .scroll-animate-copyright,
  .scroll-animate-legal,
  .scroll-animate-legal-item,
  .scroll-animate-wave,
  .scroll-animate-backtotop {
    transition: none !important;
    animation: none !important;
    opacity: 1;
    transform: none !important;
  }
}

/* Animation supplémentaire pour la vague */
.scroll-animate-wave.animate-in {
  animation: wave-rise 1.2s ease-out;
}

@keyframes wave-rise {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Effet de hover amélioré pour le bouton Back to Top */
.scroll-animate-backtotop:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(50, 147, 147, 0.3);
}

/* Animation d'apparition du bouton Back to Top */
.scroll-animate-backtotop {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Pour les très petits écrans */
@media (max-width: 480px) {
  .scroll-animate-backtotop {
    bottom: 0.5rem;
    right: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .scroll-animate-backtotop svg {
    width: 1rem;
    height: 1rem;
  }
}

/* Assurance que le bouton reste au-dessus de tout */
.scroll-animate-backtotop {
  z-index: 9999;
}
</style>