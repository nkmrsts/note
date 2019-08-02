import { List, ListItem, ListItemText } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import DrawerDefault from '../shared/components/DrawerDefault'
import ListItemHeader from './components/ListItemHeader'

type Props = RouteComponentProps

const RouteAccountSide: FunctionComponent<Props> = ({ history }) => {
  return (
    <DrawerDefault>
      <List>
        <ListItemHeader />
        <ListItem button>
          <ListItemText
            onClick={() => history.push('/account/username')}
            primary={'名前の変更'}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => history.push('/account/usericon')}
            primary={'アイコンの変更'}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => history.push('/')}
            primary={'ホームに戻る'}
          />
        </ListItem>
      </List>
    </DrawerDefault>
  )
}

export default withRouter(RouteAccountSide)
