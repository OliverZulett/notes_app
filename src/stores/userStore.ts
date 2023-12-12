import { defineStore } from 'pinia'
// import { computed, ref } from 'vue'

export type User = {
  username: string | undefined
  email: string | undefined
  userId: string | undefined
}

export const useUserStore = defineStore('user', {
  state: () =>
    <User>{
      userId: undefined,
      username: undefined,
      email: undefined
    },
  getters: {
    getLoggedUSer: (state) => state
  },
  actions: {
    loadUser(user: User) {
      this.userId = user.userId
      this.username = user.username
      this.email = user.email
    }
  }
})
