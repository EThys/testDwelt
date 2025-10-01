<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
    <Header/>
    <div class="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
    <div class="absolute inset-0">
      <img 
        :src=home_009
        alt="DWELT - Votre partenaire immobilier de confiance"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#1a5f5f]/80 to-[#2F4F4F]/60"></div>
    </div>
    
    <div class="relative z-10 flex items-center justify-center h-full px-4 text-center">
      <div class="max-w-4xl scroll-animate">
        <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-title">
            Termes &  <span class="text-white">Conditions</span>
        </h1>
        <p class="text-white text-xl lg:text-2xl font-light max-w-3xl mx-auto animate-subtitle">
          Conditions Générales d'Utilisation de Dwelt Immobilier
        </p>
      </div>
    </div>
    
    <!-- Date positionnée en bas au centre -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
      <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/20 shadow-lg text-sm md:text-base">
        <svg class="w-4 h-4 md:w-5 md:h-5 text-[#2F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="text-gray-700 font-medium">Dernière mise à jour : {{ currentDate }}</span>
      </div>
    </div>
    </div>


    <!-- Quick Navigation -->
    <section class="relative py-6 md:py-8 bg-white/50 backdrop-blur-sm border-b border-gray-200/60">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-2 md:gap-4 justify-center">
          <a v-for="section in quickNav" 
             :key="section.id" 
             :href="`#${section.id}`"
             class="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 hover:text-[#2F4F4F] px-3 py-2 md:px-4 md:py-2 rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200 text-xs md:text-sm font-medium">
            <component :is="section.icon" class="w-3 h-3 md:w-4 md:h-4" />
            <span class="hidden xs:inline">{{ section.title }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="relative py-12 md:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-4 gap-6 md:gap-8">
          <!-- Sidebar Navigation - Hidden on mobile -->
          <div class="lg:col-span-1 hidden lg:block">
            <div class="sticky top-32 bg-white rounded-2xl shadow-lg border border-gray-100/60 p-6">
              <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-[#2F4F4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
                Navigation
              </h3>
              <nav class="space-y-2">
                <a v-for="item in sidebarNav" 
                   :key="item.id"
                   :href="`#${item.id}`"
                   class="block text-gray-600 hover:text-[#2F4F4F] hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors duration-200 text-sm">
                  {{ item.title }}
                </a>
              </nav>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-3 space-y-6 md:space-y-8">
            <!-- Introduction -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100/60 p-6 md:p-8">
              <div class="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#2F4F4F] to-[#05b1b1] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div>
                  <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p class="text-gray-600 leading-relaxed text-sm md:text-base">
                    <strong>DWELT IMMOBILIER</strong> (ci-après la « Société ») est une société de droit congolais proposant des services immobiliers à destination de tout public intéressé. Dans ce cadre, les présentes Conditions Générales d'Utilisation (ci-après les « CGU ») ont pour but d'encadrer, sauf stipulation contraire, tout type de services immobiliers, de quelque nature que ce soit, proposés par la Société à travers son site internet, ses applications et/ou tout autre type de portail numérique (ci-après le(s) « Portail ou Portails ») lui appartenant.
                  </p>
                </div>
              </div>
            </div>

            <!-- Les Services -->
            <div id="services" class="bg-white rounded-2xl shadow-lg border border-gray-100/60 p-6 md:p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-gray-900">1. Les Services</h3>
              </div>
              <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  La Société propose à chaque utilisateur à travers son/ses Portail(s) les services relatifs à la publication d'annonces se rapportant à une offre d'achat, de vente ou de location d'un bien immobilier et, le cas échéant, à la mise en relation des personnes intéressées (ci-après l'« Offre immobilière »).
                </p>
                <p>
                  En outre, la Société se réserve le droit de proposer à travers son/ses Portail(s) tout autre type de services qu'elle jugerait nécessaire et, si besoin, procédera en conséquence à la modification des présentes CGU.
                </p>
              </div>
            </div>

            <!-- L'Utilisateur -->
            <div id="utilisateur" class="bg-white rounded-2xl shadow-lg border border-gray-100/60 p-6 md:p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-gray-900">2. L'Utilisateur</h3>
              </div>
              <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div class="bg-blue-50/50 rounded-xl p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-sm md:text-base">
                      <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                      Utilisateur non abonné
                    </h4>
                    <p class="text-xs md:text-sm text-gray-600">
                      Vous accédez et/ou naviguez sur l'un des Portails de la Société sans créer d'espace personnel.
                    </p>
                  </div>
                  <div class="bg-green-50/50 rounded-xl p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-sm md:text-base">
                      <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                      Utilisateur abonné
                    </h4>
                    <p class="text-xs md:text-sm text-gray-600">
                      Vous créez un espace personnel dans l'un des Portails de la Société.
                    </p>
                  </div>
                </div>
                <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    <strong>Âge minimum :</strong> Vous garantissez à la Société d'avoir au minimum dix-huit (18) ans d'âge et être en possession de l'ensemble de vos droits aux fins de vous engager valablement au titre des présentes CGU.
                  </p>
                  <p>
                    <strong>Informations :</strong> L'utilisateur qui souhaite créer un espace personnel sera tenu, sous sa seule responsabilité, de fournir à la Société un ensemble d'information comprenant notamment le nom, post-nom, prénom, l'adresse mail, le mot de passe souhaité, le numéro de téléphone, etc.
                  </p>
                </div>
              </div>
            </div>

            <!-- Annonces -->
            <div id="annonces" class="bg-white rounded-2xl shadow-lg border border-gray-100/60 p-6 md:p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-gray-900">3. Annonces</h3>
              </div>
              <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <div class="bg-purple-50/50 rounded-xl p-4 md:p-6">
                  <h4 class="font-semibold text-gray-900 mb-3 text-sm md:text-base">Publication d'annonces</h4>
                  <p class="mb-3">
                    En tant qu'Utilisateur Abonné vous pouvez publier sur l'un des Portails une ou plusieurs annonces se rapportant à une Offre immobilière.
                  </p>
                  <ul class="space-y-2 text-xs md:text-sm">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      Fourniture d'informations exactes et complètes
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      Respect des droits des tiers et des lois en vigueur
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      Publication gratuite en principe
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Responsabilité -->
            <div id="responsabilite" class="bg-white rounded-2xl shadow-lg border border-gray-100/60 p-6 md:p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-gray-900">4. Responsabilité</h3>
              </div>
              <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Toute consultation du/des Portail(s) se fait uniquement sous votre seule responsabilité. A cet effet, vous vous engagez à utiliser le(s) Portail(s) de manière conforme à leur destination définie dans les présentes sous peine d'engager votre responsabilité.
                </p>
                <div class="bg-red-50/50 rounded-xl p-4">
                  <p class="text-xs md:text-sm">
                    <strong>Important :</strong> Chaque Utilisateur abonné est l'éditeur de son espace personnel et des annonces qu'il publie sur le(s) Portail(s), la Société ne jouant qu'un rôle d'intermédiation et/ou d'hébergement.
                  </p>
                </div>
              </div>
            </div>

            <!-- Propriété Intellectuelle -->
            <div id="propriete-intellectuelle" class="bg-white rounded-2xl shadow-lg border border-gray-100/60 p-6 md:p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-gray-900">5. Propriété Intellectuelle</h3>
              </div>
              <div class="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Vous reconnaissez que la Société dispose notamment de tous les droits de propriété intellectuelle sur le(s) Portail(s), incluant notamment ses codes sources, base de données, charte graphique, logo, nom de domaine, auxquels vous vous engagez à ne pas porter atteinte de quelque manière que ce soit.
                </p>
                <p>
                  Les Données transmises par tout utilisateur dans le cadre des présentes demeurent la propriété exclusive de ce dernier.
                </p>
              </div>
            </div>

            <!-- Traitement des Données -->
            <div id="traitement-donnees" class="bg-white rounded-2xl shadow-lg border border-gray-100/60 p-6 md:p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-gray-900">6. Traitement des Données Personnelles</h3>
              </div>
              <div class="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div class="bg-indigo-50/50 rounded-xl p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 text-sm md:text-base">Données collectées</h4>
                    <ul class="text-xs md:text-sm space-y-1">
                      <li class="flex items-center gap-2">• Nom, prénom, email</li>
                      <li class="flex items-center gap-2">• Numéro de téléphone</li>
                      <li class="flex items-center gap-2">• Adresse postale</li>
                      <li class="flex items-center gap-2">• Données de localisation</li>
                    </ul>
                  </div>
                  <div class="bg-indigo-50/50 rounded-xl p-4">
                    <h4 class="font-semibold text-gray-900 mb-2 text-sm md:text-base">Durée de conservation</h4>
                    <p class="text-xs md:text-sm">
                      Vos données sont conservées pendant le temps nécessaire à la réalisation des finalités prévues et à compter de la cessation de la relation contractuelle pour une durée maximale de trois (3) ans ou, le cas échéant, cinq (5) ans pour les données nécessaires à la gestion de tous contentieux éventuels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Règlement des Différends -->
            <div id="reglement-differends" class="bg-gradient-to-br from-[#2F4F4F] to-[#05b1b1] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-bold">7. Règlement des Différends</h3>
              </div>
              <div class="space-y-4 text-white/90 leading-relaxed text-sm md:text-base">
                <p>
                  <strong>Droit applicable :</strong> Les présentes CGU et les opérations qui en découlent sont régies par le droit de la République Démocratique du Congo.
                </p>
                <p>
                  <strong>Règlement amiable :</strong> Tout différend découlant directement ou indirectement de l'usage du/des Portail(s) sera réglé à l'amiable dans un délai de trente (30) jours.
                </p>
                <p>
                  <strong>Compétence juridictionnelle :</strong> Tous les litiges seront soumis uniquement aux instances judiciaires compétentes de la ville de Kinshasa en RD Congo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <FooterComponent/>
</template>

<script setup>
import { ref } from 'vue'
//@ts-ignore
import FooterComponent from "@/components/FooterComponent.vue";
//@ts-ignore
import Header from "@/components/Header.vue"

//@ts-ignore
import home_009 from '../assets/images/home/home_009.jpeg'

const currentDate = ref(new Date().toLocaleDateString('fr-FR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}))

const quickNav = ref([
  {
    id: 'services',
    title: 'Services',
    icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' }
  },
  {
    id: 'utilisateur',
    title: 'Utilisateur',
    icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>' }
  },
  {
    id: 'annonces',
    title: 'Annonces',
    icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>' }
  },
  {
    id: 'responsabilite',
    title: 'Responsabilité',
    icon: { template: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>' }
  }
])

const sidebarNav = ref([
  { id: 'services', title: 'Les Services' },
  { id: 'utilisateur', title: 'L\'Utilisateur' },
  { id: 'annonces', title: 'Annonces' },
  { id: 'responsabilite', title: 'Responsabilité' },
  { id: 'propriete-intellectuelle', title: 'Propriété Intellectuelle' },
  { id: 'traitement-donnees', title: 'Traitement des Données' },
  { id: 'reglement-differends', title: 'Règlement des Différends' }
])
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom hover effects */
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Gradient text animation */
.gradient-text {
  background: linear-gradient(135deg, #2F4F4F 0%, #05b1b1 100%);
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Extra small devices (phones, less than 480px) */
@media (max-width: 480px) {
  .xs\:inline {
    display: inline !important;
  }
}
</style>