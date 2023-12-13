<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { useUserStore } from '../stores/userStore';
import router from '../router/index';

const store = useUserStore()
const user = JSON.parse(localStorage.getItem('user'));

if (user) {
  store.loadUser(user)
} else {
  router.push(`/login`)
}

</script>

<template>
  <NavBar class="h-[10%]" />
  <Suspense>
    <router-view class="h-[75%]"></router-view>
  </Suspense>
  <div class="fixed bottom-[10%] right-[20px]">
    <router-link class="btn btn-secondary btn-lg btn-circle" to="/new-note">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </router-link>
  </div>
</template>
