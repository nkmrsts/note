import { Menu, MenuItem } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { useHistory } from 'react-router-dom'
import { signIn } from '../auth/signIn'
import { signOut } from '../auth/signOut'
import { useAuthUser } from '../auth/useAuthUser'

type Props = {
  anchorElState: [Element | null, Dispatch<SetStateAction<Element | null>>]
}

const MenuSimple: FunctionComponent<Props> = ({
  anchorElState: [anchorEl, setAnchorEl]
}) => {
  const history = useHistory()

  const [authUser] = useAuthUser()

  const open = Boolean(anchorEl)

  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={() => setAnchorEl(null)}
      TransitionComponent={Fade}
      onClick={() => setAnchorEl(null)}
    >
      <MenuItem onClick={() => history.push('/')}>{'ホーム'}</MenuItem>
      {authUser && (
        <MenuItem onClick={() => history.push('/account')}>
          {'ユーザページ'}
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

export default MenuSimple
