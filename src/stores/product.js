import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
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
    {
      id: 5,
      name: 'Zip Tote Basket',
      price: '$140',
      rating: 4,
      images: [
        {
          id: 1,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
        },
        // More images...
      ],
      availableColors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
      ],
      description: `
        <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
      `,
      details: [
        {
          name: 'Features',
          items: [
            'Multiple strap configurations',
            'Spacious interior with top zip',
            'Leather handle and tabs',
            'Interior dividers',
            'Stainless strap loops',
            'Double stitched construction',
            'Water-resistant',
          ],
        },
        // More sections...
      ],
    },
  ])

  const favoriteProducts = computed(() => products.value.slice(0, 4))

  return { products, favoriteProducts }
})