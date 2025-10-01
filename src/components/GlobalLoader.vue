<template>
  <transition name="loader-fade">
    <div 
      v-if="loading" 
      class="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
    >
      <div class="text-center">
        <!-- Logo avec animation -->
        <div class="mb-8">
          <div class="relative inline-block">
            <img 
              src="../assets/images/logos/logo-dark-rtl.svg" 
              alt="Dwelt" 
              class="w-20 h-20 mx-auto mb-4 animate-pulse"
            />
            <!-- Cercle animé autour du logo -->
            <div class="absolute inset-0 border-4 border-[#329393] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        
        <!-- Barre de progression -->
        <div class="w-64 bg-gray-200 rounded-full h-2 mx-auto mb-4 overflow-hidden">
          <div 
            class="bg-gradient-to-r from-[#329393] to-[#05b1b1] h-2 rounded-full transition-all duration-1000"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        
        <!-- Texte avec points animés -->
        <p class="text-gray-600 font-medium">
          Chargement<span class="loading-dots">...</span>
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps<{
  loading: boolean
}>()

const progress = ref(0)
let progressInterval: any

// Animation de progression
const startProgress = () => {
  progress.value = 0
  clearInterval(progressInterval)
  
  progressInterval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 15
    }
  }, 200)
}

const completeProgress = () => {
  progress.value = 100
  setTimeout(() => {
    clearInterval(progressInterval)
  }, 500)
}

watch(() => props.loading, (newVal) => {
  if (newVal) {
    startProgress()
  } else {
    completeProgress()
  }
})

onUnmounted(() => {
  clearInterval(progressInterval)
})
</script>

<style scoped>
.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.5s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}

.loading-dots::after {
  content: '';
  animation: dots 1.5s steps(4, end) infinite;
}

@keyframes dots {
  0%, 20% { content: '.'; }
  40% { content: '..'; }
  60%, 100% { content: '...'; }
}

.animate-spin {
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
</style>