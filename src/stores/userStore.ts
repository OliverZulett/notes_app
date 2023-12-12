import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type User = {
  username: string | undefined
  email: string | undefined
  userId: string | undefined
}

export const authStore = defineStore('user', () => {
  const user = ref<User>({
    userId: undefined,
    username: undefined,
    email: undefined
  })
  
  const loadUser = computed((userData: User) => user.value = userData);

  // const getLogedUser = () => user;

  return {user, loadUser}
})
