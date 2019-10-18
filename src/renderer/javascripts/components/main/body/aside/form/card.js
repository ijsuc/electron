import React from 'react'
import Field from './field'
import SecureField from './secure'

const Card = ({ entry, validate, onChange }) => {
  return (
    <>
      <Field
        name="Title"
        label="标题"
        validate={validate}
        entry={entry}
        onChange={onChange}
        maxLength="40"
      />
      <Field
        name="Number"
        label="数字"
        validate={validate}
        entry={entry}
        onChange={onChange}
        maxLength="19"
      />
      <Field
        name="Year"
        label="年"
        validate={validate}
        entry={entry}
        onChange={onChange}
        maxLength="4"
      />
      <Field
        name="Month"
        label="月"
        validate={validate}
        entry={entry}
        onChange={onChange}
        maxLength="2"
      />
      <Field
        name="CVC"
        validate={validate}
        entry={entry}
        onChange={onChange}
        maxLength="4"
      />
      <SecureField
        name="Pin"
        validate={validate}
        entry={entry}
        onChange={onChange}
        maxLength="6"
      />
      <Field name="Name" label="名称" entry={entry} onChange={onChange} />
    </>
  )
}

export default Card
