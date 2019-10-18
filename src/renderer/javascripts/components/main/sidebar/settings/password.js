import React, { useState } from 'react'
import { getProps, setProps } from 'defaults/generator'
const { generatePassword } = window

const Password = ({ section }) => {
  const [options, setOptions] = useState(getProps())
  const [example, setExample] = useState(generatePassword(getProps()))

  const onChange = event => {
    const option = {}
    option[event.target.name] = event.target.checked
    updateOption(option)
  }

  const onValueChange = event => {
    const option = {}
    option[event.target.name] = event.target.value
    updateOption(option)
  }

  const updateOption = option => {
    const upadtedOptions = { ...options, ...option }
    setExample(generatePassword(upadtedOptions))
    setProps(upadtedOptions)
    setOptions(upadtedOptions)
  }

  if (section !== 'password') return null
  return (
    <>
      <h1>生成随机安全密码</h1>
      <div className="section">
        <strong>例子</strong>
        <div className="password-sample">{example}</div>
      </div>
      <div className="section">
        <strong>长度</strong>
        <div>
          <input
            type="range"
            name="length"
            min="6"
            max="20"
            className="slider"
            value={options.length}
            onChange={onValueChange}
          />
          <div className="pass-count">{options.length}</div>
        </div>
      </div>
      <div className="section">
        <strong>符号</strong>
        <div>
          <label>
            <input
              type="checkbox"
              name="numbers"
              checked={options.numbers}
              value={options.numbers}
              onChange={onChange}
            />
            数字
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="uppercase"
              checked={options.uppercase}
              value={options.uppercase}
              onChange={onChange}
            />
            大写字母
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="symbols"
              checked={options.symbols}
              value={options.symbols}
              onChange={onChange}
            />
            特殊符号
          </label>
        </div>
      </div>
    </>
  )
}

export default Password
