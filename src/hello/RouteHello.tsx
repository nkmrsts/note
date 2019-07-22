import { Hidden } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'
import DivHeaderHello from './components/DivHeaderHello'
import DivHello from './components/DivHello'
import ListNotes from './components/ListNotes'

const RouteHello: FunctionComponent = () => {
  return (
    <Fragment>
      <Hidden xsDown>
        <DivHello />
      </Hidden>
      <Hidden smUp>
        <DivHeaderHello />
        <ListNotes />
      </Hidden>
    </Fragment>
  )
}

export default RouteHello
