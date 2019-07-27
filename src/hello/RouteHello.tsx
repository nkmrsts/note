import { Hidden } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'
import HeaderSimple from '../shared/components/HeaderSimple'
import DivHello from './components/DivHello'
import ListNotes from './components/ListNotes'

const RouteHello: FunctionComponent = () => {
  return (
    <Fragment>
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
