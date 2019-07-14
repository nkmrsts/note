import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Editor } from '../../shared/enums/editor'

type Props = { preview: Editor }

const DivMarkdownEditor: FunctionComponent<Props> = ({ children, preview }) => {
  const classes = useStyles()

  return (
    <div
      className={classes.root}
      style={{
        gridTemplateColumns: preview === Editor.Both ? '1fr 1fr' : '1fr'
      }}
    >
      {children}
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return { root: { display: 'grid', gridGap: spacing(2) } }
})
export default DivMarkdownEditor
