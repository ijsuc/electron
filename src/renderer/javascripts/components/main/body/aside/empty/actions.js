import React, { useState } from 'react'
import classnames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
  const dispatch = useDispatch()
  const { isPristine } = useSelector(state => ({
    isPristine: state.entries.items.length === 0
  }))
  const [isLoading, setIsLoading] = useState(false)

  const onAddEntry = () => dispatch({ type: 'NEW_ENTRY' })

  const onImport = () => {
    setIsLoading(true)
    window.sendVaultImport()
  }

  if (!isPristine) return null

  return (
    <div className="actions">
      <div>
        <a href="#" onClick={onAddEntry}>
          创建第一个条目
        </a>
      </div>
      <div>或</div>
      <div>
        <span
          className={classnames('button', { loading: isLoading })}
          onClick={onImport}
        >
          从网盘进入
        </span>
      </div>
    </div>
  )
}
