import { ContentState, EditorState } from 'draft-js'
import React, { FunctionComponent, useState } from 'react'
import { decorator } from '../../shared/markdown/helpers/decorator'
import Markdown from '../../shared/markdown/Markdown'

type Props = {
  inProgress: boolean
  setText: (text: string) => void
  text: string
}

const InputBaseNoteText: FunctionComponent<Props> = ({
  inProgress,
  setText,
  text
}) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(text), decorator)
  )

  return <Markdown editorState={editorState} setEditorState={setEditorState} />

  /*
  return (
    <div>
      <InputBase
        autoFocus
        disabled={inProgress}
        fullWidth
        multiline
        onChange={e => setText(e.target.value)}
        value={text}
        placeholder={'テキスト'}
      />
    </div>
  )
  */
}
export default InputBaseNoteText
