<template>
  <div class="mt-20 relative">
    <!-- Conteneur principal avec effet de verre amélioré -->
    <div class="relative bg-gradient-to-br from-gray-900 via-[#1a5f5f] to-[#2F4F4F] p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
      
      <!-- Éléments décoratifs animés en arrière-plan -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"></div>
        <div class="absolute -bottom-16 -left-16 w-32 h-32 bg-[#05b1b1]/20 rounded-full"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
      
      <!-- Pattern géométrique subtil -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div class="absolute inset-0" style="
          background-image: 
            radial-gradient(circle at 25% 25%, white 1px, transparent 0),
            radial-gradient(circle at 75% 75%, white 1px, transparent 0);
          background-size: 40px 40px;
        "></div>
      </div>

      <!-- Contenu principal -->
      <div class="relative z-10 max-w-4xl mx-auto">
        
        <!-- Titre principal avec effet de gradient animé amélioré -->
        <h3 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span class="bg-gradient-to-r from-white via-cyan-100 to-emerald-200 bg-clip-text text-transparent bg-300% animate-gradient">
            Votre excellence<br class="hidden md:block">
            <span class="inline-block mt-2">immobilière commence ici</span>
          </span>
        </h3>

        <!-- Description avec statistique animée -->
        <div class="mb-10">
          <p class="text-xl md:text-2xl text-cyan-100/90 leading-relaxed max-w-3xl mx-auto font-light">
            Rejoignez les 
            <span class="font-bold text-white relative inline-block">
              <span class="counter">{{ Math.floor(counter) }}+</span>
              <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span> 
            clients satisfaits qui nous font confiance
          </p>
        </div>

        <!-- Actions principales améliorées -->
        <div class="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8">
          
          <!-- Bouton principal avec effets avancés -->
          <button 
            @click="showForm = true"
            class="group relative bg-gradient-to-r from-white to-cyan-100 text-gray-900 px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 min-w-[200px] cursor-pointer"
          >
            
            <!-- Effet de brillance amélioré -->
            <div class="absolute inset-0 overflow-hidden rounded-2xl">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            
            <!-- Particules animées -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
              <div class="absolute bottom-2 right-6 w-1 h-1 bg-white rounded-full animate-bounce" style="animation-delay: 0.3s;"></div>
            </div>
            
            <span class="relative flex items-center justify-center gap-3 text-lg">
              <svg class="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Débuter mon projet
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal du formulaire -->
    <div 
      v-if="showForm" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      @click.self="showForm = false"
    >
      <div class="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-500 scale-95 opacity-0"
           :class="showForm ? 'scale-100 opacity-100' : ''">
        
        <!-- Header du modal -->
        <div class="bg-gradient-to-r from-[#2F4F4F] to-[#1a5f5f] p-6 text-white relative">
          <button 
            @click="showForm = false"
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-2">Formulaire de Demande</h2>
            <p class="text-white/90">Laissez-nous vous guider dans la réalisation de vos projets immobiliers</p>
          </div>
        </div>

        <!-- Contenu du formulaire -->
        <div class="p-6 md:p-8 max-h-[calc(90vh-140px)] overflow-y-auto custom-scrollbar">
          <form @submit.prevent="submitForm" class="space-y-6">
            
            <!-- Type de demande -->
            <div>
              <label class="block text-lg font-semibold text-gray-800 mb-3">Type de demande *</label>
              <select 
                v-model="formData.type_demande" 
                @blur="validateField('type_demande')"
                :class="[
                  'w-full p-4 border-2 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 bg-white cursor-pointer',
                  errors.type_demande ? 'border-red-500' : 'border-gray-200'
                ]"
              >
                <option value="">Sélectionner</option>
                <option value="achat">Achat</option>
                <option value="vente">Vente</option>
                <option value="location">Location</option>
                <option value="estimation">Estimation gratuite</option>
                <option value="conseil">Conseil personnalisé</option>
              </select>
              <p v-if="errors.type_demande" class="text-red-500 text-sm mt-1">{{ errors.type_demande }}</p>
            </div>

            <!-- Informations personnelles -->
            <div>
              <label class="block text-lg font-semibold text-gray-800 mb-3">Je suis... *</label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-[#2F4F4F]/50 transition-all duration-300"
                       :class="errors.me ? 'border-red-500' : 'border-gray-200'">
                  <input type="radio" v-model="formData.me" value="particulier" class="text-[#2F4F4F] focus:ring-[#2F4F4F] cursor-pointer">
                  <span class="ml-3 text-gray-700 font-medium">Particulier</span>
                </label>
                <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-[#2F4F4F]/50 transition-all duration-300"
                       :class="errors.me ? 'border-red-500' : 'border-gray-200'">
                  <input type="radio" v-model="formData.me" value="professionnel" class="text-[#2F4F4F] focus:ring-[#2F4F4F] cursor-pointer">
                  <span class="ml-3 text-gray-700 font-medium">Professionnel</span>
                </label>
              </div>
              <p v-if="errors.me" class="text-red-500 text-sm mt-1 -mt-4 mb-4">{{ errors.me }}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                  <input 
                    type="text" 
                    v-model="formData.firstname"
                    @blur="validateField('firstname')"
                    :class="[
                      'w-full p-4 border-2 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-text',
                      errors.firstname ? 'border-red-500' : 'border-gray-200'
                    ]"
                    placeholder="Votre prénom"
                  >
                  <p v-if="errors.firstname" class="text-red-500 text-sm mt-1">{{ errors.firstname }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input 
                    type="text" 
                    v-model="formData.lastname"
                    @blur="validateField('lastname')"
                    :class="[
                      'w-full p-4 border-2 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-text',
                      errors.lastname ? 'border-red-500' : 'border-gray-200'
                    ]"
                    placeholder="Votre nom"
                  >
                  <p v-if="errors.lastname" class="text-red-500 text-sm mt-1">{{ errors.lastname }}</p>
                </div>
              </div>

              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Adresse email *</label>
                <input 
                  type="email" 
                  v-model="formData.email"
                  @blur="validateField('email')"
                  :class="[
                    'w-full p-4 border-2 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-text',
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  ]"
                  placeholder="votre@email.com"
                >
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <!-- Localisation -->
            <div>
              <label class="block text-lg font-semibold text-gray-800 mb-3">Localisation</label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Ville *</label>
                  <input 
                    type="text" 
                    v-model="formData.city"
                    @blur="validateField('city')"
                    :class="[
                      'w-full p-4 border-2 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-text',
                      errors.city ? 'border-red-500' : 'border-gray-200'
                    ]"
                    placeholder="Votre ville"
                  >
                  <p v-if="errors.city" class="text-red-500 text-sm mt-1">{{ errors.city }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
                  <input 
                    type="text" 
                    v-model="formData.code_postal"
                    class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-text"
                    placeholder="Code postal (optionnel)"
                  >
                </div>
              </div>
            </div>

            <!-- Propriété -->
            <div>
              <label class="block text-lg font-semibold text-gray-800 mb-3">Propriété *</label>
              
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">Type de bien *</label>
                <select 
                  v-model="formData.type_bien" 
                  @blur="validateField('type_bien')"
                  :class="[
                    'w-full p-4 border-2 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-pointer',
                    errors.type_bien ? 'border-red-500' : 'border-gray-200'
                  ]"
                >
                  <option value="">Sélectionner</option>
                  <option value="maison">Maison individuelle</option>
                  <option value="appartement">Appartement</option>
                  <option value="multifamiliale">Maison multifamiliale</option>
                  <option value="commercial">Local commercial</option>
                  <option value="terrain">Terrain</option>
                </select>
                <p v-if="errors.type_bien" class="text-red-500 text-sm mt-1">{{ errors.type_bien }}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Prix maximum ($)</label>
                  <input 
                    type="number" 
                    v-model="formData.price_max"
                    class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-text"
                    placeholder="Budget maximum en dollars"
                    min="0"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Surface minimum (m²)</label>
                  <input 
                    type="number" 
                    v-model="formData.surface"
                    class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-text"
                    placeholder="Surface minimum"
                    min="0"
                  >
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de chambres</label>
                  <input 
                    type="number" 
                    v-model="formData.room"
                    class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-text"
                    placeholder="Nb. chambres"
                    min="0"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de salles de bain</label>
                  <input 
                    type="number" 
                    v-model="formData.salle_bain"
                    class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 cursor-text"
                    placeholder="Nb. salles de bain"
                    min="0"
                  >
                </div>
              </div>
            </div>

            <!-- Message supplémentaire -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message supplémentaire</label>
              <textarea 
                v-model="formData.description"
                rows="4"
                class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#2F4F4F] focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all duration-300 resize-none cursor-text"
                placeholder="Décrivez vos besoins spécifiques..."
              ></textarea>
            </div>

            <!-- RGPD -->
            <div class="flex items-start space-x-3">
              <input 
                type="checkbox" 
                v-model="formData.is_allow"
                @change="validateField('is_allow')"
                class="mt-1 text-[#2F4F4F] focus:ring-[#2F4F4F] rounded cursor-pointer"
              >
              <label class="text-sm text-gray-600 cursor-pointer">
                J'accepte que mes données soient utilisées pour traiter ma demande conformément à la 
                <a href="#" class="text-[#2F4F4F] hover:underline">politique de confidentialité</a>.
              </label>
            </div>
            <p v-if="errors.is_allow" class="text-red-500 text-sm mt-1">{{ errors.is_allow }}</p>

            <!-- Résumé des erreurs -->
            <div v-if="Object.keys(errors).some(key => errors[key])" class="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <p class="text-red-800 font-medium mb-2">Veuillez corriger les erreurs suivantes :</p>
              <ul class="text-red-700 text-sm list-disc list-inside">
                <li v-for="error in Object.values(errors).filter(e => e)" :key="error">{{ error }}</li>
              </ul>
            </div>

            <!-- Boutons d'action -->
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                type="button"
                @click="showForm = false"
                class="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all duration-300 cursor-pointer"
              >
                Annuler
              </button>
              <button 
                type="submit"
                :disabled="!isFormValid || isSubmitting"
                :class="[
                  'flex-1 px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform',
                  isSubmitting || !isFormValid 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-gradient-to-r from-[#2F4F4F] to-[#1a5f5f] text-white hover:from-[#2a7a7a] hover:to-[#155050] hover:scale-105 cursor-pointer'
                ]"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </span>
                <span v-else>
                  Envoyer ma demande
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Popup de notification -->
    <div v-if="showNotification" class="fixed inset-0 z-[60] flex items-end justify-center p-4 pointer-events-none">
      <div class="w-full max-w-md transform transition-all duration-500"
           :class="showNotification ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'">
        
        <!-- Notification de succès -->
        <div v-if="notificationType === 'success'" 
             class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow-lg pointer-events-auto mb-4 animate-slideUp">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800">
                Demande envoyée avec succès !
              </p>
              <p class="mt-1 text-sm text-green-600">
                Nous avons bien reçu votre demande et nous vous contacterons rapidement.
              </p>
            </div>
            <button 
              @click="hideNotification"
              class="ml-auto pl-3 flex-shrink-0 cursor-pointer"
            >
              <svg class="h-4 w-4 text-green-400 hover:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Notification d'erreur -->
        <div v-else-if="notificationType === 'error'"
             class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-lg pointer-events-auto mb-4 animate-slideUp">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800">
                Erreur lors de l'envoi
              </p>
              <p class="mt-1 text-sm text-red-600">
                {{ submitError }}
              </p>
            </div>
            <button 
              @click="hideNotification"
              class="ml-auto pl-3 flex-shrink-0 cursor-pointer"
            >
              <svg class="h-4 w-4 text-red-400 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { useAxiosRequest } from "@/utils/custom"

const showForm = ref(false)
const counter = ref(0)
const target = 200
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')
const showNotification = ref(false)
const notificationType = ref<'success' | 'error' | null>(null)

const formData = reactive({
  type_demande: '',
  me: '',
  lastname: '',
  firstname: '',
  email: '',
  city: '',
  code_postal: '',
  type_bien: '',
  price_max: '',
  room: '',
  surface: '',
  salle_bain: '',
  description: '',
  is_allow: false
})

const errors = reactive({
  type_demande: '',
  me: '',
  firstname: '',
  lastname: '',
  email: '',
  city: '',
  type_bien: '',
  is_allow: ''
})

// Validation des champs
const validateField = (fieldName: string) => {
  const value = formData[fieldName]
  
  switch (fieldName) {
    case 'type_demande':
      errors.type_demande = value ? '' : 'Veuillez sélectionner un type de demande'
      break
    case 'me':
      errors.me = value ? '' : 'Veuillez sélectionner votre profil'
      break
    case 'firstname':
      errors.firstname = value.length >= 2 ? '' : 'Le prénom doit contenir au moins 2 caractères'
      break
    case 'lastname':
      errors.lastname = value.length >= 2 ? '' : 'Le nom doit contenir au moins 2 caractères'
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      errors.email = emailRegex.test(value) ? '' : 'Veuillez entrer une adresse email valide'
      break
    case 'city':
      errors.city = value.length >= 2 ? '' : 'Veuillez entrer une ville valide'
      break
    case 'type_bien':
      errors.type_bien = value ? '' : 'Veuillez sélectionner un type de bien'
      break
    case 'is_allow':
      errors.is_allow = value ? '' : 'Vous devez accepter les conditions pour continuer'
      break
  }
}

// Validation complète du formulaire
const validateForm = () => {
  validateField('type_demande')
  validateField('me')
  validateField('firstname')
  validateField('lastname')
  validateField('email')
  validateField('city')
  validateField('type_bien')
  validateField('is_allow')
  
  return !Object.values(errors).some(error => error)
}

// Computed property pour vérifier si le formulaire est valide
const isFormValid = computed(() => {
  return formData.type_demande && 
         formData.me && 
         formData.firstname.length >= 2 &&
         formData.lastname.length >= 2 &&
         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
         formData.city.length >= 2 &&
         formData.type_bien &&
         formData.is_allow
})

// Fonctions pour gérer les notifications
const showSuccessNotification = () => {
  notificationType.value = 'success'
  showNotification.value = true
  setTimeout(() => {
    hideNotification()
  }, 5000)
}

const showErrorNotification = (message: string) => {
  submitError.value = message
  notificationType.value = 'error'
  showNotification.value = true
  setTimeout(() => {
    hideNotification()
  }, 5000)
}

const hideNotification = () => {
  showNotification.value = false
  setTimeout(() => {
    notificationType.value = null
    submitError.value = ''
  }, 300)
}

// Fonction d'envoi vers l'API
const submitForm = async () => {
  // Validation avant envoi
  if (!validateForm()) {
    const firstErrorField = Object.keys(errors).find(key => errors[key])
    if (firstErrorField) {
      const element = document.querySelector(`[v-model="formData.${firstErrorField}"]`)
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    // Préparer les données pour l'API
    const requestData = {
      type_demande: formData.type_demande,
      me: formData.me,
      lastname: formData.lastname,
      firstname: formData.firstname,
      email: formData.email,
      city: formData.city,
      code_postal: formData.code_postal || null,
      type_bien: formData.type_bien,
      price_max: formData.price_max ? formData.price_max.toString() : null,
      room: formData.room ? parseInt(formData.room) : null,
      surface: formData.surface ? formData.surface.toString() : null,
      salle_bain: formData.salle_bain ? parseInt(formData.salle_bain) : null,
      description: formData.description || null,
      is_allow: formData.is_allow
    }

    console.log('Envoi de la demande:', requestData)

    // Envoyer la requête POST à l'API
    const response = await useAxiosRequest().post('/demande', requestData)

    // Vérifier la réponse
    if (response.data && response.data.demande && response.data.message) {
      // SUCCÈS
      submitSuccess.value = true
      
      // Réinitialiser le formulaire
      Object.keys(formData).forEach(key => {
        if (key !== 'is_allow') {
          formData[key] = ''
        }
        formData.is_allow = false
      })
      
      // Réinitialiser les erreurs
      Object.keys(errors).forEach(key => {
        errors[key] = ''
      })
      
      // Fermer le modal
      showForm.value = false
      
      // Afficher la notification de succès
      showSuccessNotification()
      
    } else {
      // ÉCHEC
      showErrorNotification('Erreur lors de l\'envoi de la demande - réponse API invalide')
    }

  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de la demande:', error)
    
    // Gestion des erreurs spécifiques
    if (error.response) {
      const errorMessage = error.response.data?.message || 
                          error.response.data?.error || 
                          'Erreur serveur'
      
      // Gestion des erreurs de validation Laravel
      if (error.response.status === 422 && error.response.data.errors) {
        const validationErrors = error.response.data.errors
        const firstError = Object.values(validationErrors)[0]
        showErrorNotification(`Erreur de validation: ${Array.isArray(firstError) ? firstError[0] : firstError}`)
      } else {
        showErrorNotification(`Erreur: ${errorMessage}`)
      }
    } else if (error.request) {
      showErrorNotification('Impossible de contacter le serveur. Vérifiez votre connexion internet.')
    } else {
      showErrorNotification('Une erreur inattendue est survenue lors de l\'envoi')
    }
  } finally {
    isSubmitting.value = false
  }
}

const startCounter = () => {
  const increment = target / 50
  const updateCounter = () => {
    if (counter.value < target) {
      counter.value += increment
      setTimeout(updateCounter, 40)
    } else {
      counter.value = target
    }
  }
  updateCounter()
}

// Démarrer le compteur quand le composant est monté
onMounted(() => {
  startCounter()
})
</script>

<style scoped>
/* Animation pour la notification */
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slideUp {
  animation: slideUp 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

/* Autres styles existants... */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
  background-size: 200% 200%;
}

/* Scrollbar personnalisé plus large */
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f8fafc;
  border-radius: 6px;
  margin: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 6px;
  border: 2px solid #f8fafc;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.custom-scrollbar::-webkit-scrollbar-thumb:active {
  background: #64748b;
}

/* Support pour Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f8fafc;
}

/* Effet de focus personnalisé pour les inputs */
input:focus, select:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(50, 147, 147, 0.1);
  outline: none;
}

/* Animation pour les labels */
label {
  transition: all 0.3s ease;
}

/* Effet de hover pour les boutons radio */
input[type="radio"] + span {
  transition: all 0.3s ease;
}

input[type="radio"]:checked + span {
  color: #2F4F4F;
  font-weight: 600;
}

/* Responsive design amélioré */
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .flex-col.sm\:flex-row {
    flex-direction: column;
  }
  
  /* Scrollbar plus étroit sur mobile */
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
}

/* Animation des éléments flottants */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.bg-white\/5 {
  animation: float 6s ease-in-out infinite;
}

.bg-\[\#05b1b1\]\/20 {
  animation: float 8s ease-in-out infinite;
}

.bg-white\/10 {
  animation: float 10s ease-in-out infinite;
}

/* Styles pour les champs en erreur */
.border-red-500 {
  border-color: #ef4444;
}

.border-red-500:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Transition d'entrée du modal */
.modal-enter-active {
  transition: all 0.3s ease-out;
}

.modal-leave-active {
  transition: all 0.2s ease-in;
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>