<script setup>
import { ref, computed, onMounted } from 'vue'
//@ts-ignore
import Header from "@/components/Header.vue"
import FooterComponent from "@/components/FooterComponent.vue"


// Icônes Heroicons
const HomeIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`
}

const ChartIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
}

const CameraIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`
}

const BuildingIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`
}

const WrenchIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`
}

const EyeIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`
}

const DroneIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>`
}

const ArrowRightIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`
}

// Données réactives
const activeCategory = ref('all')

const categories = ref([
  { id: 'all', name: 'Tous les services' },
  { id: 'transaction', name: 'Transaction' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'gestion', name: 'Gestion' },
  { id: 'technologie', name: 'Technologie' }
])

//@ts-ignore
import home_007 from '../assets/images/home/home_007.jpeg'
//@ts-ignore
import home_008 from '../assets/images/home/home_008.jpeg'
//@ts-ignore
import home_009 from '../assets/images/home/home_009.jpeg'
const services = ref([
  {
    id: 1,
    title: 'Achat & Vente Immobilière',
    description: 'Accompagnement complet pour vos transactions immobilières avec expertise et transparence absolue.',
    icon: HomeIcon,
    category: 'transaction',
    tags: ['Transaction', 'Expertise', 'Accompagnement'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    complexity: 3,
    duration: '30-60',
    successRate: '98%',
    price: 'Flexible'
  },
  {
    id: 2,
    title: 'Home Staging & Virtuel',
    description: 'Mettez en valeur votre propriété avec nos solutions de home staging physique et virtuel innovantes.',
    icon: WrenchIcon,
    category: 'marketing',
    tags: ['Valorisation', 'Innovation', 'Design'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    complexity: 2,
    duration: '7-14',
    successRate: '95%',
    price: 'Sur devis'
  },
  {
    id: 3,
    title: 'Plans 2D & 3D',
    description: 'Visualisation précise et immersive de vos espaces avec des plans détaillés et modélisations 3D réalistes.',
    icon: EyeIcon,
    category: 'technologie',
    tags: ['Visualisation', 'Précision', '3D'],
    image: 'https://images.unsplash.com/photo-1548613053-220a69c785ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    complexity: 2,
    duration: '5-10',
    successRate: '100%',
    price: 'À partir de 300€'
  },
  {
    id: 4,
    title: 'Gestion Locative',
    description: 'Gestion complète et professionnelle de votre patrimoine locatif avec suivi rigoureux et personnalisé.',
    icon: BuildingIcon,
    category: 'gestion',
    tags: ['Gestion', 'Patrimoine', 'Location'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    complexity: 3,
    duration: 'Continu',
    successRate: '99%',
    price: '8% du loyer'
  },
  {
    id: 5,
    title: 'Rénovation & Virtuelle',
    description: 'Simulez et planifiez vos projets de rénovation avec nos outils de visualisation avancés et réalistes.',
    icon: WrenchIcon,
    category: 'technologie',
    tags: ['Simulation', 'Planification', 'Rénovation'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    complexity: 3,
    duration: '10-20',
    successRate: '96%',
    price: 'Sur devis'
  },
  {
    id: 6,
    title: 'Visites Virtuelles & Photos HD',
    description: 'Expériences immersives uniques et visuels haute définition pour présenter exceptionnellement vos biens.',
    icon: CameraIcon,
    category: 'marketing',
    tags: ['Immersion', 'Qualité', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    complexity: 2,
    duration: '3-7',
    successRate: '100%',
    price: 'À partir de 200€'
  }
])

const achatVenteFeatures = ref([
  {
    id: 1,
    title: 'Étude de Marché Approfondie',
    description: 'Analyse complète et détaillée du marché immobilier pour optimiser chaque aspect de votre investissement.',
    icon: ChartIcon
  },
  {
    id: 2,
    title: 'Accompagnement Financier Personnalisé',
    description: 'Solutions de financement sur mesure développées avec nos partenaires bancaires privilégiés.',
    icon: ChartIcon
  },
  {
    id: 3,
    title: 'Négociation Expert Sur Mesure',
    description: 'Optimisation maximale des conditions grâce à notre expertise éprouvée en négociation immobilière.',
    icon: ChartIcon
  }
])

const marketingTech = ref([
  {
    id: 1,
    title: 'Prises de Vue Drone',
    description: 'Vues aériennes spectaculaires et professionnelles de vos propriétés',
    icon: DroneIcon
  },
  {
    id: 2,
    title: 'Simulation Architecturale 3D',
    description: 'Visualisation immersive et réaliste de vos projets de construction',
    icon: EyeIcon
  },
  {
    id: 3,
    title: 'Design Intérieur Personnalisé',
    description: 'Conseils experts et aménagements sur mesure pour valoriser vos espaces',
    icon: HomeIcon
  },
  {
    id: 4,
    title: 'Annonces Digitales Optimisées',
    description: 'Promotion ciblée et performante sur les plateformes immobilières leaders',
    icon: ChartIcon
  }
])

const gestionServices = ref([
  {
    id: 1,
    title: 'Conciergerie Premium',
    description: 'Services complémentaires haut de gamme pour le confort de vos locataires',
    icon: WrenchIcon
  },
  {
    id: 2,
    title: 'Nettoyage Professionnel',
    description: 'Entretien rigoureux et professionnel de l\'ensemble de vos biens immobiliers',
    icon: WrenchIcon
  },
  {
    id: 3,
    title: 'Panneaux Signalétiques',
    description: 'Signalétique professionnelle et design pour valoriser vos biens',
    icon: WrenchIcon
  }
])

const stats = ref([
  { id: 1, value: '1000+', label: 'Clients Satisfaits' },
  { id: 2, value: '15+', label: 'Années d\'Expérience' },
  { id: 3, value: '99%', label: 'Taux de Réussite' }
])

// Computed
const filteredServices = computed(() => {
  if (activeCategory.value === 'all') return services.value
  return services.value.filter(service => service.category === activeCategory.value)
})

// Animation on scroll
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100/50 py-10 lg:py-1.5">

    <Header/>

    <!-- Hero Section -->
    <div class="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="DWELT - Votre partenaire immobilier de confiance"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#1a5f5f]/80 to-[#2F4F4F]/60"></div>
      </div>
      
      <div class="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div class="max-w-4xl scroll-animate">
          <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-title">
              Nos Services <span class="text-white">immobiliers</span>
          </h1>
          <p class="text-white text-xl lg:text-2xl font-light max-w-3xl mx-auto animate-subtitle">
              Découvrez l'ensemble de nos services conçus pour accompagner chaque étape de votre projet immobilier avec expertise et innovation technologique.
          </p>
        </div>
      </div>
    </div>

    <!-- Services Grid -->
    <section class="py-20 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Navigation par catégorie -->
        <div class="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up delay-400">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'px-6 py-3 rounded-full cursor-pointer font-medium transition-all duration-500 transform hover:-translate-y-1',
              activeCategory === category.id 
                ? 'bg-gradient-to-r from-[#1a5f5f] to-[#2F4F4F] text-white shadow-xl scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#1a5f5f]/30 shadow-lg hover:shadow-xl'
            ]"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div 
            v-for="(service, index) in filteredServices" 
            :key="service.id"
            class="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#1a5f5f]/30 shadow-lg hover:shadow-xl mx-auto w-full max-w-sm"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- Image de fond avec effet de zoom -->
            <div class="absolute inset-0 overflow-hidden">
              <img 
                :src="service.image" 
                :alt="service.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>
            
            <!-- Contenu principal -->
            <div class="relative z-10 p-6 h-full flex flex-col justify-end">
              <!-- En-tête avec icône -->
              <div class="flex items-center justify-between mb-4">
                <div class="relative">
                  <div class="w-12 h-12 bg-gradient-to-br from-[#1a5f5f] to-[#2F4F4F] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <component :is="service.icon" class="w-6 h-6 text-white" />
                  </div>
                </div>
                <div class="bg-white/90 backdrop-blur-sm text-[#1a5f5f] px-3 py-1 rounded-full text-xs font-semibold border border-white/20 transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
                  {{ service.category }}
                </div>
              </div>
              
              <!-- Contenu texte principal -->
              <div class="mb-4">
                <h3 class="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#2f4f4f] transition-colors duration-300">
                  {{ service.title }}
                </h3>
                <p class="text-white/90 leading-relaxed text-sm line-clamp-3 mb-3">
                  {{ service.description }}
                </p>
                
                <!-- Badges avec effet de profondeur -->
                <div class="mb-4">
                  <div class="flex flex-wrap gap-1.5">
                    <span v-for="(tag, tagIndex) in service.tags.slice(0, 2)" :key="tag" 
                      class="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-2.5 py-1.5 rounded-full text-xs font-medium border border-white/30 transition-all duration-300 transform hover:scale-105"
                      :style="{ transitionDelay: `${tagIndex * 50}ms` }">
                      <svg class="w-3 h-3 text-[#2f4f4f] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      <span class="truncate max-w-[80px]">{{ tag }}</span>
                    </span>
                    <span v-if="service.tags.length > 2" 
                          class="inline-flex items-center bg-white/20 text-white px-2.5 py-1.5 rounded-full text-xs font-medium">
                      +{{ service.tags.length - 2 }}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Achat & Vente -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <!-- Éléments décoratifs de fond -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 left-10 w-72 h-72 bg-[#1a5f5f] rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-[#2F4F4F] rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative z-10 max-w-6xl mx-auto">
        <!-- Achat & Vente -->
        <div class="mb-20">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Achat & Vente Immobilière
            </h2>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Accompagnement complet pour réussir votre transaction en toute sérénité
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8">
              <div v-for="(feature, index) in achatVenteFeatures" :key="feature.id" 
                   class="flex items-start space-x-6 group transform hover:-translate-y-2 transition-all duration-500 p-6 rounded-2xl hover:bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl"
                   :style="{ animationDelay: `${index * 150}ms` }">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1a5f5f] to-[#2F4F4F] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <component :is="feature.icon" class="w-8 h-8 text-white" />
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1a5f5f] transition-colors duration-300">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-700 text-lg leading-relaxed">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="relative group">
              <div class="rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700 border-8 border-white/20">
                <img 
                  :src=home_007
                  alt="Service Achat Vente DWELT"
                  class="w-full h-96 object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1a5f5f]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-[#1a5f5f]/10">
                <p class="text-3xl font-bold bg-gradient-to-r from-[#1a5f5f] to-[#2F4F4F] bg-clip-text text-transparent mb-2">500+</p>
                <p class="text-sm font-medium text-gray-600">Transactions réussies</p>
                <div class="flex mt-2">
                  <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Marketing & Technologie -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <!-- Éléments décoratifs de fond -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD166] rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2F4F4F] rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative z-10 max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Marketing & Technologie
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Solutions avant-gardistes pour valoriser et promouvoir votre bien
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(tech, index) in marketingTech" :key="tech.id" 
               class="text-center group transform hover:-translate-y-3 transition-all duration-500 p-8 rounded-3xl hover:bg-white/5 backdrop-blur-sm border border-white/10"
               :style="{ animationDelay: `${index * 100}ms` }">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-[#FFD166] to-[#ffb347] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <component :is="tech.icon" class="w-10 h-10 text-gray-900" />
              </div>
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-[#1a5f5f] rounded-full flex items-center justify-center text-sm font-bold text-white">
                {{ index + 1 }}
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-4 group-hover:text-[#2F4F4F] transition-colors duration-300">
              {{ tech.title }}
            </h3>
            <p class="text-gray-300 text-base leading-relaxed">{{ tech.description }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- Section Gestion & Conseil -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gestion & Conseil Expert
          </h2>
          <p class="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Optimisez et sécurisez votre patrimoine immobilier avec notre expertise
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-[#1a5f5f] to-[#2F4F4F] rounded-3xl p-12 text-white shadow-2xl transform hover:scale-[1.01] transition-transform duration-700 relative overflow-hidden">
          <!-- Éléments décoratifs -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div class="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            <div v-for="(service, index) in gestionServices" :key="service.id" 
                 class="text-center group p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 backdrop-blur-sm border border-white/10 hover:border-white/20"
                 :style="{ animationDelay: `${index * 150}ms` }">
              <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/20">
                <component :is="service.icon" class="w-10 h-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold mb-4 group-hover:text-[#2f4f4f] transition-colors duration-300">{{ service.title }}</h3>
              <p class="text-white/90 text-lg leading-relaxed">{{ service.description }}</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
  <FooterComponent/>
</template>

<style scoped>
/* Animations personnalisées */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Effet de survol subtil */
.group:hover {
  border-color: #1a5f5f40;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Délais d'animation */
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

/* Support pour le mode sombre */
@media (prefers-color-scheme: dark) {
  .bg-gradient-to-br.from-gray-50.via-white.to-gray-100\/50 {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  }
  
  .bg-white {
    background-color: #1e293b;
  }
  
  .text-gray-900 {
    color: #f1f5f9;
  }
  
  .text-gray-600 {
    color: #cbd5e1;
  }
  
  .border-gray-100 {
    border-color: #334155;
  }
}

/* Optimisations de performance */
.transform {
  will-change: transform;
}

/* Améliorations du scroll */
html {
  scroll-behavior: smooth;
}

/* Corrections pour les arrondis */
.rounded-4xl {
  border-radius: 2rem;
}

/* Effets de verre (glassmorphism) */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>