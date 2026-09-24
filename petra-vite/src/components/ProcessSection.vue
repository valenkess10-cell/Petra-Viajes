<script setup>
const pasos = [
  { titulo: 'Nos contás la idea', texto: 'Fechas tentativas, presupuesto y qué tipo de viaje buscás.' },
  { titulo: 'Armamos la propuesta', texto: 'Vuelos, hospedaje y actividades, con opciones y precios claros.' },
  { titulo: 'Confirmás y reservamos', texto: 'Nos ocupamos de la logística, documentación y seguros.' },
  { titulo: 'Viajás tranquilo', texto: 'Acompañamiento durante todo el viaje, ante cualquier imprevisto.' },
]
</script>

<template>
  <section id="experiencias">
    <div class="wrap">
      <div class="section-head">
        <h2>Así armamos tu viaje</h2>
        <p>Cuatro pasos, de la idea a la valija.</p>
      </div>
      <div class="process-grid">
        <div class="process-step" v-for="(paso, i) in pasos" :key="paso.titulo">
          <div class="process-num">{{ i + 1 }}</div>
          <h3>{{ paso.titulo }}</h3>
          <p>{{ paso.texto }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-grid{
  display:grid; grid-template-columns:repeat(4,1fr); gap:0;
  position:relative;
}
.process-grid::before{
  content:""; position:absolute; top:19px; left:6%; right:6%; height:1px;
  background:var(--line);
}
.process-step{position:relative; padding-right:24px;}
.process-num{
  width:38px; height:38px; border-radius:50%; background:var(--paper);
  border:1.5px solid var(--navy-deep); color:var(--navy-deep);
  display:flex; align-items:center; justify-content:center;
  font-family:var(--font-display); font-size:14px; font-weight:800;
  position:relative; z-index:2; margin-bottom:22px;
}
.process-step h3{font-size:16px; margin-bottom:8px;}
.process-step p{font-size:14.5px; color:var(--ink-soft);}

@media (max-width:900px){
  .process-grid{grid-template-columns:1fr 1fr; row-gap:36px;}
  .process-grid::before{display:none;}
}
</style>
