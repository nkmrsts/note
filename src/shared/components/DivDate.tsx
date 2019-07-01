import { Avatar, makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { CustomClaims } from '../firestore/types/customClaims'
import { Owner } from '../firestore/types/owner'

type Props = { owner: Owner<CustomClaims> }

const DivOwner: FunctionComponent<Props> = ({ owner }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} src={owner.photoURL || ''} />
      <Typography className={classes.text} component={'span'}>
        {owner.displayName}
      </Typography>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ palette, spacing }) => {
  return {
    avatar: { height: 20, width: 20 },
    root: {
      alignItems: 'center',
      display: 'grid',
      gridAutoColumns: 'max-content',
      gridAutoFlow: 'column',
      gridGap: spacing(1)
    },
    text: { fontSize: 13, color: palette.text.primary }
  }
})

export default DivOwner
