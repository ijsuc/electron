import React from 'react'
import NewUser from 'new_user.svg'
import Backup from 'backup.svg'

export default ({ onSelect }) => {
  return (
    <div className="lock-screen">
      <div className="top-lock">
        <NewUser width="48" />
        <h2>我是一个新用户</h2>
        <div className="button" onClick={() => onSelect('setup')}>
          设置主密码
        </div>
      </div>
      <div className="bottom-lock">
        <Backup width="48" />
        <h2>我现有用户</h2>
        <div className="button" onClick={() => onSelect('restore')}>
          恢复备份
        </div>
      </div>
    </div>
  )
}
