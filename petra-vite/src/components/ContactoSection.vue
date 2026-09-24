<script setup>
import { reactive, ref } from 'vue'
import { contacto, whatsappUrl } from '../data/contacto.js'

// ---------- Canales de contacto directo ----------
const canales = [
  {
    id: 'whatsapp', titulo: 'WhatsApp', detalle: contacto.whatsappVisible, destacado: true, externo: true,
    href: whatsappUrl('Hola Petra! Quiero consultar por un viaje.'),
  },
  { id: 'instagram', titulo: 'Instagram', detalle: '@' + contacto.instagram, externo: true, href: contacto.instagramUrl },
  { id: 'email', titulo: 'Email', detalle: contacto.email, href: `mailto:${contacto.email}` },
  { id: 'telefono', titulo: 'Teléfono', detalle: contacto.telefonoVisible, href: `tel:${contacto.telefono}` },
]

// ---------- Formulario de cotización ----------
const destinosSugeridos = [
  'El Chaltén & Calafate',
  'Punta Cana',
  'Madrid, Sevilla & Lisboa',
  'Todavía no sé, quiero ideas',
]

const form = reactive({ nombre: '', contacto: '', destino: '', fechas: '', viajeros: 2, mensaje: '' })
const errores = reactive({ nombre: '', contacto: '', destino: '' })
const enviado = ref('')        // '', 'whatsapp' o 'mail'
const enlaceWhatsApp = ref('') // por si el navegador bloquea la ventana nueva

function validar() {
  errores.nombre = form.nombre.trim() ? '' : 'Contanos tu nombre.'
  errores.contacto = form.contacto.trim().length >= 6 ? '' : 'Dejanos un WhatsApp o teléfono para responderte.'
  errores.destino = form.destino.trim() ? '' : 'Indicanos un destino, o elegí "Todavía no sé".'
  return !errores.nombre && !errores.contacto && !errores.destino
}

function armarMensaje() {
  const lineas = [
    'Hola Petra! Quiero cotizar un viaje.',
    '',
    `Nombre: ${form.nombre.trim()}`,
    `Destino: ${form.destino.trim()}`,
  ]
  if (form.fechas.trim()) lineas.push(`Fechas: ${form.fechas.trim()}`)
  lineas.push(`Viajeros: ${form.viajeros}`)
  lineas.push(`Mi contacto: ${form.contacto.trim()}`)
  if (form.mensaje.trim()) lineas.push(`Comentarios: ${form.mensaje.trim()}`)
  return lineas.join('\n')
}

// Hoy la consulta sale por WhatsApp o mail con el mensaje ya armado.
// Cuando exista el backend, se reemplaza el contenido de estas funciones por un fetch('/api/cotizar', ...).
function enviarPorWhatsApp() {
  if (!validar()) return
  enlaceWhatsApp.value = whatsappUrl(armarMensaje())
  window.open(enlaceWhatsApp.value, '_blank', 'noopener')
  enviado.value = 'whatsapp'
}

function enviarPorMail() {
  if (!validar()) return
  const asunto = encodeURIComponent(`Consulta de viaje: ${form.destino.trim()}`)
  window.location.href = `mailto:${contacto.email}?subject=${asunto}&body=${encodeURIComponent(armarMensaje())}`
  enviado.value = 'mail'
}
</script>

<template>
  <section id="contacto" class="contacto">
    <div class="wrap">
      <div class="panel">

        <!-- Columna izquierda: título + canales directos -->
        <div class="intro">
          <h2>Contanos qué viaje tenés en mente</h2>
          <p class="lead">Dejanos los datos y armamos una propuesta a medida, o escribinos por el canal que te quede más cómodo.</p>

          <ul class="canales">
            <li v-for="canal in canales" :key="canal.id">
              <a class="canal" :class="{ destacado: canal.destacado }" :href="canal.href" :target="canal.externo ? '_blank' : undefined" :rel="canal.externo ? 'noopener' : undefined">
                <span class="icono-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path v-if="canal.id === 'whatsapp'" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    <g v-else-if="canal.id === 'instagram'">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </g>
                    <g v-else-if="canal.id === 'email'">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </g>
                    <path v-else d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span class="canal-texto">
                  <strong>{{ canal.titulo }}</strong>
                  <span>{{ canal.detalle }}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna derecha: formulario -->
        <div class="form-card">
          <h3>Pedí tu cotización</h3>
          <p class="form-lead">Completá lo que sepas hoy. Si todavía no tenés todo definido, no pasa nada: lo armamos juntos.</p>

          <form novalidate @submit.prevent="enviarPorWhatsApp">
            <div class="fila">
              <div class="campo">
                <label for="c-nombre">Nombre</label>
                <input id="c-nombre" v-model="form.nombre" type="text" autocomplete="name"
                  :aria-invalid="!!errores.nombre" :aria-describedby="errores.nombre ? 'e-nombre' : undefined"
                  @input="errores.nombre = ''" />
                <p v-if="errores.nombre" id="e-nombre" class="error" role="alert">{{ errores.nombre }}</p>
              </div>
              <div class="campo">
                <label for="c-contacto">WhatsApp o teléfono</label>
                <input id="c-contacto" v-model="form.contacto" type="tel" autocomplete="tel" placeholder="Con código de área"
                  :aria-invalid="!!errores.contacto" :aria-describedby="errores.contacto ? 'e-contacto' : undefined"
                  @input="errores.contacto = ''" />
                <p v-if="errores.contacto" id="e-contacto" class="error" role="alert">{{ errores.contacto }}</p>
              </div>
            </div>

            <div class="campo">
              <label for="c-destino">¿A dónde querés viajar?</label>
              <input id="c-destino" v-model="form.destino" type="text" list="destinos-sugeridos" placeholder="Ej: Bariloche, el Caribe, Europa…"
                :aria-invalid="!!errores.destino" :aria-describedby="errores.destino ? 'e-destino' : undefined"
                @input="errores.destino = ''" />
              <datalist id="destinos-sugeridos">
                <option v-for="d in destinosSugeridos" :key="d" :value="d" />
              </datalist>
              <p v-if="errores.destino" id="e-destino" class="error" role="alert">{{ errores.destino }}</p>
            </div>

            <div class="fila">
              <div class="campo">
                <label for="c-fechas">¿Cuándo?</label>
                <input id="c-fechas" v-model="form.fechas" type="text" placeholder="Ej: enero 2027, 10 días" />
              </div>
              <div class="campo">
                <label for="c-viajeros">Viajeros</label>
                <input id="c-viajeros" v-model.number="form.viajeros" type="number" min="1" max="30" inputmode="numeric" />
              </div>
            </div>

            <div class="campo">
              <label for="c-mensaje">Algo más que quieras contarnos <span class="opcional">(opcional)</span></label>
              <textarea id="c-mensaje" v-model="form.mensaje" rows="3" placeholder="Presupuesto aproximado, si viajás con niños, una ocasión especial…"></textarea>
            </div>

            <button type="submit" class="btn btn-primary enviar">Enviar consulta por WhatsApp →</button>
            <button type="button" class="btn alt enviar" @click="enviarPorMail">Prefiero enviarla por mail</button>

            <p v-if="enviado === 'whatsapp'" class="confirmacion" role="status">
              Se abrió WhatsApp con tu consulta. Tocá <strong>Enviar</strong> allí para que nos llegue.
              ¿No se abrió? <a :href="enlaceWhatsApp" target="_blank" rel="noopener">Abrila desde acá</a>.
            </p>
            <p v-else-if="enviado === 'mail'" class="confirmacion" role="status">
              Se abrió tu app de correo con la consulta lista. Tocá <strong>Enviar</strong> para que nos llegue.
            </p>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.panel{
  position:relative; overflow:hidden;
  background:var(--navy-deep); color:#fff; border-radius:24px;
  padding:clamp(24px, 5vw, 64px);
  display:grid; grid-template-columns:0.9fr 1.1fr; gap:clamp(28px, 5vw, 64px); align-items:start;
}
.panel::before{
  content:""; position:absolute; inset:0; pointer-events:none;
  background:radial-gradient(ellipse 60% 60% at 95% 0%, rgba(217,36,133,0.28), transparent 60%);
}
.panel > *{position:relative; z-index:1;}

/* ---------- Izquierda ---------- */
.intro h2{color:#fff; font-size:clamp(26px, 3vw, 38px); max-width:460px;}
.lead{color:#c7cbe2; margin-top:16px; max-width:440px;}

.canales{list-style:none; margin-top:32px; display:flex; flex-direction:column; gap:12px; max-width:440px;}
.canal{
  display:grid; grid-template-columns:auto 1fr; gap:14px; align-items:center;
  padding:14px 16px; border-radius:14px;
  border:1px solid rgba(255,255,255,0.16);
  transition:background .25s ease, border-color .25s ease, transform .25s ease;
}
.canal:hover{background:rgba(255,255,255,0.07); border-color:rgba(255,255,255,0.4); transform:translateY(-1px);}
.canal.destacado{background:var(--magenta); border-color:transparent;}
.canal.destacado:hover{background:var(--magenta-deep);}
.icono-wrap{
  width:42px; height:42px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  background:rgba(255,255,255,0.1); color:#f2a9c9;
}
.canal.destacado .icono-wrap{background:rgba(255,255,255,0.2); color:#fff;}
.icono-wrap svg{width:20px; height:20px;}
.canal-texto{display:flex; flex-direction:column; line-height:1.3; min-width:0;}
.canal-texto strong{font-size:15px; font-weight:700;}
.canal-texto span{font-size:14px; color:#c7cbe2; overflow-wrap:anywhere;}
.canal.destacado .canal-texto span{color:rgba(255,255,255,0.92);}

/* ---------- Derecha: formulario ---------- */
.form-card{
  background:#fff; color:var(--ink); border-radius:18px;
  padding:clamp(22px, 3vw, 34px);
}
.form-card h3{font-size:22px; color:var(--navy-deep);}
.form-lead{font-size:14.5px; color:var(--ink-soft); margin:8px 0 22px;}

.fila{display:grid; grid-template-columns:1fr 1fr; gap:14px;}
.campo{margin-bottom:16px; min-width:0;}
label{display:block; font-size:13.5px; font-weight:700; color:var(--navy-deep); margin-bottom:6px;}
.opcional{font-weight:400; color:var(--ink-soft);}
input, textarea{
  width:100%; font:inherit; font-size:15px; color:var(--ink);
  padding:12px 14px; border:1.5px solid var(--line); border-radius:12px; background:#fff;
  transition:border-color .2s ease;
}
textarea{resize:vertical; min-height:88px;}
input::placeholder, textarea::placeholder{color:#9a9cb0;}
input:hover, textarea:hover{border-color:#c9c4b3;}
input:focus, textarea:focus{border-color:var(--navy);}
input[aria-invalid="true"]{border-color:#c0264f;}
.error{font-size:13px; color:#b0203f; margin-top:6px;}

.enviar{width:100%; justify-content:center; cursor:pointer; font-family:inherit;}
.btn.alt{
  margin-top:10px; background:transparent; color:var(--navy-deep);
  border:1.5px solid var(--line); box-shadow:none;
}
.btn.alt:hover{border-color:var(--navy-deep); transform:translateY(-2px);}
.confirmacion{
  margin-top:16px; padding:14px 16px; border-radius:12px;
  background:var(--magenta-tint); color:var(--navy-deep); font-size:14.5px;
}
.confirmacion a{text-decoration:underline; font-weight:700;}

@media (max-width:900px){
  .panel{grid-template-columns:1fr;}
  .canales{max-width:none;}
}
@media (max-width:560px){
  .fila{grid-template-columns:1fr; gap:0;}
}
</style>