import type { Note } from './types'
import { http } from './http'

const NOTE_RESOURCE = 'notes'

export async function getNotes(): Promise<Array<Note>> {
  const response = await http.get(`${NOTE_RESOURCE}`)
  return response.data
}

export const getNotesByUserId = (userId: string) =>
  http.get(`${NOTE_RESOURCE}/${userId}`).then((resp) => resp.data)

// export async function getItemById (itemId: string): Promise<Note> {
//   const response = await http.get(`/${itemId}`)
//   return response.data
// }

// export async function createItem (item: Item): Promise<Item> {
//   const response = await http.post('/', JSON.stringify(item))
//   return response.data
// }
