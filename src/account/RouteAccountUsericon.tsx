import {
  Avatar,
  Hidden,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core'
import ControlPoint from '@material-ui/icons/ControlPoint'
import React, {
  ChangeEvent,
  Fragment,
  FunctionComponent,
  useEffect,
  useState
} from 'react'
import { combineLatest } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { getPhotoURL } from 'shared/storage/getPhotoURL'
import ButtonFile from '../shared/components/ButtonFile'
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

  const [file, setFile] = useState<File | null>(null)

  const [inProgress, setInProgress] = useState(false)

  useEffect(() => {
    if (!inProgress) return
    if (file === null) return
    const subscription = getPhotoURL(file)
      .pipe(
        mergeMap(photoURL => {
          return combineLatest([
            updateProfile({ photoURL }),
            updateUser()({ photoURL })
          ])
        })
      )
      .subscribe(() => {
        setInProgress(false)
        setFile(null)
      })
    return () => subscription.unsubscribe()
  }, [file, inProgress])

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

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // guard: files is null
    if (target.files === null) return
    // convert FileList (Iterable) to Array
    const [file] = Array.from(target.files)
    // guard: file is undefined
    if (!file) return
    setFile(file)
    setInProgress(true)
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
          <ButtonFile onChange={onChange} variant={'outlined'}>
            {'ファイルを選択する'}
          </ButtonFile>
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
