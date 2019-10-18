import React from 'react'
import Pencil from 'pencil.svg'
import Delete from 'delete.svg'
import { DateTime } from 'luxon'
import { useDispatch } from 'react-redux'
import { deleteEntry } from 'actions/entries'
import Details from './details'

const Show = ({ entry }) => {
  const dispatch = useDispatch()

  const onEdit = () => {
    dispatch({ type: 'EDIT_ENTRY' })
  }

  const onDelete = () => {
    if (window.isSpectron()) return dispatch(deleteEntry(entry.id))
    if (confirm('你确定你要删除这个项目吗?')) {
      dispatch(deleteEntry(entry.id))
    }
  }

  const formatDate = str => {
    return DateTime.fromISO(str).toLocaleString(DateTime.DATETIME_MED)
  }

  return (
    <div className="aside shaded">
      <div className="copied-notification hidden">复制到剪贴板</div>
      <div className="entry-title">
        <h1>{entry.label}</h1>
        <Pencil width="16" height="16" onClick={onEdit} className="action" />
        <Delete width="16" height="16" onClick={onDelete} className="action" />
      </div>
      <Details entry={entry} />
      <div className="entry-extra">
        <div className="item">
          <div className="label">上次修改日期</div>
          <div className="value">{formatDate(entry.updated_at)}</div>
        </div>
        <div className="item">
          <div className="label">创建日期</div>
          <div className="value">{formatDate(entry.created_at)}</div>
        </div>
      </div>
    </div>
  )
}
export default Show
