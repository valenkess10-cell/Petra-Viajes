<script setup>
import ImagotipoPetra from './ImagotipoPetra.vue'
import LogotipoPetra from './LogotipoPetra.vue'

// light = versión para fondo oscuro (se usa en el footer)
defineProps({ light: { type: Boolean, default: false } })
</script>

<template>
  <a href="#" class="brand" aria-label="Petra Viajes y Turismo, ir al inicio">
    <ImagotipoPetra class="mark" :light="light" />
    <LogotipoPetra class="word" :light="light" />
  </a>
</template>

<style scoped>
.brand{display:flex; align-items:center; gap:14px;}
.mark{height:46px; width:auto; flex-shrink:0;}
.word{width:176px; height:auto; flex-shrink:0;}

@media (max-width:560px){
  .brand{gap:10px;}
  .mark{height:38px;}
  .word{width:132px;}
}
</style>
