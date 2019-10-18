import React from 'react'
import Field from './field'
import SecureField from './secure'

const Note = ({ entry, validate, onChange }) => {
  return (
    <>
      <Field
        name="Title"
        label="标题"
        entry={entry}
        onChange={onChange}
        validate={validate}
        maxLength="40"
      />
      <SecureField
        name="Note"
        label="记录"
        entry={entry}
        onChange={onChange}
        validate={validate}
        rows="15"
      />
    </>
  )
}

export default Note
