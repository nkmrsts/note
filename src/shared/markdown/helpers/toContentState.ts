import { convertToRaw, EditorState } from 'draft-js'

export const toContentState = (editorState: EditorState) => {
  return convertToRaw(editorState.getCurrentContent())
}
