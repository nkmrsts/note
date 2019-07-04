import { Button, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

type Props = {
  isMine: boolean
  setMine: (isMine: boolean) => void
}

const DivNoteFilter: FunctionComponent<Props> = ({ isMine, setMine }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        size="small"
        variant={isMine ? 'contained' : 'outlined'}
        onClick={() => setMine(true)}
      >
        あなたの
      </Button>
      <Button
        className={classes.button}
        size="small"
        variant={!isMine ? 'contained' : 'outlined'}
        onClick={() => setMine(false)}
      >
        みんなの
      </Button>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      paddingTop: spacing(4),
      display: 'flex',
      borderBottom: '1px solid rgba(0,0,0,0.12)'
    },
    button: {
      boxShadow: 'none',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      flex: '0 1 50%'
    }
  }
})

export default DivNoteFilter
