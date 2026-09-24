<script setup>
import DestinoCard from './DestinoCard.vue'
</script>

<template>
  <section id="destinos">
    <div class="wrap">
      <div class="section-head">
        <h2>Destinos que vale la pena armar bien</h2>
        <p>Una selección curada por nuestro equipo, con salidas grupales y también itinerarios totalmente a medida.</p>
      </div>

      <div class="dest-grid">
        <DestinoCard
          lugar="Patagonia · Argentina"
          titulo="El Chaltén & Calafate"
          descripcion="Trekking, glaciares y noches bajo un cielo sin luces."
          precio="Desde USD 890 · 6 noches"
        >
          <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="280" fill="#121d45"/>
            <path d="M0 200 L60 130 L110 175 L170 90 L220 160 L280 110 L340 180 L400 140 L400 280 L0 280 Z" fill="#23357c"/>
            <path d="M0 220 L80 165 L140 205 L210 140 L260 190 L330 150 L400 190 L400 280 L0 280 Z" fill="#3a4b8f" opacity="0.8"/>
            <circle cx="320" cy="55" r="26" fill="#f2a9c9" opacity="0.9"/>
          </svg>
        </DestinoCard>

        <DestinoCard
          variante="magenta"
          lugar="Caribe · República Dominicana"
          titulo="Punta Cana all-inclusive"
          descripcion="Playas de arena blanca y resorts sin sorpresas de última hora."
          precio="Desde USD 1.150 · 7 noches"
        >
          <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="280" fill="#8c1a54"/>
            <path d="M60 40 L60 240" stroke="#f3d9e6" stroke-width="4"/>
            <path d="M40 40 Q60 10 80 40" stroke="#f3d9e6" stroke-width="4" fill="none"/>
            <path d="M180 60 L180 240" stroke="#f3d9e6" stroke-width="4"/>
            <path d="M160 60 Q180 30 200 60" stroke="#f3d9e6" stroke-width="4" fill="none"/>
            <path d="M300 30 L300 240" stroke="#f3d9e6" stroke-width="4"/>
            <path d="M280 30 Q300 0 320 30" stroke="#f3d9e6" stroke-width="4" fill="none"/>
            <rect x="0" y="230" width="400" height="50" fill="#d92485"/>
          </svg>
        </DestinoCard>

        <DestinoCard
          variante="azul"
          lugar="Europa · España & Portugal"
          titulo="Madrid, Sevilla & Lisboa"
          descripcion="Circuito clásico en tren, ritmo tranquilo, hoteles boutique."
          precio="Desde USD 1.680 · 10 noches"
        >
          <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="280" fill="#23357c"/>
            <rect x="30" y="120" width="40" height="120" fill="#3a4b8f"/>
            <rect x="90" y="90" width="50" height="150" fill="#3a4b8f"/>
            <rect x="160" y="140" width="35" height="100" fill="#3a4b8f"/>
            <rect x="215" y="70" width="55" height="170" fill="#f2a9c9" opacity="0.85"/>
            <rect x="290" y="110" width="45" height="130" fill="#3a4b8f"/>
            <rect x="345" y="150" width="30" height="90" fill="#3a4b8f"/>
            <circle cx="330" cy="55" r="20" fill="#f3d9e6" opacity="0.5"/>
          </svg>
        </DestinoCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dest-grid{
  display:grid; grid-template-columns:repeat(3,1fr); gap:24px;
}
@media (max-width:900px){
  .dest-grid{grid-template-columns:1fr;}
}
</style>
