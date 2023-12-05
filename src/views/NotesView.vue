<script setup lang="ts">
import Note from '../components/Note.vue'
import { getNotes } from '@/services';

const notes = await getNotes();
</script>

<template>
  <div class="container mx-auto my-5">
    <div class="flex">
      <div class="m-1">
        <Note v-for="(note, i) in notes.data" :key="i" 
          :note="note" />
      </div>
    </div>
  </div>
</template>