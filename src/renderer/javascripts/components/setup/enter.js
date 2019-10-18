import React, { useState } from 'react'
import Masterpass from 'components/elements/masterpass'
import Back from 'back.svg'

export default ({ display, onEnter, goBack }) => {
  const [hashedSecret, setHashedSecret] = useState(null)
  const [error, setError] = useState(null)

  const onChange = event => {
    setError(null)
    setHashedSecret(window.hashSecret(event.currentTarget.value))
  }

  const onSend = () => {
    if (hashedSecret) {
      onEnter(hashedSecret)
    } else {
      setError('填入密码')
    }
  }

  if (!display) return null

  return (
    <div className="bottom-lock">
      <Masterpass
        placeholder="设置主密码"
        error={error}
        onEnter={onSend}
        onChange={onChange}
      />
      <br />
      <div className="button" onClick={onSend}>
        继续
      </div>
      <span className="navigate-back" onClick={() => goBack()}>
        <Back width="15" />返回
      </span>
    </div>
  )
}
