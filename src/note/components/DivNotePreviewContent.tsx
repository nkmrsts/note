import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { createMarkup } from '../../shared/helpers/createMarkup'

type Props = {
  text: string
}

const DivNotePreviewContent: FunctionComponent<Props> = ({ text }) => {
  const classes = useStyles()
  return (
    <div
      className={classes.root}
      dangerouslySetInnerHTML={createMarkup(text)}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {
      width: '100%',
      height: '100%',
      fontSize: '1rem',
      wordBreak: 'break-word',
      '& *:first-of-type': {
        marginTop: '0'
      }
    }
  }
})

export default DivNotePreviewContent
