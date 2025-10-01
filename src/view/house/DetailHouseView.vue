<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAxiosRequest } from "@/utils/custom"
import type { IProperty } from "@/utils/structure"
//@ts-ignore
import Header from "@/components/Header.vue"
//@ts-ignore
import FooterComponent from "@/components/FooterComponent.vue"

const route = useRoute()
const propertyId = route.params.id

// États réactifs
const isFavorite = ref(false)
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)
const property = ref<IProperty | null>(null)
const loading = ref(true)
const submitting = ref(false) // Nouvel état pour le chargement du formulaire
const submitSuccess = ref(false) // État pour le succès de l'envoi
const submitError = ref('') // État pour les erreurs

// Données des formulaires
const visitData = reactive({
  type: '',
  date: '',
  time: '10:00',
  name: '',
  phone: '',
  message: '',
  property_id: propertyId, // Ajout de l'ID de la propriété
  agent_id: '' // Sera rempli après le chargement de la propriété
})

// Détails calculés
const propertyDetails = computed(() => {
  if (!property.value) return []
  
  return [
    { label: "ID de la propriété", value: `DWT${property.value.id.toString().padStart(4, '0')}` },
    { label: "Prix", value: formatPrice(Number(property.value.prix), String(property.value.status_property?.name)) },
    { label: "Superficie", value: `${property.value.superficie} m²` },
    { label: "Chambres", value: property.value.chambre },
    { label: "Salles de bains", value: property.value.salleBain },
    { label: "Garage", value: property.value.garage || '0' },
    { label: "Type de propriété", value: property.value.type_maison?.name || 'Non spécifié' },
    { label: "Statut", value: property.value.status_property?.name  }
  ]
})

// Fonction pour formater le prix
const formatPrice = (price: number, type: string) => {
  if (type === 'À louer') {
    return `${price.toLocaleString()} $/mois`
  }
  return `${price.toLocaleString()} $`
}

// Fonction pour obtenir les initiales
const getAuthorInitials = (authorName: string) => {
  return authorName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

// Charger les données de la propriété
const fetchPropertyData = async () => {
  try {
    loading.value = true
    const response = await useAxiosRequest().get(`/maisons/${propertyId}`)
    property.value = response.data.data
    // Mettre à jour l'agent_id dans visitData
    if (property.value?.agent?.id) {
      visitData.agent_id = property.value.agent.id.toString()
    }
  } catch (error) {
    console.error('Erreur lors du chargement de la propriété:', error)
  } finally {
    loading.value = false
  }
}

// Fonction pour envoyer la demande de visite
const scheduleVisit = async () => {
  // Validation des champs requis
  if (!visitData.name || !visitData.phone || !visitData.date || !visitData.type) {
    submitError.value = 'Veuillez remplir tous les champs obligatoires'
    return
  }

  try {
    submitting.value = true
    submitError.value = ''

    const visitRequest = {
      type_visite: visitData.type,
      date: visitData.date, 
      heure: `${visitData.time}:00`,
      nom_complet: visitData.name,
      telephone: visitData.phone,
      message: visitData.message || '',
      maison_id: propertyId,
      agent_id: visitData.agent_id,
    }

    // Préparer les données pour l'API


    console.log('Envoi de la demande de visite:', visitRequest)

    // Envoyer la requête POST à l'API
    const response = await useAxiosRequest().post('/visit', visitRequest)

    // Vérifier la réponse
    if (response.data && response.data.visit && response.status === 200 || response.status === 201) {
      submitSuccess.value = true
      
      // Réinitialiser le formulaire
      Object.assign(visitData, {
        type: '',
        date: '',
        time: '10:00',
        name: '',
        phone: '',
        message: '',
        property_id: propertyId,
        agent_id: visitData.agent_id // Garder l'agent_id
      })

      // Cacher le message de succès après 5 secondes
      setTimeout(() => {
        submitSuccess.value = false
      }, 5000)
    } else {
      submitError.value = 'Erreur lors de l\'envoi de la demande'
    }

  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de la demande de visite:', error)
    
    // Gestion des erreurs spécifiques
    if (error.response) {
      // Erreur de l'API
      const errorMessage = error.response.data?.message || 'Erreur serveur'
      submitError.value = `Erreur: ${errorMessage}`
    } else if (error.request) {
      // Pas de réponse du serveur
      submitError.value = 'Impossible de contacter le serveur. Vérifiez votre connexion.'
    } else {
      // Autre erreur
      submitError.value = 'Une erreur inattendue est survenue'
    }
  } finally {
    submitting.value = false
  }
}

// Méthodes existantes (garder telles quelles)
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
}

const printPage = () => {
  window.print()
}

const openWhatsApp = () => {
  if (!property.value) return
  
  const phoneNumber = property.value?.agent.phone
  const message = `Bonjour, je suis intéressé par la propriété "${property.value.nom}" - ${property.value.city?.name}`
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  
  window.open(whatsappUrl, '_blank')
}

const callAgent = () => {
  const phoneNumber = property.value?.agent.phone
  window.open(`tel:${phoneNumber}`, '_self')
}

// Charger les données au montage
onMounted(() => {
  fetchPropertyData()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-[#2F4F4F]"></div>
    </div>

    <!-- Property Content -->
    <div v-else-if="property" class="min-h-screen bg-gray-50">
      <!-- Hero Section avec image principale -->
      <div class="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-cover bg-center overflow-hidden">
        <img 
          :src="property.images[0]?.nom || 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200'" 
          :alt="property.nom"
          class="w-full h-full object-cover"
        />
        
        <!-- Overlay gradient -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        <!-- Header avec badges -->
        <header class="flex justify-between items-start sm:items-center p-4 sm:p-6 absolute top-0 w-full z-10">
          <div class="flex flex-wrap gap-2">
            <span class="bg-green-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-2 rounded-full uppercase shadow-lg">
              EN VEDETTE
            </span>
            <span 
              :class="[
                'text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-2 rounded-full uppercase shadow-lg',
                property.status_property?.name === 'À vendre' ? 'bg-[#2F4F4F]' : 'bg-blue-600'
              ]"
            >
              {{ property.status_property?.name?.toUpperCase() || 'À VENDRE' }}
            </span>
          </div>
          
          <div class="flex space-x-2">
            <button 
              @click="toggleFavorite"
              class="w-8 h-8 sm:w-10 sm:h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-all"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" :class="isFavorite ? 'fill-red-500' : ''" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>
        </header>

        <!-- Contenu principal -->
        <div class="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white z-10">
          <nav class="flex items-center space-x-2 text-xs sm:text-sm mb-2 sm:mb-4 opacity-90">
            <a href="/" class="hover:text-[#2F4F4F] transition-colors">Accueil</a>
            <span>/</span>
            <a href="#" class="hover:text-[#2F4F4F] transition-colors">{{ property.type_maison?.name || 'Maison Individuelle' }}</a>
            <span>/</span>
            <span class="text-gray-300">{{ property.nom }}</span>
          </nav>
          
          <h1 class="text-xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{{ property.nom }}</h1>
          <p class="text-sm sm:text-lg flex items-center">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {{ property.city?.name }} - {{ property.commune?.name }}
          </p>
        </div>

        <!-- Prix et actions -->
        <div class="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-white z-10 text-right">
          <div class="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-4">
            {{ formatPrice(Number(property.prix), String(property.status_property?.name)) }}
          </div>
          <div class="flex justify-end space-x-2 sm:space-x-3">
            <!-- Bouton Imprimer -->
            <button 
              @click="printPage"
              class="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition-all group relative"
              title="Imprimer la page"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
            </button>

            <!-- Bouton WhatsApp -->
            <button 
              @click="openWhatsApp"
              class="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition-all group relative"
              title="Contacter sur WhatsApp"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>

            <!-- Bouton Favori -->
            <button 
              @click="toggleFavorite"
              class="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition-all group relative"
              :title="isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5" :class="isFavorite ? 'fill-red-500' : ''" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Contenu principal -->
      <main class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <!-- Colonne principale -->
          <div class="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            <!-- Galerie d'images -->
            <section class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 lg:p-6">
                <div 
                  v-for="(image, index) in property.images" 
                  :key="index"
                  class="relative cursor-pointer group"
                  @click="openLightbox(index)"
                >
                  <img 
                    :src="image.nom" 
                    :alt="`Image ${index + 1}`"
                    class="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:rounded-xl transition-transform group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all rounded-lg sm:rounded-xl"></div>
                </div>
              </div>
            </section>

            <!-- Description -->
            <section class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Description</h2>
              <div class="text-sm sm:text-base text-gray-700 leading-relaxed">
                <p class="mb-3 sm:mb-4">
                  {{ property.description || `Située dans le prestigieux quartier de ${property.commune?.name}, cette propriété exceptionnelle offre un cadre de vie idéal.` }}
                </p>
                <p>
                  Cette propriété allie modernité et authenticité avec ses volumes généreux et ses prestations haut de gamme.
                </p>
              </div>
            </section>

            <!-- Détails de la propriété -->
            <section class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
                <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Détails de la propriété</h2>
                <div class="flex items-center text-xs sm:text-sm text-gray-500">
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Mis à jour le {{ new Date(property.updated_at).toLocaleDateString('fr-FR') }}
                </div>
              </div>

              <div class="grid grid-cols-1 gap-3 sm:gap-4">
                <div v-for="(detail, index) in propertyDetails" :key="index" class="flex justify-between py-2 sm:py-3 border-b border-gray-100">
                  <span class="font-semibold text-gray-600 text-sm sm:text-base">{{ detail.label }}</span>
                  <span class="text-gray-900 text-sm sm:text-base text-right">{{ detail.value }}</span>
                </div>
              </div>
            </section>
            <!-- Formulaire de visite -->
             <!-- Formulaire de visite -->
<section class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
  <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Planifier une visite</h2>
  
  <!-- Message de succès -->
  <div v-if="submitSuccess" class="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
    <div class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span class="text-green-800 font-medium">Votre demande de visite a été envoyée avec succès !</span>
    </div>
    <p class="text-green-700 text-sm mt-1">L'agent vous contactera rapidement pour confirmer la visite.</p>
  </div>

  <!-- Message d'erreur -->
  <div v-if="submitError" class="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
    <div class="flex items-center">
      <svg class="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
      </svg>
      <span class="text-red-800 font-medium">{{ submitError }}</span>
    </div>
  </div>

  <form @submit.prevent="scheduleVisit" class="space-y-4 sm:space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      <div class="sm:col-span-2 lg:col-span-1">
        <label class="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          Type de visite <span class="text-red-500">*</span>
        </label>
        <select 
          v-model="visitData.type" 
          required
          class="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent text-sm sm:text-base"
          :disabled="submitting"
        >
          <option value="">Sélectionner</option>
          <option value="physique">Visite Physique</option>
          <option value="virtuelle">Visite Virtuelle</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          Date <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="visitData.date" 
          type="date" 
          required
          :min="new Date().toISOString().split('T')[0]" 
          class="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent text-sm sm:text-base"
          :disabled="submitting"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          Heure <span class="text-red-500">*</span>
        </label>
        <select 
          v-model="visitData.time" 
          required
          class="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent text-sm sm:text-base"
          :disabled="submitting"
        >
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="14:00">2:00 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="16:00">4:00 PM</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          Nom complet <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="visitData.name" 
          type="text" 
          required 
          class="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent text-sm sm:text-base"
          :disabled="submitting"
          placeholder="Votre nom complet"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          Téléphone <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="visitData.phone" 
          type="tel" 
          required 
          class="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent text-sm sm:text-base"
          :disabled="submitting"
          placeholder="Votre numéro de téléphone"
        >
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Message (optionnel)</label>
      <textarea 
        v-model="visitData.message" 
        rows="3" 
        class="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent text-sm sm:text-base"
        :disabled="submitting"
        placeholder="Informations supplémentaires pour la visite..."
      ></textarea>
    </div>

    <button 
      type="submit" 
      :disabled="submitting"
      :class="[
        'w-full sm:w-auto font-semibold py-2 sm:py-3 px-6 rounded-lg transition-colors text-sm sm:text-base',
        submitting 
          ? 'bg-gray-400 cursor-not-allowed text-white' 
          : 'bg-[#2F4F4F] hover:bg-[#287373] text-white'
      ]"
    >
      <span v-if="submitting" class="flex items-center justify-center">
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Envoi en cours...
      </span>
      <span v-else>
        Demander une visite
      </span>
    </button>
  </form>
</section>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1 space-y-4 sm:space-y-6">
            <!-- Carte agent simplifiée -->
            <aside class="bg-white rounded-lg shadow-lg p-4 sm:p-6 sticky top-4">
              <div class="flex items-center mb-4 pb-4 border-b border-gray-100">
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span class="text-white text-lg sm:text-xl font-bold">{{ getAuthorInitials(property.agent.nom) }}</span>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-sm sm:text-base">{{ property.agent.nom }}</h3>
                  <p class="text-gray-600 text-xs sm:text-sm">Agent immobilier</p>
                </div>
              </div>

              <!-- Contacts simplifiés -->
              <div class="space-y-3">
                <!-- Bouton Appel -->
                <button 
                  @click="callAgent"
                  class="w-full bg-[#2F4F4F] hover:bg-[#287373] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Appeler l'agent
                </button>

                <!-- Bouton WhatsApp -->
                <button 
                  @click="openWhatsApp"
                  class="w-full border border-green-500 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>

              <!-- Numéro de téléphone visible -->
              <div class="mt-4 p-3 bg-gray-50 rounded-lg text-center">
                <p class="text-xs text-gray-600 mb-1">Téléphone direct</p>
                <p class="text-lg font-bold text-[#2F4F4F]">{{property.agent.phone}}</p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <!-- Lightbox -->
      <div v-if="lightboxOpen" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
        <button 
          @click="lightboxOpen = false"
          class="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-1 sm:p-2"
        >
          <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        <div class="relative max-w-4xl w-full">
          <img 
            :src="property.images[currentImageIndex]?.nom" 
            :alt="property.nom"
            class="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Propriété non trouvée</h2>
        <router-link to="/" class="text-[#2F4F4F] hover:underline">
          Retour à l'accueil
        </router-link>
      </div>
    </div>
    
    <FooterComponent />
  </div>
</template>

<style scoped>
.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1rem;
}

.sticky {
  position: sticky;
}

/* Styles pour l'impression */
@media print {
  .no-print {
    display: none !important;
  }
  
  body {
    background: white !important;
  }
  
  .bg-gray-50 {
    background: white !important;
  }
  
  .shadow-lg, .shadow-xl {
    box-shadow: none !important;
  }
  
  .rounded-2xl, .rounded-lg {
    border-radius: 0 !important;
  }
}

/* Améliorations pour mobile */
@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>