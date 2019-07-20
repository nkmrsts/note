import { IconButton, Menu, MenuItem } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import React, {
  Dispatch,
  Fragment,
  FunctionComponent,
  SetStateAction
} from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { signIn } from '../firebase/signIn'
import { signOut } from '../firebase/signOut'
import { useAuthLoading } from '../firebase/useAuthLoading'
import { useAuthUser } from '../firebase/useAuthUser'

type Props = RouteComponentProps & {
  isMineState: [boolean, Dispatch<SetStateAction<boolean>>]
}

const ButtonMenu: FunctionComponent<Props> = ({
  history,
  isMineState: [isMine, setIsMine]
}) => {
  const [authLoading] = useAuthLoading()

  const [authUser] = useAuthUser()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)

  if (authLoading) return null

  return (
    <Fragment>
      <IconButton onClick={event => setAnchorEl(event.currentTarget as any)}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
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
            {'ユーザページ'}
          </MenuItem>
        )}
        {authUser && (
          <MenuItem onClick={() => signOut()}>{'ログアウト'}</MenuItem>
        )}
        {!authUser && (
          <MenuItem onClick={() => signIn()}>{'ログイン'}</MenuItem>
        )}
        <MenuItem onClick={() => history.push('/term')}>{'利用規約'}</MenuItem>
      </Menu>
    </Fragment>
  )
}

export default withRouter(ButtonMenu)
