<script setup lang="ts">
import {
  ShieldCheckIcon,
  SparklesIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  CurrencyEuroIcon,
  HomeModernIcon,
  FunnelIcon,
  XMarkIcon,
  AdjustmentsHorizontalIcon
} from "@heroicons/vue/24/outline";
import { ref, computed, onMounted,onUnmounted } from 'vue';
//@ts-ignore
import HouseSection from "@/components/house/HouseSection.vue";
//@ts-ignore
import Team from "@/components/Team.vue";
//@ts-ignore
import Header from "@/components/Header.vue"
//@ts-ignore
import TestimonyComponent from "@/components/TestimonyComponent.vue";
//@ts-ignore
import FaqComponent from "@/components/FaqComponent.vue";
//@ts-ignore
import CtaComponent from "@/components/CtaComponent.vue";
//@ts-ignore
import PartenaireComponent from "@/components/PartenaireComponent.vue";
//@ts-ignore
import FooterComponent from "@/components/FooterComponent.vue";




import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

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

// Données des slides promotionnelles
const promotionalSlides = ref([
  {
    image: fassade,
    badge: '🏢 Présentation Dwelt',
    badgeClass: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30',
    title: 'Découvrez Dwelt grâce au QR Code',
    description: 'Scannez le QR code et accédez à la présentation complète de Dwelt : notre mission, nos services et notre vision de l’immobilier moderne.',
    discount: 'Accès instantané',
    features: [
      'Présentation interactive de l’entreprise',
      'Nos solutions innovantes pour la recherche immobilière',
      'Accès rapide aux contacts et supports',
      'Découvrez notre équipe et nos projets phares'
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: '🔥 Nouveauté',
    badgeClass: 'bg-red-500/20 text-red-300 border-red-400/30',
    title: 'Appartement Design Centre-Ville',
    description: 'Investissement locatif exceptionnel avec rendement garanti de 5%',
    discount: '5% ROI',
    features: [
      'Surface: 85m² - 3 pièces',
      'Terrasse panoramique',
      'Parking inclus',
      'Proche transports'
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: '💫 Coup de Cœur',
    badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
    title: 'Maison Familiale Moderne',
    description: 'Financement avantageux avec apport réduit et taux préférentiel',
    discount: '-20%',
    features: [
      'Surface: 150m² - 5 pièces',
      'Double garage',
      'Jardin arboré',
      'Équipement haut de gamme'
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: '🚀 Investissement',
    badgeClass: 'bg-green-500/20 text-green-300 border-green-400/30',
    title: 'Loft Industriel Exceptionnel',
    description: 'Opportunité unique dans quartier en pleine renaissance',
    discount: 'Offre Flash',
    features: [
      'Surface: 200m² - Espace ouvert',
      'Hauteur sous plafond 4m',
      'Parking sécurisé',
      'Projet rentable'
    ]
  }
])

// Stats supplémentaires
const stats = ref([
  { value: '50+', label: 'Clients satisfaits' },
  { value: '24h', label: 'Support dédié' },
  { value: '4.9/5', label: 'Satisfaction client' }
])

// Références Swiper
const swiperInstance = ref<any>(null)
const activeSlide = ref(0)
const progress = ref(0)

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
}

const onSlideChange = () => {
  if (swiperInstance.value) {
    activeSlide.value = swiperInstance.value.realIndex
    updateProgress()
  }
}

const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

// Animation de progression
let progressInterval: NodeJS.Timeout

const updateProgress = () => {
  progress.value = 0
  const duration = 5000 // 5 secondes
  const steps = 100
  const increment = 100 / (duration / steps)
  
  clearInterval(progressInterval)
  
  progressInterval = setInterval(() => {
    progress.value += increment
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(progressInterval)
    }
  }, steps)
}

onMounted(() => {
  updateProgress()
})

onUnmounted(() => {
  clearInterval(progressInterval)
})












// Types pour les propriétés
interface Property {
  id: number;
  title: string;
  type: 'vente' | 'location';
  price: number;
  daysAgo:string;
  views:string;
  location: string;
  author:string;
  bedrooms: number;
  bathrooms: number;
  parking: number,
  garage: boolean,
  garden: boolean,
  pool: boolean,
  terrace: boolean,
  balcony: boolean,
  elevator: boolean,
  surface: number;
  image: string;
}

const getAuthorInitials = (authorName: string) => {
  return authorName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

// Données simulées des propriétés
const properties: Property[] = [
  {
    id: 1,
    title: "Villa moderne avec piscine",
    type: 'vente',
    price: 450000,
    daysAgo:"2",
    views:"140",
    location: "Lemba",
    bedrooms: 4,
    author:'Farah',
    bathrooms: 3,
    surface: 180,
    parking: 1,
    garage: true,
    garden: false,
    pool: false,
    terrace: true,
    balcony: true,
    elevator: true,
    image: home_001
  },
  {
    id: 2,
    title: "Appartement lumineux centre-ville",
    type: 'location',
    price: 1200,
    daysAgo:"2",
    views:"140",
    location: "Ngaba",
    author:'Farah',
    bedrooms: 2,
    bathrooms: 1,
    surface: 65,
    parking: 1,
    garage: true,
    garden: false,
    pool: false,
    terrace: true,
    balcony: true,
    elevator: true,
    image: home_002
  },
  {
    id: 3,
    title: "Maison de caractère avec jardin",
    type: 'vente',
    price: 320000,
    location: "Gombe",
    daysAgo:"2",
    views:"140",
    author:'Farah',
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    garage: true,
    garden: false,
    pool: false,
    terrace: true,
    balcony: true,
    elevator: true,
    surface: 120,
    image: home_003
  },
  {
    id: 4,
    title: "Studio étudiant proche université",
    type: 'location',
    price: 650,
    location: "Ngaliema",
    author:'Farah',
    daysAgo:"2",
    views:"140",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    garage: true,
    garden: false,
    pool: false,
    terrace: true,
    balcony: true,
    elevator: true,
    surface: 25,
    image: home_004
  },
  {
    id: 5,
    title: "Loft industriel exceptionnel",
    type: 'vente',
    price: 750000,
    location: "Kintambo",
    author:'Farah',
    daysAgo:"2",
    views:"140",
    parking: 1,
    garage: true,
    garden: false,
    pool: false,
    terrace: true,
    balcony: true,
    elevator: true,
    bedrooms: 3,
    bathrooms: 2,
    surface: 200,
    image: home_005
  },
  {
    id: 6,
    title: "Appartement familial calme",
    type: 'location',
    price: 1500,
    location: "Barumbu",
    author:'Farah',
    daysAgo:"2",
    views:"140",
    parking: 1,
    garage: true,
    garden: false,
    pool: false,
    terrace: true,
    balcony: true,
    elevator: true,
    bedrooms: 4,
    bathrooms: 2,
    surface: 95,
    image: home_006
  }
];

// États des filtres
const searchTerm = ref('');
const propertyType = ref<'tous' | 'vente' | 'location'>('tous');
const minBedrooms = ref(0);
const maxPrice = ref(1000000);
const selectedLocation = ref('toutes');

const contactAdvisor = () => {
  // Logique pour contacter un conseiller
  console.log('Contact conseiller')
}

// Extraire les localisations uniques
const locations = computed(() => {
  const uniqueLocations = [...new Set(properties.map(p => p.location))];
  return ['toutes', ...uniqueLocations];
});

// Propriétés filtrées
const filteredProperties = computed(() => {
  return properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.value.toLowerCase());
    const matchesType = propertyType.value === 'tous' || property.type === propertyType.value;
    const matchesBedrooms = property.bedrooms >= minBedrooms.value;
    const matchesPrice = property.price <= maxPrice.value;
    const matchesLocation = selectedLocation.value === 'toutes' || property.location === selectedLocation.value;

    return matchesSearch && matchesType && matchesBedrooms && matchesPrice && matchesLocation;
  });
});

// États pour les fonctionnalités avancées
const favoriteProperties = ref<number[]>([]);
const compareProperties = ref<number[]>([]);
const quickViewProperty = ref<Property | null>(null);

// Fonction pour basculer les favoris
const toggleFavorite = (propertyId: number) => {
  const index = favoriteProperties.value.indexOf(propertyId);
  if (index > -1) {
    favoriteProperties.value.splice(index, 1);
  } else {
    favoriteProperties.value.push(propertyId);
  }
};

// Fonction pour basculer la comparaison
const toggleCompare = (propertyId: number) => {
  const index = compareProperties.value.indexOf(propertyId);
  if (index > -1) {
    compareProperties.value.splice(index, 1);
  } else if (compareProperties.value.length < 3) {
    compareProperties.value.push(propertyId);
  }
};

// Fonction pour formater le prix
const formatPrice = (price: number, type: 'vente' | 'location') => {
  if (type === 'location') {
    return `${price.toLocaleString()} $/mois`;
  }
  return `${price.toLocaleString()} $`;
};

// Calculer le prix au m²
const pricePerSquareMeter = (property: Property) => {
  return Math.round(property.price / property.surface);
};

// Réinitialiser les filtres
const resetFilters = () => {
  searchTerm.value = '';
  propertyType.value = 'tous';
  minBedrooms.value = 0;
  maxPrice.value = 1000000;
  selectedLocation.value = 'toutes';
};


const showMobileFilters = ref(false);
const activeFiltersCount = computed(() => {
  let count = 0;
  if (propertyType.value !== 'tous') count++;
  if (minBedrooms.value > 0) count++;
  if (maxPrice.value < 1000000) count++;
  if (selectedLocation.value !== 'toutes') count++;
  if (searchTerm.value) count++;
  return count;
});

// Animation d'entrée des cartes
const cardEnter = (el: Element) => {
  el.classList.add('opacity-0', 'transform', 'translate-y-8');
  setTimeout(() => {
    el.classList.add('transition-all', 'duration-500', 'ease-out');
    el.classList.remove('opacity-0', 'translate-y-8');
  }, 10);
};

// Effet pour fermer les filtres mobiles en cliquant à l'extérieur
onMounted(() => {
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
</script>

<template>
  <Header/>
  <div
  class="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
  :style="{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('https://dweltimmo.net/wp-content/uploads/2025/07/IMG-20250702-WA0203-592x444.jpg')`
  }"
>
  <div class="max-w-screen-xl px-6 lg:px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20 py-32 lg:16">
    <!-- Texte -->
    <div class="flex flex-col justify-center text-center lg:text-left space-y-8">
      <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight animate-fadeInUp">
        L'agence immobilière
        <span class="text-[#329393]">nouvelle génération</span>
      </h1>
      <p class="text-lg md:text-2xl text-gray-200 leading-relaxed animate-fadeInUp animate-delay-200">
        Révolutionnant le marché avec une expertise pointue et une approche innovante.<br/>
        <span class="font-semibold text-white">Votre futur chez-vous commence ici.</span>
      </p>
    <div class="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start animate-fadeInUp animate-delay-400">
      <button class="w-64 cursor-pointer bg-[#329393] hover:bg-[#287373] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all transform hover:scale-105">
        Rechercher
      </button>
    </div>
    </div>

    <!-- Image avec déco flottante -->
    <div class="relative flex justify-center items-center">
      <!-- Halo lumineux -->
      <div class="absolute w-72 h-72 bg-[#329393] opacity-30 rounded-full blur-3xl z-0"></div>

      <img
        class="relative z-10 max-w-xs md:max-w-sm lg:max-w-md rounded-2xl drop-shadow-2xl animate-float"
        src="https://pngimg.com/d/house_PNG50.png"
        alt="Maison"
      />

      <!-- Déco animée -->
      <div class="absolute w-8 h-8 bg-[#329393] rounded-full animate-ping top-6 right-10"></div>
      <div class="absolute w-6 h-6 bg-[#40b3b3] rounded-full animate-bounce bottom-10 left-8"></div>
      <div class="absolute w-4 h-4 bg-[#62dcdc] rounded-full animate-pulse top-20 left-20"></div>
      <div class="absolute w-5 h-5 bg-[#287373] rounded-full animate-ping bottom-28 right-16"></div>
    </div>
  </div>

  <!-- Déco supplémentaire : vague + cercle -->
  <div class="absolute bottom-0 left-0 right-0 text-white">
    <svg class="w-full h-28 lg:h-48" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
        fill="currentColor"
      />
    </svg>
  </div>

  <!-- Cercle décoratif fixe -->
  <div class="absolute top-20 left-10 w-32 h-32 border-4 border-[#329393] opacity-30 rounded-full animate-spin-slow"></div>
</div>


    <!-- SECTION AVANTAGES ethberg-->
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8">
    <!-- Fond animé avec particules subtiles -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob-slow"></div>
      <div class="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob-fast"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIj48L3JlY3Q+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48L2xpbmVhckdyYWRpZW50Pjwvc3ZnPg==')] opacity-10"></div>
    </div>

    <!-- Conteneur principal -->
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- En-tête avec badge -->
      <div class="text-center mb-16">
        <div class="text-center mb-12">

        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <span class="block bg-clip-text text-cyan-600 bg-gradient-to-r from-emerald-600 to-cyan-600">
              Pourquoi dwelt est un meilleur choix
          </span>
          <span class="block mt-2">dans l'immobilier en RDC</span>
        </h1>

        <p class="max-w-3xl mx-auto text-xl text-gray-600">
           Dwelt transforme votre expérience immobilière avec transparence, innovation et solutions personnalisées.
        </p>




        </div>


      </div>

      <!-- Grille de fonctionnalités avec effets 3D -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <!-- Carte 1: Transparence et confiance -->
        <div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-2 transform perspective-1000">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10 transform group-hover:translate-y-[-5px] transition-transform duration-500">
            <div class="flex items-center justify-between mb-6">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <svg class="h-7 w-7 text-[#329393]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.044M12 20v-8m0 8l2 2m-2-2l-2 2" />
                </svg>
              </div>
              <span class="text-2xl font-bold text-gray-300">01.</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Transparence et confiance</h3>
            <p class="text-gray-600 mb-6">Dwelt place la transparence au cœur de ses services, en fournissant des informations claires et fiables à chaque étape.</p>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-[#329393] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Informations claires et fiables</span>
              </div>
              <div class="flex items-center">
                <svg class="h-5 w-5 text-[#329393] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Aucune mauvaise surprise</span>
              </div>
              <div class="flex items-center">
                <svg class="h-5 w-5 text-[#329393] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Relation de confiance durable</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte 2: Innovation (highlight) -->
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#329393] to-[#329393] p-8 text-white shadow-lg transform perspective-1000 hover:scale-[1.02] transition-transform duration-500">
          <div class="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
          <div class="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-white/5 blur-xl"></div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-6">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="text-2xl font-bold text-white/70">02.</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Innovation pour simplifier l'immobilier</h3>
            <p class="text-blue-100 mb-6">Grâce à des outils technologiques modernes et des processus simplifiés, Dwelt rend vos démarches immobilières rapides et efficaces.</p>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>Outils technologiques modernes</span>
              </div>
              <div class="flex items-center">
                <svg class="h-5 w-5 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Processus simplifiés</span>
              </div>
              <div class="flex items-center">
                <svg class="h-5 w-5 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Expérience fluide et professionnelle</span>
              </div>
            </div>
            <div class="mt-8 pt-6 border-t border-white/20">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-3xl font-bold text-white">100%</p>
                  <p class="text-sm text-blue-100">Satisfaction client</p>
                </div>
                <div>
                  <p class="text-3xl font-bold text-white">50%</p>
                  <p class="text-sm text-blue-100">De temps gagné</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte 3: Solutions personnalisées -->
        <div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-2 transform perspective-1000">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10 transform group-hover:translate-y-[-5px] transition-transform duration-500">
            <div class="flex items-center justify-between mb-6">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100">
                <svg class="h-7 w-7 text-[#329393]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span class="text-2xl font-bold text-gray-300">03.</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Solutions personnalisées et humaines</h3>
            <p class="text-gray-600 mb-6">Chaque projet est unique, et Dwelt le comprend parfaitement. Nous adaptons nos stratégies selon vos besoins.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="h-5 w-5 text-[#329393] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Approche sur mesure</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-[#329393] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>Accompagnement personnalisé</span>
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-[#329393] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Stratégies adaptées à vos ambitions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION CAROUSEL PUBLICITAIRE -->



  <section class="relative w-full overflow-hidden">
  <div class="relative w-full">
    
    <!-- Navigation -->
    <button 
      @click="slidePrev"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>
    
    <button 
      @click="slideNext"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>

    <!-- Swiper -->
    <swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true, el: '.custom-pagination' }"
      :speed="700"
      class="w-full h-auto"
    >
      <swiper-slide v-for="(slide, index) in promotionalSlides" :key="index">
        <!-- Bannière avec image -->
        <div 
          class="relative w-full h-[22rem] lg:h-[26rem] bg-cover bg-center flex items-center"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <!-- Bloc texte avec overlay local -->
          <div class="relative z-10 max-w-2xl ml-8 lg:ml-20 px-6 py-8 bg-black/60 backdrop-blur-sm rounded-xl">
            <div class="inline-block bg-white/10 px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-white/20 text-white">
              Nouveau
            </div>
            <h3 class="text-2xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              {{ slide.title }}
            </h3>
            <p class="text-base lg:text-lg text-white/90 mb-4">
              {{ slide.description }}
            </p>
          </div>

          <!-- Index -->
          <div class="absolute bottom-4 right-6 text-white/70 text-xs font-mono">
            0{{ index + 1 }} / 0{{ promotionalSlides.length }}
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Pagination -->
    <div class="custom-pagination flex justify-center mt-4 space-x-3"></div>
  </div>
</section>



  <!-- SECTION RECHERCHE ET FILTRES AMÉLIORÉE -->
  <div class="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-10">
    <div class="container mx-auto px-4 lg:px-4 max-w-7xl my-8 lg:my-5">
      <!-- En-tête amélioré -->
       
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Explorez notre <span class="text-[#329393]">sélection exclusive</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez des biens immobiliers soigneusement sélectionnés selon vos critères
        </p>
      </div>

      <!-- Barre de recherche améliorée -->
      <div class="relative mb-8">
        <div class="relative max-w-3xl mx-auto">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" />
          </div>
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Rechercher un bien, une ville, un quartier..."
            class="w-full pl-12 pr-32 py-4 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-[#329393] focus:shadow-xl transition-all duration-300 text-lg bg-white"
          />
          <div class="absolute inset-y-0 right-0 flex items-center pr-4">
            <span class="text-gray-400 text-sm mr-3 hidden md:inline">{{ filteredProperties.length }} résultats</span>
            <button 
              id="mobile-filters-button"
              @click="showMobileFilters = !showMobileFilters"
              class="md:hidden flex items-center bg-[#329393] text-white px-4 py-2 rounded-xl font-medium"
            >
              <FunnelIcon class="w-4 h-4 mr-1" />
              Filtres
              <span v-if="activeFiltersCount > 0" class="ml-1 bg-white text-[#329393] rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {{ activeFiltersCount }}
              </span>
            </button>
            <button class="hidden md:flex items-center bg-[#329393] hover:bg-[#329393] text-white px-4 py-2 rounded-xl font-medium transition-colors">
              <MagnifyingGlassIcon class="w-4 h-4 mr-1" />
              Rechercher
            </button>
          </div>
        </div>
      </div>

      <!-- Filtres avancés - Version desktop -->
      <div class="hidden md:block mb-8">
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 flex items-center">
              <AdjustmentsHorizontalIcon class="w-5 h-5 mr-2 text-[#329393]" />
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
                      ? 'bg-[#329393] text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  ]"
                >
                  Tous
                </button>
                <button
                  @click="propertyType = 'vente'"
                  :class="[
                    'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all',
                    propertyType === 'vente' 
                      ? 'bg-[#329393] text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  ]"
                >
                  À vendre
                </button>
                <button
                  @click="propertyType = 'location'"
                  :class="[
                    'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all',
                    propertyType === 'location' 
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
                class="w-full border border-gray-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#329393] focus:border-transparent bg-white"
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
                      ? 'bg-[#329393] text-white shadow-md' 
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
                <span class="text-[#329393] font-semibold">{{ maxPrice.toLocaleString() }} $</span>
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
                      ? 'bg-[#329393] text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700'
                  ]"
                >
                  Tous
                </button>
                <button
                  @click="propertyType = 'vente'"
                  :class="[
                    'py-3 px-2 rounded-xl text-sm font-medium transition-all',
                    propertyType === 'vente' 
                      ? 'bg-[#329393] text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700'
                  ]"
                >
                  Vente
                </button>
                <button
                  @click="propertyType = 'location'"
                  :class="[
                    'py-3 px-2 rounded-xl text-sm font-medium transition-all',
                    propertyType === 'location' 
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
                class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent bg-white"
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
                      ? 'bg-[#329393] text-white shadow-md' 
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
                <span class="text-[#329393] font-semibold">{{ maxPrice.toLocaleString() }} $</span>
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
                class="py-3 px-4 bg-[#329393] text-white rounded-xl font-medium shadow-md"
              >
                Afficher les résultats
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicateur de filtres actifs -->
      <div v-if="activeFiltersCount > 0" class="mb-6 flex flex-wrap items-center gap-2">
        <span class="text-sm text-gray-600 font-medium">Filtres actifs :</span>
        
        <span 
          v-if="propertyType !== 'tous'" 
          class="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
        >
          {{ propertyType === 'vente' ? 'À vendre' : 'À louer' }}
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
        
        <button 
          @click="resetFilters" 
          class="text-sm text-gray-500 cursor-pointer hover:text-gray-700 ml-2 flex items-center"
        >
          Tout effacer
        </button>
      </div>

      <!-- RÉSULTATS AVEC CARTS MODERNES -->
      <div v-if="filteredProperties.length > 0" class="mb-16">
        <!-- En-tête des résultats -->
        <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 p-4 bg-white rounded-2xl shadow-sm">
          <div class="flex items-center space-x-4 mb-4 lg:mb-0">
            <div class="flex items-center">
              <div class="w-3 h-3 bg-[#329393] rounded-full mr-2"></div>
              <span class="text-lg font-semibold text-gray-900">
                {{ filteredProperties.length }} propriété(s) correspondante(s)
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
          
          <!-- Options de tri -->
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-600">Trier par :</span>
            <select class="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#329393]">
              <option>Pertinence</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Surface croissante</option>
              <option>Date de publication</option>
            </select>
            
            <!-- Vue grille/liste -->
            <div class="flex border border-gray-200 rounded-lg overflow-hidden">
              <button class="p-2 bg-white hover:bg-gray-50 border-r border-gray-200">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
              </button>
              <button class="p-2 bg-gray-50 hover:bg-gray-100">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>


        <!-- Grille des propriétés modernisée -->
         <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  <div
    v-for="(property, index) in filteredProperties"
    :key="property.id"
    ref="propertyCards"
    class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group opacity-0 transform translate-y-8 card-appear"
    :style="`transition-delay: ${index * 100}ms; animation-delay: ${index * 100}ms`"
  >

    <!-- En-tête de la carte avec image et overlay -->
    <div class="relative overflow-hidden">
      <!-- Overlay sombre sur l'image -->
      <div class="absolute inset-0 bg-black/20 z-10"></div>
      
      <img
        :src="property.image"
        :alt="property.title"
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
                property.type === 'vente' 
                  ? 'bg-[#329393]' 
                  : 'bg-blue-500/90'
              ]"
            >
              {{ property.type === 'vente' ? 'À VENDRE' : 'À LOUER' }}
            </span>
            <span 
              v-if="property.parking > 0"
              class="px-2 py-1 bg-[#329393] backdrop-blur-sm text-white rounded-full text-xs font-semibold shadow-lg"
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
            {{ property.title }}
          </h3>
          <div class="flex items-center justify-between">
            <div class="text-2xl font-bold text-white drop-shadow-lg">
              {{ formatPrice(property.price, property.type) }}
            </div>
            <div v-if="property.type === 'vente'" class="text-sm text-white/90 drop-shadow-lg">
              {{ pricePerSquareMeter(property) }} $/m²
            </div>
          </div>
        </div>
      </div>

      <!-- Overlay d'action au hover -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end z-30">
        <div class="w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button class="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-3 rounded-lg font-semibold text-sm hover:bg-white transition-all transform hover:scale-105">
            Voir en détail
          </button>
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
          <span class="text-sm truncate">{{ property.location }}</span>
        </div>
        
        <!-- Auteur -->
        <div class="flex items-center space-x-2 ml-3">
          <div class="w-8 h-8 bg-gradient-to-r from-[#329393] to-[#05b1b1] rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">{{ getAuthorInitials(property.author) }}</span>
          </div>
          <span class="text-xs text-gray-500 hidden sm:block">Par {{ property.author }}</span>
        </div>
      </div>
      
      <!-- Caractéristiques principales avec animation -->
      <div class="grid grid-cols-4 gap-2 mb-4 py-3 border-y border-gray-100">
        <!-- Chambres -->
        <div class="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300">
          <div class="flex items-center justify-center w-10 h-10 bg-yellow-50 rounded-xl mx-auto mb-2 group-hover:bg-yellow-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#329393]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
          <div class="text-lg font-bold text-gray-900">{{ property.bedrooms }}</div>
          <div class="text-xs text-gray-500">Chambres</div>
        </div>
        
        <!-- Salles de bain -->
        <div class="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300 delay-75">
          <div class="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-xl mx-auto mb-2 group-hover:bg-blue-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <div class="text-lg font-bold text-gray-900">{{ property.bathrooms }}</div>
          <div class="text-xs text-gray-500">SDB</div>
        </div>
        
        <!-- Surface -->
        <div class="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300 delay-150">
          <div class="flex items-center justify-center w-10 h-10 bg-green-50 rounded-xl mx-auto mb-2 group-hover:bg-green-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"/>
            </svg>
          </div>
          <div class="text-lg font-bold text-gray-900">{{ property.surface }}</div>
          <div class="text-xs text-gray-500">m²</div>
        </div>
        
        <!-- Parking -->
        <div class="text-center group-hover:transform group-hover:scale-105 transition-transform duration-300 delay-225">
          <div class="flex items-center justify-center w-10 h-10 bg-purple-50 rounded-xl mx-auto mb-2 group-hover:bg-purple-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
            </svg>
          </div>
          <div class="text-lg font-bold text-gray-900">{{ property.parking || 0 }}</div>
          <div class="text-xs text-gray-500">Parking</div>
        </div>
      </div>

      <!-- Caractéristiques supplémentaires -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-if="property.garage" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
          Garage
        </span>
        <span v-if="property.garden" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>
          </svg>
          Jardin
        </span>
        <span v-if="property.pool" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Piscine
        </span>
        <span v-if="property.terrace" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
          Terrasse
        </span>
        <span v-if="property.balcony" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
          </svg>
          Balcon
        </span>
        <span v-if="property.elevator" class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h8m-8 4h8m-8 4h8M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          Ascenseur
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
          
          <!-- Vues -->
          <span class="flex items-center text-gray-500 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            {{ property.views || '124' }} vues
          </span>
        </div>
        
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
          Publié il y a {{ property.daysAgo || '2' }}j
        </span>
      </div>
    </div>
  </div>
</div>


      </div>
      <!-- Version Ultra Minimaliste -->
      <div v-else class="mb-16">
        <div class="text-center py-24 px-4">
          <div class="max-w-sm mx-auto">
            <!-- Icône -->
            <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>

            <!-- Contenu -->
            <h2 class="text-xl font-bold text-gray-800 mb-2">Aucun résultat</h2>
            <p class="text-gray-600 mb-6 text-sm">Ajustez vos critères pour trouver plus de biens</p>
            
            <button 
              @click="resetFilters"
              class="bg-[#329393] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2a7a7a] transition-colors w-full"
            >
              Modifier la recherche
            </button>
          </div>
        </div>
      </div>



      
    </div>
  </div>

  


  <section class="grid grid-cols-1 lg:grid-cols-2 w-full bg-white min-h-screen max-auto px-2">
    <!-- Image à gauche avec overlay -->
    <div class="relative h-[400px] lg:h-auto overflow-hidden">
      <img 
        :src=home_010
        alt="Chalet moderne avec vue panoramique"
        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
      />
      <!-- Overlay gradient avec la nouvelle couleur -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#329393]/30 to-transparent"></div>
    
      <!-- Statistiques overlay -->
      <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
        <div class="flex space-x-6">
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-900">500+</p>
            <p class="text-xs text-gray-600">Propriétés</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-900">4.9/5</p>
            <p class="text-xs text-gray-600">Satisfaction</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold text-gray-900">24h</p>
            <p class="text-xs text-gray-600">Support</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu à droite avec la nouvelle palette de couleurs -->
    <div class="bg-gradient-to-br from-[#1a5f5f] to-[#329393] text-white flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-20">
      <!-- En-tête -->
      <div class="mb-8">
        <span class="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
          🏡 Expertise Immobilière
        </span>
      <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-4">
        Découvrez <span class="text-white">l’élégance</span><br />
        d’une maison qui vous ressemble
      </h2>
        <p class="text-white/90 text-lg leading-relaxed">
          Découvrez notre sélection exclusive de biens immobiliers soigneusement choisis pour répondre à vos critères.
        </p>
      </div>

      <!-- Grille des avantages -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <!-- Disponibilité 24/7 -->
        <div class="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-1">Disponible 24h/24</h3>
              <p class="text-white/80 text-sm">Recherchez et réservez à tout moment, 7j/7</p>
            </div>
          </div>
        </div>

        <!-- Vérification qualité -->
        <div class="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-1">Biens Vérifiés</h3>
              <p class="text-white/80 text-sm">Chaque propriété est inspectée et validée</p>
            </div>
          </div>
        </div>

        <!-- Rapidité -->
        <div class="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-1">Recherche Rapide</h3>
              <p class="text-white/80 text-sm">Trouvez en 5 min grâce à nos filtres intelligents</p>
            </div>
          </div>
        </div>

        <!-- Sécurité -->
        <div class="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-1">Transaction Sécurisée</h3>
              <p class="text-white/80 text-sm">Paiement crypté et accompagnement juridique</p>
            </div>
          </div>
        </div>
      </div>


      <!-- Trust indicators -->
      <div class="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          Plus de 1,000 transactions réussies
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          Accompagnement personnalisé
        </div>
      </div>
    </div>
  </section>

  <TestimonyComponent/>
  <Team />
  <PartenaireComponent/>
  <CtaComponent/>
  <FaqComponent/>
  <FooterComponent/>




<!-- <Team />
<TestimonyComponent/>
<CtaComponent/>
<PartenaireComponent/>
<FaqComponent/>
<FooterComponent/> -->
  

  
  
  
</template>

<style scoped>
/* Animation flottante */





/* Pour rendre le texte lisible et le bouton bien en vue */
.swiper-pagination-bullet {
  background: white !important;
  opacity: 0.7;
}
.swiper-pagination-bullet-active {
  opacity: 1 !important;
  background: #329393 !important;
}



@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Nouveaux styles pour les cartes améliorées */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation d'entrée améliorée */
@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Effet de brillance au survol */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Transition pour les overlays */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Style pour le dégradé de prix */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

/* Amélioration des ombres */
.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Backdrop blur pour le support moderne */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
  
  .p-6 {
    padding: 1rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
}



/* Fade in up */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp { animation: fadeInUp 1s forwards; }
.animate-delay-100 { animation-delay: 0.1s; }
.animate-delay-200 { animation-delay: 0.2s; }
.animate-delay-300 { animation-delay: 0.3s; }
.animate-delay-400 { animation-delay: 0.4s; }

/* Style personnalisé pour le range input */
.slider-thumb {
  -webkit-appearance: none;
  background: linear-gradient(to right, #f59e0b, #f59e0b);
  background-size: 0% 100%;
  background-repeat: no-repeat;
}

.slider-thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  background: #f59e0b;
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
  background: #f59e0b;
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
@keyframes blobSlow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -50px) scale(1.05); }
}

@keyframes blobFast {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-40px, 20px) scale(1.03); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.animate-blob-slow {
  animation: blobSlow 12s ease-in-out infinite;
}

.animate-blob-fast {
  animation: blobFast 15s ease-in-out infinite;
}

.animate-gradient-text {
  background-size: 200% auto;
  animation: gradient 4s ease infinite alternate;
}

/* Effets 3D et transitions */
.perspective-1000 {
  perspective: 1000px;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .text-5xl.md\:text-6xl {
    font-size: 2.5rem;
  }
}


</style>