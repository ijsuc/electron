import React from 'react'
import Item from './item'

const Note = ({ entry }) => {
  return (
    <div className="entry-details">
      <Item name="Note" label="记录" entry={entry} secure />
    </div>
  )
}
export default Note
