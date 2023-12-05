<template>
  <div class="flex w-full h-screen justify-center items-center">
    <div>
      <div class="flex justify-center mb-10">
        <h1 class="text-6xl font-bold">
          Notes App
        </h1>
      </div>
      <form class="flex flex-col justify-center items-center">
        <div class="mb-5 w-full">
          <label class="mb-2 ml-2">Email:</label>
          <input type="email" placeholder="user@example.com" class="input input-bordered input-primary w-full" />
        </div>
        <div class="mb-5 w-full">
          <label class="mb-2 ml-2">UserName:</label>
          <input type="password" placeholder="**************" class="input input-bordered input-primary w-full" />
        </div>
        <div class="mb-5 w-full">
          <label class="mb-2 ml-2">Password:</label>
          <input type="password" placeholder="**************" class="input input-bordered input-primary w-full" />
        </div>
        <div class="mb-10 w-full">
          <label class="mb-2 ml-2">Confirm Password:</label>
          <input type="password" placeholder="**************" class="input input-bordered input-primary w-full" />
        </div>
        <div class="flex">
          <router-link to="/">
            <button class="btn btn-outline btn-secondary">Register</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>