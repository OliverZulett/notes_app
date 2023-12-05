<script setup lang="ts">
import Note from '../components/Note.vue'
import { getNotes } from '@/services';

const notes = await getNotes();

</script>

<template>
  <div class="container mx-auto my-5">
    <div class="flex flex-wrap px-3">
      <div class="p-1 w-full sm:w-6/12 md:w-4/12 lg:w-3/12" v-for="(note, i) in notes.data" :key="i" >
        <Note :note="note" />
      </div>

      <!-- <div class="flex flex-wrap"> -->
      <!-- <div class="flex"> -->
      <!-- <div class="m-1"> -->
      <!-- <Note v-for="(note, i) in notes.data" :key="i" 
          :note="note" /> -->
      <!-- </div> -->
    </div>
  </div>
</template>