<script setup lang="ts">
import CardHouse from '../CardHouse.vue'
</script>

<template>
  <div>
    <div data-aos="flip-down" class="text-center max-w-screen-md mx-auto">
      <h1 class="text-3xl font-bold mb-4">
        Decouvrez votre futur maison avec <span class="text-yellow-500">Dwelt</span>
      </h1>
      <p class="text-gray-500">
        Les pros de l’immobilier vous ramene des nouvelles maisons qui vont transformer votre
        quotidient.
      </p>
    </div>
    <div class="grid px-4 md:grid-cols-3 gap-8 md:gap-2 mt-2">
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
      <CardHouse />
    </div>
    <button
      data-aos="flip-up"
      class="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block"
    >
      Exploration des maisons
    </button>
  </div>
</template>
