<template>
  <div>
    
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

const props = defineProps<{
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
}>()

useHead({
  title: props.title,
  meta: [
    {
      name: 'description',
      content: props.description
    },
    {
      name: 'keywords',
      content: props.keywords
    },
    {
      property: 'og:title',
      content: props.title
    },
    {
      property: 'og:description',
      content: props.description
    },
    {
      property: 'og:image',
      content: props.ogImage
    },
    {
      property: 'og:type',
      content: props.ogType
    }
  ]
})
</script>