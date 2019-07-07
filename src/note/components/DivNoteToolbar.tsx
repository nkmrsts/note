import {
  Button,
  makeStyles,
  MenuItem,
  Select,
  Theme,
  Toolbar
} from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import React, { FunctionComponent, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { useAuthUser } from '../../shared/firebase/useAuthUser'
import { deleteNote } from '../../shared/firestore/deleteNote'
import { Note } from '../../shared/firestore/types/note'

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
type Props = RouteComponentProps & {
  previewHide: boolean | null
  setPreviewHide: (previewHide: boolean) => void
  onUpdateNote: (change: Change) => void
  note: Note
}

type Change = {
  text: string
  title: string
}

const DivNoteToolbar: FunctionComponent<Props> = ({
  history,
  previewHide,
  setPreviewHide,
  onUpdateNote,
  note
}) => {
  const classes = useStyles()

  const [value, setValue] = useState(selectItems[0].value)

  const [authUser] = useAuthUser()

  const isMine = authUser && authUser.uid === note.ownerId

  const togglePreviewHide = () => {
    setPreviewHide(!previewHide)
  }

  return (
    <div>
      <Toolbar className={classes.root}>
        {isMine && (
          <React.Fragment>
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
            <div className={classes.toolbarItem}>
              <Button
                onClick={() => {
                  onUpdateNote({
                    text: note.text,
                    title: note.title
                  })
                }}
                color="inherit"
                className={classes.button}
              >
                <DoneIcon className={classes.buttonIcon} />
                Update
              </Button>
            </div>
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
            <div className={classes.toolbarItem}>
              <Button
                onClick={() => {
                  deleteNote(note.id).subscribe()
                  history.push('/')
                }}
                color="inherit"
                className={classes.button}
              >
                <DeleteIcon />
              </Button>
            </div>
          </React.Fragment>
        )}
      </Toolbar>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      padding: 0,
      minHeight: 'auto',
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
      borderBottom: '1px solid rgba(0,0,0,0.12)'
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

export default withRouter(DivNoteToolbar)
