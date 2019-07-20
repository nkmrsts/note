import { InputBase, ListItem, makeStyles, Theme } from '@material-ui/core'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'

type Props = { searchState: [string, Dispatch<SetStateAction<string>>] }

const ListItemSearch: FunctionComponent<Props> = ({
  searchState: [search, setSearch]
}) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.listItem}>
      <div className={classes.search}>
        <InputBase
          fullWidth
          inputProps={{ 'aria-label': 'Search' }}
          onChange={e => setSearch(e.target.value)}
          placeholder={'ノートを検索する'}
          value={search}
        />
      </div>
    </ListItem>
  )
}

const useStyles = makeStyles<Theme>(({ palette, spacing }) => {
  return {
    listItem: { padding: 0 },
    search: {
      padding: spacing(2),
      position: 'relative',
      width: '100%',
      '&:hover': { backgroundColor: palette.divider }
    }
  }
})
export default ListItemSearch
