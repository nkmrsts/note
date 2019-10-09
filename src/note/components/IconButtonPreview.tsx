import { IconButton } from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit'
import VisibilityIcon from '@material-ui/icons/Visibility'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Editor } from '../../markdown/enums/editor'

type Props = { editorState: [Editor, Dispatch<SetStateAction<Editor>>] }

const IconButtonPreview: FunctionComponent<Props> = ({
  editorState: [preview, setPreview]
}) => {
  if (preview === Editor.Preview) {
    return (
      <IconButton onClick={() => setPreview(Editor.Input)}>
        <VisibilityIcon />
      </IconButton>
    )
  }

  if (preview === Editor.Input) {
    return (
      <IconButton onClick={() => setPreview(Editor.Both)}>
        <CodeIcon />
      </IconButton>
    )
  }

  return (
    <IconButton onClick={() => setPreview(Editor.Preview)}>
      <VerticalSplitIcon />
    </IconButton>
  )
}

export default IconButtonPreview
