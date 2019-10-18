import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Login from './login'
import Card from './card'
import Note from './note'

import { saveEntry, isValid } from 'actions/entries'
import { obscure, expose } from 'services/cryptor'
import entries from 'defaults/entries'

const Form = (data) => {
  let entry = data.entry;
  const dispatch = useDispatch()
  const { scope } = useSelector(state => state.filters)

  const [validate, setValidate] = useState(false)
  const [model, setModel] = useState(expose(entry) || entries[scope])

  const onCancel = () => {
    if (model.id) {
      dispatch({ type: 'SET_CURRENT_ENTRY', id: model.id })
    } else {
      dispatch({ type: 'SET_NO_ENTRY' })
    }
  }

  const onSave = () => {
    if (isValid(model)) {
      dispatch(saveEntry(obscure(model)))
    } else {
      setValidate(true)
    }
  }

  const onChange = event => {
    let obj = {}
    obj[event.target.name] = event.target.value
    setModel({ ...model, ...obj })
  }

  const renderFields = () => {
    switch (scope) {
      case 'login':
        return <Login entry={model} onChange={onChange} validate={validate} />
      case 'card':
        return <Card entry={model} onChange={onChange} validate={validate} />
      case 'note':
        return <Note entry={model} onChange={onChange} validate={validate} />
      default:
        return null
    }
  }

  return (
    <div className="aside">
      {renderFields()}
      <div className="actions">
        <span className="cancel" onClick={onCancel}>
          取消
        </span>
        <span className="button" onClick={onSave}>
          保存
        </span>
      </div>
    </div>
  )
}

export default Form
