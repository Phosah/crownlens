<template>
  <main class="bg-white">
    <MainHeader />
    <PhotoSlide />
    <Bookings />
    <Experience />
    <Pricing />
    <Testimonials />
    <Contact />
    <FooterBar />
  </main>
</template>

<script setup lang="ts">
import Bookings from "../components/Bookings.vue";
import Contact from "../components/Contact.vue";
import Experience from "../components/Experience.vue";
import PhotoSlide from "../components/PhotoSlide.vue";
import Pricing from "../components/Pricing.vue";
import Testimonials from "../components/Testimonials.vue";
import FooterBar from "../components/layout/FooterBar.vue";
import MainHeader from "../components/layout/MainHeader.vue";
</script>
