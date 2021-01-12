<template>
  <div>
    
    <div class="home-main h-screen">
      <div class="flex items-center w-full h-full lg:w-3/4 mx-auto text-base dark:text-white">
        <span
          >Lorem ipsum dolor <strong class="highlight">lorem</strong> amet
          consectetur adipisicing elit. Aut nemo, accusamus error facere iusto
          alias, possimus repellendus asperiores ut beatae optio impedit
          reprehenderit, voluptas officiis ea itaque dolorem aliquam
          tempore?</span
        >
      </div>
    </div>

    <section class="blog text-gray-700 body-font">
      <div class="px-5 py-24 mx-auto">
        <div
          class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
        >
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white"
          >
            Blog
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base dark:text-white">
            J'aime bien partager mes connaissances et des recherche
            intéressantes, pour le faire j'ai mis en place un blog personnel.
            Nous abordons plusieurs sujets intéressants et je donne quelques
            astuces et conseils aux jeunes développeurs pour mieux s'en sortir.
          </p>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>
    </section>

    <section>
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <kinesis-container>
              <kinesis-element :strength="10" type="depth">
                <img
                  data-aos="fade-up" data-aos-delay="300"
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                />
              </kinesis-element>
          </kinesis-container>
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <kinesis-container>
              <kinesis-element :strength="10">
                <div class="md:pr-12">
                  <div
                    class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                  >
                    <i class="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 class="text-3xl font-semibold">A growing company</h3>
                  <p class="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you get
                    started faster. You can change the text and images and you're
                    good to go.
                  </p>
                  <ul class="list-none mt-6">
                    <li class="py-2">
                      <div class="flex items-center" data-aos="fade-up" data-aos-delay="300">
                        <div>
                          <span
                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                            ><i class="fas fa-fingerprint"></i
                          ></span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center" data-aos="fade-up" data-aos-delay="300">
                        <div>
                          <span
                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                            ><i class="fab fa-html5"></i
                          ></span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">Amazing page examples</h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center" data-aos="fade-up" data-aos-delay="300">
                        <div>
                          <span
                            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                            ><i class="far fa-paper-plane"></i
                          ></span>
                        </div>
                        <div><h4 class="text-gray-600">Dynamic components</h4></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </kinesis-element>
          </kinesis-container>
        </div>
      </div>
    </section>

    <section>
      <div class="p-24 flex flex-wrap items-center justify-center">
        <div
          data-aos="fade-up" data-aos-delay="300"
          class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg"
        >
          <svg
            class="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style="transform: scale(1.5); opacity: 0.1;"
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div
              class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              class="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Indoor</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Peace Lily</span>
              <span
                class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >$36.00</span
              >
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up" data-aos-delay="350"
          class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg"
        >
          <svg
            class="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style="transform: scale(1.5); opacity: 0.1;"
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div
              class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              class="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
              alt=""
            />
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Outdoor</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Monstera</span>
              <span
                class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >$45.00</span
              >
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up" data-aos-delay="400"
          class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg"
        >
          <svg
            class="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style="transform: scale(1.5); opacity: 0.1;"
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center">
            <div
              class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              class="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Outdoor</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Oak Tree</span>
              <span
                class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >$68.50</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  #header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
  }
  .home-main {
    padding-top: 64px;
    padding-bottom: 64px;
  }
</style>