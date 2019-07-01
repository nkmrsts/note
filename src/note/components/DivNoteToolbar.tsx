import {
  Toolbar,
  Select,
  MenuItem,
  Button,
  makeStyles,
  Theme
} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import React, { FunctionComponent, useState } from 'react'

const selectItems = [
  {
    label: '公開',
    value: 'public'
  },
  {
    label: '非公開',
    value: 'private'
  }
]

const DivNoteToolbar: FunctionComponent = () => {
  const classes = useStyles()
  const [values, setValues] = useState(selectItems[0])

  const handleChange = (event: any, key: any) => {
    setValues({
      label: key,
      value: event.target.value
    })
  }

  return (
    <div>
      <Toolbar className={classes.root}>
        <Button color="inherit" className={classes.button}>
          Edit
          <EditIcon className={classes.buttonIcon} />
        </Button>
        <Button color="inherit" className={classes.button}>
          Save
          <SaveIcon className={classes.buttonIcon} />
        </Button>
        <Select value={values.value} onChange={handleChange}>
          {selectItems.map(item => (
            <MenuItem key={item.label} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </Toolbar>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      padding: 0,
      minHeight: 'auto'
    },
    button: {
      fontSize: '16px',
      fontWeight: 'bold',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
      color: '#727272',
      borderRight: '1px solid rgba(0,0,0,0.12)',
      borderRadius: 0
    },
    buttonIcon: {
      padding: '2px 0 0 0',
      marginLeft: spacing(2)
    }
  }
})

export default DivNoteToolbar
