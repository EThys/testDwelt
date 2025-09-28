<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
  isPopular?: boolean
}

const faqItems = ref<FAQItem[]>([
  {
    id: 1,
    question: "Quels sont les frais d'accompagnement chez Dwelt ?",
    answer: "Nos honoraires sont transparents et compétitifs. Ils varient entre 2% et 5% selon le type de transaction et sont uniquement dus en cas de succès. Nous offrons une première consultation gratuite pour évaluer vos besoins sans engagement.",
    category: "Tarifs"
  },
  {
    id: 2,
    question: "Proposez-vous des garanties sur les biens ?",
    answer: "Absolument. Chaque propriété listée sur Dwelt est rigoureusement vérifiée : diagnostic technique, état juridique, conformité urbaine. Nous offrons une garantie de conformité de 6 mois sur les biens neufs.",
    category: "Garanties"
  },
  {
    id: 3,
    question: "Puis-je vendre et acheter simultanément ?",
    answer: "Oui, c'est notre spécialité ! Nous coordonnons parfaitement la vente de votre ancien bien et l'achat du nouveau grâce à notre service de relooking qui maximise la valeur de vente et notre réseau d'acheteurs qualifiés.",
    category: "Transaction"
  }
])

const activeItem = ref<number | null>(1)
const selectedCategory = ref<string>('Toutes')
const searchQuery = ref('')
const isSearching = ref(false)
const isLoading = ref(false)

const categories = ['Toutes', ...new Set(faqItems.value.map(item => item.category))]

const filteredItems = computed(() => {
  let items = faqItems.value
  
  if (selectedCategory.value !== 'Toutes') {
    items = items.filter(item => item.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    items = items.filter(item => 
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    )
  }
  
  return items
})

const toggleItem = async (id: number) => {
  if (activeItem.value === id) {
    activeItem.value = null
  } else {
    // Animation de chargement simulée
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 150))
    activeItem.value = id
    isLoading.value = false
    
    // Scroll doux vers l'élément ouvert
    const element = document.getElementById(`faq-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }
}

const resetFilters = () => {
  selectedCategory.value = 'Toutes'
  searchQuery.value = ''
  isSearching.value = false
}

// Animation au chargement
const animatedItems = ref<boolean[]>([])
onMounted(() => {
  setTimeout(() => {
    animatedItems.value = new Array(faqItems.value.length).fill(true)
  }, 100)
})
</script>

<template>
  <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-teal-600/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-green-600/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-gradient-to-r from-teal-500/5 to-teal-500/5 blur-2xl"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Questions
          <span class="text-[#329393]">
            Fréquentes
          </span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Tout ce que vous devez savoir sur nos services immobiliers innovants. 
          <span class="font-semibold text-gray-700">Des réponses claires, transparentes et complètes.</span>
        </p>
      </div>

      <!-- Search and Filter Section -->
      <!-- <div class="mb-12">

        <div class="relative max-w-2xl mx-auto mb-8">
          <div class="relative group">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher une question..."
              class="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#329393]/20 focus:border-[#329393] transition-all duration-300 text-lg placeholder-gray-400"
            >
            <div class="absolute left-4 top-1/2 -translate-y-1/2">
              <svg class="w-5 h-5 text-gray-400 group-focus-within:text-[#329393] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <button 
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

    -->
      <div class="grid gap-4 max-w-4xl mx-auto">
        <div
          v-for="(item, index) in filteredItems"
          :key="item.id"
          :id="`faq-${item.id}`"
          class="group bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-2xl hover:border-[#329393]/50 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden"
          :style="{ 
            animationDelay: `${index * 0.1}s`,
            animation: animatedItems[index] ? 'slideInUp 0.6s ease-out forwards' : 'none'
          }"
        >
          <button
            @click="toggleItem(item.id)"
            class="w-full px-6 py-6 text-left focus:outline-none focus:ring-3 focus:ring-[#329393]/20 rounded-2xl"
            :aria-expanded="activeItem === item.id"
            :disabled="isLoading"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-start gap-4 flex-1 min-w-0">
                <!-- Icon Container -->
                <div class="flex-shrink-0 w-12 h-12 bg-[#329393]/10 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <div class="w-3 h-3 bg-[#329393] rounded-full"></div>
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-3 mb-2">
                    <!-- Popular Badge -->
                    <span v-if="item.isPopular" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#329393] text-white rounded-lg text-xs font-semibold shadow-sm">
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      Populaire
                    </span>

                    <!-- Category Tag -->
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                      {{ item.category }}
                    </span>
                  </div>

                  <h3 class="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed pr-8 group-hover:text-gray-800 transition-colors">
                    {{ item.question }}
                  </h3>
                </div>
              </div>
              
              <!-- Toggle Button -->
              <div class="flex-shrink-0 ml-2">
                <div 
                  :class="[
                    'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-md',
                    activeItem === item.id 
                      ? 'bg-[#329393] text-white transform rotate-180' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  ]"
                >
                  <svg 
                    class="w-5 h-5 transition-transform duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
            </div>
          </button>

          <!-- Answer Section -->
          <div 
            class="overflow-hidden transition-all duration-700 ease-out"
            :class="activeItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          >
            <div class="px-6 pb-8 border-t border-gray-100/50">
              <div class="pt-6 text-gray-700 leading-relaxed text-lg flex items-start gap-4">
                <div class="flex-shrink-0 w-2 h-2 mt-3 bg-[#329393] rounded-full animate-pulse"></div>
                <p class="flex-1">{{ item.answer }}</p>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>

      <!-- No Results State -->
      <div v-if="filteredItems.length === 0" class="text-center py-16">
        <div class="max-w-md mx-auto">
          <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Aucune question trouvée</h3>
          <p class="text-gray-600 mb-8 text-lg">Essayez d'autres termes de recherche ou une autre catégorie</p>
          <button 
            @click="resetFilters"
            class="inline-flex items-center gap-3 px-6 py-3 bg-[#329393] text-white rounded-xl hover:bg-[#2a7a7a] font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            Réinitialiser la recherche
          </button>
        </div>
      </div>


    </div>
  </section>
</template>

<style scoped>
/* Animations améliorées */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar pour les réponses */
.overflow-hidden::-webkit-scrollbar {
  width: 6px;
}

.overflow-hidden::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.overflow-hidden::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.overflow-hidden::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Effets de hover améliorés */
.group:hover .group-hover\:scale-102 {
  transform: scale(1.02);
}

/* Transitions personnalisées */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Optimisations mobiles */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .flex.items-start.gap-4 {
    flex-direction: column;
    gap: 1rem;
  }
  
  .px-6 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  
  .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  
  /* Ajustement des boutons sur mobile */
  .flex.flex-col.sm\:flex-row {
    flex-direction: column;
  }
  
  .flex.flex-col.sm\:flex-row .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Support du mode réduit des animations */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Amélioration de l'accessibilité */
button:focus-visible {
  outline: 2px solid #329393;
  outline-offset: 2px;
  border-radius: 8px;
}

/* Support du dark mode (optionnel) */
@media (prefers-color-scheme: dark) {
  .bg-white {
    background-color: #1e293b;
  }
  
  .bg-gray-100 {
    background-color: #334155;
  }
  
  .text-gray-900 {
    color: #f1f5f9;
  }
  
  .text-gray-600, .text-gray-700 {
    color: #cbd5e1;
  }
  
  .border-gray-200 {
    border-color: #475569;
  }
}

/* Loading state */
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>