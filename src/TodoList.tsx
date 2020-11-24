import React, { ChangeEvent } from 'react';
import { FilterValuesType, TaskType } from './App';
import AddItemForm from './AddItemForm';
import EditableSpan from './EditableSpan';
import { Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';

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
  changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
  changeTodolistTitle: (title: string, todoListID: string) => void
}

function TodoList(props: PropsType) {
  const tasks = props.tasks.map(task => {

    const removeTask = () =>
      props.removeTask(task.id, props.id)

    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) =>
      props.changeTaskStatus(task.id, e.currentTarget.checked, props.id)

    const changeTaskTitle = (newValue: string) =>
      props.changeTaskTitle(task.id, newValue, props.id)

    return (
      <div key={task.id} className={task.isDone ? 'is-done' : ''}>
        <Checkbox
          onChange={changeTaskStatus}
          color="primary"
          checked={task.isDone} />
        <EditableSpan changeValue={changeTaskTitle} title={task.title} />
        <IconButton onClick={removeTask}>
          <Delete />
        </IconButton>
      </div>
    )
  })

  const addTask = (title: string) => props.addTask(title, props.id)
  const changeTodolistTitle = (title: string) => props.changeTodolistTitle(title, props.id)
  const removeTodoList = () => props.removeTodoList(props.id)
  const onAllClickHandler = () => props.changeFilter('all', props.id);
  const onActiveClickHandler = () => props.changeFilter('active', props.id);
  const onCompletedClickHandler = () => props.changeFilter('completed', props.id)

  return (
    <div>
      <h3>
        <EditableSpan title={props.title} changeValue={changeTodolistTitle} />
        <IconButton onClick={removeTodoList}>
          <Delete />
        </IconButton>
      </h3>
      <AddItemForm addItem={addTask} />
      <div>
        {tasks}
      </div>
      <div>
        <Button
          variant={props.filter === 'all' ? 'outlined' : 'text'}
          onClick={onAllClickHandler}
          color='default'>All</Button>
        <Button
          variant={props.filter === 'active' ? 'outlined' : 'text'}
          onClick={onActiveClickHandler}
          color='primary'>Active</Button>
        <Button
          variant={props.filter === 'completed' ? 'outlined' : 'text'}
          onClick={onCompletedClickHandler}
          color='secondary'>Completed</Button>
      </div>
    </div>
  )
}

export default TodoList;