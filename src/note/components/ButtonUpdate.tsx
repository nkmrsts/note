import { Button, makeStyles, Theme } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'

type Props = {
  disabled: boolean
  editableState: [boolean, Dispatch<SetStateAction<boolean>>]
  onUpdate: () => void
}

const ButtonUpdate: FunctionComponent<Props> = ({
  disabled,
  editableState: [editable, setEditable],
  onUpdate
}) => {
  const classes = useStyles()

  console.log('editable', editable)

  if (editable) {
    return (
      <Button
        className={classes.button}
        color={'inherit'}
        disabled={disabled}
        onClick={onUpdate}
      >
        <SaveIcon className={classes.buttonIcon} />
        {'保存'}
      </Button>
    )
  }

  return (
    <Button
      className={classes.button}
      color={'inherit'}
      disabled={disabled}
      onClick={() => setEditable(true)}
    >
      <EditIcon className={classes.buttonIcon} />
      {'編集'}
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
