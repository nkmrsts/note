import { InputBase, ListItem, makeStyles, Theme } from '@material-ui/core'
import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState
} from 'react'
import IconButtonMenu from './IconButtonMenu'
import MenuNote from './MenuNote'

type Props = {
  isMineState: [boolean, Dispatch<SetStateAction<boolean>>]
  searchState: [string, Dispatch<SetStateAction<string>>]
}

const ListItemHeader: FunctionComponent<Props> = ({
  isMineState: [isMine, setIsMine],
  searchState: [search, setSearch]
}) => {
  const anchorElState = useState<Element | null>(null)

  const classes = useStyles()

  return (
    <ListItem className={classes.root}>
      <IconButtonMenu anchorElState={anchorElState}>
        <MenuNote
          anchorElState={anchorElState}
          isMineState={[isMine, setIsMine]}
        />
      </IconButtonMenu>
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
    root: {
      display: 'grid',
      gridGap: spacing(2),
      gridTemplateColumns: 'auto 1fr',
      padding: spacing(2)
    }
  }
})
export default ListItemHeader
