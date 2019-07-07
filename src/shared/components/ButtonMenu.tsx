import { IconButton, Menu, MenuItem } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import React, { Fragment, FunctionComponent } from 'react'
import { signIn } from '../firebase/signIn'
import { signOut } from '../firebase/signOut'
import { useAuthLoading } from '../firebase/useAuthLoading'
import { useAuthUser } from '../firebase/useAuthUser'

const ButtonMenu: FunctionComponent = () => {
  const [authLoading] = useAuthLoading()

  const [authUser] = useAuthUser()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)

  if (authLoading) return null

  const onClose = () => {
    setAnchorEl(null)
  }

  const onRoute = (path: string) => {
    onClose()
  }

  return (
    <Fragment>
      <IconButton onClick={event => setAnchorEl(event.currentTarget as any)}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={onClose}
        TransitionComponent={Fade}
      >
        {authUser && (
          <MenuItem onClick={() => onRoute('/')}>{'ユーザページ'}</MenuItem>
        )}
        {authUser && (
          <MenuItem onClick={() => signOut()}>{'ログアウト'}</MenuItem>
        )}
        {!authUser && (
          <MenuItem onClick={() => signIn()}>{'ログイン'}</MenuItem>
        )}
        <MenuItem onClick={onClose}>{'利用規約'}</MenuItem>
      </Menu>
    </Fragment>
  )
}

export default ButtonMenu
