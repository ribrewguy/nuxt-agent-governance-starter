<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const { t } = useI18n()

useSeoMeta({
  title: t('errors.page-not-found-title'),
  description: t('errors.page-not-found-description')
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <UApp>
    <UError :error="error" />
  </UApp>
</template>
