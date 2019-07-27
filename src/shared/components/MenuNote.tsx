import { Menu, MenuItem } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { signIn } from '../firebase/signIn'
import { signOut } from '../firebase/signOut'
import { useAuthUser } from '../firebase/useAuthUser'

type Props = RouteComponentProps & {
  anchorElState: [Element | null, Dispatch<SetStateAction<Element | null>>]
  isMineState: [boolean, Dispatch<SetStateAction<boolean>>]
}

const MenuNote: FunctionComponent<Props> = ({
  history,
  anchorElState: [anchorEl, setAnchorEl],
  isMineState: [isMine, setIsMine]
}) => {
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

export default withRouter(MenuNote)
