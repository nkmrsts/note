import { InputBase, ListItem, makeStyles, Theme } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'

type Props = { searchState: [string, Dispatch<SetStateAction<string>>] }

const ListSearch: FunctionComponent<Props> = ({
  searchState: [search, setSearch]
}) => {
  const classes = useStyles()

  return (
    <ListItem divider className={classes.listItem}>
      <div className={classes.search}>
        <InputBase
          classes={{
            input: classes.inputInput,
            root: classes.inputRoot
          }}
          inputProps={{ 'aria-label': 'Search' }}
          onChange={e => setSearch(e.target.value)}
          placeholder={'検索'}
          value={search}
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
