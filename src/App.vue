<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
// import NotesView from './views/NotesView.vue'
</script>

<template >
  <NavBar class="h-[10%]"/>
  <!-- <NotesView class="h-[75%]"/> -->
  <router-view class="h-[75%]"></router-view>
  <Footer class="h-[10%]"/>
</template>

<style scoped></style>
