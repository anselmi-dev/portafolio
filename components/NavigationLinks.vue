<template>
  <nav class="main-nav sm:flex mt-12 sm:mt-0 flex-col sm:flex-row items-center relative flex-1 justify-end">
    <div
      class="flex flex-col sm:flex-row items-center relative flex-1 justify-end"
    >
        <toggle-dark/>
        <nuxt-link to="blog"
          class="py-2 sm-4 sm:py-2 sm:px-4 text-base sm:text-gray-800 hover:bg-primary-light rounded transition duration-300 font-bold leading-none dark:text-white">
            Proyectos
        </nuxt-link>
        <nuxt-link to="blog" class="py-2 sm-4 sm:py-2 sm:px-4 text-base sm:text-gray-800 hover:bg-primary-light rounded transition duration-300 font-bold leading-none dark:text-white">
            Blog
        </nuxt-link>
        <nuxt-link to="blog" class="py-2 sm-4 sm:py-2 sm:px-4 text-base sm:text-gray-800 hover:bg-primary-light rounded transition duration-300 font-bold leading-none dark:text-white">
            Fotografía
        </nuxt-link>
        <div class="sm:border-l sm:border-gray-300 py-2">
            <nuxt-link to="blog" class="sm:ml-4 py-2 px-3 md:px-4 rounded bg-primary-light text-gray-800 font-bold hover:bg-primary transition duration-300 leading-none dark:text-white">
                Sobre mi
            </nuxt-link>
        </div>
    </div>
    <div
      class="sm:mt-0 flex flex-col sm:flex-row items-center"
    >
      <div class="hidden sm:flex items-center">
        <div class="user cursor-pointer relative flex items-cente pl-4">
          <img
            src="https://avatars1.githubusercontent.com/u/12992403?v=4"
            alt="anselmi-dev"
            class="rounded-full w-8 h-8 mr-2"
          />
          <div
            class="dropdown absolute right-0 opacity-0 pointer-events-none mt-8"
          >
            <div
              class="bg-white flex flex-col items-end mt-2 border border-gray-200 rounded-sm shadow-lg"
            >
              <a
                title="My components"
                href="/u/anselmi-dev"
                class="block text-gray-800 opacity-75 hover:opacity-100 text-sm px-4 py-2 whitespace-nowrap text-right"
                >My components</a
              >
              <form
                id="logout-form"
                action="https://tailwindcomponents.com/logout"
                method="POST"
                class="leading-none"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="IzIAdwi1fkpKTl2IDm27dg6gy6TYAKK8p0WV2XI4"
                />
                <button
                  class="block text-primary opacity-75 hover:opacity-100 text-sm px-4 py-2 whitespace-nowrap text-right"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center mt-2 border-t border-gray-700 sm:hidden"
      >
        <p class="pt-4 text-white font-bold">anselmi-dev</p>
        <a
          title="My Tailwind components"
          href="/u/anselmi-dev"
          class="py-2 sm:py-4 text-white opacity-75"
          >My components</a
        >
        <form
          id="logout-form"
          action="https://tailwindcomponents.com/logout"
          method="POST"
          class="leading-none"
        >
          <input
            type="hidden"
            name="_token"
            value="IzIAdwi1fkpKTl2IDm27dg6gy6TYAKK8p0WV2XI4"
          />
          <button class="py-2 sm:py-4 text-white opacity-75">
            Logout
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
