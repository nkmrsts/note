import { List, ListItem, ListItemText } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

type Props = RouteComponentProps

const ListRoutes: FunctionComponent<Props> = ({ history }) => {
  return (
    <List>
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
  )
}

export default withRouter(ListRoutes)
