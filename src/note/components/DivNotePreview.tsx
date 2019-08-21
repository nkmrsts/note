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

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      width: '100%',
      height: '100%',
      wordBreak: 'break-word',
      '& *:first-of-type': { marginTop: '0' },
      padding: spacing(2)
    }
  }
})

export default DivNotePreview
