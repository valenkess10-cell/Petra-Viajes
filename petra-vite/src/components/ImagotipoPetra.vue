<script setup>
// Imagotipo = solo el símbolo (avión de papel + trazos). Es el mismo que se usa de favicon.
import { imagotipo } from '../assets/logo-paths.js'

// light = versión para fondo oscuro (las partes azules pasan a blanco)
defineProps({ light: { type: Boolean, default: false } })
</script>

<template>
  <svg :viewBox="imagotipo.viewBox" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" :class="{ light }">
    <path class="navy" :d="imagotipo.navy" />
    <path class="pink" :d="imagotipo.pink" />
  </svg>
</template>

<style scoped>
.navy{fill:var(--logo-navy);}
.pink{fill:var(--logo-pink);}
.light .navy{fill:#fff;}
</style>
