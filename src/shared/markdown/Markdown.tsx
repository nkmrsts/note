import { Editor, EditorState, RichUtils } from 'draft-js'
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
  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  return (
    <Editor
      blockRendererFn={blockRendererFn}
      blockRenderMap={blockRenderMap}
      customStyleMap={customStyleMap}
      editorState={editorState}
      handleKeyCommand={handleKeyCommand}
      onChange={setEditorState}
    />
  )
}

export default Markdown
