import { MenuItem, Select } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

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

type Props = {
  disabled: boolean
  isPublic: boolean
  setIsPublic: (isPublic: boolean) => void
}

const ButtonStatus: FunctionComponent<Props> = ({
  disabled,
  isPublic,
  setIsPublic
}) => {
  return (
    <Select
      disabled={disabled}
      value={isPublic ? 'public' : 'private'}
      onChange={event => {
        setIsPublic((event.target.value as string) === 'public')
      }}
    >
      {selectItems.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default ButtonStatus
