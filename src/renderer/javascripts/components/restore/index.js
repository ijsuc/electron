import React, { useState } from 'react'
import Backup from 'backup.svg'
import Import from './import'
import Confirm from './confirm'

export default ({ goBack }) => {
  const [step, setStep] = useState(null)
  const onImport = () => {
    setStep('confirmation')
  }

  return (
    <div className="lock-screen">
      <div className="top-lock">
        <Backup width="48" />
        <h2>恢复备份</h2>
        <div className="instructions">
          如果你一直使用 Swifty 才能恢复你的数据备份文件。
          需要你的主密码。
        </div>
      </div>
      <div className="bottom-lock">
        <Import
          display={step !== 'confirmation'}
          goBack={goBack}
          onImport={onImport}
        />
        <Confirm display={step === 'confirmation'} />
      </div>
    </div>
  )
}
