import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import React, {
  ChangeEventHandler,
  createRef,
  Fragment,
  FunctionComponent
} from 'react'

type Props = Omit<ButtonProps, 'onChange'> & { onChange: ChangeEventHandler }

const ButtonFile: FunctionComponent<Props> = ({
  onChange,
  children,
  ...props
}) => {
  const ref = createRef<HTMLInputElement>()

  return (
    <Fragment>
      <Button {...props} onClick={() => ref.current && ref.current.click()}>
        {children}
      </Button>
      <input
        accept={'image/*'}
        style={{ display: 'none' }}
        type={'file'}
        onChange={onChange}
        ref={ref}
      />
    </Fragment>
  )
}

export default ButtonFile
