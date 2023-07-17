<template>
  <main>
    <!-- Hero section -->
    <div class="relative">
      <!-- Background image and overlap -->
      <div aria-hidden="true" class="absolute inset-0 hidden sm:flex sm:flex-col">
        <div class="relative w-full flex-1 bg-gray-800">
          <div class="absolute inset-0 overflow-hidden">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg" alt="" class="h-full w-full object-cover object-center" />
          </div>
          <div class="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div class="h-32 w-full bg-white md:h-40 lg:h-48" />
      </div>

      <div class="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        <!-- Background image and overlap -->
        <div aria-hidden="true" class="absolute inset-0 flex flex-col sm:hidden">
          <div class="relative w-full flex-1 bg-gray-800">
            <div class="absolute inset-0 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg" alt="" class="h-full w-full object-cover object-center" />
            </div>
            <div class="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div class="h-48 w-full bg-white" />
        </div>
        <div class="relative py-32">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Mid-Season Sale</h1>
          <div class="mt-4 sm:mt-6">
            <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700">Shop Collection</a>
          </div>
        </div>
      </div>

      <section aria-labelledby="collection-heading" class="relative -mt-96 sm:mt-0">
        <h2 id="collection-heading" class="sr-only">Collections</h2>
        <div class="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
          <div v-for="collection in collections" :key="collection.name" class="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto">
            <div>
              <div aria-hidden="true" class="absolute inset-0 overflow-hidden rounded-lg">
                <div class="absolute inset-0 overflow-hidden group-hover:opacity-75">
                  <img :src="collection.imageSrc" :alt="collection.imageAlt" class="h-full w-full object-cover object-center" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div class="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" class="text-sm text-white">Shop the collection</p>
                  <h3 class="mt-1 font-semibold text-white">
                    <a :href="collection.href">
                      <span class="absolute inset-0" />
                      {{ collection.name }}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Trending products -->
    <section aria-labelledby="trending-heading" class="bg-white">
      <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
        <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 id="trending-heading" class="text-2xl font-bold tracking-tight text-gray-900">Our Favorites</h2>
          <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div class="relative mt-8">
          <div class="relative w-full overflow-x-auto">
            <ul role="list" class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
              <!-- <li v-for="product in trendingProducts" :key="product.id" class="inline-flex w-64 flex-col text-center lg:w-auto"> -->
              <li v-for="product in favoriteProducts" :key="product.id" class="inline-flex w-64 flex-col text-center lg:w-auto">
                <router-link
                  :to="{
                    name: 'product_detail',
                    params: { id: product.id }
                  }"
                >
                  <div class="group relative">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div class="mt-6">
                      <p class="text-sm text-gray-500">{{ product.color }}</p>
                      <h3 class="mt-1 font-extrabold text-gray-900">
                        <a :href="product.href">
                          <span class="absolute inset-0" />
                          {{ product.name }}
                        </a>
                      </h3>
                      <p class="mt-1 text-gray-900">{{ product.price }}</p>
                    </div>
                  </div>
                </router-link>

                <h4 class="sr-only">Available colors</h4>
                <ul role="list" class="mt-auto flex items-center justify-center space-x-3 pt-6">
                  <li v-for="color in product.availableColors" :key="color.name" class="h-4 w-4 rounded-full border border-black border-opacity-10" :style="{ backgroundColor: color.colorBg }">
                    <span class="sr-only">{{ color.name }}</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-12 px-4 sm:hidden">
          <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Category section -->
    <section aria-labelledby="category-heading" class="bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="sm:flex sm:items-baseline sm:justify-between">
          <h2 id="category-heading" class="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
          <RouterLink
            :to="{
              name: 'category',
              state: { title: 'All Categories' },
            }"
            class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </RouterLink>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <router-link
            :to="{
              name: 'category',
              state: { title: 'New Arrivals' },
            }"
            class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
          >
          <!-- <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2" @click="onCategoryClick"> -->
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg" alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee." class="object-cover object-center group-hover:opacity-75" />
            <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div class="flex items-end p-6">
              <div>
                <h3 class="font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0" />
                    New Arrivals
                  </a>
                </h3>
                <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
              </div>
            </div>
          <!-- </div> -->
          </router-link>
          <router-link 
            :to="{
              name: 'category',
              state: { title: 'Accessories' },
            }"
            class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full"
          >
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters." class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
            <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
            <div class="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 class="font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0" />
                    Accessories
                  </a>
                </h3>
                <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
              </div>
            </div>
          </router-link>
          <router-link
            :to="{
              name: 'category',
              state: { title: 'Workspace' },
            }"
            class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full"
          >
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk." class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
            <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
            <div class="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 class="font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0" />
                    Workspace
                  </a>
                </h3>
                <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="mt-6 sm:hidden">
          <RouterLink
            to="/category"
            class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Sale and testimonials -->
    <div class="relative overflow-hidden">
      <!-- Decorative background image and gradient -->
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg" alt="" class="h-full w-full object-cover object-center" />
        </div>
        <div class="absolute inset-0 bg-white bg-opacity-75" />
        <div class="absolute inset-0 bg-gradient-to-t from-white via-white" />
      </div>

      <!-- Sale -->
      <section aria-labelledby="sale-heading" class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Get 25% off during our one-time sale</h2>
          <p class="mx-auto mt-4 max-w-xl text-xl text-gray-600">Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.</p>
          <a href="#" class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto">Get access to our one-time sale</a>
        </div>
      </section>

      <!-- Testimonials -->
      <section aria-labelledby="testimonial-heading" class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="testimonial-heading" class="text-2xl font-bold tracking-tight text-gray-900">What are people saying?</h2>

          <div class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            <blockquote v-for="testimonial in testimonials" :key="testimonial.id" class="sm:flex lg:block">
              <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" class="flex-shrink-0 text-gray-300">
                <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
              </svg>
              <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                <p class="text-lg text-gray-600">{{ testimonial.quote }}</p>
                <cite class="mt-4 block font-semibold not-italic text-gray-900">{{ testimonial.attribution }}</cite>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'

const trendingProducts = [
  {
    id: 1,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 2,
    name: 'Earthen Mug',
    color: 'Matte Black',
    price: '$28',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-02.jpg',
    imageAlt: 'Black porcelain mug with modern square handle and natural clay accents on rim and bottom.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
    ],
  },
  {
    id: 3,
    name: 'Leatherbound Daily Journal Set',
    color: 'Natural',
    price: '$50',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-03.jpg',
    imageAlt: 'Natural leather journal with brass disc binding and three paper refill sets.',
    availableColors: [
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brown', colorBg: '#7C2D12' },
    ],
  },
  {
    id: 4,
    name: 'Leatherbound Daily Journal',
    color: 'Black',
    price: '$50',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-04.jpg',
    imageAlt: 'Black leather journal with brass disc binding.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brown', colorBg: '#7C2D12' },
      { name: 'Brass', colorBg: '#FDE68A' },
    ],
  },
]

const collections = [
  {
    name: "Women's",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg',
    imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
  },
  {
    name: "Men's",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg',
    imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
  },
  {
    name: 'Desk Accessories',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg',
    imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
]

const testimonials = [
  {
    id: 1,
    quote:
      'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
    attribution: 'Sarah Peters, New Orleans',
  },
  {
    id: 2,
    quote:
      'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!',
    attribution: 'Kelly McPherson, Chicago',
  },
  {
    id: 3,
    quote:
      'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.',
    attribution: 'Chris Paul, Phoenix',
  },
]

const router = useRouter()
const productStore = useProductStore()
const favoriteProducts = productStore.favoriteProducts

function onCategoryClick () {
  router.push({ name: 'category', state: { title: 'New Arrivals' } })
}
</script>