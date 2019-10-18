import React, { useState } from 'react'
import Masterpass from '../elements/masterpass'
import img from 'swifty.png'

export default ({ touchID }) => {
  const [error, setError] = useState(null)

  const handleEnter = value => {
    const hashedSecret = window.hashSecret(value)
    window.setupCryptor(hashedSecret)
    window.sendAuthStart(hashedSecret)
    window.onAuthFail(() => {
      setError('密码错误')
    })
  }

  const handleTouchId = () => {
    window.sendAuthTouchId()
  }

  const handleChange = () => {
    setError(null)
  }

  return (
    <div className="lock-screen">
      <div className="top-lock">
        <img src={img} alt="" width="120" />
      </div>
      <div className="bottom-lock">
        <Masterpass
          touchID={touchID}
          error={error}
          onChange={handleChange}
          onEnter={handleEnter}
          onTouchID={handleTouchId}
        />
      </div>
    </div>
  )
}
