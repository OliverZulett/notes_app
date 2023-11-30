<!-- <script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script> -->
<template>
  <div class="p-3">
    <div class="navbar bg-primary text-primary-content rounded-box">
      <div class="navbar-start">
        <div class="flex-1">
          <h1 class="text-2xl font-semibold px-4">Notes App</h1>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li class="mx-1">
            <router-link class="btn btn-primary text-xl" active-class="btn-active" to="/">My Notes</router-link>
          </li>
          <li class="mx-1">
            <router-link class="btn btn-primary text-xl" active-class="btn-active" to="/about">My Notes</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="flex">
          <div class="form-control">
            <input type="text" placeholder="Search Note"
              class="input bg-primary input-bordered border-neutral placeholder:text-primary-content w-24 md:w-auto" />
          </div>
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-52">
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>