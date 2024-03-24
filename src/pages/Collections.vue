<template>
  <Navbar />

  <section class="relative py-24 px-6 transition-all ease-in">
    <aside className="z-10 absolute inset-0 bg-cover bg-layer"></aside>
    <div class="relative z-20 max-w-7xl mx-auto">
      <h2
        class="mb-6 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-800 text-center"
      >
        Collections
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 font-semibold">
        <router-link to="/collections/1">
          <div>
            <div class="cursor-pointer">
              <div class="h-72">
                <img
                  class="object-cover h-full w-full"
                  src="../assets/hero-bg.jpg"
                  alt=""
                />
              </div>
              <p class="p-2 text-center bg-gray-100">TRUMP FAMILY</p>
            </div>
          </div>
        </router-link>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">FOLA's GRADUATION</p>
          </div>
        </div>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">MIKE & KAY WEDDING</p>
          </div>
        </div>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>

            <div
              class="flex items-center space-x-3 justify-center p-2 text-center bg-gray-100"
            >
              <p>&#x1F512;</p>
              <p class="">AKEEBA</p>
            </div>
          </div>
        </div>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">FOLA's GRADUATION</p>
          </div>
        </div>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">MIKE & KAY WEDDING</p>
          </div>
        </div>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>

            <div
              class="flex items-center space-x-3 justify-center p-2 text-center bg-gray-100"
            >
              <p>&#x1F512;</p>
              <p class="">CLASSICO</p>
            </div>
          </div>
        </div>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>

            <div
              class="flex items-center space-x-3 justify-center p-2 text-center bg-gray-100"
            >
              <p>&#x1F512;</p>
              <p class="">RUCHUS BACHELOR'S EVE</p>
            </div>
          </div>
        </div>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">MIKE & KAY WEDDING</p>
          </div>
        </div>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">AKEEBA</p>
          </div>
        </div>

        <div>
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">CHICAGO FAIR</p>
          </div>
        </div>

        <div @click="showPasswordModal = true">
          <div class="cursor-pointer">
            <div class="h-72">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <div
              class="flex items-center space-x-3 justify-center p-2 text-center bg-gray-100"
            >
              <p>&#x1F512;</p>
              <p class="">BILLY TRENTE</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PasswordModal
      :display-password-modal="showPasswordModal"
      @closePasswordModal="showPasswordModal = false"
    />
  </section>

  <FooterBar />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Navbar from "../components/layout/Navbar.vue";
import FooterBar from "../components/layout/FooterBar.vue";
import PasswordModal from "../components/modal/PasswordModal.vue";

const showPasswordModal = ref(false);
</script>
