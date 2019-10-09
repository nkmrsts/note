import { Hidden, makeStyles, Theme } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'
import DivColumnNote from '../components/DivColumnNote'
import FragmentHead from '../components/FragmentHead'
import HeaderSimple from '../components/HeaderSimple'
import ToolbarNote from '../components/ToolbarNote'
import { Editor } from '../markdown/enums/editor'
import DivTerm from './components/DivTerm'

const RouteTerm: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <FragmentHead title={'利用規約'} />
      <Hidden smUp>
        <HeaderSimple title={'利用規約'} />
      </Hidden>
      <main className={classes.root}>
        <Hidden xsDown>
          <ToolbarNote />
        </Hidden>
        <DivColumnNote editable={false} preview={Editor.Preview}>
          <DivTerm />
        </DivColumnNote>
      </main>
    </Fragment>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      paddingBottom: spacing(4),
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    }
  }
})

export default RouteTerm
