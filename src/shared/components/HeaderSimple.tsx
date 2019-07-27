import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import IconButtonMenu from './IconButtonMenu'
import MenuSimple from './MenuSimple'

type Props = { title: string }

const HeaderSimple: FunctionComponent<Props> = ({ title }) => {
  const classes = useStyles()

  const anchorElState = useState<Element | null>(null)

  return (
    <header className={classes.root}>
      <IconButtonMenu anchorElState={anchorElState}>
        <MenuSimple anchorElState={anchorElState} />
      </IconButtonMenu>
      <Typography className={classes.title} component={'h4'} variant={'h5'}>
        {title}
      </Typography>
    </header>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    title: { fontWeight: 'bold' },
    root: {
      alignItems: 'center',
      display: 'grid',
      gridGap: spacing(2),
      gridTemplateColumns: 'auto 1fr',
      height: spacing(10),
      padding: spacing(2)
    }
  }
})

export default HeaderSimple
