<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import { ref } from 'vue';
import { useUserStore, User } from '../stores/userStore';
import { storeToRefs } from 'pinia';
import { updateProfileById } from '../services/profileService';

const store = useUserStore()
const { userId, jwt, username, email } = storeToRefs(store)

console.log(userId.value);
console.log(jwt?.value);
console.log(username.value);
console.log(email.value);

let errorMessages = ref([]);

const handleUpdate = async (formValues: User) => {
  if (formValues.password !== formValues.password_confirmation) {
    errorMessages.value = ['Password and confirmation must be equal']
    return errorMessages
  } else {
    await updateProfileById(userId.value, formValues, jwt.value)
      .catch(console.log)
  }
  errorMessages.value = []
}

const handleDelete = async () => {
  console.log('delete')
}

const validateEmail = (emailValue: string) => {
  if (!emailValue) {
    return 'Email is required'
  }
  const emailRegexValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!emailRegexValidation.test(emailValue)) {
    return 'Email must be valid'
  }
  return true
}

const validateUsername = (usernameValue: string) => {
  if (!usernameValue) {
    return 'Username is required'
  }
  return true
}

const validatePassword = (passwordValue: string) => {
  if (!passwordValue) {
    return 'Password is required'
  }
  if (passwordValue.length < 8) {
    return 'Password should have at least 8 characters'
  }
  return true
}

</script>

<template>
  <div class="container mx-auto my-5">
    <div class="flex justify-left mb-10 px-3">
      <h1 class="text-6xl font-bold">Profile</h1>
    </div>

    <div v-for="(errorMessage, i) in errorMessages" :key="i">
      <div role="alert" class="alert alert-error my-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ errorMessage }}</span>
      </div>
    </div>

    <div>
      <Form @submit="handleUpdate" class="flex flex-col justify-center items-center">

        <div class="mb-5 w-full">
          <label class="mb-2 ml-2">Username:</label>
          <Field name="username" type="text" :value="username" placeholder="username"
            class="input input-bordered input-primary w-full" :rules="validateUsername" />
          <ErrorMessage class="text-error" name="username" />
        </div>

        <div class="mb-5 w-full">
          <label class="mb-2 ml-2">Email:</label>
          <Field name="email" type="email" :value="email" placeholder="user@example.com"
            class="input input-bordered input-primary w-full" :rules="validateEmail" />
          <ErrorMessage class="text-error" name="email" />
        </div>

        <div class="mb-5 w-full">
          <label class="mb-2 ml-2">Password:</label>
          <Field name="password" type="password" placeholder="********" class="input input-bordered input-primary w-full"
            :rules="validatePassword" />
          <ErrorMessage class="text-error" name="password" />
        </div>

        <div class="mb-5 w-full">
          <label class="mb-2 ml-2">Confirm New Password:</label>
          <Field name="password_confirmation" type="password" placeholder="********"
            class="input input-bordered input-primary w-full" :rules="validatePassword" />
          <ErrorMessage class="text-error" name="password" />
        </div>

        <div class="my-5 w-full">
          <button class="btn btn-error mr-5" onclick="my_modal_1.showModal()">Remove profile</button>
          <button type="submit" class="btn btn-outline btn-success">Update profile</button>
        </div>

        <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Remove profile</h3>
            <p class="py-4">Are you sure to remove your profile? all your notes will be lost</p>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn btn-error mr-5" @click="handleDelete">Remove</button>
                <button class="btn btn-neutral">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>

      </Form>
    </div>
  </div>
</template>