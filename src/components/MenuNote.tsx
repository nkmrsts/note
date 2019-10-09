import { Menu, MenuItem } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { useHistory } from 'react-router'
import { signIn } from '../auth/signIn'
import { signOut } from '../auth/signOut'
import { useAuthUser } from '../auth/useAuthUser'

type Props = {
  anchorElState: [Element | null, Dispatch<SetStateAction<Element | null>>]
  isMineState: [boolean, Dispatch<SetStateAction<boolean>>]
}

const MenuNote: FunctionComponent<Props> = ({
  anchorElState: [anchorEl, setAnchorEl],
  isMineState: [isMine, setIsMine]
}) => {
  const history = useHistory()

  const [authUser, authLoading] = useAuthUser()

  const open = Boolean(anchorEl)

  if (authLoading) return null

  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={() => setAnchorEl(null)}
      TransitionComponent={Fade}
      onClick={() => setAnchorEl(null)}
    >
      {authUser && isMine && (
        <MenuItem onClick={() => setIsMine(false)}>{'全てのノート'}</MenuItem>
      )}
      {authUser && !isMine && (
        <MenuItem onClick={() => setIsMine(true)}>{'自分のノート'}</MenuItem>
      )}
      {authUser && (
        <MenuItem onClick={() => history.push('/account')}>
          {'アカウント'}
        </MenuItem>
      )}
      {authUser && (
        <MenuItem onClick={() => signOut()}>{'ログアウト'}</MenuItem>
      )}
      {!authUser && <MenuItem onClick={() => signIn()}>{'ログイン'}</MenuItem>}
      <MenuItem onClick={() => history.push('/term')}>{'利用規約'}</MenuItem>
    </Menu>
  )
}

export default MenuNote
