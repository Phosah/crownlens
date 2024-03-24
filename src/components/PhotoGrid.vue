<template>
  <main>
    <h2 class="text-center text-2xl font-semibold">TRUMP FAMILY</h2>
    <div class="max-w-7xl mx-auto px-6 py-10 grid-wrapper">
      <div
        @click="getImg(image.imgSrc)"
        v-for="(image, index) in imageGallery"
        :key="index"
        :class="[image.style]"
      >
        <img :src="image.imgSrc" alt="" />
      </div>
      <!-- <div class="big">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div class="tall">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div class="tall">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div class="big">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div class="big">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div class="tall">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div class="big">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div class="tall">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div>
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div class="tall">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div>
      <div class="tall">
        <img src="../assets/hero-bg.jpg" alt="" />
      </div> -->
    </div>
  </main>

  <aside
    @click="openModal = false"
    v-if="openModal"
    class="fixed inset-0 bg-black transition-all"
  >
    <div
      class="relative z-10 h-full flex items-center justify-center transition-all"
    >
      <div>
        <img
          :src="tempImgSrc"
          class="w-[40rem] h-full object-cover transition-all"
          alt=""
        />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Img1 from "../assets/hero-bg.jpg";
import Img2 from "../assets/tree.jpg";
const openModal = ref(false);
const tempImgSrc = ref("");

const imageGallery = [
  { id: 1, imgSrc: Img1, style: "big" },
  { id: 2, imgSrc: Img1, style: "" },
  { id: 3, imgSrc: Img2, style: "tall" },
  { id: 4, imgSrc: Img1, style: "" },
  { id: 5, imgSrc: Img2, style: "tall" },
  { id: 6, imgSrc: Img1, style: "" },
  { id: 7, imgSrc: Img1, style: "" },
  { id: 8, imgSrc: Img2, style: "big" },
  { id: 9, imgSrc: Img1, style: "" },
  { id: 10, imgSrc: Img1, style: "big" },
  { id: 11, imgSrc: Img1, style: "tall" },
  { id: 12, imgSrc: Img1, style: "" },
  { id: 13, imgSrc: Img2, style: "" },
  { id: 14, imgSrc: Img1, style: "" },
];

const getImg = (img: string) => {
  console.log(img);
  tempImgSrc.value = img;
  console.log(tempImgSrc.value);
  openModal.value = true;
  console.log(openModal.value);
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  display: inline-block;
  filter: brightness(0.5) grayscale(100);
}
img:hover {
  filter: brightness(0.5) grayscale(0);
}
/* .grid-wrapper > div {
  display: flex;
  justify-content: center;
  align-items: center;
} */
.grid-wrapper > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.grid-wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}
.grid-wrapper .wide {
  grid-column: span 2;
}
.grid-wrapper .tall {
  grid-row: span 2;
}
.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
