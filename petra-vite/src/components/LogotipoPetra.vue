<script setup>
// Logotipo = solo la parte tipográfica: "PETRA" + "VIAJES Y TURISMO".
import { logotipo } from '../assets/logo-paths.js'

// light = versión para fondo oscuro
defineProps({ light: { type: Boolean, default: false } })
</script>

<template>
  <svg :viewBox="logotipo.viewBox" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" :class="{ light }">
    <path class="navy" :d="logotipo.palabra" />
    <path class="navy" :d="logotipo.lema" />
  </svg>
</template>

<style scoped>
.navy{fill:var(--logo-navy);}
.light .navy{fill:#fff;}
</style>
