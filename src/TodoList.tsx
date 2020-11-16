import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { FilterValuesType, TaskType } from './App';

type PropsType = {
  id: string
  title: string
  tasks: Array<TaskType>
  filter: FilterValuesType
  addTask: (title: string, todoListID: string) => void
  removeTask: (taskID: string, todoListID: string) => void
  changeFilter: (newFilterValue: FilterValuesType, todoListID: string) => void
  changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
  removeTodoList: (todoListID: string) => void
}

function TodoList(props: PropsType) {
  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<string | null>('')

  const tasks = props.tasks.map(task => {
    
    const removeTask = () => props.removeTask(task.id, props.id)
    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => 
    props.changeTaskStatus(task.id, e.currentTarget.checked, props.id)

    return (
      <li key={task.id} className={task.isDone ? 'is-done' : ''}>
        <input onChange={changeTaskStatus} type="checkbox" checked={task.isDone} />
        <span>{task.title}</span>
        <button onClick={removeTask}>X</button>
      </li>
    )
  })

  const addTask = () => {
    const trimmedTitle = title.trim()
    if (trimmedTitle !== '') {
      props.addTask(trimmedTitle, props.id)
    } else {
      setError('Title is required!')
    }
    setTitle('')
  }

  const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (e.key === 'Enter') {
      addTask()
    } else if (e.key === 'Escape') {
      setTitle('')
    }
  }
  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setTitle(e.currentTarget.value)
  }
  const onAllClickHandler = () => props.changeFilter('all', props.id);
  const onActiveClickHandler = () => props.changeFilter('active', props.id);
  const onCompletedClickHandler = () => props.changeFilter('completed', props.id)

  return (
    <div>
      <h3>{props.title}<button onClick={() => props.removeTodoList(props.id)}>X</button></h3>
      <div>
        <input
          value={title}
          onChange={onTitleChangeHandler}
          onKeyDown={onKeyDownAddTask}
          className={error ? 'error' : ''} />
        <button onClick={addTask}>+</button>
        {error && <div className={'error-message'}>{error}</div>}
      </div>
      <ul>
        {tasks}
      </ul>
      <div>
        <button
          className={props.filter === 'all' ? 'active-filter' : ''}
          onClick={onAllClickHandler}>All
          </button>
        <button
          className={props.filter === 'active' ? 'active-filter' : ''}
          onClick={onActiveClickHandler}>Active
          </button>
        <button
          className={props.filter === 'completed' ? 'active-filter' : ''}
          onClick={onCompletedClickHandler}>Completed
          </button>
      </div>
    </div>
  )
}

export default TodoList;