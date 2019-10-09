import { makeStyles, Theme, useTheme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Editor } from '../markdown/enums/editor'

type Props = {
  editable: boolean
  preview: Editor
}

const DivColumnNote: FunctionComponent<Props> = ({
  children,
  editable,
  preview
}) => {
  const classes = useStyles()

  const {
    breakpoints: {
      values: { md, sm }
    }
  } = useTheme<Theme>()

  const gridTemplateColumns = preview === Editor.Both ? '1fr 1fr' : '1fr'

  const maxWidth = preview === Editor.Both ? md : sm

  return (
    <div
      className={classes.root}
      style={{
        gridTemplateColumns,
        maxWidth: editable ? maxWidth : sm
      }}
    >
      {children}
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoRows: 'min-content auto',
      gridGap: spacing(2),
      margin: '0 auto',
      maxWidth: breakpoints.values.sm,
      width: '100%'
    }
  }
})
export default DivColumnNote
