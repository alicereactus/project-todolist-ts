import React, { useState, ChangeEvent } from 'react';

import { TextField } from '@material-ui/core';

export type EditableSpanType = {
  title: string
  changeValue: (newValue: string) => void
}

function EditableSpan(props: EditableSpanType) {
  console.log('EditableSpan called')
  const [editMode, setEditMode] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(props.title)

  const activatedEditMode = () => {
    setEditMode(true)
  }

  const deActivatedEditMode = () => {
    setEditMode(false)
    props.changeValue(title)
  }

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return (editMode
    ?
    <TextField
      variant='outlined'
      value={title}
      onBlur={deActivatedEditMode}
      onChange={onChangeTitle}
      autoFocus={true}
    />
    : <span
      onDoubleClick={activatedEditMode}>{props.title}</span>
  )
}

export default EditableSpan