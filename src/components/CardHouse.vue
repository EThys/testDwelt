<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-12 px-8 rounded-xl overflow-hidden shadow-lg w-full"
  >
    <!-- Loader -->
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="3"
        indeterminate
      ></v-progress-linear>
    </template>

    <!-- IMAGE avec BADGES -->
    <v-img
      height="250"
      src="https://dweltimmo.net/wp-content/uploads/2025/07/IMG-20250702-WA0135-768x576.jpg"
      cover
    >
      <!-- Badges -->
      <div class="d-flex flex-column ma-3 px-3 py-3">
        <span
          class="inline-flex items-center rounded-md bg-green-400 backdrop-blur-md px-2 py-0.5 text-xs font-medium text-white ring-1 ring-green-400 shadow-sm"
        >
          Disponible
        </span>
        >
      </div>

      <!-- Prix en bas à gauche -->
      <div class="pa-3 px-3 py-3" style="position: absolute; bottom: 0; left: 0">
        <span
          class="inline-flex items-center rounded-md bg-white/20 backdrop-blur-md px-2 py-0.5 font-medium text-white ring-1 ring-white/30 shadow-sm text-lg"
        >
          2000 $
        </span>
        >
      </div>
    </v-img>

    <!-- Contenu -->
    <!-- <v-card-item> -->
    <v-card-title class="text-h6 font-weight-bold">Maison Rustique</v-card-title>
    <v-card-subtitle class="text-body-2 text-grey-darken-1"> Ngaliema Macampagne </v-card-subtitle>
    <!-- </v-card-item> -->

    <!-- <v-divider class="mx-2 mb-1"></v-divider> -->

    <v-card-title class="text-subtitle-1 font-weight-bold">Caractéristique </v-card-title>

    <div class="px-4 mb-2">
      <span class="isolate inline-flex rounded-md shadow-xs dark:shadow-none">
        <button
          type="button"
          class="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            class="-ml-0.5 size-5 text-gray-400 dark:text-gray-500"
          >
            <path
              d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            />
          </svg>
          Chambre
        </button>
        <button
          type="button"
          class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10"
        >
          3
        </button>
      </span>
      <span class="isolate inline-flex rounded-md shadow-xs dark:shadow-none">
        <button
          type="button"
          class="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            class="-ml-0.5 size-5 text-gray-400 dark:text-gray-500"
          >
            <path
              d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            />
          </svg>
          Salle de bain
        </button>
        <button
          type="button"
          class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10"
        >
          2
        </button>
      </span>

      <span class="isolate inline-flex rounded-md shadow-xs dark:shadow-none">
        <button
          type="button"
          class="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            class="-ml-0.5 size-5 text-gray-400 dark:text-gray-500"
          >
            <path
              d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            />
          </svg>
          Garage
        </button>
        <button
          type="button"
          class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10"
        >
          2
        </button>
      </span>
    </div>

    <v-card-actions>
      <v-btn color="deep-purple-lighten-2" text="Reserve" block border @click="reserve"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const selection = ref(1)

function reserve() {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
</script>
