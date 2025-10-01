<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
    <Header />

    <!-- Hero Section -->
    <div class="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Nos Agents Immobiliers - Dwelt"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#1a5f5f]/80 to-[#329393]/60"></div>
      </div>
      
      <div class="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div class="max-w-4xl">
          <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Rencontrez nos <span class="text-white">experts</span>
          </h1>
          <p class="text-white text-xl lg:text-2xl font-light max-w-3xl mx-auto">
            Une équipe d'agents passionnés dédiés à concrétiser vos projets immobiliers avec expertise et innovation.
          </p>
        </div>
      </div>
    </div>

    <!-- Filtres Section -->
    <section class="py-12 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <!-- Recherche par nom -->
          <div class="w-full flex justify-center">
            <div class="relative w-full max-w-2xl">
              <input 
                v-model="searchName"
                type="text" 
                placeholder="Rechercher un agent..." 
                class="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#329393] focus:border-transparent shadow-sm transition-all duration-300"
              >
              <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg> 
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Agents Grid Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- En-tête -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span class="text-[#329393]">Équipe</span> d'Experts
          </h2>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Des professionnels passionnés qui mettent leur expertise à votre service pour concrétiser vos projets immobiliers.
          </p>
        </div>

        <!-- Statistiques -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div v-for="stat in stats" :key="stat.id" class="text-center">
            <p class="text-4xl font-bold bg-gradient-to-r from-[#1a5f5f] to-[#329393] bg-clip-text text-transparent mb-2">
              {{ stat.value }}
            </p>
            <p class="text-gray-600 font-medium">{{ stat.label }}</p>
          </div>
        </div>

        <!-- Grille des Agents -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <!-- Loader -->
          <div v-if="loading" class="col-span-full flex justify-center py-12">
            <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-[#329393]"></div>
          </div>

          <!-- Message aucun résultat -->
          <div v-else-if="filteredAgents.length === 0" class="col-span-full text-center py-12">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucun agent trouvé</h3>
            <p class="text-gray-600">Ajustez vos critères de recherche pour trouver plus d'agents.</p>
          </div>

          <!-- Cartes Agents -->
          <div 
            v-for="(agent, index) in filteredAgents" 
            :key="agent.id"
            class="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#329393]/30 shadow-lg hover:shadow-xl"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- Image de fond avec effet de zoom -->
            <div class="absolute inset-0 overflow-hidden">
              <img 
                :src="agent.photo" 
                :alt="agent.nom"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                @error="handleImageError"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>
            
            <!-- Contenu principal -->
            <div class="relative z-10 p-6 h-full flex flex-col justify-end min-h-[400px]">
              <!-- Badge spécialité -->
              <div class="flex justify-between items-start mb-4">
                <div class="bg-white/90 backdrop-blur-sm text-[#1a5f5f] px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
                  {{ agent.specialty }}
                </div>
                <div class="bg-[#329393] text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {{ agent.experience }}
                </div>
              </div>
              
              <!-- Informations agent -->
              <div class="mb-4">
                <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD166] transition-colors duration-300">
                  {{ agent.nom }}
                </h3>
                <p class="text-white/90 text-lg mb-3">{{ agent.role }}</p>
                
                <!-- Stats rapides -->
                <div class="flex items-center space-x-4 text-white/80 text-sm mb-4">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span>{{ agent.rating }}</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    <span>{{ agent.properties }} propriétés</span>
                  </div>
                </div>
              </div>

              <!-- Coordonnées -->
              <div class="space-y-2 text-white/90 text-sm mb-6">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span class="truncate">{{ agent.phone }}</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span class="truncate">{{ agent.email }}</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex justify-between items-center pt-4 border-t border-white/20">
                <!-- Réseaux sociaux -->
                <div class="flex space-x-2">
                  <a 
                    v-for="social in agent.socialMedia" 
                    :key="social.platform"
                    :href="social.url" 
                    target="_blank"
                    class="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#329393] transition-all duration-300 transform hover:scale-110"
                    :title="social.platform"
                  >
                    <component :is="getSocialIcon(social.platform)" class="w-4 h-4" />
                  </a>
                </div>

                <!-- Bouton Contact -->
                <button 
                  @click="contactAgent(agent)"
                  class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#329393] transition-all duration-300 transform hover:scale-105 border border-white/30"
                >
                  Contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
//@ts-ignore
import Header from "@/components/Header.vue"
//@ts-ignore
import FooterComponent from "@/components/FooterComponent.vue"
//@ts-ignore
import { useAxiosRequest } from "@/utils/custom"

// Interfaces pour le typage
interface SocialMedia {
  platform: string
  url: string
}

interface Agent {
  id: string
  nom: string
  role: string
  description: string
  phone: string
  email: string
  image: string
  photo: string
  experience: string
  rating: string
  properties: string
  specialty: string
  socialMedia: SocialMedia[]
}

interface Stat {
  id: number
  value: string
  label: string
}

// Icônes pour les réseaux sociaux
const FacebookIcon = { 
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` 
}

const InstagramIcon = { 
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.815 3.73 13.664 3.73 12.367s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297z"/></svg>` 
}

const LinkedInIcon = { 
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>` 
}

const TwitterIcon = { 
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/></svg>` 
}

const WhatsAppIcon = { 
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>` 
}

const router = useRouter()

// États réactifs pour les filtres
const searchName = ref('')
const loading = ref(false)

// Données des agents
const agents = ref<Agent[]>([])

// Statistiques
const stats = ref<Stat[]>([
  { id: 1, value: '15+', label: 'Années d\'expérience' },
  { id: 2, value: '100+', label: 'Propriétés vendues' },
  { id: 3, value: '4.9/5', label: 'Satisfaction client' },
  { id: 4, value: '24h', label: 'Support disponible' }
])

// Agents filtrés
const filteredAgents = computed(() => {
  if (!searchName.value) {
    return agents.value
  }
  
  return agents.value.filter(agent => 
    agent.nom.toLowerCase().includes(searchName.value.toLowerCase()) ||
    agent.role.toLowerCase().includes(searchName.value.toLowerCase()) ||
    agent.specialty.toLowerCase().includes(searchName.value.toLowerCase()) ||
    agent.email.toLowerCase().includes(searchName.value.toLowerCase())
  )
})

// Fonction pour obtenir l'icône du réseau social
const getSocialIcon = (platform: string) => {
  const icons: { [key: string]: any } = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
    twitter: TwitterIcon,
    whatsapp: WhatsAppIcon
  }
  return icons[platform.toLowerCase()] || FacebookIcon
}

// Fonction pour contacter un agent
const contactAgent = (agent: Agent) => {
  window.location.href = `mailto:${agent.email}?subject=Contact depuis Dwelt&body=Bonjour ${agent.nom}, je suis intéressé(e) par vos services immobiliers.`
}

// Fonction pour gérer les erreurs d'image
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop'
}

// Fonction pour traiter les images base64
const processBase64Image = (base64String: string): string => {
  if (!base64String) {
    return 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop'
  }
  
  // Si c'est déjà une URL data valide, on la retourne telle quelle
  if (base64String.startsWith('data:image/')) {
    return base64String
  }
  
  // Si c'est juste le base64 sans le préfixe, on l'ajoute
  // Note: Vous devrez peut-être adapter le type MIME selon vos données
  if (base64String.startsWith('iVBORw')) { // Début typique d'un PNG base64
    return `data:image/png;base64,${base64String}`
  }
  
  // Fallback vers une image par défaut
  return 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop'
}

// Fonction pour déterminer la spécialité basée sur la description
const determineSpecialty = (description: string): string => {
  if (!description) return 'Immobilier'
  
  const desc = description.toLowerCase()
  if (desc.includes('luxe') || desc.includes('premium') || desc.includes('haut de gamme')) {
    return 'Luxe'
  } else if (desc.includes('commercial') || desc.includes('bureau') || desc.includes('entreprise')) {
    return 'Commercial'
  } else if (desc.includes('résidentiel') || desc.includes('appartement') || desc.includes('maison')) {
    return 'Résidentiel'
  } else {
    return 'Immobilier'
  }
}

// Fonction pour générer des données d'agents par défaut (fallback)
const generateDefaultAgents = (): Agent[] => {
  return [
    {
      id: '1',
      nom: 'Elie Oko',
      role: 'Agent Immobilier',
      description: 'Expert en immobilier résidentiel et commercial',
      phone: '+243 98 394 8392',
      email: 'elieoko100@gmail.com',
      image: '',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
      experience: '5+ ans',
      rating: '4.8',
      properties: '25+',
      specialty: 'Résidentiel & Commercial',
      socialMedia: [
        { platform: 'linkedin', url: 'https://linkedin.com/in/elieoko' },
        { platform: 'whatsapp', url: 'https://wa.me/243983948392' }
      ]
    }
  ]
}

// Fonction de chargement des agents
const fetchAgents = async () => {
  try {
    loading.value = true
    
    // Essayer de récupérer les agents depuis l'API
    const response = await useAxiosRequest().get('/agents/all')
    console.log('API Response:', response)
    
    if (response.data && response.data.agents && response.data.agents.length > 0) {
      // Transformer les données de l'API selon votre structure
      agents.value = response.data.agents.map((agentData: any) => {
        const processedAgent: Agent = {
          id: agentData.id?.toString() || agentData._id?.toString() || Math.random().toString(),
          nom: agentData.nom || 'Agent Dwelt',
          role: agentData.role || 'Agent Immobilier',
          description: agentData.description || '',
          phone: agentData.phone || '+243 00 000 0000',
          email: agentData.email || 'contact@dwelt.com',
          image: agentData.image || '',
          photo: processBase64Image(agentData.image), // Traitement de l'image base64
          experience: '5+ ans', // Valeur par défaut
          rating: '4.5', // Valeur par défaut
          properties: '20+', // Valeur par défaut
          specialty: determineSpecialty(agentData.description),
          socialMedia: [
            { platform: 'linkedin', url: 'https://linkedin.com/company/dwelt' },
            { platform: 'whatsapp', url: `https://wa.me/${agentData.phone?.replace(/\D/g, '')}` }
          ]
        }
        return processedAgent
      })
    } else {
      // Utiliser les données par défaut si l'API ne retourne rien
      console.log('Using default agents data')
      agents.value = generateDefaultAgents()
    }
  } catch (error) {
    console.error('Erreur lors du chargement des agents:', error)
    // En cas d'erreur, utiliser les données par défaut
    agents.value = generateDefaultAgents()
  } finally {
    loading.value = false
  }
}

// Chargement initial
onMounted(() => {
  fetchAgents()
})
</script>

<style scoped>
/* Animations personnalisées */
.grid > div {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
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

/* Responsive design */
@media (max-width: 768px) {
  .min-h-\[400px\] {
    min-height: 350px;
  }
}

/* Effets de survol améliorés */
.group:hover {
  transform: translateY(-8px);
  transition: all 0.3s ease;
}

/* Amélioration de l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  .group,
  .grid > div,
  img {
    transition: none;
    animation: none;
  }
}
</style>