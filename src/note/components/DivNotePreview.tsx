import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Value } from 'slate'
import { Note } from '../../shared/firestore/types/note'
import MarkdownPreview from '../../shared/markdown/MarkdownPreview'

type Props = {
  note: Note
  value: Value
}

const DivNotePreview: FunctionComponent<Props> = ({ note, value }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MarkdownPreview value={Value.fromJSON(value)} />
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing, typography }) => {
  return {
    root: {
      fontFamily: typography.fontFamily,
      fontSize: '1.1rem',
      height: '100%',
      padding: spacing(2),
      width: '100%',
      wordBreak: 'break-word'
    }
  }
})

export default DivNotePreview
