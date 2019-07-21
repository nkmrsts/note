import { Editor, EditorState } from 'draft-js'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { blockRendererFn } from './helpers/blockRendererFn'
import { blockRenderMap } from './helpers/blockRenderMap'
import { customStyleMap } from './helpers/customStyleMap'

type Props = {
  editorState: EditorState
  setEditorState: Dispatch<SetStateAction<EditorState>>
}

const Markdown: FunctionComponent<Props> = ({
  editorState,
  setEditorState
}) => {
  return (
    <Editor
      blockRendererFn={blockRendererFn}
      blockRenderMap={blockRenderMap}
      customStyleMap={customStyleMap}
      editorState={editorState}
      onChange={setEditorState}
    />
  )
}

export default Markdown
