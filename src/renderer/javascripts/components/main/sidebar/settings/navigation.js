import React from 'react'
import classnames from 'classnames'

const Navigation = ({ section, onClick }) => {
  return (
    <ul className="navigation">
      <li
        className={classnames({ current: section === 'vault' })}
        onClick={() => onClick('vault')}
      >
        设置
      </li>
      <li
        className={classnames({ current: section === 'password' })}
        onClick={() => onClick('password')}
      >
        密码
      </li>
    </ul>
  )
}

export default Navigation
