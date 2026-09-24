<script setup>
import BrandLogo from './BrandLogo.vue'

const enlaces = [
  { texto: 'Destinos', href: '#destinos' },
  { texto: 'Experiencias', href: '#experiencias' },
  { texto: 'Nosotros', href: '#nosotros' },
  { texto: 'Contacto', href: '#contacto' },
]
</script>

<template>
  <header class="site">
    <nav class="wrap">
      <BrandLogo />
      <ul>
        <li v-for="enlace in enlaces" :key="enlace.href">
          <a :href="enlace.href">{{ enlace.texto }}</a>
        </li>
      </ul>
      <a href="#contacto" class="nav-cta">
        <span>Cotizar viaje</span> →
      </a>
    </nav>
  </header>
</template>

<style scoped>
header.site{
  position:sticky; top:0; z-index:50;
  background:rgba(250,249,245,0.86);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--line);
}
nav.wrap{
  display:flex; align-items:center; justify-content:space-between;
  height:76px;
}
nav ul{list-style:none; display:flex; gap:36px;}
nav ul a{font-size:14.5px; font-weight:600; color:var(--ink); position:relative; padding:4px 0;}
nav ul a::after{
  content:""; position:absolute; left:0; right:0; bottom:-2px; height:2px;
  background:var(--magenta); transform:scaleX(0); transform-origin:right;
  transition:transform .3s ease;
}
nav ul a:hover::after{transform:scaleX(1); transform-origin:left;}
.nav-cta{
  display:inline-flex; align-items:center; gap:8px;
  background:var(--navy-deep); color:#fff; font-size:14px; font-weight:700;
  padding:11px 20px; border-radius:100px;
  transition:background .25s ease, transform .25s ease;
}
.nav-cta:hover{background:var(--magenta-deep); transform:translateY(-1px);}

@media (max-width:900px){
  nav ul{display:none;}
}
@media (max-width:560px){
  .nav-cta span{display:none;}
}
</style>
