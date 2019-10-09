import { List, ListItem, ListItemText } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'

const ListRoutes: FunctionComponent = () => {
  const history = useHistory()

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

export default ListRoutes
