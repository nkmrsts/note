import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import React, {
  Dispatch,
  Fragment,
  FunctionComponent,
  ReactNode,
  SetStateAction
} from 'react'

type Props = {
  anchorElState: [Element | null, Dispatch<SetStateAction<Element | null>>]
  children: ReactNode
}

const IconButtonMenu: FunctionComponent<Props> = ({
  anchorElState: [anchorEl, setAnchorEl],
  children
}) => {
  const open = Boolean(anchorEl)

  return (
    <Fragment>
      <IconButton onClick={event => setAnchorEl(event.currentTarget)}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      {children}
    </Fragment>
  )
}

export default IconButtonMenu
