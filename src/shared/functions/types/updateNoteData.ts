import { RawDraftContentState } from 'draft-js'

export type UpdateNoteData = {
  isPublic?: boolean
  noteId: string
  contentState?: RawDraftContentState
}
