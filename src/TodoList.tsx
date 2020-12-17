import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core';

import { FilterValuesType, TaskStateType, TaskType, TodoListType } from './App';
import AddItemForm from './AddItemForm';
import EditableSpan from './EditableSpan';
import { AppRootStateType } from './state/store';

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

function Todolist(props: PropsType) {
// let tt = useSelector<AppRootStateType, TodoListType>(state => state.todolists.filter(t => t.id === props.id)[0])
// let ss = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[props.id])

  const addTask = (title: string) => {
    props.addTask(title, props.id);
  }

  const removeTodolist = () => {
    props.removeTodoList(props.id);
  }
  const changeTodolistTitle = (title: string) => {
    props.changeTodolistTitle(props.id, title);
  }

  const onAllClickHandler = () => props.changeFilter("all", props.id);
  const onActiveClickHandler = () => props.changeFilter("active", props.id);
  const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

  return <div>
    <h3> <EditableSpan title={props.title} changeValue={changeTodolistTitle} />
      <IconButton onClick={removeTodolist}>
        <Delete />
      </IconButton>
    </h3>
    <AddItemForm addItem={addTask} />
    <div>
      {
        props.tasks.map(t => {
          const onClickHandler = () => props.removeTask(t.id, props.id)
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus(t.id, newIsDoneValue, props.id);
          }
          const onTitleChangeHandler = (newValue: string) => {
            props.changeTaskTitle(t.id, newValue, props.id);
          }

          return <div key={t.id} className={t.isDone ? "is-done" : ""}>
            <Checkbox
              checked={t.isDone}
              color="primary"
              onChange={onChangeHandler}
            />

            <EditableSpan title={t.title} changeValue={onTitleChangeHandler} />
            <IconButton onClick={onClickHandler}>
              <Delete />
            </IconButton>
          </div>
        })
      }
    </div>
    <div>
      <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
        onClick={onAllClickHandler}
        color={'default'}
      >All
            </Button>
      <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
        onClick={onActiveClickHandler}
        color={'primary'}>Active
            </Button>
      <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
        onClick={onCompletedClickHandler}
        color={'secondary'}>Completed
            </Button>
    </div>
  </div>
}

export default Todolist;