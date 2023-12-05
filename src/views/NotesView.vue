<script setup lang="ts">
import Note from '../components/Note.vue'
import { getNotes } from '@/services';

const notes = await getNotes();

</script>

<template>
  <div class="container mx-auto my-5">
    <div class="flex flex-wrap px-3">
      <div class="p-1 w-full sm:w-6/12 md:w-4/12 lg:w-3/12" v-for="(note, i) in notes.data" :key="i">

        <router-link to="/note">
          <Note :note="note" />
        </router-link>

      </div>
    </div>
  </div>
</template>