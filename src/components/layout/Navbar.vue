<template>
  <nav
    class="max-w-7xl mx-auto flex px-4 py-8 md:py-16 items-center justify-between space-x-3 h-24 bg-white"
  >
    <div class="text-right">
      <p class="text-lg md:text-2xl font-bold">CrownLens</p>
      <p class="hover:text-yellow-600 hover:font-medium transition-all">
        PHOTO
      </p>
    </div>

    <ul class="flex items-center space-x-4 cursor-pointer">
      <div
        class="border-b-2 border-transparent hover:border-yellow-600 hover:text-yellow-600 hover:font-medium transition-all"
      >
        Collections
      </div>
      <div
        class="border-b-2 border-transparent hover:border-yellow-600 hover:text-yellow-600 hover:font-medium transition-all"
      >
        About
      </div>
    </ul>

    <ul class="hidden md:flex items-center space-x-6 cursor-pointer">
      <aside class="flex items-center space-x-6">
        <p
          class="hover:text-yellow-600 hover:font-medium hover:scale-110 transition-all cursor-pointer"
        >
          &cent;
        </p>
        <p
          class="hover:text-yellow-600 hover:font-medium hover:scale-110 transition-all cursor-pointer"
        >
          &pound;
        </p>
        <p
          class="hover:text-yellow-600 hover:font-medium hover:scale-110 transition-all cursor-pointer"
        >
          &cent;
        </p>
      </aside>

      <div
        class="hidden md:block border-b-2 border-gray-400 hover:text-yellow-600 hover:font-medium transition-all hover:border-yellow-600"
      >
        Get in Touch
      </div>
    </ul>
  </nav>
</template>
