import { Hidden } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'
import FragmentHead from '../components/FragmentHead'
import DivHello from './components/DivHello'
import HeaderHello from './components/HeaderHello'
import ListNotes from './components/ListNotes'

const RouteHello: FunctionComponent = () => {
  return (
    <Fragment>
      <FragmentHead />
      <Hidden xsDown>
        <DivHello />
      </Hidden>
      <Hidden smUp>
        <HeaderHello />
        <ListNotes />
      </Hidden>
    </Fragment>
  )
}

export default RouteHello
