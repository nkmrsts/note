import { ListItem, InputBase, makeStyles, Theme } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React, { FunctionComponent, useState } from 'react'

const ListSearch: FunctionComponent = () => {
  const classes = useStyles()
  const [, setText] = useState('')

  return (
    <ListItem divider className={classes.listItem}>
      <div className={classes.search}>
        <InputBase
          placeholder="検索"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'Search' }}
          onChange={e => setText(e.target.value)}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div>
    </ListItem>
  )
}

const useStyles = makeStyles<Theme>(({ shape, spacing }) => {
  return {
    listItem: {
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
      paddingLeft: spacing(1),
      paddingRight: spacing(1)
    },
    search: {
      position: 'relative',
      borderRadius: shape.borderRadius,
      width: '100%',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
      },
      padding: '0 8px'
    },
    searchIcon: {
      color: 'rgba(0, 0, 0, 0.54)',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      top: 0,
      bottom: 0,
      left: 0,
      right: '6px'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      fontSize: '14px'
    }
  }
})
export default ListSearch
