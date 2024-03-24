<template>
  <nav
    class="max-w-7xl mx-auto flex px-4 py-8 md:py-16 items-center justify-between space-x-3 h-24 bg-white"
  >
    <div class="text-right">
      <router-link to="/">
        <p
          data-aos="slide-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          class="text-lg md:text-2xl font-bold"
        >
          CrownLens
        </p>

        <div class="flex items-center justify-end">
          <div
            data-aos-delay="1000"
            data-aos="slide-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <img class="w-6 h-6" src="../../assets/logo.png" alt="logo" />
          </div>

          <p
            data-aos="slide-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
            class="hover:text-yellow-600 hover:font-medium transition-all"
          >
            PHOTO
          </p>
        </div>
      </router-link>
    </div>

    <ul
      data-aos="slide-right"
      class="flex items-center space-x-4 cursor-pointer"
    >
      <router-link to="/collections">
        <li
          class="border-b-2 border-transparent hover:border-yellow-600 hover:text-yellow-600 hover:font-medium transition-all"
        >
          Collections
        </li>
      </router-link>
      <li
        class="border-b-2 border-transparent hover:border-yellow-600 hover:text-yellow-600 hover:font-medium transition-all"
      >
        About
      </li>
    </ul>

    <ul
      data-aos="slide-left"
      class="hidden md:flex items-center space-x-6 cursor-pointer"
    >
      <li
        class="hidden md:block border-b-2 border-gray-400 hover:text-yellow-600 hover:font-medium transition-all hover:border-yellow-600"
      >
        Get in Touch
      </li>
    </ul>
  </nav>
</template>

<style>
.crownlens-active-link {
  border-bottom: 2px solid rgb(202 138 4);
}
</style>
