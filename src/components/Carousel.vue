<template>
  <section class="relative max-w-5xl mx-auto h-[30rem] mt-20 py-20">
    <aside className="absolute inset-0 bg-cover bg-layer"></aside>

    <div class="flex items-center justify-center h-full">
      <div :class="[currentImage.style]">
        <img :src="currentImage.imgSrc" class="w-96" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Img1 from "../assets/hero-bg.jpg";
import Img2 from "../assets/tree.jpg";

const imageGallery = [
  { id: 1, imgSrc: Img1, style: "w-[15rem]" },
  { id: 2, imgSrc: Img1, style: "w-96" },
  { id: 3, imgSrc: Img2, style: "w-[15rem]" },
  { id: 4, imgSrc: Img1, style: "w-96" },
  { id: 5, imgSrc: Img2, style: "w-[15rem]" },
  { id: 6, imgSrc: Img1, style: "w-96" },
  { id: 7, imgSrc: Img1, style: "w-96" },
  { id: 8, imgSrc: Img2, style: "" },
  { id: 9, imgSrc: Img1, style: "w-96" },
  { id: 10, imgSrc: Img1, style: "" },
  { id: 11, imgSrc: Img1, style: "w-[15rem]" },
  { id: 12, imgSrc: Img1, style: "w-96" },
  { id: 13, imgSrc: Img2, style: "w-[15rem]" },
  { id: 14, imgSrc: Img1, style: "w-96" },
];

const currentImageIndex = ref(0);
const currentImage = ref(imageGallery[currentImageIndex.value]);

let intervalId: number;

const switchImages = () => {
  intervalId = setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % imageGallery.length;
    currentImage.value = imageGallery[currentImageIndex.value];
  }, 3000);
};

onMounted(switchImages);
onUnmounted(() => clearInterval(intervalId));
</script>
