<template>
  <!-- <aside v-if="openModal" class="fixed z-30 bg-black opacity-75">
    <div class="flex items-center justify-center">
      <div>
        <img :src="tempImgSrc" alt="" />
      </div>
    </div>
  </aside> -->

  <div>
    <Navbar />
    <PhotoGrid />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import PhotoGrid from "../components/PhotoGrid.vue";
import Navbar from "../components/layout/Navbar.vue";
import FooterBar from "../components/layout/FooterBar.vue";

// const openModal = ref(true);
</script>
