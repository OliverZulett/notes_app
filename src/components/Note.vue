<script setup lang="ts">
import { Note } from '../services/types/noteResponseType';

const props = defineProps<{
  note: Note;
}>();

</script>

<template>
  <!-- <div class="card w-96 bg-primary text-primary-content image-full">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> -->
  <div class="card bg-primary text-primary-content">
  <!-- <div class="card w-96 bg-primary text-primary-content"> -->
    <div class="card-body pt-5 pr-5">
      <div class="card-actions justify-end">
        <button class="btn btn-sm btn-circle">
          <font-awesome-icon icon="fa-solid fa-pencil" />
        </button>
        <button class="btn btn-sm btn-circle">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </button>
      </div>
      <h2 class="card-title whitespace-pre-wrap line-clamp-2 my-3 capitalize">{{ props.note.title }}</h2>
      <p class="whitespace-pre-wrap line-clamp-3">{{ props.note.content }}</p>
      <p class="flex justify-end italic mt-3">Last Update: December 23</p>
    </div>
  </div>
</template>