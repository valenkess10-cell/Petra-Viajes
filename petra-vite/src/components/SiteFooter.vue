<script setup>
import BrandLogo from './BrandLogo.vue'
import { contacto, whatsappUrl } from '../data/contacto.js'

const anio = new Date().getFullYear()

const columnas = [
  {
    titulo: 'Explorar',
    links: [
      { texto: 'Destinos', href: '#destinos' },
      { texto: 'Experiencias', href: '#experiencias' },
      { texto: 'Nosotros', href: '#nosotros' },
      { texto: 'Cotizar viaje', href: '#contacto' },
    ],
  },
  {
    titulo: 'Contacto',
    links: [
      { texto: contacto.email, href: `mailto:${contacto.email}` },
      { texto: contacto.telefonoVisible, href: `tel:${contacto.telefono}` },
      { texto: contacto.direccion }, // sin href: se muestra como texto
    ],
  },
  {
    titulo: 'Seguinos',
    links: [
      { texto: '@' + contacto.instagram, href: contacto.instagramUrl, externo: true },
      { texto: 'WhatsApp', href: whatsappUrl(), externo: true },
    ],
  },
]
</script>

<template>
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand">
          <BrandLogo light />
          <p>Agencia de viajes con más de 15 años armando itinerarios a medida por toda Latinoamérica, Europa y el Caribe.</p>
        </div>

        <div v-for="columna in columnas" :key="columna.titulo">
          <h4>{{ columna.titulo }}</h4>
          <ul>
            <li v-for="link in columna.links" :key="link.texto">
              <a v-if="link.href" :href="link.href" :target="link.externo ? '_blank' : undefined" :rel="link.externo ? 'noopener' : undefined">{{ link.texto }}</a>
              <span v-else>{{ link.texto }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="foot-bottom">
        <span>© {{ anio }} Petra Viajes y Turismo. Todos los derechos reservados.</span>
        <span>Legajo EVT N.º 00000</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer{background:var(--navy-deep); color:#c7cbe2; padding:72px 0 32px;}
.foot-grid{
  display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:40px;
  padding-bottom:48px; border-bottom:1px solid rgba(255,255,255,0.12);
}
.foot-brand p{margin-top:16px; font-size:14px; color:#9ba0c2; max-width:280px;}
footer h4{font-family:var(--font-display); font-stretch:112%; font-size:13px; letter-spacing:0.04em; color:#fff; margin-bottom:16px; font-weight:700;}
footer ul{list-style:none; display:flex; flex-direction:column; gap:10px;}
footer ul a, footer ul span{font-size:14px; color:#aeb2ce;}
footer ul a{transition:color .2s ease;}
footer ul a:hover{color:#fff;}
.foot-bottom{
  display:flex; justify-content:space-between; align-items:center;
  padding-top:28px; font-size:13px; color:#7d81a3; flex-wrap:wrap; gap:12px;
}

@media (max-width:900px){
  .foot-grid{grid-template-columns:1fr 1fr;}
}
@media (max-width:560px){
  .foot-grid{grid-template-columns:1fr;}
}
</style>