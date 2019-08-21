import { IconButton, Theme, useTheme } from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public'
import VpnLockIcon from '@material-ui/icons/VpnLock'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Note } from '../../shared/firestore/types/note'
import { updateNote } from '../../shared/firestore/updateNoteStatus'

type Props = { note: Note }

const IconButtonStatus: FunctionComponent<Props> = ({ note }) => {
  const [inProgress, setInProgress] = useState(false)

  const { palette } = useTheme<Theme>()

  useEffect(() => {
    if (!inProgress) return
    const subscription = updateNote({
      noteId: note.id,
      isPublic: !note.isPublic
    }).subscribe(
      () => {
        setInProgress(false)
      },
      err => {
        console.error(err)
        setInProgress(false)
      }
    )
    return () => subscription.unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inProgress])

  if (note.isPublic) {
    return (
      <IconButton disabled={inProgress} onClick={() => setInProgress(true)}>
        <PublicIcon style={{ color: palette.primary.main }} />
      </IconButton>
    )
  }

  return (
    <IconButton disabled={inProgress} onClick={() => setInProgress(true)}>
      <VpnLockIcon />
    </IconButton>
  )
}

export default IconButtonStatus
