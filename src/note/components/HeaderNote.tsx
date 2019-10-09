import {
  makeStyles,
  Slide,
  Theme,
  Typography,
  useScrollTrigger
} from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import IconButtonMenu from '../../components/IconButtonMenu'
import MenuSimple from '../../components/MenuSimple'

type Props = { title: string }

const HeaderNote: FunctionComponent<Props> = ({ title }) => {
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
      height: spacing(10)
    }
  }
})

export default HeaderNote
