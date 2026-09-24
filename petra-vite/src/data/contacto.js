// Datos de contacto en UN solo lugar: la sección de contacto y el footer leen de acá.
// ⚠️ Reemplazá los datos de ejemplo por los reales de la agencia.
export const contacto = {
  // Solo números, con código de país. En Argentina: 54 + 9 + código de área (sin 0) + número (sin 15).
  whatsapp: '5491100000000',
  whatsappVisible: '+54 9 11 0000-0000',

  instagram: 'petra.viajes',
  instagramUrl: 'https://www.instagram.com/petra.viajes/',

  email: 'hola@petraviajes.com.ar',

  telefono: '+541100000000',
  telefonoVisible: '+54 11 0000-0000',

  direccion: 'Av. Ejemplo 1234, CABA',
}

// Arma el enlace de WhatsApp, con un mensaje ya escrito si se le pasa texto.
export const whatsappUrl = (texto = '') =>
  `https://wa.me/${contacto.whatsapp}` + (texto ? `?text=${encodeURIComponent(texto)}` : '')
