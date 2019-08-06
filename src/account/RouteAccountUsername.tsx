import {
  Button,
  Hidden,
  makeStyles,
  TextField,
  Theme,
  Typography
} from '@material-ui/core'
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { combineLatest } from 'rxjs'
import DivCenter from '../shared/components/DivCenter'
import DivProgress from '../shared/components/DivProgress'
import FragmentHead from '../shared/components/FragmentHead'
import HeaderSimple from '../shared/components/HeaderSimple'
import { updateProfile } from '../shared/firebase/updateProfile'
import { useAuthUser } from '../shared/firebase/useAuthUser'
import { updateUser } from '../shared/functions/updateUser'

const RouteAccountUsername: FunctionComponent = () => {
  const classes = useStyles()

  const [authUser, loading] = useAuthUser()

  const [displayName, setDisplayName] = useState('')

  const [inProgress, setInProgress] = useState(false)

  useEffect(() => {
    if (!inProgress) return
    const subscription = combineLatest([
      updateProfile({ displayName }),
      updateUser()({ displayName })
    ]).subscribe(() => {
      setInProgress(false)
    })
    return () => subscription.unsubscribe()
  }, [displayName, inProgress])

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
      <FragmentHead title={'名前の変更'} />
      <Hidden smUp>
        <HeaderSimple title={'名前の変更'} />
      </Hidden>
      <main className={classes.root}>
        <Hidden xsDown>
          <Typography component={'h1'} variant={'h5'}>
            {'名前を変更する'}
          </Typography>
        </Hidden>
        <TextField
          disabled={inProgress}
          onChange={event => setDisplayName(event.target.value)}
          placeholder={authUser.displayName || ''}
          value={displayName}
          variant={'outlined'}
        />
        <div>
          <Button
            disabled={inProgress}
            onClick={() => setInProgress(true)}
            variant={'outlined'}
          >
            {'変更する'}
          </Button>
        </div>
      </main>
    </Fragment>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridGap: spacing(2),
      padding: spacing(2)
    }
  }
})

export default RouteAccountUsername
