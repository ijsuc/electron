import React from 'react'
import Back from 'back.svg'

export default ({ display, onImport, goBack }) => {
  const chooseFle = () => {
    window.sendBackupSelect()
    window.onBackupLoaded(() => onImport())
  }
  if (!display) return null

  return (
    <>
      <div className="button choose-file" onClick={chooseFle}>
        选择备份文件
      </div>
      <br />
      <span className="navigate-back" onClick={() => goBack()}>
        <Back width="15" />返回
      </span>
    </>
  )
}
