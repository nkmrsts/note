import { useState } from 'react'
import { Note } from '../types/note'

export const useStateCurrentNoteId = (notes: Note[]) => {
  const _note = notes.length ? notes[0] : null

  return useState<string | null>(_note ? _note.id : null)
}
