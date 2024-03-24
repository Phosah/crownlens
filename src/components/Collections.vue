<template>
  <section class="relative py-24 px-6">
    <aside className="z-10 absolute inset-0 bg-cover bg-layer"></aside>
    <div class="relative z-20 max-w-7xl mx-auto">
      <h2
        class="mb-6 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-800 text-center"
      >
        Collections
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 font-semibold">
        <div>
          <div>
            <div class="h-72 bg-red-50">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">TRUMP FAMILY</p>
          </div>
        </div>

        <div>
          <div>
            <div class="h-72 bg-red-50">
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
          <div>
            <div class="h-72 bg-red-50">
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
          <div>
            <div class="h-72 bg-red-50">
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
          <div>
            <div class="h-72 bg-red-50">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">CHICAGO FAIR</p>
          </div>
        </div>

        <div>
          <div>
            <div class="h-72 bg-red-50">
              <img
                class="object-cover h-full w-full"
                src="../assets/hero-bg.jpg"
                alt=""
              />
            </div>
            <p class="p-2 text-center bg-gray-100">BILLY TRENTE</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-12 mx-auto">
        <router-link to="/collections">
          <button
            class="px-6 py-3 bg-white hover:bg-black hover:text-white hover:font-medium transition-all duration-600 hover:scale-110"
          >
            See More
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>
