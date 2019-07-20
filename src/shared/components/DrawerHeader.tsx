import { makeStyles, Theme } from '@material-ui/core'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import ButtonMenu from './ButtonMenu'

type Props = {
  noteId: string
  isMineState: [boolean, Dispatch<SetStateAction<boolean>>]
}

const DrawerHeader: FunctionComponent<Props> = ({ noteId, isMineState }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ButtonMenu isMineState={isMineState} />
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoColumns: 'max-content',
      gridAutoFlow: 'column',
      gridGap: spacing(2),
      justifyContent: 'flex-end',
      padding: spacing(2)
    }
  }
})

export default DrawerHeader
