<template>
  <main class="bg-white">
    <MainHeader />
    <About />
    <Bookings />
    <Collections />
    <AboutPhotographer />
    <Testimonials />
    <FooterBar />
  </main>
</template>

<script setup lang="ts">
import About from "../components/About.vue";
import AboutPhotographer from "../components/AboutPhotographer.vue";
import Bookings from "../components/Bookings.vue";
import Collections from "../components/Collections.vue";
import Testimonials from "../components/Testimonials.vue";
import FooterBar from "../components/layout/FooterBar.vue";
import MainHeader from "../components/layout/MainHeader.vue";
</script>
