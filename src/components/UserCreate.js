import React from 'react'

import Field from './Field'
import Button from './Button'

const UserCreate = () => {
  return (
    <div className="ui form">
      <Field  testProps="passed into component"/>
      <Button />
    </div>
  )
}

export default UserCreate