<script setup>
const motivos = [
  { titulo: 'Itinerarios a medida', texto: 'Nada de plantillas: armamos cada propuesta según tus tiempos, presupuesto y con quién viajás.' },
  { titulo: 'Asistencia 24/7 en viaje', texto: 'Un cambio de vuelo, un imprevisto, una duda a las tres de la mañana: siempre hay alguien de Petra disponible.' },
  { titulo: 'Precios cerrados, sin letra chica', texto: 'Lo que cotizamos es lo que pagás. Impuestos y tasas siempre claros desde el primer presupuesto.' },
  { titulo: 'Red de proveedores propia', texto: 'Años de relación directa con hoteles y operadores locales que se traducen en mejores tarifas y upgrades.' },
]
</script>

<template>
  <section class="why" id="nosotros">
    <div class="wrap why-grid">
      <div>
        <h2>No vendemos paquetes. Armamos viajes.</h2>
        <p class="why-lead">Hace más de 15 años que la gente de Petra confía en nosotros para lo que no puede salir mal: el viaje que estuvieron esperando todo el año.</p>
      </div>
      <div class="why-list">
        <div class="why-item" v-for="(motivo, i) in motivos" :key="motivo.titulo">
          <span class="mark">{{ i + 1 }}</span>
          <div>
            <h3>{{ motivo.titulo }}</h3>
            <p>{{ motivo.texto }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why{background:var(--navy-deep); color:#fff; position:relative;}
.why::before{
  content:""; position:absolute; inset:0;
  background:radial-gradient(ellipse 60% 60% at 90% 0%, rgba(217,36,133,0.2), transparent 60%);
}
.why .wrap{position:relative; z-index:2;}
.why-grid{
  display:grid; grid-template-columns:0.9fr 1.1fr; gap:64px; align-items:start;
}
.why h2{color:#fff; font-size:clamp(26px,3vw,38px); max-width:460px;}
.why-lead{color:#c7cbe2; margin-top:18px; max-width:420px; font-size:16px;}
.why-list{display:flex; flex-direction:column;}
.why-item{
  display:grid; grid-template-columns:auto 1fr; gap:22px;
  padding:26px 0; border-top:1px solid rgba(255,255,255,0.14);
}
.why-item:last-child{border-bottom:1px solid rgba(255,255,255,0.14);}
.why-item .mark{
  font-family:var(--font-display); font-weight:800; font-stretch:112%; font-size:24px; color:var(--magenta);
}
.why-item h3{font-size:18px; color:#fff; font-weight:700; font-family:var(--font-body); font-stretch:100%; letter-spacing:0;}
.why-item p{font-size:14.5px; color:#aeb2ce; margin-top:6px; max-width:420px;}

@media (max-width:900px){
  .why-grid{grid-template-columns:1fr; gap:36px;}
}
</style>
