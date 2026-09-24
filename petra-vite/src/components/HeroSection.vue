<script setup>
// Tira estilo "tablero de salidas". Se duplica la lista para que el loop sea continuo.
const ciudades = ['BARILOCHE', 'CANCÚN', 'ROMA', 'MENDOZA', 'PUNTA CANA', 'LISBOA', 'USHUAIA', 'NUEVA YORK']
const tira = [...ciudades, ...ciudades]
</script>

<template>
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <div class="hero-kicker"><span class="dot"></span> Agencia de viajes · Buenos Aires</div>
        <h1>Cada viaje empieza con una <em>buena</em> ruta.</h1>
        <p class="lead">Diseñamos itinerarios a medida, con la logística resuelta y alguien real del otro lado del teléfono en cada paso del camino.</p>
        <div class="hero-actions">
          <a href="#contacto" class="btn btn-primary">Armar mi viaje →</a>
          <a href="#destinos" class="btn btn-ghost">Ver destinos</a>
        </div>
      </div>
      <div class="hero-art">
        <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="220" cy="220" r="150" stroke="#3a4b8f" stroke-width="1" opacity="0.5"/>
          <circle cx="220" cy="220" r="105" stroke="#3a4b8f" stroke-width="1" opacity="0.5"/>
          <path d="M60 260c60-40 120 10 180-20s90-70 150-40" stroke="#d92485" stroke-width="1.6" stroke-dasharray="2 8" stroke-linecap="round"/>
          <path d="M75 150c50 30 90-20 150 10s95 55 145 15" stroke="#f2a9c9" stroke-width="1.4" stroke-dasharray="1 7" stroke-linecap="round" opacity="0.7"/>
          <g transform="translate(150 150)">
            <path d="M0 22 L22 0 L44 22 L34 22 L34 44 L10 44 L10 22 Z" fill="#f2a9c9" opacity="0.85" transform="rotate(30 22 22) translate(0 -4)"/>
          </g>
          <g transform="translate(230 260) scale(0.9)">
            <path d="M0 0 L60 0 L48 34 L40 30 L40 44 L20 44 L20 30 L12 34 Z" fill="#d92485"/>
          </g>
          <circle cx="150" cy="150" r="4" fill="#fff"/>
          <circle cx="290" cy="150" r="4" fill="#fff"/>
          <circle cx="220" cy="330" r="4" fill="#fff"/>
          <circle cx="80" cy="240" r="3" fill="#f2a9c9"/>
          <circle cx="340" cy="230" r="3" fill="#f2a9c9"/>
        </svg>
      </div>
    </div>

    <div class="strip">
      <div class="strip-track">
        <span v-for="(ciudad, i) in tira" :key="i">{{ ciudad }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero{
  position:relative;
  background:var(--navy-deep);
  color:#fff;
  overflow:hidden;
  padding:88px 0 0;
}
.hero::before{
  content:"";
  position:absolute; inset:0;
  background:
    radial-gradient(ellipse 60% 50% at 82% 8%, rgba(217,36,133,0.28), transparent 60%),
    radial-gradient(ellipse 50% 40% at 5% 95%, rgba(217,36,133,0.14), transparent 60%);
  pointer-events:none;
}
.hero-grid{
  position:relative; z-index:2;
  display:grid; grid-template-columns:1.05fr 0.95fr; gap:40px; align-items:center;
  padding-bottom:64px;
}
.hero-kicker{
  font-size:14px; font-weight:600; color:#f0b9d1; letter-spacing:0.02em;
  display:flex; align-items:center; gap:10px; margin-bottom:22px;
}
.hero-kicker .dot{width:6px; height:6px; border-radius:50%; background:var(--magenta);}
.hero h1{
  font-size:clamp(32px, 4.2vw, 50px);
  line-height:1.08;
  max-width:620px;
  color:#fff;
}
.hero h1 em{font-style:normal; color:#f2a9c9;}
.hero p.lead{
  margin-top:24px; max-width:460px;
  font-size:17.5px; color:#c7cbe2;
}
.hero-actions{display:flex; gap:14px; margin-top:36px; flex-wrap:wrap;}

.hero-art{position:relative; height:440px;}
.hero-art svg{width:100%; height:100%;}

.strip{
  position:relative; z-index:2;
  border-top:1px solid rgba(255,255,255,0.14);
  overflow:hidden;
  padding:18px 0;
}
.strip-track{
  display:flex; gap:0; width:max-content;
  animation:scroll-strip 32s linear infinite;
}
.strip-track span{
  font-family:var(--font-display); font-weight:700; font-stretch:125%;
  font-size:13.5px; letter-spacing:0.16em; color:rgba(255,255,255,0.78);
  padding:0 28px; white-space:nowrap;
  border-right:1px solid rgba(255,255,255,0.18);
}
@keyframes scroll-strip{
  from{transform:translateX(0);}
  to{transform:translateX(-50%);}
}
@media (prefers-reduced-motion: reduce){
  .strip-track{animation:none;}
}

@media (max-width:900px){
  .hero-grid{grid-template-columns:1fr;}
  .hero-art{height:280px; order:-1;}
}
</style>
