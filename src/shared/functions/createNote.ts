import { app } from 'firebase/app'
import { httpsCallable } from 'rxfire/functions'
import { ASIA_NORTHEAST1 } from '../constants/region'
import { CreateNoteData } from './types/createNoteData'
import { CreateNoteResult } from './types/createNoteResult'

export const createNote = () => {
  return httpsCallable<CreateNoteData, CreateNoteResult>(
    app().functions(ASIA_NORTHEAST1),
    'createNote'
  )
}
