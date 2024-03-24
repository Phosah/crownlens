<template>
  <section class="relative py-24 bg-gray-200">
    <aside className="absolute inset-0 bg-cover bg-layer"></aside>

    <div class="relative z-30 max-w-7xl mx-auto p-10 md:p-20 bg-gray-600">
      <div class="md:flex items-center md:space-x-12 space-y-6 md:space-y-0">
        <div data-aos="fade-right" class="w-36 h-36">
          <img
            class="object-cover w-36 h-36"
            src="../assets/hero-bg.jpg"
            alt=""
          />
        </div>

        <p class="flex-1 text-xl text-white text-center">
          {{ testimonials[index].message }}
        </p>
      </div>

      <div class="relative z-20 flex justify-center space-x-4 mt-8">
        <button
          v-for="(_, i) in testimonials"
          :key="i"
          @click="setIndex(i)"
          class="w-10 h-4 rounded-full"
          :class="{
            'w-4 bg-orange-300': i === index,
            'bg-white hover:bg-orange-300 opacity-40': i !== index,
          }"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const index = ref(0);

const testimonials = [
  {
    name: "Porchettino Mirchandani, Founder, One Paper Lane",
    message:
      "Vestibulum convallis velit lectus, non hendrerit augue suscipit eu. Morbi aliquet est dolor, eget tincidunt nibh condimentum id. Mauris convallis scelerisque orci non interdum. eget tincidunt nibh condimentum id. Mauris convallis scelerisque orci non interdum.",
    photo: "",
  },
  {
    name: "Gaurav Mirchandani, Founder, One Paper Lane",
    message:
      "Dellis velit lectus, non hendrerit augue suscipit eu. Morbi aliquet est dolor, eget tincidunt nibh condimentum id. Mauris convallis scelerisque orci non interdum. nibh condimentum id. Mauris convallis scelerisque orci non interdum.",
    photo: "",
  },
  {
    name: " Mirchandani Gaurav, Founder, One Paper Lane",
    message:
      "Non hendrerit augue suscipit eu. Morbi aliquet est dolor, eget tincidunt nibh condimentum id. Mauris convallis scelerisque orci non interdum. Mauris convallis scelerisque orci non interdum.",
    photo: "",
  },
];

const setIndex = (i: number) => {
  index.value = i;
};
</script>
