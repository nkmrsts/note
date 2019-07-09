import { Button, makeStyles, Theme } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import React, { FunctionComponent } from 'react'

type Props = {
  disabled: boolean
  preview: boolean | null
  setPreview: (preview: boolean) => void
}

const ButtonPreview: FunctionComponent<Props> = ({
  disabled,
  preview,
  setPreview
}) => {
  const classes = useStyles()

  return (
    <Button
      disabled={disabled}
      className={classes.button}
      color={'inherit'}
      onClick={() => setPreview(!preview)}
    >
      {preview ? (
        <EditIcon className={classes.buttonIcon} />
      ) : (
        <KeyboardArrowLeftIcon className={classes.buttonIcon} />
      )}
      {preview ? 'Edit' : 'Preview'}
    </Button>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    button: {
      borderRadius: 0,
      color: '#727272',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: 0
    },
    buttonIcon: { paddingRight: spacing(1) }
  }
})

export default ButtonPreview
