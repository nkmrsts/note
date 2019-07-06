import { Divider, Drawer, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import ListSearch from '../../note/components/ListSearch'
import DrawerHeader from './DrawerHeader'

type Props = {
  isMine: boolean
  noteId: string
  setIsMine: (isMine: boolean) => void
}

const DrawerDefault: FunctionComponent<Props> = ({
  isMine,
  setIsMine,
  children,
  noteId
}) => {
  const classes = useStyles()

  return (
    <Drawer
      classes={{ paper: classes.paper }}
      className={classes.root}
      open={true}
      variant={'permanent'}
    >
      <DrawerHeader isMine={isMine} setIsMine={setIsMine} noteId={noteId} />
      <Divider />
      <ListSearch />
      {children}
    </Drawer>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    paper: {
      position: 'fixed',
      width: spacing(40),
      boxShadow: '0px 9px 18px rgba(0, 0, 0, 0.18)'
    },
    root: { width: spacing(40) }
  }
})

export default DrawerDefault
