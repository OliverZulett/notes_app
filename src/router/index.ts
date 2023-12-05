import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import NotesView from '../views/NotesView.vue'
import NewNoteView from '@/views/NewNoteView.vue'
import NoteView from '@/views/NoteView.vue'
import NotesView from '@/views/NotesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: NotesView
    },
    {
      path: '/new-note',
      name: 'newNote',
      component: NewNoteView
    },
    {
      path: '/note',
      name: 'note',
      component: NoteView
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
})

export default router
