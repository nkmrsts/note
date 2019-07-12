import CodeIcon from '@material-ui/icons/Code'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'

type Props = {
  previewState: [0 | 1 | 2, Dispatch<SetStateAction<0 | 1 | 2>>]
}

const ButtonGroupPanel: FunctionComponent<Props> = ({
  previewState: [preview, setPreview]
}) => {
  return (
    <ToggleButtonGroup exclusive value={preview}>
      <ToggleButton
        onClick={() => {
          if (preview === 1) {
            setPreview(2)
          }
          if (preview === 2) {
            setPreview(1)
          }
        }}
        value={preview === 1 ? 1 : preview === 0 ? 0 : 3}
      >
        <CodeIcon />
      </ToggleButton>
      <ToggleButton
        onClick={() => {
          if (preview === 0) {
            setPreview(1)
          }
          if (preview === 1) {
            setPreview(0)
          }
        }}
        value={preview === 1 ? 1 : preview === 2 ? 2 : 3}
      >
        <VisibilityIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ButtonGroupPanel
