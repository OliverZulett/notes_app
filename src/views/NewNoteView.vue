<script setup lang="ts">
import { Field } from 'vee-validate';

const handleSubmit = async (formValues: any) => {
  console.log(formValue);
}

</script>
<template>
  <div class="container mx-auto my-5">
    <div class="flex justify-left mb-10 px-3">
      <h1 class="text-6xl font-bold">New Note</h1>
    </div>
    <div>
      <Form @submit="handleSubmit" class="flex flex-col justify-center items-center">
        <div class="mb-5 w-full">
          <label for="title">Title</label>
          <Field name="title" type="text" placeholder="Note Title" :rules="validateTitle"
            class="input input-bordered input-primary w-full" />
        </div>
        <div class="mb-5 w-full">
          <label for="content">Content</label>
          <Field name="content" type="text" placeholder="Note Content" :rules="validateTitle"
            class="input input-bordered input-primary w-full" />
        </div>
        <div class="mb-5 w-full">
          <button type="submit" class="btn btn-outline btn-secondary">Create</button>
        </div>
      </Form>
    </div>
  </div>
</template>
