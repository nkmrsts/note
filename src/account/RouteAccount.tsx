import { Hidden, Typography } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'
import DivCenter from '../shared/components/DivCenter'
import DivProgress from '../shared/components/DivProgress'
import FragmentHead from '../shared/components/FragmentHead'
import HeaderSimple from '../shared/components/HeaderSimple'
import { useAuthUser } from '../shared/firebase/useAuthUser'
import DivHello from './components/DivHello'
import ListRoutes from './components/ListRoutes'

const RouteAccount: FunctionComponent = () => {
  const [authUser, loading] = useAuthUser()

  if (loading) {
    return (
      <Fragment>
        <FragmentHead title={'読み込み中..'} />
        <DivCenter>
          <DivProgress />
        </DivCenter>
      </Fragment>
    )
  }

  if (!authUser) {
    return (
      <Fragment>
        <FragmentHead title={'エラー'} />
        <DivCenter>
          <Typography>{'エラーが発生しました。'}</Typography>
        </DivCenter>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <FragmentHead title={'アカウント'} />
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
