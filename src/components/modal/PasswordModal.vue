<template>
  <aside
    v-show="displayPasswordModal"
    class="fixed z-20 inset-0 bg-black opacity-80 transition-all ease-in"
  >
    <div
      class="relative z-40 h-full flex items-center justify-center transition-all ease-in"
    >
      <div
        class="mx-6 p-4 bg-gradient-to-r from-yellow-300 to-red-800 transition-all ease-in"
      >
        <p class="mb-4">Enter password to access photos</p>

        <input
          class="block w-full"
          v-model="password"
          type="password"
          name="collection-password"
          id="collection-password"
        />

        <button @click="closePasswordModal" class="mt-3 px-4 py-2 bg-lime-700">
          Submit
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

defineProps<{
  displayPasswordModal: boolean;
}>();

const emit = defineEmits(["closePasswordModal"]);

const closePasswordModal = () => {
  emit("closePasswordModal");
  console.log("clicked!!");
};

const password = ref(null);
</script>
