<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import DestinosSection from './components/DestinosSection.vue'
import WhySection from './components/WhySection.vue'
import ProcessSection from './components/ProcessSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import ContactoSection from './components/ContactoSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <DestinosSection />
    <WhySection />
    <ProcessSection />
    <TestimonialSection />
    <ContactoSection />
  </main>
  <SiteFooter />
</template>
