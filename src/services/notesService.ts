import type { Note } from './types'
import { http } from './http'

const NOTE_RESOURCE = 'notes'

export async function getNotes(): Promise<Array<Note>> {
  const response = await http.get(`${NOTE_RESOURCE}`)
  return response.data
}

export const getNotesByUserId = (userId: string, jwtToken: string) =>
  http
    .get(`${NOTE_RESOURCE}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
    .then((resp) => resp.data.data)

export const createNote = (note: Note, jwtToken: string) =>
  http
    .post(`${NOTE_RESOURCE}`, JSON.stringify(note), {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
    .then((resp) => resp.data)
