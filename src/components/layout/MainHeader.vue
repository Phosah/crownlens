<template>
  <header class="">
    <Navbar />

    <aside class="bg-hero h-[40rem]">
      <div
        class="max-w-7xl mx-auto flex flex-col justify-center items-center h-full text-white"
      >
        <h1
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out-quad"
          class="mb-10 text-3xl md:text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-800"
        >
          CROWNLENS PHOTOGRAPHY
        </h1>
        <p
          data-aos="fade-right"
          data-aos-easing="ease-in-out-back"
          data-aos-delay="600"
          class="mb-6"
        >
          See yourself in the best light
        </p>
        <p
          data-aos="zoom-in-down"
          class="pb-2 border-b-2 hover:text-yellow-600 hover:font-medium transition-all hover:border-yellow-600 cursor-pointer"
        >
          Get in Touch
        </p>
      </div>
    </aside>
  </header>
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

<style>
.bg-hero {
  background-image: url("../../assets/hero-bg.jpg");
  background-size: cover;
}

.bg-layer {
  background-image: url("../../assets/layer.png");
  background-size: cover;
}
</style>
