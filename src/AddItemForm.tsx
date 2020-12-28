import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

import { IconButton, TextField } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';

type AddItemFormType = {
  addItem: (title: string) => void
}

const AddItemForm = React.memo((props: AddItemFormType) => {
  // console.log('AddItemForm called ')
  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<string | null>('')

  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setTitle(e.currentTarget.value)
  }

  const onKeyDownAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null)
    }
    if (e.key === 'Enter') {
      addItem()
    } else if (e.key === 'Escape') {
      setTitle('')
    }
  }

  const addItem = () => {
    const trimmedTitle = title.trim()
    if (trimmedTitle !== '') {
      props.addItem(trimmedTitle)
    } else {
      setError('Title is required!')
    }
    setTitle('')
  }

  return (
    <div>
      <TextField
        variant='outlined'
        error={!!error}
        value={title}
        onChange={onTitleChangeHandler}
        onKeyDown={onKeyDownAddItem}
        label='Enter title'
        helperText={error}
      />
      <IconButton
        color='primary'
        onClick={addItem}>
        <AddBox />
      </IconButton>
    </div>
  )
})

export default AddItemForm