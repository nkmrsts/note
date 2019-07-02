import {
  Button,
  makeStyles,
  MenuItem,
  Select,
  Theme,
  Toolbar
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import DoneIcon from '@material-ui/icons/Done'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import React, { FunctionComponent, useState } from 'react'

const selectItems = [
  {
    label: '公開',
    value: 'public'
  },
  {
    label: '非公開',
    value: 'private'
  }
]
type Props = {
  previewHide?: boolean | null
  setPreviewHide: (previewHide: boolean) => void
  onUpdateNote?: () => void
  isMine?: boolean | null
}

const DivNoteToolbar: FunctionComponent<Props> = ({
  previewHide,
  setPreviewHide,
  onUpdateNote,
  isMine
}) => {
  const classes = useStyles()

  const [value, setValue] = useState(selectItems[0].value)

  const togglePreviewHide = () => {
    setPreviewHide(!previewHide)
  }

  return (
    <div>
      <Toolbar className={classes.root}>
        <div className={classes.toolbarItem}>
          <Button
            onClick={togglePreviewHide}
            color="inherit"
            className={classes.button}
          >
            {previewHide ? (
              <React.Fragment>
                <KeyboardArrowLeftIcon className={classes.buttonIcon} />
                Preview
              </React.Fragment>
            ) : (
              <React.Fragment>
                <EditIcon className={classes.buttonIcon} />
                Edit
              </React.Fragment>
            )}
          </Button>
        </div>
        {isMine && (
          <div className={classes.toolbarItem}>
            <Button
              onClick={onUpdateNote}
              color="inherit"
              className={classes.button}
            >
              <DoneIcon className={classes.buttonIcon} />
              Update
            </Button>
          </div>
        )}
        <div className={classes.toolbarItem}>
          <Select
            value={value}
            onChange={event => setValue(event.target.value as string)}
          >
            {selectItems.map(item => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </Toolbar>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      padding: 0,
      minHeight: 'auto'
    },
    toolbarItem: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      borderRight: '1px solid rgba(0,0,0,0.12)',
      '&:first-child': {
        paddingLeft: spacing(0)
      }
    },
    button: {
      fontSize: '16px',
      fontWeight: 'bold',
      padding: 0,
      color: '#727272',
      borderRadius: 0
    },
    buttonIcon: {
      paddingRight: spacing(1)
    }
  }
})

export default DivNoteToolbar
