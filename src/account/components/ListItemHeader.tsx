import { ListItem, makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import IconButtonMenu from '../../shared/components/IconButtonMenu'
import MenuSimple from '../../shared/components/MenuSimple'

const ListItemHeader: FunctionComponent = () => {
  const anchorElState = useState<Element | null>(null)

  const classes = useStyles()

  return (
    <ListItem className={classes.root}>
      <IconButtonMenu anchorElState={anchorElState}>
        <MenuSimple anchorElState={anchorElState} />
      </IconButtonMenu>
      <Typography className={classes.title}>{'アカウント'}</Typography>
    </ListItem>
  )
}

const useStyles = makeStyles<Theme>(({ palette, spacing }) => {
  return {
    title: { fontWeight: 'bold' },
    root: {
      display: 'grid',
      gridGap: spacing(2),
      gridTemplateColumns: 'auto 1fr',
      padding: spacing(2)
    }
  }
})
export default ListItemHeader
