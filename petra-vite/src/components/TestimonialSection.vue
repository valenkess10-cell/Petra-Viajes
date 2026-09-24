<template>
  <section>
    <div class="wrap">
      <div class="quote">
        <div class="quote-mark">"</div>
        <div>
          <blockquote>Les dijimos "queremos desconectarnos sin gastar de más" y volvieron con un itinerario que ni se nos había ocurrido. Cero estrés, de principio a fin.</blockquote>
          <cite>— Marina D., viaje a Portugal, agosto 2026</cite>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quote{
  background:var(--paper-2);
  border-radius:22px;
  padding:64px;
  display:grid; grid-template-columns:auto 1fr; gap:36px; align-items:center;
}
.quote-mark{font-family:var(--font-display); font-weight:800; font-size:80px; color:var(--magenta); line-height:1;}
.quote blockquote{font-family:var(--font-body); font-size:clamp(19px,2.2vw,25px); font-weight:600; color:var(--navy-deep); line-height:1.45;}
.quote cite{display:block; margin-top:20px; font-style:normal; font-size:14px; color:var(--ink-soft); font-weight:600;}

@media (max-width:900px){
  .quote{grid-template-columns:1fr; padding:40px 28px; text-align:left;}
}
</style>
