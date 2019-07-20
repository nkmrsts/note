import { convertFromRaw, EditorState, RawDraftContentState } from 'draft-js'
import { decorator } from './decorator'

export const toEditorState = (rawDraftContentState: RawDraftContentState) => {
  return EditorState.createWithContent(
    convertFromRaw(rawDraftContentState),
    decorator
  )
}
