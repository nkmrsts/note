import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import ButtonMenu from './ButtonMenu'
import ButtonNoteFilter from './ButtonNoteFilter'

type Props = RouteComponentProps & {
  noteId: string
  isMine: boolean
  setIsMine: (isMine: boolean) => void
}

const DrawerHeader: FunctionComponent<Props> = ({
  noteId,
  isMine,
  setIsMine
}) => {
  const classes = useStyles()

  return (
    <ul className={classes.root}>
      <li>
        <ButtonNoteFilter
          isMine={isMine}
          setIsMine={setIsMine}
          noteId={noteId}
        />
      </li>
      <li>
        <ButtonMenu />
      </li>
    </ul>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoColumns: 'max-content',
      gridAutoFlow: 'column',
      gridGap: spacing(2),
      justifyContent: 'space-between',
      padding: spacing(1)
    }
  }
})

export default withRouter(DrawerHeader)
