<template>
  <div class="mt-20 relative">
    <!-- Conteneur principal avec effet de verre amélioré -->
    <div class="relative bg-gradient-to-br from-gray-900 via-[#1a5f5f] to-[#329393] p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
      
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
        <div class="bg-gradient-to-r from-[#329393] to-[#1a5f5f] p-6 text-white relative">
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
                v-model="formData.requestType" 
                @blur="validateField('requestType')"
                :class="[
                  'w-full p-4 border-2 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 bg-white cursor-pointer',
                  errors.requestType ? 'border-red-500' : 'border-gray-200'
                ]"
              >
                <option value="">Sélectionner</option>
                <option value="achat">Achat</option>
                <option value="vente">Vente</option>
                <option value="location">Location</option>
                <option value="estimation">Estimation gratuite</option>
                <option value="conseil">Conseil personnalisé</option>
              </select>
              <p v-if="errors.requestType" class="text-red-500 text-sm mt-1">{{ errors.requestType }}</p>
            </div>

            <!-- Informations personnelles -->
            <div>
              <label class="block text-lg font-semibold text-gray-800 mb-3">Je suis... *</label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-[#329393]/50 transition-all duration-300"
                       :class="errors.userType ? 'border-red-500' : 'border-gray-200'">
                  <input type="radio" v-model="formData.userType" value="particulier" class="text-[#329393] focus:ring-[#329393] cursor-pointer">
                  <span class="ml-3 text-gray-700 font-medium">Particulier</span>
                </label>
                <label class="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-[#329393]/50 transition-all duration-300"
                       :class="errors.userType ? 'border-red-500' : 'border-gray-200'">
                  <input type="radio" v-model="formData.userType" value="professionnel" class="text-[#329393] focus:ring-[#329393] cursor-pointer">
                  <span class="ml-3 text-gray-700 font-medium">Professionnel</span>
                </label>
              </div>
              <p v-if="errors.userType" class="text-red-500 text-sm mt-1 -mt-4 mb-4">{{ errors.userType }}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                  <input 
                    type="text" 
                    v-model="formData.firstName"
                    @blur="validateField('firstName')"
                    :class="[
                      'w-full p-4 border-2 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-text',
                      errors.firstName ? 'border-red-500' : 'border-gray-200'
                    ]"
                    placeholder="Votre prénom"
                  >
                  <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input 
                    type="text" 
                    v-model="formData.lastName"
                    @blur="validateField('lastName')"
                    :class="[
                      'w-full p-4 border-2 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-text',
                      errors.lastName ? 'border-red-500' : 'border-gray-200'
                    ]"
                    placeholder="Votre nom"
                  >
                  <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
                </div>
              </div>

              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Adresse email *</label>
                <input 
                  type="email" 
                  v-model="formData.email"
                  @blur="validateField('email')"
                  :class="[
                    'w-full p-4 border-2 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-text',
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  ]"
                  placeholder="votre@email.com"
                >
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <!-- Localisation -->
            <div>
              <label class="block text-lg font-semibold text-gray-800 mb-3">Localisation *</label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Ville *</label>
                  <input 
                    type="text" 
                    v-model="formData.city"
                    @blur="validateField('city')"
                    :class="[
                      'w-full p-4 border-2 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-text',
                      errors.city ? 'border-red-500' : 'border-gray-200'
                    ]"
                    placeholder="Votre ville"
                  >
                  <p v-if="errors.city" class="text-red-500 text-sm mt-1">{{ errors.city }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Code postal *</label>
                  <input 
                    type="text" 
                    v-model="formData.zipCode"
                    @blur="validateField('zipCode')"
                    :class="[
                      'w-full p-4 border-2 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-text',
                      errors.zipCode ? 'border-red-500' : 'border-gray-200'
                    ]"
                    placeholder="Code postal"
                  >
                  <p v-if="errors.zipCode" class="text-red-500 text-sm mt-1">{{ errors.zipCode }}</p>
                </div>
              </div>
            </div>

            <!-- Propriété -->
            <div>
              <label class="block text-lg font-semibold text-gray-800 mb-3">Propriété</label>
              
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">Type de bien</label>
                <select 
                  v-model="formData.propertyType" 
                  class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-pointer"
                >
                  <option value="">Sélectionner</option>
                  <option value="maison">Maison individuelle</option>
                  <option value="appartement">Appartement</option>
                  <option value="multifamiliale">Maison multifamiliale</option>
                  <option value="commercial">Local commercial</option>
                  <option value="terrain">Terrain</option>
                </select>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Prix maximum (€)</label>
                  <input 
                    type="number" 
                    v-model="formData.maxPrice"
                    class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-text"
                    placeholder="Budget maximum"
                    min="0"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Surface minimum (m²)</label>
                  <input 
                    type="number" 
                    v-model="formData.minSize"
                    class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-text"
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
                    v-model="formData.bedrooms"
                    class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-text"
                    placeholder="Nb. chambres"
                    min="0"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de salles de bain</label>
                  <input 
                    type="number" 
                    v-model="formData.bathrooms"
                    class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 cursor-text"
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
                v-model="formData.message"
                rows="4"
                class="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#329393] focus:ring-2 focus:ring-[#329393]/20 transition-all duration-300 resize-none cursor-text"
                placeholder="Décrivez vos besoins spécifiques..."
              ></textarea>
            </div>

            <!-- RGPD -->
            <div class="flex items-start space-x-3">
              <input 
                type="checkbox" 
                v-model="formData.gdprConsent"
                @change="validateField('gdprConsent')"
                class="mt-1 text-[#329393] focus:ring-[#329393] rounded cursor-pointer"
              >
              <label class="text-sm text-gray-600 cursor-pointer">
                J'accepte que mes données soient utilisées pour traiter ma demande conformément à la 
                <a href="#" class="text-[#329393] hover:underline">politique de confidentialité</a>.
              </label>
            </div>
            <p v-if="errors.gdprConsent" class="text-red-500 text-sm mt-1">{{ errors.gdprConsent }}</p>

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
                class="flex-1 px-6 py-4 bg-gradient-to-r from-[#329393] to-[#1a5f5f] text-white rounded-lg font-semibold hover:from-[#2a7a7a] hover:to-[#155050] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande' }}
              </button>
            </div>

            <!-- Résumé des erreurs -->
            <div v-if="Object.keys(errors).some(key => errors[key])" class="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <p class="text-red-800 font-medium mb-2">Veuillez corriger les erreurs suivantes :</p>
              <ul class="text-red-700 text-sm list-disc list-inside">
                <li v-for="error in Object.values(errors).filter(e => e)" :key="error">{{ error }}</li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'

const showForm = ref(false)
const counter = ref(0)
const target = 200
const isSubmitting = ref(false)

const formData = reactive({
  requestType: '',
  userType: '',
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  zipCode: '',
  propertyType: '',
  maxPrice: '',
  minSize: '',
  bedrooms: '',
  bathrooms: '',
  message: '',
  gdprConsent: false
})

const errors = reactive({
  requestType: '',
  userType: '',
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  zipCode: '',
  gdprConsent: ''
})

// Validation des champs
const validateField = (fieldName) => {
  const value = formData[fieldName]
  
  switch (fieldName) {
    case 'requestType':
      errors.requestType = value ? '' : 'Veuillez sélectionner un type de demande'
      break
    case 'userType':
      errors.userType = value ? '' : 'Veuillez sélectionner votre profil'
      break
    case 'firstName':
      errors.firstName = value.length >= 2 ? '' : 'Le prénom doit contenir au moins 2 caractères'
      break
    case 'lastName':
      errors.lastName = value.length >= 2 ? '' : 'Le nom doit contenir au moins 2 caractères'
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      errors.email = emailRegex.test(value) ? '' : 'Veuillez entrer une adresse email valide'
      break
    case 'city':
      errors.city = value.length >= 2 ? '' : 'Veuillez entrer une ville valide'
      break
    case 'zipCode':
      const zipRegex = /^\d{5}$/
      errors.zipCode = zipRegex.test(value) ? '' : 'Le code postal doit contenir 5 chiffres'
      break
    case 'gdprConsent':
      errors.gdprConsent = value ? '' : 'Vous devez accepter les conditions pour continuer'
      break
  }
}

// Validation complète du formulaire
const validateForm = () => {
  validateField('requestType')
  validateField('userType')
  validateField('firstName')
  validateField('lastName')
  validateField('email')
  validateField('city')
  validateField('zipCode')
  validateField('gdprConsent')
  
  return !Object.values(errors).some(error => error)
}

// Computed property pour vérifier si le formulaire est valide
const isFormValid = computed(() => {
  return formData.requestType && 
         formData.userType && 
         formData.firstName.length >= 2 &&
         formData.lastName.length >= 2 &&
         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
         formData.city.length >= 2 &&
         /^\d{5}$/.test(formData.zipCode) &&
         formData.gdprConsent
})

const submitForm = async () => {
  // Validation avant envoi
  if (!validateForm()) {
    // Scroll vers le premier champ en erreur
    const firstErrorField = Object.keys(errors).find(key => errors[key])
    if (firstErrorField) {
      const element = document.querySelector(`[v-model="formData.${firstErrorField}"]`)
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    return
  }

  isSubmitting.value = true

  try {
    // Simulation d'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Formulaire envoyé:', formData)
    
    // Réinitialiser le formulaire
    Object.keys(formData).forEach(key => {
      if (key !== 'gdprConsent') {
        formData[key] = ''
      }
      formData.gdprConsent = false
    })
    
    // Réinitialiser les erreurs
    Object.keys(errors).forEach(key => {
      errors[key] = ''
    })
    
    // Fermer le modal
    showForm.value = false
    
    // Notification de succès
    alert('Votre demande a été envoyée avec succès ! Nous vous contacterons rapidement.')
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    alert('Une erreur est survenue. Veuillez réessayer.')
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
/* Animations améliorées */
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
  color: #329393;
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