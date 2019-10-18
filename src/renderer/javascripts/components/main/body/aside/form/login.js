import React from 'react'
import { getProps } from 'defaults/generator'

import Field from './field'
import SecureField from './secure'

const Login = ({ entry, validate, onChange }) => {
  const generatePassword = () => {
    const password = window.generatePassword(getProps())
    onChange({ target: { name: 'password', value: password } })
  }

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
      <Field name="Website" label="网站" entry={entry} onChange={onChange} />
      <Field
        name="Username"
        label="用户名"
        validate={validate}
        entry={entry}
        onChange={onChange}
        maxLength="40"
      />
      <SecureField
        name="Password"
        label="密码"
        validate={validate}
        entry={entry}
        onChange={onChange}
        maxLength="24"
      >
        <span className="action" onClick={generatePassword}>
          生成
        </span>
      </SecureField>
      <Field name="Email" label="邮箱" entry={entry} onChange={onChange} />
      <Field name="Note" label="记录" entry={entry} onChange={onChange} rows="5" />
    </>
  )
}

export default Login
