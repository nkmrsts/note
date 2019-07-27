import { Hidden, Typography } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'
import DivCenter from '../shared/components/DivCenter'
import DivProgress from '../shared/components/DivProgress'
import HeaderSimple from '../shared/components/HeaderSimple'
import { useAuthUser } from '../shared/firebase/useAuthUser'
import DivHello from './components/DivHello'
import ListRoutes from './components/ListRoutes'

const RouteAccount: FunctionComponent = () => {
  const [authUser, loading] = useAuthUser()

  if (loading) {
    return (
      <DivCenter>
        <DivProgress />
      </DivCenter>
    )
  }

  if (!authUser) {
    return (
      <DivCenter>
        <Typography>{'エラーが発生しました。'}</Typography>
      </DivCenter>
    )
  }

  return (
    <Fragment>
      <Hidden xsDown>
        <DivHello user={authUser} />
      </Hidden>
      <Hidden smUp>
        <HeaderSimple title={'アカウント'} />
        <ListRoutes />
      </Hidden>
    </Fragment>
  )
}

export default RouteAccount
