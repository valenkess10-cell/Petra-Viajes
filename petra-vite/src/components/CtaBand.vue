<template>
  <section>
    <div class="wrap">
      <div class="cta-band" id="contacto">
        <h2>¿Le ponemos fecha a tu próximo viaje?</h2>
        <a href="https://wa.me/5491100000000" class="btn btn-primary">Hablar por WhatsApp →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-band{
  background:var(--magenta);
  color:#fff;
  border-radius:24px;
  padding:56px 64px;
  display:flex; align-items:center; justify-content:space-between; gap:32px;
  flex-wrap:wrap;
}
.cta-band h2{color:#fff; font-size:clamp(22px,2.6vw,30px); max-width:480px;}
.cta-band .btn-primary{background:var(--navy-deep); box-shadow:none;}
.cta-band .btn-primary:hover{background:#000d2e;}

@media (max-width:900px){
  .cta-band{padding:40px 28px; flex-direction:column; align-items:flex-start;}
}
</style>
