import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux'

import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';

// import { AppRootStateType } from './state/store';

import { FilterValuesType, TaskType } from './AppWithRedux';
import AddItemForm from './AddItemForm';
import EditableSpan from './EditableSpan';
import { Task } from './Task';

type PropsType = {
  id: string
  title: string
  tasks: Array<TaskType>
  filter: FilterValuesType
  _addTask: (title: string, todoListID: string) => void
  removeTask: (taskID: string, todoListID: string) => void
  changeFilter: (newFilterValue: FilterValuesType, todoListID: string) => void
  _changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
  removeTodoList: (todoListID: string) => void
  changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
  _changeTodolistTitle: (title: string, todoListID: string) => void
}

const Todolist: React.FC<PropsType> = React.memo(({
  id, title, tasks, filter,
  _addTask, removeTask, changeFilter, _changeTaskStatus,
  removeTodoList, changeTaskTitle, _changeTodolistTitle }) => {
  // let tt = useSelector<AppRootStateType, TodoListType>(state => state.todolists.filter(t => t.id === id)[0])
  // let ss = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[id])
  console.log('Todolist called')

  const addTask = useCallback((title: string) => {
    _addTask(title, id)
  }, [_addTask, id])

  const removeTodolist = useCallback(() => {
    removeTodoList(id);
  }, [removeTodoList, id])
  
  const changeTodolistTitle = useCallback((title: string) => {
    _changeTodolistTitle(id, title);
  }, [_changeTodolistTitle, id])

  const onAllClickHandler = useCallback(() => changeFilter("all", id), [changeFilter, id]);

  const onActiveClickHandler = useCallback(() => changeFilter("active", id), [changeFilter, id]);

  const onCompletedClickHandler = useCallback(() => changeFilter("completed", id), [changeFilter, id]);

  let tasksForTodolist = tasks;

  if (filter === 'active') {
    tasksForTodolist = tasks.filter(task => task.isDone === false)
  }
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter(task => task.isDone === true)
  }

  const onClickHandler = useCallback((taskID: string) => removeTask(taskID, id), [removeTask, id])

  const onChangeHandler = useCallback((taskID: string, isDone: boolean) => {
    _changeTaskStatus(taskID, isDone, id);
  }, [_changeTaskStatus, id])

  const onTitleChangeHandler = useCallback((taskID: string, title: string) => {
    changeTaskTitle(taskID, title, id);
  }, [changeTaskTitle, id])

  return <div>
    <h3> <EditableSpan title={title} changeValue={changeTodolistTitle} />
      <IconButton onClick={removeTodolist}>
        <Delete />
      </IconButton>
    </h3>
    <AddItemForm addItem={addTask} />
    <div>
      {
        tasksForTodolist.map(t => {
          return <Task
            key={t.id}
            task={t}
            onChangeHandler={onChangeHandler}
            onTitleChangeHandler={onTitleChangeHandler}
            onClickHandler={onClickHandler} />
        })
      }
    </div>
    <div>
      <Button variant={filter === 'all' ? 'outlined' : 'text'}
        onClick={onAllClickHandler}
        color={'default'}
      >All
            </Button>
      <Button variant={filter === 'active' ? 'outlined' : 'text'}
        onClick={onActiveClickHandler}
        color={'primary'}>Active
            </Button>
      <Button variant={filter === 'completed' ? 'outlined' : 'text'}
        onClick={onCompletedClickHandler}
        color={'secondary'}>Completed
            </Button>
    </div>
  </div>
})

export default Todolist;