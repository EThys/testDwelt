<template>
  <Header/>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section avec image principale -->
    <div class="relative w-full h-[70vh] bg-cover bg-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200" 
        alt="Magnifique Maison Basse"
        class="w-full h-full object-cover"
      />
      
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      <!-- Header avec badges -->
      <header class="flex justify-between items-center p-6 absolute top-0 w-full z-10">
        <div class="flex space-x-3">
          <span class="bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-full uppercase shadow-lg">
            EN VEDETTE
          </span>
          <span class="bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-full uppercase shadow-lg">
            À VENDRE
          </span>
          <span class="bg-gray-700 text-white text-xs font-bold px-3 py-2 rounded-full uppercase shadow-lg">
            VIDE
          </span>
        </div>
        
        <div class="flex space-x-3">
          <button 
            @click="toggleFavorite"
            class="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-all"
          >
            <svg class="w-5 h-5 text-white" :class="isFavorite ? 'fill-red-500' : ''" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          
          <button class="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/50 transition-all">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
          </button>
        </div>
      </header>

      <!-- Contenu principal -->
      <div class="absolute bottom-8 left-8 text-white z-10">
        <nav class="flex items-center space-x-2 text-sm mb-4 opacity-90">
          <a href="#" class="hover:text-[#329393] transition-colors">Accueil</a>
          <span>/</span>
          <a href="#" class="hover:text-[#329393] transition-colors">Maison Individuelle</a>
          <span>/</span>
          <span class="text-gray-300">Magnifique Maison Basse</span>
        </nav>
        
        <h1 class="text-4xl lg:text-5xl font-bold mb-2">Magnifique Maison Basse</h1>
        <p class="text-lg flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          Macampagne - Place commerciale
        </p>
      </div>

      <!-- Prix et actions -->
      <div class="absolute bottom-8 right-8 text-white z-10 text-right">
        <div class="text-4xl font-extrabold mb-4">$400,000</div>
        <div class="flex justify-end space-x-3">
          <!-- Bouton Imprimer -->
          <button 
            @click="printPage"
            class="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-3 rounded-full transition-all group relative"
            title="Imprimer la page"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
            <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Imprimer
            </span>
          </button>

          <!-- Bouton WhatsApp -->
          <button 
            @click="openWhatsApp"
            class="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-3 rounded-full transition-all group relative"
            title="Contacter sur WhatsApp"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              WhatsApp
            </span>
          </button>

          <!-- Bouton Favori -->
          <button 
            @click="toggleFavorite"
            class="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-3 rounded-full transition-all group relative"
            :title="isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'"
          >
            <svg class="w-5 h-5" :class="isFavorite ? 'fill-red-500' : ''" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {{ isFavorite ? 'Favori' : 'Favoris' }}
            </span>
          </button>

          <!-- Bouton Visiter -->
          <button 
            @click="scheduleVisit"
            class="bg-[#329393] hover:bg-[#287373] text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <span>Visiter</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Contenu principal -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Colonne principale -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Galerie d'images -->
          <section class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="grid grid-cols-2 gap-4 p-6">
              <div 
                v-for="(image, index) in property.images" 
                :key="index"
                class="relative cursor-pointer group"
                @click="openLightbox(index)"
              >
                <img 
                  :src="image" 
                  :alt="`Image ${index + 1}`"
                  class="w-full h-48 object-cover rounded-xl transition-transform group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all rounded-xl"></div>
              </div>
            </div>
          </section>

          <!-- Description -->
          <section class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Description</h2>
            <div class="prose prose-lg text-gray-700 leading-relaxed">
              <p class="mb-4">
                Située dans le prestigieux quartier de Macampagne, cette charmante maison basse de 3 chambres se trouve dans une petite concession privée de seulement trois habitations, garantissant calme, intimité et sécurité.
              </p>
              <p>
                L'environnement est résidentiel, paisible et très recherché pour sa qualité de vie. Cette propriété allie modernité et authenticité avec ses volumes généreux et ses prestations haut de gamme.
              </p>
            </div>
          </section>

          <!-- Détails de la propriété -->
          <section class="bg-white rounded-2xl shadow-lg p-8">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-bold text-gray-900">Détails de la propriété</h2>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Mis à jour le {{ property.updatedAt }}
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(detail, index) in propertyDetails" :key="index" class="flex justify-between py-3 border-b border-gray-100">
                <span class="font-semibold text-gray-600">{{ detail.label }}</span>
                <span class="text-gray-900">{{ detail.value }}</span>
              </div>
            </div>
          </section>

          <!-- Adresse -->
          <section class="bg-white rounded-2xl shadow-lg p-8">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-bold text-gray-900">Adresse</h2>
              <button class="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Ouvrir sur Google Maps
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div><strong class="text-gray-500 block">Adresse</strong> Macampagne - Place commerciale</div>
              <div><strong class="text-gray-500 block">Code postal</strong> 0012</div>
              <div><strong class="text-gray-500 block">Ville</strong> Ngaliema</div>
              <div><strong class="text-gray-500 block">Zone</strong> Kinshasa</div>
              <div><strong class="text-gray-500 block">Pays</strong> Congo-Kinshasa</div>
            </div>
          </section>

          <!-- Formulaire de visite -->
          <section class="bg-white rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Planifier une visite</h2>
            
            <form @submit.prevent="scheduleVisit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type de visite</label>
                  <select v-model="visitData.type" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent">
                    <option value="">Sélectionner</option>
                    <option value="physique">Visite Physique</option>
                    <option value="virtuelle">Visite Virtuelle</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input 
                    v-model="visitData.date" 
                    type="date" 
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent"
                  >
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Heure</label>
                  <select v-model="visitData.time" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent">
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <input 
                    v-model="visitData.name" 
                    type="text" 
                    required 
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent"
                  >
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input 
                    v-model="visitData.phone" 
                    type="tel" 
                    required 
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent"
                  >
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  v-model="visitData.message" 
                  rows="4" 
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent"
                  placeholder="Informations supplémentaires pour la visite..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="bg-[#329393] hover:bg-[#287373] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Demander une visite
              </button>
            </form>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Carte agent -->
          <aside class="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
            <div class="flex items-center mb-6 pb-6 border-b border-gray-100">
              <div class="w-16 h-16 bg-gradient-to-r from-[#329393] to-[#05b1b1] rounded-full flex items-center justify-center mr-4">
                <span class="text-white text-xl font-bold">CI</span>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">Chrispin Ilunga</h3>
                <p class="text-gray-600 text-sm">Agent immobilier</p>
                <a href="#" class="text-[#329393] text-sm hover:underline">Voir les annonces</a>
              </div>
            </div>

            <form @submit.prevent="contactAgent" class="space-y-4">
              <div>
                <input 
                  v-model="contactData.name" 
                  type="text" 
                  placeholder="Nom" 
                  required 
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent"
                >
              </div>

              <div>
                <input 
                  v-model="contactData.phone" 
                  type="tel" 
                  placeholder="Téléphone" 
                  required 
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent"
                >
              </div>

              <div>
                <input 
                  v-model="contactData.email" 
                  type="email" 
                  placeholder="Email" 
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent"
                >
              </div>

              <div>
                <textarea 
                  v-model="contactData.message" 
                  rows="4" 
                  placeholder="Bonjour, je suis intéressé par cette propriété..." 
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#329393] focus:border-transparent"
                ></textarea>
              </div>

              <div class="flex space-x-3">
                <button 
                  type="submit" 
                  class="flex-1 bg-[#329393] hover:bg-[#287373] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Envoyer
                </button>
                <button 
                  type="button" 
                  @click="callAgent"
                  class="flex-1 border border-[#329393] text-[#329393] hover:bg-[#329393] hover:text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Appeler
                </button>
              </div>

              <!-- Bouton WhatsApp fonctionnel -->
              <button 
                type="button" 
                @click="openWhatsApp"
                class="w-full border border-green-500 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </button>
            </form>
          </aside>

          <!-- Statistiques -->
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <h3 class="font-bold text-gray-900 mb-4">Statistiques</h3>
            <div class="space-y-4">
              <div v-for="stat in stats" :key="stat.label" class="flex items-center justify-between">
                <span class="text-gray-600">{{ stat.label }}</span>
                <span class="font-semibold text-gray-900">{{ stat.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button 
        @click="lightboxOpen = false"
        class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      
      <div class="relative max-w-4xl w-full">
        <img 
          :src="property.images[currentImageIndex]" 
          :alt="property.title"
          class="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
//@ts-ignore
import Header from "@/components/Header.vue"
//@ts-ignore
import FooterComponent from "@/components/FooterComponent.vue"

// États réactifs
const isFavorite = ref(false)
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Données de la propriété
const property = reactive({
  title: "Magnifique Maison Basse",
  price: 400000,
  address: "Macampagne - Place commerciale",
  images: [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
  ],
  updatedAt: "11 juillet 2025 à 18:19"
})

// Détails calculés
const propertyDetails = computed(() => [
  { label: "ID de la propriété", value: "DWTMSN-DWT" },
  { label: "Prix", value: "$400,000" },
  { label: "Taille du bien", value: "340 m²" },
  { label: "Superficie du terrain", value: "340 m²" },
  { label: "Chambres", value: "3" },
  { label: "Salles de bains", value: "2" },
  { label: "Garage", value: "1" },
  { label: "Type de propriété", value: "Maison individuelle" },
  { label: "Statut", value: "À Vendre" }
])

// Statistiques
const stats = ref([
  { label: "Vues", value: "1,247" },
  { label: "Favoris", value: "89" },
  { label: "Contacts", value: "34" }
])

// Données des formulaires
const visitData = reactive({
  type: '',
  date: '',
  time: '10:00',
  name: '',
  phone: '',
  message: ''
})

const contactData = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

// Méthodes
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
}

// Fonction d'impression
const printPage = () => {
  window.print()
}

// Fonction WhatsApp
const openWhatsApp = () => {
  const phoneNumber = '+243827777722' // Format international sans espaces
  const message = `Bonjour, je suis intéressé par la propriété "${property.title}" - ${property.address}`
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  
  window.open(whatsappUrl, '_blank')
}

// Fonction d'appel
const callAgent = () => {
  const phoneNumber = '+243827777722'
  window.open(`tel:${phoneNumber}`, '_self')
}

const scheduleVisit = () => {
  console.log('Visite planifiée:', visitData)
  // Logique d'envoi du formulaire
}

const contactAgent = () => {
  console.log('Contact agent:', contactData)
  // Logique d'envoi du formulaire
}
</script>

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
</style>