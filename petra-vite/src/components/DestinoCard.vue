<script setup>
// Tarjeta reutilizable. El dibujo (SVG) entra por el <slot>, el texto por props.
defineProps({
  lugar: String,
  titulo: String,
  descripcion: String,
  precio: String,
  variante: { type: String, default: '' }, // '', 'magenta' o 'azul'
})
</script>

<template>
  <article class="dest-card" :class="variante">
    <div class="dest-art">
      <slot />
    </div>
    <div class="dest-body">
      <div class="place">{{ lugar }}</div>
      <h3>{{ titulo }}</h3>
      <p>{{ descripcion }}</p>
      <div class="from">{{ precio }}</div>
    </div>
  </article>
</template>

<style scoped>
.dest-card{
  background:var(--navy-deep); border-radius:18px; overflow:hidden; color:#fff;
  display:flex; flex-direction:column; min-height:360px;
  position:relative;
  transition:transform .35s ease;
}
.dest-card:hover{transform:translateY(-6px);}
.dest-art{flex:1; position:relative; overflow:hidden;}
/* :deep() hace falta porque el SVG viene del componente padre (slot) */
.dest-art :deep(svg){width:100%; height:100%; display:block;}
.dest-body{padding:22px 24px 26px;}
.dest-body .place{font-size:12px; letter-spacing:0.1em; color:var(--magenta-tint); font-weight:700; opacity:.8;}
.dest-body h3{font-size:20px; margin-top:6px; color:#fff;}
.dest-body p{font-size:14px; color:#c7cbe2; margin-top:8px;}
.dest-body .from{margin-top:14px; font-size:13.5px; color:#f0b9d1; font-weight:600;}

.dest-card.magenta{background:var(--magenta-deep);}
.dest-card.magenta .place{color:#fbdcec;}
.dest-card.azul{background:var(--navy);}
</style>
