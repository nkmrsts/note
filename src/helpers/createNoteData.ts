import { Note } from '../types/note'
import { createId } from './createId'

export const createNoteData = (): Note => {
  return {
    id: createId(),
    text: '',
    title: '',
    updatedAt: new Date()
  }
}
