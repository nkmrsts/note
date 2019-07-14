import CodeIcon from '@material-ui/icons/Code'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Editor } from '../../shared/enums/editor'

type Props = { editorState: [Editor, Dispatch<SetStateAction<Editor>>] }

const ButtonGroupPanel: FunctionComponent<Props> = ({
  editorState: [preview, setPreview]
}) => {
  return (
    <ToggleButtonGroup exclusive value={preview}>
      <ToggleButton
        onClick={() => {
          if (preview === Editor.Both) {
            setPreview(Editor.Preview)
          }
          if (preview === Editor.Preview) {
            setPreview(Editor.Both)
          }
        }}
        value={
          preview === Editor.Both || preview === Editor.Input
            ? preview
            : Editor.Both
        }
      >
        <CodeIcon />
      </ToggleButton>
      <ToggleButton
        onClick={() => {
          if (preview === Editor.Both) {
            setPreview(Editor.Input)
          }
          if (preview === Editor.Input) {
            setPreview(Editor.Both)
          }
        }}
        value={
          preview === Editor.Both || preview === Editor.Preview
            ? preview
            : Editor.Both
        }
      >
        <VisibilityIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ButtonGroupPanel
