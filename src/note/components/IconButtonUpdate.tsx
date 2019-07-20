import { IconButton } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'

type Props = {
  disabled: boolean
  editableState: [boolean, Dispatch<SetStateAction<boolean>>]
  onUpdate: () => void
}

const IconButtonUpdate: FunctionComponent<Props> = ({
  disabled,
  editableState: [editable, setEditable],
  onUpdate
}) => {
  if (editable) {
    return (
      <IconButton disabled={disabled} onClick={onUpdate}>
        <DoneIcon />
      </IconButton>
    )
  }

  return (
    <IconButton disabled={disabled} onClick={() => setEditable(true)}>
      <EditIcon />
    </IconButton>
  )
}

export default IconButtonUpdate
