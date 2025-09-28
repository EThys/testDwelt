<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)
const scrolled = ref(false)

const toggleMenu = () => (isOpen.value = !isOpen.value)
const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

// Navigation items avec leurs routes correspondantes
const navItems = [
  { label: 'Accueil', route: '/' },
  { label: 'À propos', route: '/about' },
  { label: 'Nos Services', route: '/services' },
  { label: 'Agents', route: '/agents' },
  { label: 'Propriétés', route: '/all' } 
]

// Fonction pour appeler le numéro
const callNumber = () => {
  window.location.href = 'tel:+243827777722'
}

// Fermer le menu mobile après navigation
const navigateTo = (route: string) => {
  router.push(route)
  isOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-gradient-to-b from-[#2a7a7a]/95 to-[#329393]/95 backdrop-blur-md shadow-sm py-3' : 'bg-gradient-to-b from-[#329393] to-[#2a7a7a] py-4'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo avec router-link -->
      <router-link to="/" class="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-1">
        <span class="text-white">D</span><span class="text-gray-100">welt</span>
      </router-link>

      <!-- Burger Button -->
      <button
        @click="toggleMenu"
        class="lg:hidden text-white hover:text-gray-200 transition focus:outline-none"
      >
        <svg v-if="!isOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Desktop Menu -->
      <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium">
        <router-link
          v-for="item in navItems"
          :key="item.route"
          :to="item.route"
          class="relative text-white/90 hover:text-white transition px-2 py-1 text-sm uppercase tracking-wider group"
          active-class="text-white"
        >
          {{ item.label }}
          <span
            class="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full"
            :class="{ 'w-full': $route.path === item.route }"
          ></span>
        </router-link>

        <!-- Numéro de téléphone -->
        <button
          @click="callNumber"
          class="relative text-white/90 hover:text-white transition px-2 py-1 text-sm uppercase tracking-wider group flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span class="font-mono">+243 827 777 722</span>
          <span
            class="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full"
          ></span>
        </button>
        
        <!-- Login Button -->
        <router-link
          to="/login"
          class="ml-4 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg hover:shadow-md transition font-medium border border-white/20"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Connexion
        </router-link>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0 -translate-y-4"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-4"
    >
      <div
        v-if="isOpen"
        class="lg:hidden flex flex-col space-y-4 py-6 text-center bg-gradient-to-b from-[#2a7a7a]/95 to-[#329393]/95 backdrop-blur-md shadow-xl absolute left-0 top-full w-full"
      >
        <button
          v-for="item in navItems"
          :key="item.route"
          @click="navigateTo(item.route)"
          :class="[
            'text-lg transition px-4 py-2 mx-4 rounded-lg',
            $route.path === item.route 
              ? 'text-white bg-white/20' 
              : 'text-white/90 hover:text-white hover:bg-white/10'
          ]"
        >
          {{ item.label }}
        </button>

        <!-- Numéro de téléphone mobile -->
        <button
          @click="callNumber"
          class="flex items-center justify-center gap-3 text-lg text-white/90 hover:text-white transition px-4 py-2 mx-4 rounded-lg hover:bg-white/10"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span class="font-mono text-base">01 23 45 67 89</span>
        </button>
        
        <router-link
          to="/login"
          class="mt-2 border border-white/20 px-5 py-2 rounded-lg hover:bg-white/10 hover:shadow-md transition mx-auto font-medium text-white flex items-center justify-center gap-2 w-fit"
          @click="isOpen = false"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Connexion
        </router-link>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Styles pour les liens actifs */
.router-link-active {
  color: white;
}

/* Animation pour le soulignement des liens actifs */
.router-link-active .underline-indicator {
  width: 100%;
}

/* Amélioration de la lisibilité */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
</style>