import React from 'react'
import Copy from 'copy.svg'

const { decrypt } = window

export default ({ entry, name, label, link, cc, secure }) => {
  const copy = value => {
    const notification = document.getElementsByClassName(
      'copied-notification'
    )[0]
    window.copyToClipboard(value, 60000)
    notification.classList.remove('hidden')
    setTimeout(() => {
      notification.classList.add('hidden')
    }, 2000)
  }

  const onClick = event => {
    window.openLink(event.target.href)
  }

  const value = () => {
    if (link) {
      return (
        <a href={entry[name.toLowerCase()]} onClick={onClick}>
          {entry[name.toLowerCase()]}
        </a>
      )
    } else if (cc) {
      return entry[name.toLowerCase()].match(/.{1,4}/g).join(' ')
    } else if (secure) {
      return decrypt(entry[name.toLowerCase()])
    } else {
      return entry[name.toLowerCase()]
    }
  }

  const copyValue = () => {
    if (secure) return decrypt(entry[name.toLowerCase()])
    return entry[name.toLowerCase()]
  }

  const className = () => {
    return secure ? 'item secure' : 'item'
  }

  if (entry[name.toLowerCase()] === '') return null

  return (
    <div className={className()}>
      <div className="label">{label}}</div>
      <div className="value">{value()}</div>
      <Copy width="16" height="16" onClick={() => copy(copyValue())} />
    </div>
  )
}
