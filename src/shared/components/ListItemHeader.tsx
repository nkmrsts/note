import { InputBase, ListItem, makeStyles, Theme } from '@material-ui/core'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import ButtonMenu from './ButtonMenu'
import { useAuthUser } from '../firebase/useAuthUser'

type Props = {
  isMineState: [boolean, Dispatch<SetStateAction<boolean>>]
  searchState: [string, Dispatch<SetStateAction<string>>]
}

const ListItemHeader: FunctionComponent<Props> = ({
  isMineState: [isMine, setIsMine],
  searchState: [search, setSearch]
}) => {
  const [, authLoading] = useAuthUser()

  const classes = useStyles()

  if (authLoading) return null

  return (
    <ListItem className={classes.listItem}>
      <ButtonMenu isMineState={[isMine, setIsMine]} />
      {isMine && (
        <InputBase
          fullWidth
          inputProps={{ 'aria-label': 'Search' }}
          onChange={e => setSearch(e.target.value)}
          placeholder={'ノートを検索する'}
          value={search}
        />
      )}
    </ListItem>
  )
}

const useStyles = makeStyles<Theme>(({ palette, spacing }) => {
  return {
    listItem: {
      display: 'grid',
      gridGap: spacing(2),
      gridTemplateColumns: 'auto 1fr',
      padding: spacing(2)
    }
  }
})
export default ListItemHeader
