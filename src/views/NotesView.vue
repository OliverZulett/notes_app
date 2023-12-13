<script setup lang="ts">
import { getNotesByUserId } from '../services/notesService'
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { type Note } from '../services/types/noteResponseType'

let notes: Array<Note> = []
const store = useUserStore()
const { userId, jwt } = storeToRefs(store)

if (userId?.value && jwt?.value) {
  notes = await getNotesByUserId(userId.value, jwt.value)
} else {
  notes = []
}
</script>

<template>
  <div class="container mx-auto my-5">
    <div class="flex justify-left mb-10 px-3">
      <h1 class="text-6xl font-bold">My notes</h1>
    </div>
    <div class="flex flex-wrap px-3">
      <div class="p-1 w-full sm:w-6/12 md:w-4/12 lg:w-3/12" v-for="(note, i) in notes" :key="i">
        <router-link to="/note">
          <Note :note="note" />
        </router-link>
      </div>
    </div>
  </div>
</template>
