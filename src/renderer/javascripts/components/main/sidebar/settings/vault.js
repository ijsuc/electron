import React from 'react'
import { useSelector } from 'react-redux'
import DownloadIcon from 'download.svg'

const {
  showSaveDialog,
  sendBackupSave,
  sendVaultConnect,
  sendVaultDisconnect
} = window

const Vault = ({ section }) => {
  const syncEnabled = useSelector(state => state.sync.enabled)

  const onClickSaveBackup = () => {
    showSaveDialog(({ canceled, filePath }) => {
      if (!canceled) sendBackupSave(filePath)
    })
  }

  const onClickConnect = () => {
    sendVaultConnect()
  }

  const onClickDisconnect = () => {
    sendVaultDisconnect()
  }

  const syncAction = () => {
    if (syncEnabled) {
      return (
        <div className="button danger" onClick={onClickDisconnect}>
          断开 Google 网盘
        </div>
      )
    }
    return (
      <div className="button" onClick={onClickConnect}>
        连接你的 Google 网盘
      </div>
    )
  }

  if (section !== 'vault') return null

  return (
    <>
      <h1>设置</h1>
      <div className="section">
        <strong>同步</strong>
        <div>同步库到你的 Google 网盘</div>
        {syncAction()}
      </div>

      <div className="section">
        <strong>备份</strong>
        <div>允许您保存默认库的备份文件</div>
        <div className="button iconed" onClick={onClickSaveBackup}>
          <DownloadIcon width="16" height="16" /> 保存库文件
        </div>
      </div>
    </>
  )
}

export default Vault
