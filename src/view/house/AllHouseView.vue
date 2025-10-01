<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  CurrencyEuroIcon,
  HomeModernIcon,
  FunnelIcon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/vue/24/outline";
import { ref, computed, onMounted, onUnmounted } from 'vue';
//@ts-ignore
import Header from "@/components/Header.vue";
//@ts-ignore
import FooterComponent from "@/components/FooterComponent.vue";
import { useAxiosRequest } from "@/utils/custom";
import type { IProperty } from "@/utils/structure";
import { useTimeAgo } from "@/utils/timenow";
//@ts-ignore
import home_010 from '../../assets/images/home/home_009.jpeg'

// Configuration
const propertiesPerPage = 9;
const currentPage = ref(1);
const loading = ref(true);
const showMobileFilters = ref(false);

// Données
const collectionData = ref<IProperty[]>([]);
const searchTerm = ref('');
const propertyType = ref<'tous' | 'À vendre' | 'À louer'>('tous');
const minBedrooms = ref(0);
const maxPrice = ref(1000000);
const selectedLocation = ref('toutes');
const favoriteProperties = ref<number[]>([]);
const compareProperties = ref<number[]>([]);

// Fetch data
const fetchAllData = async () => {
  try {
    loading.value = true;
    const response = await useAxiosRequest().get(`/maisons/all`);
    collectionData.value = response.data.data;
  } catch (error) {
    console.error('Erreur chargement:', error);
  } finally {
    loading.value = false;
  }
};

// Computed properties
const locations = computed(() => {
  const uniqueLocations = [...new Set(collectionData.value
    .filter(p => p.commune?.name)
    .map(p => p.commune?.name))];
  return ['toutes', ...uniqueLocations];
});

const filteredProperties = computed(() => {
  return collectionData.value.filter(property => {
    const matchesSearch = property.nom.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                         property.commune?.name.toLowerCase().includes(searchTerm.value.toLowerCase());
    
    const matchesType = propertyType.value === 'tous' || 
                       property.status_property?.name === propertyType.value;
    
    const matchesBedrooms = Number(property.chambre) >= minBedrooms.value;
    const matchesPrice = Number(property.prix) <= maxPrice.value;
    const matchesLocation = selectedLocation.value === 'toutes' || property.commune?.name === selectedLocation.value;

    return matchesSearch && matchesType && matchesBedrooms && matchesPrice && matchesLocation;
  });
});

// Pagination computation
const totalPages = computed(() => {
  return Math.ceil(filteredProperties.value.length / propertiesPerPage);
});

const displayedProperties = computed(() => {
  const startIndex = (currentPage.value - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  return filteredProperties.value.slice(startIndex, endIndex);
});

const hasMoreProperties = computed(() => {
  return displayedProperties.value.length < filteredProperties.value.length;
});

const activeFiltersCount = computed(() => {
  let count = 0;
  if (propertyType.value !== 'tous') count++;
  if (minBedrooms.value > 0) count++;
  if (maxPrice.value < 1000000) count++;
  if (selectedLocation.value !== 'toutes') count++;
  if (searchTerm.value) count++;
  return count;
});

// Pagination methods
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    scrollToTop();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    scrollToTop();
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    scrollToTop();
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Generate pagination numbers with ellipsis
const paginationNumbers = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const delta = 2; // Number of pages to show on each side of current page
  const range = [];
  const rangeWithDots = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  let prev = 0;
  for (const i of range) {
    if (prev) {
      if (i - prev === 2) {
        rangeWithDots.push(prev + 1);
      } else if (i - prev !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    prev = i;
  }

  return rangeWithDots;
});

// Méthodes utilitaires
const timeNow = (publishedAt: string) => {
  const { timeAgo } = useTimeAgo(publishedAt);
  return timeAgo;
};

const getAuthorInitials = (authorName: string) => {
  return authorName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

const formatPrice = (price: number, type: string) => {
  if (type === 'À louer') {
    return `${price.toLocaleString()} $/mois`;
  }
  return `${price.toLocaleString()} $`;
};

const pricePerSquareMeter = (property: IProperty) => {
  return Math.round(Number(property.prix) / Number(property.measure));
};

const toggleFavorite = (propertyId: number) => {
  const index = favoriteProperties.value.indexOf(propertyId);
  if (index > -1) {
    favoriteProperties.value.splice(index, 1);
  } else {
    favoriteProperties.value.push(propertyId);
  }
};

const toggleCompare = (propertyId: number) => {
  const index = compareProperties.value.indexOf(propertyId);
  if (index > -1) {
    compareProperties.value.splice(index, 1);
  } else if (compareProperties.value.length < 3) {
    compareProperties.value.push(propertyId);
  }
};

const resetFilters = () => {
  searchTerm.value = '';
  propertyType.value = 'tous';
  minBedrooms.value = 0;
  maxPrice.value = 1000000;
  selectedLocation.value = 'toutes';
  currentPage.value = 1; // Reset to first page when filters are reset
};

// Reset to page 1 when filters change
const applyFilters = () => {
  currentPage.value = 1;
};

// Watch for filter changes and reset to page 1
import { watch } from 'vue'
watch([searchTerm, propertyType, minBedrooms, maxPrice, selectedLocation], () => {
  currentPage.value = 1;
});

// Effet pour fermer les filtres mobiles en cliquant à l'extérieur
onMounted(() => {
  fetchAllData();
  
  document.addEventListener('click', (e) => {
    const filtersPanel = document.getElementById('mobile-filters-panel');
    const filtersButton = document.getElementById('mobile-filters-button');
    
    if (showMobileFilters.value && 
        filtersPanel && 
        !filtersPanel.contains(e.target as Node) && 
        filtersButton && 
        !filtersButton.contains(e.target as Node)) {
      showMobileFilters.value = false;
    }
  });
});

onUnmounted(() => {
  document.removeEventListener('click', () => {});
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    
    <!-- Hero Section -->
    <div class="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-r from-[#1a5f5f] to-[#2F4F4F] py-40 lg:py-50">
      <div class="absolute inset-0">
        <img 
          :src=home_010 
          alt="DWELT - Votre partenaire immobilier de confiance"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#1a5f5f]/80 to-[#2F4F4F]/60"></div>
      </div>
    
      <div class="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div class="max-w-4xl">
          <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Toutes nos <span class="text-white">propriétés</span>
          </h1>
          <p class="text-white/90 text-xl lg:text-2xl font-light max-w-3xl mx-auto">
            Découvrez notre sélection complète de biens immobiliers
          </p>
        </div>
      </div>
    </div>

    <!-- Section Filtres et Recherche -->
    <div class="bg-white border-b shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <!-- Barre de recherche -->
        <div class="relative mb-6">
          <div class="relative max-w-4xl mx-auto">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
            </div>
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Rechercher un bien, une ville, un quartier..."
              class="w-full pl-12 pr-32 py-4 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-[#2F4F4F] focus:shadow-xl transition-all duration-300 text-lg bg-white"
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-4">
              <span class="text-gray-400 text-sm mr-3 hidden md:inline">{{ filteredProperties.length }} résultats</span>
              <button 
                id="mobile-filters-button"
                @click="showMobileFilters = !showMobileFilters"
                class="md:hidden flex items-center bg-[#2F4F4F] text-white px-4 py-2 rounded-xl font-medium"
              >
                <FunnelIcon class="w-4 h-4 mr-1" />
                Filtres
                <span v-if="activeFiltersCount > 0" class="ml-1 bg-white text-[#2F4F4F] rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {{ activeFiltersCount }}
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Filtres avancés - Version desktop -->
        <div class="hidden md:block">
          <div class="bg-white rounded-2xl p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900 flex items-center">
                <AdjustmentsHorizontalIcon class="w-5 h-5 mr-2 text-[#2F4F4F]" />
                Filtres avancés
              </h3>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-500">{{ filteredProperties.length }} propriété(s)</span>
                <button
                  @click="resetFilters"
                  class="text-sm text-gray-500 cursor-pointer hover:text-gray-700 flex items-center transition-colors"
                >
                  <XMarkIcon class="w-4 h-4 mr-1" />
                  Réinitialiser
                </button>
              </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <!-- Type de transaction -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <HomeModernIcon class="w-4 h-4 mr-1" />
                  Transaction
                </label>
                <div class="flex space-x-2">
                  <button
                    @click="propertyType = 'tous'"
                    :class="[
                      'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all',
                      propertyType === 'tous' 
                        ? 'bg-[#2F4F4F] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    ]"
                  >
                    Tous
                  </button>
                  <button
                    @click="propertyType = 'À vendre'"
                    :class="[
                      'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all',
                      propertyType === 'À vendre' 
                        ? 'bg-[#2F4F4F] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    ]"
                  >
                    À vendre
                  </button>
                  <button
                    @click="propertyType = 'À louer'"
                    :class="[
                      'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all',
                      propertyType === 'À louer' 
                        ? 'bg-blue-500 text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    ]"
                  >
                    À louer
                  </button>
                </div>
              </div>

              <!-- Localisation -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <MapPinIcon class="w-4 h-4 mr-1" />
                  Localisation
                </label>
                <select 
                  v-model="selectedLocation"
                  class="w-full border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent bg-white"
                >
                  <option v-for="location in locations" :key="location" :value="location">
                    {{ location === 'toutes' ? 'Toutes les villes' : location }}
                  </option>
                </select>
              </div>

              <!-- Nombre de chambres -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Chambres (min)
                </label>
                <div class="flex space-x-2">
                  <button
                    v-for="n in 5"
                    :key="n"
                    @click="minBedrooms = n-1"
                    :class="[
                      'flex-1 py-2 px-1 rounded-lg text-sm font-medium transition-all',
                      minBedrooms === n-1 
                        ? 'bg-[#2F4F4F] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    ]"
                  >
                    {{ n-1 === 0 ? 'Toutes' : n-1 }}{{ n-1 > 0 ? '+' : '' }}
                  </button>
                </div>
              </div>

              <!-- Budget maximum -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center justify-between">
                  <span class="flex items-center">
                    <CurrencyEuroIcon class="w-4 h-4 mr-1" />
                    Budget max
                  </span>
                  <span class="text-[#2F4F4F] font-semibold">{{ maxPrice.toLocaleString() }} $</span>
                </label>
                <input
                  v-model="maxPrice"
                  type="range"
                  min="0"
                  max="1000000"
                  step="10000"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0 $</span>
                  <span>1M $</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Indicateur de filtres actifs -->
        <div v-if="activeFiltersCount > 0" class="mt-4 flex flex-wrap items-center gap-2">
          <span class="text-sm text-gray-600 font-medium">Filtres actifs :</span>
          
          <span 
            v-if="propertyType !== 'tous'" 
            class="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
          >
            {{ propertyType === 'À vendre' ? 'À vendre' : 'À louer' }}
            <button @click="propertyType = 'tous'" class="ml-1 focus:outline-none">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
          
          <span 
            v-if="minBedrooms > 0" 
            class="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {{ minBedrooms }}+ chambres
            <button @click="minBedrooms = 0" class="ml-1 focus:outline-none">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
          
          <span 
            v-if="maxPrice < 1000000" 
            class="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
          >
            Jusqu'à {{ maxPrice.toLocaleString() }} $
            <button @click="maxPrice = 1000000" class="ml-1 focus:outline-none">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
          
          <span 
            v-if="selectedLocation !== 'toutes'" 
            class="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
          >
            {{ selectedLocation }}
            <button @click="selectedLocation = 'toutes'" class="ml-1 focus:outline-none">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
          
          <span 
            v-if="searchTerm" 
            class="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            "{{ searchTerm }}"
            <button @click="searchTerm = ''" class="ml-1 cursor-pointer focus:outline-none">
              <XMarkIcon class="w-3 h-3" />
            </button>
          </span>
        </div>
      </div>
    </div>

    <!-- Contenu Principal -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- En-tête des résultats -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 p-6 bg-white rounded-2xl shadow-sm">
        <div class="flex items-center space-x-4 mb-4 lg:mb-0">
          <div class="flex items-center">
            <div class="w-3 h-3 bg-[#2F4F4F] rounded-full mr-2"></div>
            <span class="text-lg font-semibold text-gray-900">
              Page {{ currentPage }} sur {{ totalPages }} - 
              {{ displayedProperties.length }} propriétés affichées sur {{ filteredProperties.length }}
            </span>
          </div>
          
          <!-- Indicateur de comparaison -->
          <div v-if="compareProperties.length > 0" class="flex items-center bg-blue-50 px-3 py-1 rounded-full">
            <span class="text-blue-700 text-sm font-medium">
              {{ compareProperties.length }} propriété(s) sélectionnée(s) pour comparaison
            </span>
            <button 
              @click="compareProperties = []"
              class="ml-2 text-blue-500 hover:text-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Sélecteur de page pour mobile -->
        <div class="md:hidden flex items-center space-x-2">
          <span class="text-sm text-gray-600">Page:</span>
          <select 
            v-model="currentPage"
            @change="scrollToTop"
            class="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-[#2F4F4F]"
          >
            <option v-for="page in totalPages" :key="page" :value="page">
              {{ page }}
            </option>
          </select>
          <span class="text-sm text-gray-600">sur {{ totalPages }}</span>
        </div>
      </div>

      <!-- LOADER PENDANT LE CHARGEMENT -->
      <div v-if="loading" class="mb-16">
        <div class="text-center py-16">
          <!-- Spinner animé -->
          <div class="flex justify-center mb-6">
            <div class="relative">
              <!-- Cercle externe -->
              <div class="w-16 h-16 border-4 border-[#2F4F4F]/20 rounded-full"></div>
              <!-- Cercle animé -->
              <div class="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-[#2F4F4F] rounded-full animate-spin"></div>
              <!-- Logo au centre -->
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#2F4F4F] rounded-full"></div>
            </div>
          </div>
          
          <!-- Texte de chargement -->
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-gray-800">Chargement des propriétés</h3>
            <p class="text-gray-600">Nous préparons votre sélection...</p>
          </div>
        </div>
      </div>

      <!-- RÉSULTATS AVEC CARDS MODERNES -->
      <div v-else-if="displayedProperties.length > 0" class="mb-16">
        <!-- Grille des propriétés modernisée -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div
            v-for="(property, index) in displayedProperties"
            :key="property.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group opacity-0 transform translate-y-8 card-appear"
            :style="`transition-delay: ${index * 100}ms; animation-delay: ${index * 100}ms`"
          >
            <!-- En-tête de la carte avec image et overlay -->
            <div class="relative overflow-hidden">
              
              <div class="absolute inset-0 bg-black/20 z-10"></div>
              
              <img
                :src="property.images[0]?.nom || '/placeholder-property.jpg'"
                :alt="property.nom"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <!-- Contenu superposé sur l'image -->
              <div class="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white">
                <!-- En-tête supérieur -->
                <div class="flex justify-between items-start">
                  <!-- Badges -->
                  <div class="flex flex-col space-y-2">
                    <span
                      :class="[
                        'px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm',
                        property.status_property?.name === 'À vendre' 
                          ? 'bg-[#2F4F4F]' 
                          : 'bg-blue-500/90'
                      ]"
                    >
                      {{ property.status_property?.name === 'À vendre' ? 'À VENDRE' : 'À LOUER' }}
                    </span>
                    <span 
                      v-if="Number(property.garage) > 0"
                      class="px-2 py-1 bg-[#2F4F4F] backdrop-blur-sm text-white rounded-full text-xs font-semibold shadow-lg"
                    >
                      PARKING
                    </span>
                  </div>
                  
                  <!-- Actions utilisateur -->
                  <div class="flex space-x-2">
                    <!-- Favori -->
                    <button
                      @click.stop="toggleFavorite(property.id)"
                      :class="[
                        'w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300',
                        favoriteProperties.includes(property.id)
                          ? 'bg-red-500 text-white shadow-lg'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      ]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              :fill="favoriteProperties.includes(property.id) ? 'currentColor' : 'none'"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                      </svg>
                    </button>
                    
                    <!-- Comparaison -->
                    <button
                      @click.stop="toggleCompare(property.id)"
                      :class="[
                        'w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300',
                        compareProperties.includes(property.id)
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      ]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                              d="M3 9h14M3 15h14m2 0a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h14z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Titre et prix superposés -->
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white drop-shadow-lg line-clamp-2">
                    {{ property.nom }}
                  </h3>
                  <div class="flex items-center justify-between">
                    <div class="text-2xl font-bold text-white drop-shadow-lg">
                      {{ formatPrice(Number(property.prix), String(property.status_property?.name)) }}
                    </div>
                    <div v-if="property.status_property?.name === 'À vendre'" class="text-sm text-white/90 drop-shadow-lg">
                      {{ pricePerSquareMeter(property) }} $/m²
                    </div>
                  </div>
                </div>
              </div>

              <!-- Overlay avec bouton pour desktop -->
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end z-30 hidden lg:flex">
                <div class="w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <router-link 
                    :to="`/detail/${property.id}`"
                    class="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-3 rounded-lg font-semibold text-sm hover:bg-white transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    Voir en détail
                  </router-link>
                </div>
              </div>
            </div>
            
            <!-- Corps de la carte -->
            <div class="p-5">
              <!-- Localisation et auteur -->
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center text-gray-600 flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="text-sm truncate">{{ property.commune?.name || 'Localisation non précisée' }}</span>
                </div>
                
                <!-- Auteur -->
                <div class="flex items-center space-x-2 ml-3">
                  <div class="w-8 h-8 bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] rounded-full flex items-center justify-center">
                    <span class="text-white text-xs font-bold">{{ getAuthorInitials(String(property.agent?.nom || 'AG')) }}</span>
                  </div>
                  <span class="text-xs text-gray-500 hidden sm:block">Par {{ property.agent?.nom || 'Agent' }}</span>
                </div>
              </div>
              
              <!-- Caractéristiques principales avec animation -->
              <div class="grid grid-cols-4 gap-2 mb-4 py-3 border-y border-gray-100">
                <!-- Chambres -->
                <div class="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300">
                  <div class="flex items-center justify-center w-10 h-10 bg-yellow-50 rounded-xl mx-auto mb-2 group-hover:bg-yellow-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#2F4F4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  </div>
                  <div class="text-lg font-bold text-gray-900">{{ property.chambre || 0 }}</div>
                  <div class="text-xs text-gray-500">Chambres</div>
                </div>
                
                <!-- Salles de bain -->
                <div class="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300 delay-75">
                  <div class="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-xl mx-auto mb-2 group-hover:bg-blue-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="text-lg font-bold text-gray-900">{{ property.salleBain || 0 }}</div>
                  <div class="text-xs text-gray-500">SDB</div>
                </div>
                
                <!-- Surface -->
                <div class="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300 delay-150">
                  <div class="flex items-center justify-center w-10 h-10 bg-green-50 rounded-xl mx-auto mb-2 group-hover:bg-green-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"/>
                    </svg>
                  </div>
                  <div class="text-lg font-bold text-gray-900">{{ property.superficie || 0 }}</div>
                  <div class="text-xs text-gray-500">m²</div>
                </div>
                
                <!-- Parking -->
                <div class="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300 delay-225">
                  <div class="flex items-center justify-center w-10 h-10 bg-purple-50 rounded-xl mx-auto mb-2 group-hover:bg-purple-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                    </svg>
                  </div>
                  <div class="text-lg font-bold text-gray-900">{{ property.garage || 0 }}</div>
                  <div class="text-xs text-gray-500">Parking</div>
                </div>
              </div>

              <!-- Caractéristiques supplémentaires -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-if="property.garage && property.garage > 0" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  Garage
                </span>
                <span v-if="property.jardin" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>
                  </svg>
                  Jardin
                </span>
                <span v-if="property.piscine" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Piscine
                </span>
                <span v-if="property.terrasse" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                  Terrasse
                </span>
                <span v-if="property.balcon" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  </svg>
                  Balcon
                </span>
              </div>
              
              <!-- CTA et informations -->
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <!-- Statut de publication -->
                  <span class="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Disponible
                  </span>
                </div>
                
                <!-- Note/étoiles (optionnel) -->
                <div class="flex items-center space-x-1">
                  <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>

              <!-- Bouton Voir en détail pour mobile (toujours visible) -->
              <div class="lg:hidden mt-4">
                <router-link 
                  :to="`/detail/${property.id}`"
                  class="w-full bg-[#2F4F4F] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#2a7a7a] transition-all flex items-center justify-center"
                >
                  Voir en détail
                </router-link>
              </div>
            </div>
            
            <!-- Pied de carte -->
            <div class="px-5 py-3 bg-gray-50 border-t border-gray-100">
              <div class="flex items-center justify-between text-xs text-gray-500">
                <span class="font-mono">#DW{{ property.id.toString().padStart(4, '0') }}</span>
                <span class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Publiée {{ timeNow(property.created_at) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- PAGINATION -->
        <div v-if="totalPages > 1" class="mt-12 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <!-- Informations de pagination -->
          <div class="text-sm text-gray-600">
            Affichage de <span class="font-semibold">{{ ((currentPage - 1) * propertiesPerPage) + 1 }}</span>
            à <span class="font-semibold">{{ Math.min(currentPage * propertiesPerPage, filteredProperties.length) }}</span>
            sur <span class="font-semibold">{{ filteredProperties.length }}</span> propriétés
          </div>

          <!-- Contrôles de pagination -->
          <div class="flex items-center space-x-2">
            <!-- Bouton Précédent -->
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              :class="[
                'flex items-center px-4 py-2 rounded-lg border transition-all duration-300',
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-[#2F4F4F] hover:text-white hover:border-[#2F4F4F] hover:shadow-md'
              ]"
            >
              <ChevronLeftIcon class="w-4 h-4 mr-1" />
              <span class="hidden sm:inline">Précédent</span>
            </button>

            <!-- Numéros de page -->
            <div class="flex items-center space-x-1">
              <button
                v-for="page in paginationNumbers"
                :key="page"
                @click="page !== '...' ? goToPage(page as number) : null"
                :class="[
                  'flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-300 text-sm font-medium',
                  page === '...'
                    ? 'bg-transparent text-gray-500 border-transparent cursor-default'
                    : page === currentPage
                    ? 'bg-[#2F4F4F] text-white border-[#2F4F4F] shadow-md transform scale-105'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-[#2F4F4F] hover:text-[#2F4F4F]'
                ]"
                :disabled="page === '...'"
              >
                {{ page }}
              </button>
            </div>

            <!-- Bouton Suivant -->
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              :class="[
                'flex items-center px-4 py-2 rounded-lg border transition-all duration-300',
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-[#2F4F4F] hover:text-white hover:border-[#2F4F4F] hover:shadow-md'
              ]"
            >
              <span class="hidden sm:inline">Suivant</span>
              <ChevronRightIcon class="w-4 h-4 ml-1" />
            </button>
          </div>

          <!-- Sélecteur de page pour desktop -->
          <div class="hidden md:flex items-center space-x-2">
            <span class="text-sm text-gray-600">Aller à la page:</span>
            <select 
              v-model="currentPage"
              @change="scrollToTop"
              class="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent"
            >
              <option v-for="page in totalPages" :key="page" :value="page">
                {{ page }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Aucun Résultat -->
      <div v-else-if="!loading" class="text-center py-20">
        <div class="max-w-md mx-auto">
          <div class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <MagnifyingGlassIcon class="w-16 h-16 text-gray-400" />
          </div>
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Aucun résultat trouvé</h3>
          <p class="text-gray-600 mb-8 text-lg">Essayez d'ajuster vos critères de recherche pour obtenir plus de résultats.</p>
          <button 
            @click="resetFilters"
            class="bg-[#2F4F4F] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#2a7a7a] transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </main>

    <!-- Filtres mobiles - Panel overlay -->
    <div 
      v-if="showMobileFilters"
      id="mobile-filters-panel"
      class="fixed inset-0 z-50 md:hidden"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50" @click="showMobileFilters = false"></div>
      <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl max-h-[85vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold text-gray-900">Filtres</h3>
            <button @click="showMobileFilters = false" class="p-2 rounded-full bg-gray-100">
              <XMarkIcon class="w-5 h-5" />
            </button>
          </div>
          
          <!-- Type de transaction -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-3">Type de transaction</label>
            <div class="grid grid-cols-3 gap-2">
              <button
                @click="propertyType = 'tous'"
                :class="[
                  'py-3 px-2 rounded-xl text-sm font-medium transition-all',
                  propertyType === 'tous' 
                    ? 'bg-[#2F4F4F] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700'
                ]"
              >
                Tous
              </button>
              <button
                @click="propertyType = 'À vendre'"
                :class="[
                  'py-3 px-2 rounded-xl text-sm font-medium transition-all',
                  propertyType === 'À vendre' 
                    ? 'bg-[#2F4F4F] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700'
                ]"
              >
                Vente
              </button>
              <button
                @click="propertyType = 'À louer'"
                :class="[
                  'py-3 px-2 rounded-xl text-sm font-medium transition-all',
                  propertyType === 'À louer' 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700'
                ]"
              >
                Location
              </button>
            </div>
          </div>
          
          <!-- Localisation -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
            <select 
              v-model="selectedLocation"
              class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent bg-white"
            >
              <option v-for="location in locations" :key="location" :value="location">
                {{ location === 'toutes' ? 'Toutes les villes' : location }}
              </option>
            </select>
          </div>
          
          <!-- Nombre de chambres -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-3">Chambres minimum</label>
            <div class="grid grid-cols-5 gap-2">
              <button
                v-for="n in 5"
                :key="n"
                @click="minBedrooms = n-1"
                :class="[
                  'py-3 px-2 rounded-xl text-sm font-medium transition-all',
                  minBedrooms === n-1 
                    ? 'bg-[#2F4F4F] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700'
                ]"
              >
                {{ n-1 === 0 ? 'Toutes' : n-1 }}{{ n-1 > 0 ? '+' : '' }}
              </button>
            </div>
          </div>
          
          <!-- Budget maximum -->
          <div class="mb-8">
            <label class="block text-sm font-medium text-gray-700 mb-3 flex justify-between">
              <span>Budget maximum</span>
              <span class="text-[#2F4F4F] font-semibold">{{ maxPrice.toLocaleString() }} $</span>
            </label>
            <input
              v-model="maxPrice"
              type="range"
              min="0"
              max="1000000"
              step="10000"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb accent-[#2F4F4F]"
            />
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>0 $</span>
              <span>1M $</span>
            </div>
          </div>
          
          <!-- Boutons d'action -->
          <div class="grid grid-cols-2 gap-4">
            <button
              @click="resetFilters"
              class="py-3 px-4 border border-gray-300 rounded-xl text-gray-700 font-medium"
            >
              Réinitialiser
            </button>
            <button
              @click="showMobileFilters = false"
              class="py-3 px-4 bg-[#2F4F4F] text-white rounded-xl font-medium shadow-md"
            >
              Afficher les résultats
            </button>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<style scoped>
/* Animation pour l'apparition des cartes */
@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-appear {
  animation: cardAppear 0.6s ease-out forwards;
}

/* Style personnalisé pour le range input */
.slider-thumb {
  -webkit-appearance: none;
  background: linear-gradient(to right, #2F4F4F, #2F4F4F);
  background-size: 0% 100%;
  background-repeat: no-repeat;
}

.slider-thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  background: #2F4F4F;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: all 0.2s ease;
}

.slider-thumb::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.slider-thumb::-moz-range-thumb {
  width: 22px;
  height: 22px;
  background: #2F4F4F;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: all 0.2s ease;
}

.slider-thumb::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.slider-thumb::-webkit-slider-track {
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
}

.slider-thumb::-moz-range-track {
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
  border: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Transition pour le panel mobile */
.mobile-panel-enter-active,
.mobile-panel-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-panel-enter-from,
.mobile-panel-leave-to {
  opacity: 0;
}

.mobile-panel-content-enter-active,
.mobile-panel-content-leave-active {
  transition: transform 0.3s ease;
}

.mobile-panel-content-enter-from,
.mobile-panel-content-leave-to {
  transform: translateY(100%);
}

/* Styles pour la pagination */
.pagination-button:hover {
  transform: translateY(-1px);
}
</style>