import React from 'react'
import Item from './item'

const Login = ( data ) => {
  let entry = data.entry;
  console.log( 'showLogin: entry',  entry);
  return (
    <div className="entry-details">
      <Item name="Website" label="网站" entry={entry} link />
      <Item name="Username" label="用户名" entry={entry} />
      <Item name="Password" label="密码" entry={entry} secure />
      <Item name="Email" label="邮箱" entry={entry} />
      <Item name="Note" label="记录" entry={entry} />
    </div>
  )
}

export default Login
