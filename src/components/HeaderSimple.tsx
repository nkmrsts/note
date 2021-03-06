import {
  makeStyles,
  Slide,
  Theme,
  Typography,
  useScrollTrigger
} from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import IconButtonMenu from './IconButtonMenu'
import MenuSimple from './MenuSimple'

type Props = { title: string }

const HeaderSimple: FunctionComponent<Props> = ({ title }) => {
  const classes = useStyles()

  const anchorElState = useState<Element | null>(null)

  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      <header className={classes.root}>
        <IconButtonMenu anchorElState={anchorElState}>
          <MenuSimple anchorElState={anchorElState} />
        </IconButtonMenu>
        <Typography className={classes.title} component={'h4'} variant={'h5'}>
          {title}
        </Typography>
      </header>
    </Slide>
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
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    }
  }
})

export default HeaderSimple
