import { Hidden } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'
import FragmentHead from '../components/FragmentHead'
import HeaderSimple from '../components/HeaderSimple'
import DivHello from './components/DivHello'
import ListNotes from './components/ListNotes'

const RouteHello: FunctionComponent = () => {
  return (
    <Fragment>
      <FragmentHead />
      <Hidden xsDown>
        <DivHello />
      </Hidden>
      <Hidden smUp>
        <HeaderSimple title={'Noat'} />
        <ListNotes />
      </Hidden>
    </Fragment>
  )
}

export default RouteHello
