import {
  Button,
  Hidden,
  makeStyles,
  Theme,
  Typography,
  Avatar
} from '@material-ui/core'
import ControlPoint from '@material-ui/icons/ControlPoint'
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { from, combineLatest } from 'rxjs'
import DivCenter from '../shared/components/DivCenter'
import DivProgress from '../shared/components/DivProgress'
import FragmentHead from '../shared/components/FragmentHead'
import HeaderSimple from '../shared/components/HeaderSimple'
import { updateProfile } from '../shared/firebase/updateProfile'
import { useAuthUser } from '../shared/firebase/useAuthUser'
import { uploadImage } from '../shared/firebase/uploadImage'
import { updateUser } from '../shared/functions/updateUser'

const RouteAccountUsername: FunctionComponent = () => {
  const classes = useStyles()

  const [authUser, loading] = useAuthUser()

  const [photoURL, setPhotoURL] = useState('')

  const [file, setFile] = useState()

  const [inProgress, setInProgress] = useState(false)

  useEffect(() => {
    if (!file) return
    const url = uploadImage(file)
    const subscription = from(url).subscribe(next => {
      setPhotoURL(next)
    })
    return () => subscription.unsubscribe()
  }, [file])

  useEffect(() => {
    if (!inProgress) return
    const subscription = combineLatest([
      updateProfile({ photoURL }),
      updateUser()({ photoURL })
    ]).subscribe(() => {
      setInProgress(false)
    })
    return () => subscription.unsubscribe()
  }, [photoURL, inProgress])

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
      <FragmentHead title={'アイコンの変更'} />
      <Hidden smUp>
        <HeaderSimple title={'アイコンの変更'} />
      </Hidden>
      <main className={classes.root}>
        <Hidden xsDown>
          <Typography component={'h1'} variant={'h5'}>
            {'アイコンを変更する'}
          </Typography>
        </Hidden>
        <div className={classes.avatarRoot}>
          <input
            accept="image/*"
            className={classes.input}
            id="input-button"
            type="file"
            onChange={event => {
              const files = event.target.files
              if (files) {
                setFile(files[0])
              }
            }}
          />
          <label className={classes.label} htmlFor="input-button">
            <ControlPoint fontSize="large" className={classes.labelIcon} />
            <div className={classes.layer} />
            <Avatar
              className={classes.avatar}
              src={file ? URL.createObjectURL(file) : authUser.photoURL || ''}
            ></Avatar>
          </label>
        </div>
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
    },
    input: {
      display: 'none'
    },
    label: {
      position: 'relative',
      cursor: 'pointer'
    },
    layer: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      margin: 'auto',
      zIndex: 2,
      color: '#fff',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    labelIcon: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      margin: 'auto',
      zIndex: 1,
      color: '#fff'
    },
    avatar: { height: spacing(14), width: spacing(14) },
    avatarRoot: { display: 'grid', justifyContent: 'flex-start' }
  }
})

export default RouteAccountUsername
