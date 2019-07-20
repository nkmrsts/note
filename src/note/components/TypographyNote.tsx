import { makeStyles, Theme, Typography } from '@material-ui/core'
import { convertToRaw, EditorState } from 'draft-js'
import React, { FunctionComponent } from 'react'
import { Note } from '../../shared/firestore/types/note'
import { createMarkup } from '../../shared/helpers/createMarkup'

type Props = {
  editorState?: EditorState
  note: Note
}

const TypographyNote: FunctionComponent<Props> = ({ editorState, note }) => {
  const classes = useStyles()

  const contentState = editorState
    ? convertToRaw(editorState.getCurrentContent())
    : note.contentState

  return (
    <Typography
      component={'div'}
      className={classes.root}
      dangerouslySetInnerHTML={createMarkup(contentState)}
    />
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      width: '100%',
      height: '100%',
      fontSize: '1rem',
      wordBreak: 'break-word',
      '& *:first-of-type': { marginTop: '0' },
      padding: spacing(2)
    }
  }
})

export default TypographyNote
