import { makeStyles, Theme, Typography, useTheme } from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public'
import VpnLockIcon from '@material-ui/icons/VpnLock'
import React, { FunctionComponent } from 'react'
import { Note } from '../../shared/firestore/types/note'

type Props = { note: Note }

const DivNoteStatus: FunctionComponent<Props> = ({ note }) => {
  const classes = useStyles()

  const { palette } = useTheme<Theme>()

  return (
    <div className={classes.root}>
      {note.isPublic ? (
        <PublicIcon style={{ color: palette.primary.main }} />
      ) : (
        <VpnLockIcon />
      )}
      <Typography className={classes.text} component={'span'}>
        {note.isPublic ? '公開' : '非公開'}
      </Typography>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ palette, spacing }) => {
  return {
    avatar: { height: 20, width: 20 },
    root: {
      alignItems: 'center',
      display: 'grid',
      gridAutoColumns: 'max-content',
      gridAutoFlow: 'column',
      gridGap: spacing(1)
    },
    text: { fontSize: 12, color: palette.text.primary }
  }
})

export default DivNoteStatus
