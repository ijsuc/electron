import React, { useState } from 'react'
import Masterpass from 'components/elements/masterpass'

export default ({ display }) => {
  const [hashedSecret, setHashedSecret] = useState()
  const [error, setError] = useState()

  const onChange = event => {
    setError(null)
    setHashedSecret(window.hashSecret(event.currentTarget.value))
  }

  const onSend = () => {
    window.setupCryptor(hashedSecret)
    window.sendBackupPassword(hashedSecret)
    window.onBackupPasswordFail(() => {
      setError('无效的密码备份')
    })
  }

  if (!display) return null

  return (
    <>
      <Masterpass
        placeholder="输入主密码"
        error={error}
        onEnter={onSend}
        onChange={onChange}
      />
      <br />
      <div className="button" onClick={onSend}>
        继续
      </div>
    </>
  )
}
