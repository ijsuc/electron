import React, { useState } from 'react'
import NewUser from 'new_user.svg'
import Enter from './enter'
import Confirm from './confirm'

export default ({ goBack }) => {
  const [hashedSecret, setHashedSecret] = useState(null)

  return (
    <div className="lock-screen">
      <div className="top-lock">
        <NewUser width="48" />
        <h2>帐户设置</h2>
        <div className="instructions">
          你需要设置一个主密码使用 Swifty。 <br />
          你要记住这是唯一的密码。 确保你永远不会。
        </div>
      </div>
      <Enter
        display={hashedSecret === null}
        goBack={goBack}
        onEnter={setHashedSecret}
      />
      <Confirm display={hashedSecret !== null} hashedSecret={hashedSecret} />
    </div>
  )
}
