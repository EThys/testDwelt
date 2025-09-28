<template>
  <Header/> 
  <div class="min-h-screen bg-gray-50">

    <!-- Hero Section -->
    <div class="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="DWELT - Découvrez toutes nos propriétés"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#1a5f5f]/80 to-[#329393]/60"></div>
      </div>
      
      <div class="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div class="max-w-6xl">
          <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Découvrez nos <span class="text-[#FFD166]">propriétés</span>
          </h1>
          <p class="text-white text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-8">
            Explorez notre sélection exclusive de biens immobiliers pour trouver la perle rare
          </p>
        </div>
      </div>
    </div>

    <!-- Section Filtres (Non Fixe) -->
    <section class="bg-white border-b shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Barre de recherche principale -->
        <div class="relative mb-8">
          <div class="relative max-w-4xl mx-auto">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
            </div>
            <input
              v-model="searchTerm"
              @input="performSearch"
              type="text"
              placeholder="Rechercher un bien, une ville, un quartier..."
              class="w-full pl-12 pr-32 py-4 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-[#329393] focus:shadow-xl transition-all duration-300 text-lg bg-white"
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-4">
              <span class="text-gray-400 text-sm mr-3 hidden md:inline">{{ filteredProperties.length }} résultats</span>
              <button class="hidden md:flex items-center bg-[#329393] hover:bg-[#2a7a7a] text-white px-6 py-2 rounded-xl font-medium transition-colors">
                <MagnifyingGlassIcon class="w-4 h-4 mr-2" />
                Rechercher
              </button>
            </div>
          </div>
        </div>

        <!-- Première ligne : Filtres rapides et contrôles -->
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
          <!-- Filtres Rapides -->
          <div class="flex flex-wrap gap-3">
            <button
              v-for="filter in quickFilters"
              :key="filter.id"
              @click="applyQuickFilter(filter)"
              :class="[
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-2',
                activeQuickFilter === filter.id
                  ? 'bg-[#329393] border-[#329393] text-white shadow-md transform scale-105'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-[#329393] hover:text-[#329393]'
              ]"
            >
              {{ filter.label }}
            </button>
          </div>

          <!-- Contrôles d'affichage -->
          <div class="flex items-center space-x-6">
            <span class="text-lg font-semibold text-gray-700">{{ totalProperties }} propriétés</span>
            
           

            <!-- Bouton Filtres Avancés Mobile -->
            <button 
              @click="toggleAdvancedFilters"
              class="md:hidden flex items-center bg-[#329393] text-white px-4 py-2.5 rounded-xl font-medium transition-colors shadow-lg"
            >
              <AdjustmentsHorizontalIcon class="w-4 h-4 mr-2" />
              Filtres
              <span v-if="activeFiltersCount > 0" class="ml-2 bg-white text-[#329393] rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold">
                {{ activeFiltersCount }}
              </span>
            </button>
          </div>
        </div>

        <!-- Filtres Avancés - Version Réduite par Défaut -->
        <div v-if="showAdvancedFilters" class="mt-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-gray-900 flex items-center">
              <AdjustmentsHorizontalIcon class="w-5 h-5 mr-2 text-[#329393]" />
              Filtres avancés
            </h3>
            <button @click="toggleAdvancedFilters" class="text-gray-400 hover:text-gray-600 transition-colors">
              <XMarkIcon class="w-5 h-5" />
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <!-- Type de Transaction -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-3">Type de transaction</label>
              <select 
                v-model="filters.transactionType"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent bg-white text-sm transition-all"
              >
                <option value="all">Tous les types</option>
                <option value="vente">À vendre</option>
                <option value="location">À louer</option>
              </select>
            </div>

            <!-- Localisation -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-3">Localisation</label>
              <select 
                v-model="filters.location"
                class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent bg-white text-sm"
              >
                <option value="all">Toutes les villes</option>
                <option v-for="location in locations" :key="location" :value="location">
                  {{ location }}
                </option>
              </select>
            </div>

            <!-- Budget Maximum -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-3">
                Budget max: <span class="text-[#329393] font-bold">{{ formatPrice(filters.maxPrice) }}</span>
              </label>
              <input
                v-model="filters.maxPrice"
                type="range"
                min="0"
                max="1000000"
                step="10000"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
              <div class="flex justify-between text-xs text-gray-500 mt-2">
                <span>0 $</span>
                <span>1M $</span>
              </div>
            </div>

            <!-- Surface Minimum -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-3">
                Surface min: <span class="text-[#329393] font-bold">{{ filters.minSurface }}m²</span>
              </label>
              <input
                v-model="filters.minSurface"
                type="range"
                min="0"
                max="300"
                step="10"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
              <div class="flex justify-between text-xs text-gray-500 mt-2">
                <span>0m²</span>
                <span>300m²</span>
              </div>
            </div>

            <!-- Nombre de Chambres -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-3">Chambres minimum</label>
              <div class="grid grid-cols-3 gap-2">
                <button
                  v-for="n in 4"
                  :key="n"
                  @click="filters.minBedrooms = n-1"
                  :class="[
                    'py-3 px-2 rounded-lg text-sm font-medium transition-all duration-300',
                    filters.minBedrooms === n-1
                      ? 'bg-[#329393] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  ]"
                >
                  {{ n-1 === 0 ? 'Toutes' : n-1 }}{{ n-1 > 0 ? '+' : '' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Actions des filtres -->
          <div class="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
            <span class="text-sm text-gray-600 font-medium">
              {{ filteredProperties.length }} propriété(s) correspondante(s)
            </span>
            <div class="flex space-x-3">
              <button
                @click="resetAllFilters"
                class="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium border border-gray-300 rounded-lg hover:border-gray-400"
              >
                Tout réinitialiser
              </button>
              <button
                @click="applyAdvancedFilters"
                class="px-6 py-2 bg-[#329393] text-white rounded-lg hover:bg-[#2a7a7a] transition-colors text-sm font-medium shadow-lg hover:shadow-xl"
              >
                Appliquer les filtres
              </button>
            </div>
          </div>
        </div>

        <!-- Indicateurs de Filtres Actifs -->
        <div v-if="activeFiltersCount > 0" class="mt-6 flex flex-wrap items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <span class="text-sm text-blue-800 font-semibold flex items-center">
            <CheckCircleIcon class="w-4 h-4 mr-2" />
            Filtres actifs :
          </span>
          
          <span 
            v-if="filters.transactionType !== 'all'" 
            class="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium"
          >
            {{ filters.transactionType === 'vente' ? 'À vendre' : 'À louer' }}
            <button @click="filters.transactionType = 'all'" class="ml-2 hover:text-blue-900 transition-colors">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
          
          <span 
            v-if="filters.location !== 'all'" 
            class="inline-flex items-center bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium"
          >
            {{ filters.location }}
            <button @click="filters.location = 'all'" class="ml-2 hover:text-green-900 transition-colors">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
          
          <span 
            v-if="filters.maxPrice < 1000000" 
            class="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-sm font-medium"
          >
            Budget: {{ formatPrice(filters.maxPrice) }}
            <button @click="filters.maxPrice = 1000000" class="ml-2 hover:text-purple-900 transition-colors">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
          
          <span 
            v-if="filters.minSurface > 0" 
            class="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-medium"
          >
            Surface: {{ filters.minSurface }}m²+
            <button @click="filters.minSurface = 0" class="ml-2 hover:text-orange-900 transition-colors">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
          
          <span 
            v-if="filters.minBedrooms > 0" 
            class="inline-flex items-center bg-red-100 text-red-800 px-3 py-2 rounded-full text-sm font-medium"
          >
            {{ filters.minBedrooms }}+ chambres
            <button @click="filters.minBedrooms = 0" class="ml-2 hover:text-red-900 transition-colors">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
        </div>
      </div>
    </section>

    <!-- Contenu Principal - Plus d'espace visible -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- En-tête des résultats -->
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center space-x-4 mb-4 lg:mb-0">
          <div class="flex items-center">
            <div class="w-3 h-3 bg-[#329393] rounded-full mr-3"></div>
            <span class="text-xl font-bold text-gray-900">
              {{ filteredProperties.length }} propriété(s) trouvée(s)
            </span>
          </div>
        </div>
        
        <!-- Options de tri -->
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600">Trier par :</span>
          <select 
            v-model="sortBy"
            class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#329393] focus:border-transparent bg-white min-w-[150px]"
          >
            <option value="relevance">Pertinence</option>
            <option value="price_asc">Prix croissant</option>
            <option value="price_desc">Prix décroissant</option>
            <option value="surface_asc">Surface croissante</option>
            <option value="surface_desc">Surface décroissante</option>
            <option value="date_desc">Plus récentes</option>
          </select>
        </div>
      </div>

      <!-- Grille des Propriétés avec plus d'espace -->
      <div 
        v-if="viewMode === 'grid' && displayedProperties.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
      >
        <div
          v-for="(property, index) in displayedProperties"
          :key="property.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
        >
          <!-- Image Section -->
          <div class="relative overflow-hidden">
            <img
              :src="property.image"
              :alt="property.title"
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            <!-- Badges -->
            <div class="absolute top-4 left-4 flex flex-col space-y-2">
              <span
                :class="[
                  'px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm',
                  property.type === 'vente' 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-blue-500/90 text-white'
                ]"
              >
                {{ property.type === 'vente' ? 'À VENDRE' : 'À LOUER' }}
              </span>
              <span 
                v-if="property.surface > 150"
                class="px-2 py-1 bg-[#329393]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold shadow-lg"
              >
                GRAND SURFACE
              </span>
            </div>

            <!-- Prix -->
            <div class="absolute bottom-4 left-4">
              <div class="bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2">
                <div class="text-white font-bold text-lg">
                  {{ formatPrice(property.price, property.type) }}
                </div>
              </div>
            </div>

            <!-- Overlay d'action -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-4">
              <button class="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 bg-white/90 text-gray-900 px-6 py-2 rounded-lg font-semibold text-sm backdrop-blur-sm">
                Voir en détail
              </button>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#329393] transition-colors">
              {{ property.title }}
            </h3>
            
            <div class="flex items-center text-gray-600 mb-4">
              <MapPinIcon class="w-4 h-4 mr-2" />
              <span class="text-sm">{{ property.location }}</span>
            </div>

            <!-- Caractéristiques -->
            <div class="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-100">
              <div class="text-center">
                <div class="text-2xl font-bold text-[#329393]">{{ property.bedrooms }}</div>
                <div class="text-xs text-gray-500">Chambres</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#329393]">{{ property.bathrooms }}</div>
                <div class="text-xs text-gray-500">SDB</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#329393]">{{ property.surface }}m²</div>
                <div class="text-xs text-gray-500">Surface</div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex space-x-3">
              <button class="flex-1 bg-[#329393] text-white py-3 rounded-lg font-semibold hover:bg-[#2a7a7a] transition-colors shadow-lg hover:shadow-xl">
                Contacter
              </button>
              <button class="px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                <HeartIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Vue Liste -->
      <div v-else-if="viewMode === 'list' && displayedProperties.length > 0" class="space-y-6 mb-12">
        <div
          v-for="property in displayedProperties"
          :key="property.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
        >
          <div class="flex flex-col lg:flex-row">
            <div class="lg:w-96 flex-shrink-0">
              <img
                :src="property.image"
                :alt="property.title"
                class="w-full h-64 lg:h-full object-cover"
              />
            </div>
            
            <div class="flex-1 p-8">
              <div class="flex flex-col h-full">
                <div class="flex-1">
                  <div class="flex justify-between items-start mb-4">
                    <span
                      :class="[
                        'px-4 py-2 rounded-full text-sm font-semibold',
                        property.type === 'vente' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      ]"
                    >
                      {{ property.type === 'vente' ? 'À VENDRE' : 'À LOUER' }}
                    </span>
                    <div class="text-3xl font-bold text-[#329393]">
                      {{ formatPrice(property.price, property.type) }}
                    </div>
                  </div>

                  <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#329393] transition-colors">
                    {{ property.title }}
                  </h3>
                  
                  <div class="flex items-center text-gray-600 mb-6">
                    <MapPinIcon class="w-5 h-5 mr-3" />
                    <span class="text-lg">{{ property.location }}</span>
                  </div>

                  <div class="grid grid-cols-4 gap-6 mb-6">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-gray-900">{{ property.bedrooms }}</div>
                      <div class="text-sm text-gray-500">Chambres</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-gray-900">{{ property.bathrooms }}</div>
                      <div class="text-sm text-gray-500">SDB</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-gray-900">{{ property.surface }}m²</div>
                      <div class="text-sm text-gray-500">Surface</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-gray-900">{{ property.parking || 0 }}</div>
                      <div class="text-sm text-gray-500">Parking</div>
                    </div>
                  </div>
                </div>

                <div class="flex space-x-4 pt-6 border-t border-gray-100">
                  <button class="flex-1 bg-[#329393] text-white py-4 rounded-xl font-semibold hover:bg-[#2a7a7a] transition-colors text-lg shadow-lg">
                    Contacter l'agence
                  </button>
                  <button class="px-6 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <HeartIcon class="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chargement -->
      <div v-if="isLoading" class="flex justify-center py-16">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-[#329393]"></div>
      </div>

      <!-- Bouton Charger Plus -->
      <div v-if="hasMoreProperties && !isLoading" class="flex justify-center mt-8">
        <button
          @click="loadMoreProperties"
          class="bg-gradient-to-r from-[#329393] to-[#05b1b1] text-white px-12 py-4 rounded-xl font-semibold hover:from-[#05b1b1] hover:to-[#329393] transition-all duration-500 flex items-center space-x-3 shadow-2xl hover:shadow-3xl transform hover:scale-105"
        >
          <span class="text-lg">Charger plus de propriétés</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>

      <!-- Aucun Résultat -->
      <div v-if="displayedProperties.length === 0 && !isLoading" class="text-center py-20">
        <div class="max-w-md mx-auto">
          <div class="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <MagnifyingGlassIcon class="w-16 h-16 text-gray-400" />
          </div>
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Aucun résultat trouvé</h3>
          <p class="text-gray-600 mb-8 text-lg">Essayez d'ajuster vos critères de recherche pour obtenir plus de résultats.</p>
          <button 
            @click="resetAllFilters"
            class="bg-[#329393] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#2a7a7a] transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </main>

    <FooterComponent/>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  MagnifyingGlassIcon,
  MapPinIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  HeartIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'
//@ts-ignore
import FooterComponent from "@/components/FooterComponent.vue"
//@ts-ignore
import Header from "@/components/Header.vue"

interface Property {
  id: number;
  title: string;
  type: 'vente' | 'location';
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  surface: number;
  parking?: number;
  image: string;
}

// États réactifs
const searchTerm = ref('')
const viewMode = ref<'grid' | 'list'>('grid')
const activeQuickFilter = ref<string>('all')
const isLoading = ref(false)
const showAdvancedFilters = ref(false)
const sortBy = ref('relevance')
const propertiesPerPage = 6
const currentPage = ref(1)

// Filtres avancés
const filters = ref({
  transactionType: 'all',
  location: 'all',
  maxPrice: 1000000,
  minSurface: 0,
  minBedrooms: 0
})

// Données
const allProperties = ref<Property[]>([
  {
    id: 1,
    title: "Villa moderne avec piscine à Gombe",
    type: 'vente',
    price: 450000,
    location: "Gombe, Kinshasa",
    bedrooms: 4,
    bathrooms: 3,
    surface: 180,
    parking: 2,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400"
  },
  // ... autres propriétés
])

const quickFilters = [
  { id: 'all', label: 'Tout voir' },
  { id: 'vente', label: 'À vendre' },
  { id: 'location', label: 'À louer' },
  { id: 'recent', label: 'Nouveautés' },
  { id: 'popular', label: 'Populaires' }
]

const locations = [
  'Gombe', 'Lingwala', 'Kalamu', 'Ngaba', 'Lemba', 
  'Mont Ngafula', 'Selembao', 'Bandalungwa', 'Kasa-Vubu'
]

// Computed properties
const filteredProperties = computed(() => {
  let filtered = allProperties.value

  // Filtre par recherche
  if (searchTerm.value) {
    filtered = filtered.filter(property =>
      property.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  }

  // Filtres avancés
  if (filters.value.transactionType !== 'all') {
    filtered = filtered.filter(property => property.type === filters.value.transactionType)
  }

  if (filters.value.location !== 'all') {
    filtered = filtered.filter(property => property.location.includes(filters.value.location))
  }

  if (filters.value.maxPrice < 1000000) {
    filtered = filtered.filter(property => property.price <= filters.value.maxPrice)
  }

  if (filters.value.minSurface > 0) {
    filtered = filtered.filter(property => property.surface >= filters.value.minSurface)
  }

  if (filters.value.minBedrooms > 0) {
    filtered = filtered.filter(property => property.bedrooms >= filters.value.minBedrooms)
  }

  // Filtre rapide
  if (activeQuickFilter.value === 'vente') {
    filtered = filtered.filter(property => property.type === 'vente')
  } else if (activeQuickFilter.value === 'location') {
    filtered = filtered.filter(property => property.type === 'location')
  }

  // Tri
  switch (sortBy.value) {
    case 'price_asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price_desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'surface_asc':
      filtered.sort((a, b) => a.surface - b.surface)
      break
    case 'surface_desc':
      filtered.sort((a, b) => b.surface - a.surface)
      break
    case 'date_desc':
      filtered.sort((a, b) => b.id - a.id)
      break
  }

  return filtered
})

const displayedProperties = computed(() => {
  const endIndex = currentPage.value * propertiesPerPage
  return filteredProperties.value.slice(0, endIndex)
})

const hasMoreProperties = computed(() => {
  return displayedProperties.value.length < filteredProperties.value.length
})

const totalProperties = computed(() => filteredProperties.value.length)

const activeFiltersCount = computed(() => {
  let count = 0
  if (filters.value.transactionType !== 'all') count++
  if (filters.value.location !== 'all') count++
  if (filters.value.maxPrice < 1000000) count++
  if (filters.value.minSurface > 0) count++
  if (filters.value.minBedrooms > 0) count++
  if (searchTerm.value) count++
  return count
})

// Méthodes
const applyQuickFilter = (filter: { id: string; label: string }) => {
  activeQuickFilter.value = filter.id
  currentPage.value = 1
}

const performSearch = () => {
  currentPage.value = 1
}

const toggleAdvancedFilters = () => {
  showAdvancedFilters.value = !showAdvancedFilters.value
}

const applyAdvancedFilters = () => {
  currentPage.value = 1
  showAdvancedFilters.value = false
}

const resetAllFilters = () => {
  searchTerm.value = ''
  activeQuickFilter.value = 'all'
  filters.value = {
    transactionType: 'all',
    location: 'all',
    maxPrice: 1000000,
    minSurface: 0,
    minBedrooms: 0
  }
  sortBy.value = 'relevance'
  currentPage.value = 1
}

const loadMoreProperties = async () => {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  currentPage.value++
  isLoading.value = false
}

const formatPrice = (price: number, type?: 'vente' | 'location') => {
  if (type === 'location') {
    return `${price.toLocaleString()} $/mois`
  }
  return `${price.toLocaleString()} $`
}

onMounted(() => {
  // Animation d'entrée des cartes
  setTimeout(() => {
    const cards = document.querySelectorAll('.transform')
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('opacity-100', 'translate-y-0')
      }, index * 100)
    })
  }, 100)
})
</script>

<style scoped>
/* Animations d'entrée */
.transform {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.transform.opacity-100.translate-y-0 {
  opacity: 1;
  transform: translateY(0);
}

/* Slider personnalisé */
.slider-thumb::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #329393;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 10px rgba(50, 147, 147, 0.4);
  transition: all 0.3s ease;
}

.slider-thumb::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(50, 147, 147, 0.6);
}

.slider-thumb::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #329393;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 10px rgba(50, 147, 147, 0.4);
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  background: #329393;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #2a7a7a;
}

/* Support reduced motion */
@media (prefers-reduced-motion: reduce) {
  .transform {
    transition: none;
  }
  
  * {
    transition: none !important;
  }
}

/* Amélioration du focus pour l'accessibilité */
button:focus-visible,
select:focus-visible,
input:focus-visible {
  outline: 2px solid #329393;
  outline-offset: 2px;
  border-radius: 6px;
}

/* Responsive amélioré */
@media (max-width: 768px) {
  .grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3 {
    gap: 1.5rem;
  }
  
  .p-6 {
    padding: 1.5rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
}

/* Effets d'ombre améliorés */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
}
</style>