import { IconButton } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import { updateNote } from 'firestore/updateNote'
import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
} from 'react'
import { Node } from 'slate'

type Props = {
  disabled: boolean
  editableState: [boolean, Dispatch<SetStateAction<boolean>>]
  progressState: [boolean, Dispatch<SetStateAction<boolean>>]
  noteId: string
  value: Node[]
}

const IconButtonUpdate: FunctionComponent<Props> = ({
  disabled,
  editableState: [editable, setEditable],
  progressState: [progress, setProgress],
  noteId,
  value,
}) => {
  // update note
  useEffect(() => {
    if (!progress) return
    setEditable(false)
    const subscription = updateNote({ noteId, value }).subscribe(
      () => {
        setProgress(false)
      },
      (err) => {
        console.error(err)
      }
    )
    return () => subscription.unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress])

  if (editable) {
    return (
      <IconButton disabled={disabled} onClick={() => setProgress(true)}>
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
