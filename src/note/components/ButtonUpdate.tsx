import { Button, makeStyles, Theme } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import React, { FunctionComponent } from 'react'

type Props = {
  disabled: boolean
  onUpdate: () => void
}

const ButtonUpdate: FunctionComponent<Props> = ({ disabled, onUpdate }) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.button}
      color={'inherit'}
      disabled={disabled}
      onClick={onUpdate}
    >
      <DoneIcon className={classes.buttonIcon} />
      {'Update'}
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

export default ButtonUpdate
