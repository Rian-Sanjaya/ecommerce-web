<script setup>
import { RouterView } from 'vue-router'
import Header from '../../components/layout/HeaderLayout.vue'
import Footer from '../../components/layout/FooterLayout.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>